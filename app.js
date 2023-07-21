const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const userRoutes = require('./routes/users');
const loginRoutes = require('./routes/login');
const users = [];
// Your other middleware and routes go here

app.use('/login', loginRoutes);
app.use('/users', userRoutes);



// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
