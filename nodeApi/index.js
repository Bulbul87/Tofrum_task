const express = require('express');
const connectDB = require('./config/db.js');
const productRoutes = require('./routes/productroutes.js');

const app = express();
connectDB();
app.use(express.json()); 
app.use('/api', productRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
