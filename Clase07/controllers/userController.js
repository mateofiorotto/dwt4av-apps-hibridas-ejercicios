import UsersManager from "../models/UsersManager.js";

const userModel = new UsersManager();

const getUsers = async(req,res) => {

    try {
        const users = await userModel.getUsers();
        res.status(200).json(users);
    } catch (error){
        console.error({error});
        response.status(500).json({error: 'Error del servidor'});
    }
}

const setUser = async(req,res) => {
    try {
        const user = req.body;
        const id = await userModel.setUser(user);
        res.status(202).json(({msg: "Usuario guardado " + id}))
    } catch (error){
        console.error({error});
        response.status(500).json({error: 'Error del servidor'});
    }
    const user = res.body;
}

export { getUsers, setUser };