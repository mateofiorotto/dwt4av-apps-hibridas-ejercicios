import usersRouter from "./usersRouter.js";

function routerAPI(app) {
    //rutas
    app.use("/api/users", usersRouter);
}

export default routerAPI;