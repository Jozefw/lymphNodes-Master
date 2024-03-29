const Product = require('../models/product');

  exports.getProducts = (req, res, next) => {
   Product.fetchAll(products =>{
     res.render('shop/product-list', {
       prods: products,
       pageTitle: 'All Products',
       path: '/products'
     });
   });
  }

  exports.getIndex = (req,res,next) =>{
    Product.fetchAll(products =>{
        res.render('shop/index', {
          prods: products,
          pageTitle: 'Shop',
          path: '/'
        });
      });
     }

exports.getCart = (req,resp,next) =>{
    res.render('shop/cart',{
        path:'/cart',
        pageTitle: 'Your Cart',
    })
} 
exports.getCheckout = (req,resp,next) =>{
    res.render('shop/checkout',{
        path:'/checkout',
        pageTitle: 'Your Checkout Experience',
    })
} 
  