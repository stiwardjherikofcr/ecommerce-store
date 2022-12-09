import User from '../models/user.model.js';

const authController = {};

authController.signUp = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        let user = await User.findOne({ email });
        if (user) throw new Error("Email ya registrado 😒");

        user = new User({ name, email, password });
        await user.save();

        res.status(201).json({ user });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Error while creating user" });
    }
};

authController.signIn = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) throw new Error("Email no registrado 😒");

        const isMatch = await user.matchPassword(password);
        if (!isMatch) throw new Error("Contraseña incorrecta 😒");

        res.status(200).json({ user });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Error while signing in" });
    }
};

authController.signOut = async (req, res, next) => {
    try {
        res.status(200).json({ message: "Sign out" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Error while signing out" });
    }
};

export default authController;