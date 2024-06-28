javascript
   const express = require('express');
   const mongoose = require('mongoose');

   const app = express();

   // MongoDB connection
   mongoose.connect('mongodb://localhost:27017/your-database-name', { useNewUrlParser: true, useUnifiedTopology: true });

   // API routes
   app.use('/api/users', require('./src/routes/userRoutes'));

   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => {
       console.log(`Server running on port ${PORT}`);
   });