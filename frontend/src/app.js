const express = require('express');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');

// Load Environment Variables
dotenv.config();

// Importing routes
const indexRoutes = require('./routes/index.routes');
const authRoutes = require('./routes/auth.routes');
const accountRoutes = require('./routes/account.routes');
const productRoutes = require('./routes/product.routes');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 5000);

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', indexRoutes);
app.use('/auth', authRoutes);
app.use('/account', accountRoutes);
app.use('/products', productRoutes);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;