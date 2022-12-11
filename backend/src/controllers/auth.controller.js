import User from '../models/user.model.js';

const authController = {};

authController.signUp = async (req, res, next) => {
    try {
        const { fullName, email, phone, address, image, username, password } = req.body;
        const newUser = {
            fullName,
            email,
            phone,
            address,
            image,
            username,
            password,
        };

        newUser.image = req.file.filename;

        const emailExists = await User.findOne({ email });
        if (emailExists) throw new Error("El correo ya está registrado 😒");

        const usernameExists = await User.findOne({ username });
        if (usernameExists) throw new Error("El nombre de usuario ya está registrado 😒");

        const user = await User.create(newUser);
        await user.save();

        res.status(201).json({ user });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Error while creating user" });
    }
};

authController.signIn = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) throw new Error("Usuario no registrado 😒");

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