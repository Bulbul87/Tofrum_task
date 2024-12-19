const Product = require('../models/productmodel.js');

//  Add a new product
const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;
    const product = new Product({ name, description, price, stock });
    await product.save();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

//  Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

//  Get a product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

//  Update a product by ID
const updateProduct = async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, description, price, stock },
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

//  Delete a product by ID
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { createProduct, getProducts, getProductById, updateProduct, deleteProduct };
