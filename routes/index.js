const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const menuController = require('../controllers/menuController');
const orderController = require('../controllers/orderController');

router.post('/orders/:id/update', orderController.updateOrder);
router.post('/orders', orderController.createOrder); 
router.post('/orders/:id/cancel', orderController.cancelOrder);
router.get('/orders/:id', orderController.getOrder); 
router.get('/', homeController.getHome);
router.get('/about', aboutController.getAbout);
router.get('/restaurants/:id/menu', menuController.getMenuByRestaurant); 

module.exports = router;
