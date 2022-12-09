const authController = {};

authController.login = (req, res) => {
    res.render('auth/login');
};

authController.register = (req, res) => {
    res.render('auth/register');
};

module.exports = authController;