import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    password: '',
    email: '',
    dob: '',
    course: '',
    contactNumber: '',
    bloodGroup: '',
    category: ''
  });

  const [errors, setErrors] = useState({});

  const courses = ['UI-UX', 'MERN Stack', 'MEAN Stack', 'Graphic Designer', 'Data Science'];
  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const categories = ['General', 'OBC', 'SC', 'ST'];

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (!formData.dob) newErrors.dob = 'Date of birth is required';
    if (!formData.course) newErrors.course = 'Please select a course';
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = 'Contact number is required';
    } else if (!/^[0-9]{10}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = 'Enter a valid 10-digit contact number';
    }
    if (!formData.bloodGroup) newErrors.bloodGroup = 'Blood group is required';
    if (!formData.category) newErrors.category = 'Category is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      toast.success('Form successfully submitted!');
      setFormData({
        name: '',
        address: '',
        password: '',
        email: '',
        dob: '',
        course: '',
        contactNumber: '',
        bloodGroup: '',
        category: ''
      });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className=" p-8 rounded  max-w-2xl w-full space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name Field */}
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded  focus:outline-blue-400  `}
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Address Field */}
          <div>
            <label className="block font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded  focus:outline-blue-400 `}
              placeholder="Enter your address"
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
          </div>

          {/* Password Field */}
          <div>
            <label className="block font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded  focus:outline-blue-400 `}
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded  focus:outline-blue-400 `}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Date of Birth Field */}
          <div>
            <label className="block font-medium">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.dob ? 'border-red-500' : 'border-gray-300'} rounded  focus:outline-blue-400 `}
            />
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
          </div>

          {/* Course Dropdown */}
          <div>
            <label className="block font-medium">Course</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.course ? 'border-red-500' : 'border-gray-300'} rounded  focus:outline-blue-400 `}
            >
              <option value="">Select a course</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>{course}</option>
              ))}
            </select>
            {errors.course && <p className="text-red-500 text-sm">{errors.course}</p>}
          </div>

          {/* Contact Number Field */}
          <div>
            <label className="block font-medium">Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.contactNumber ? 'border-red-500' : 'border-gray-300'} rounded  focus:outline-blue-400 `}
              placeholder="Enter your contact number"
            />
            {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber}</p>}
          </div>

          {/* Blood Group Dropdown */}
          <div>
            <label className="block font-medium">Blood Group</label>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.bloodGroup ? 'border-red-500' : 'border-gray-300'} rounded  focus:outline-blue-400 `}
            >
              <option value="">Select a blood group</option>
              {bloodGroups.map((group, index) => (
                <option key={index} value={group}>{group}</option>
              ))}
            </select>
            {errors.bloodGroup && <p className="text-red-500 text-sm">{errors.bloodGroup}</p>}
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="block font-medium">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.category ? 'border-red-500' : 'border-gray-300'} rounded  focus:outline-blue-400 `}
            >
              <option value="">Select a category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
            </select>
            {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
          </div>
        </div>

        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

    
      <ToastContainer />
    </div>
  );
};

export default Form;
