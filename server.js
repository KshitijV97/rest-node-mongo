const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Database
mongoose.connect('mongodb://127.0.0.1:27017/user-manager', {useNewUrlParser: true})
    .then(() => console.log("Connected to Database...."))
    .catch(err => console.error(err));

// Middleware, Stuff what happens before entering routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Controllers
const UserControl = require('./controllers/UserControl');

// Routes
app.post('/api/user/create', UserControl.create);
app.post('/api/user/update', UserControl.update);
app.get('/api/user/retrieve', UserControl.retrieve);
app.delete('/api/user/delete', UserControl.delete);

// Start server
app.listen(3000, () => console.log("Server has started on Port 3000"));

