import Product from "../models/product.model.js";

const productController = {};

productController.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Something went wrong retrieving the products"
        });
    }
};

productController.createProduct = async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Product content can not be empty"
        });
    }

    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        available: req.body.available
    });

    try {
        const productSaved = await product.save();
        res.json(productSaved);
    } catch (error) {
        res.status(500).json({
            message: error.message || "Something went wrong creating the product"
        });
    }
};

productController.getProduct = async (req, res) => {
    const { productId } = req.params;

    try {
        const product = await Product.findById(productId);
        res.json(product);
    } catch (error) {
        res.status(500).json({
            message: error.message || `Something went wrong retrieving the product with id: ${productId}`
        });
    }
};

productController.updateProduct = async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Product content can not be empty"
        });
    }

    const { productId } = req.params;

    try {
        const productUpdated = await Product.findByIdAndUpdate(productId, req.body, { new: true });
        res.json(productUpdated);
    } catch (error) {
        res.status(500).json({
            message: error.message || `Something went wrong updating the product with id: ${productId}`
        });
    }
};

productController.deleteProduct = async (req, res) => { 
    const { productId } = req.params;

    try {
        await Product.findByIdAndDelete(productId);
        res.json({
            message: "Product deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || `Something went wrong deleting the product with id: ${productId}`
        });
    }
};

export default productController;