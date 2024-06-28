javascript
   const mongoose = require('mongoose');

   const userSchema = new mongoose.Schema({
       username: String,
       email: String,
       password: String,
       // Add any other fields as needed
   });

   const User = mongoose.model('User', userSchema);

   module.exports = User;