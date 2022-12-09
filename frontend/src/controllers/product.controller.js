const productController = {};

productController.renderProductForm = (req, res) => {
    res.render('products/add');
};

productController.createNewProduct = (req, res) => {
    res.send('New Product');
};

productController.renderProducts = (req, res) => {
    res.render('products/all-products');
};

productController.renderEditForm = (req, res) => {
    res.render('products/edit');
};

productController.updateProduct = (req, res) => {
    res.send('Updated Product');
};

productController.deleteProduct = (req, res) => {
    res.send('Deleted Product');
};

module.exports = productController;