import express from "express";
import { Application } from "express";
import indexRoutes from '../src/routes/indexRoutes';


class Server {

    private app: Application;
    private port: string;
    private principalPath: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || "8000";
        this.principalPath = '/api/v1';
        this.routes();
    }

    routes() {
        this.app.use(this.principalPath, indexRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Listening Server: ', this.port);
        })
    }
}

export default Server;
