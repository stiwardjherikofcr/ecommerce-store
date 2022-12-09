import User from '../models/user.model.js';

const userController = {};

userController.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Error while getting users" });
    }
};

userController.createUser = async (req, res) => {
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

userController.getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) throw new Error("Usuario no encontrado 😒");

        res.status(200).json({ user });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Error while getting user" });
    }
};

userController.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;

        const user = await User.findByIdAndUpdate(id, { name }, { new: true });

        if (!user) throw new Error("Usuario no encontrado 😒");

        res.status(200).json({ user });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Error while updating user" });
    }
};

userController.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);

        if (!user) throw new Error("Usuario no encontrado 😒");

        res.status(200).json({ user });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Error while deleting user" });
    }
};

export default userController;