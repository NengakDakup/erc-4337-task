/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

/**
 * Required imports
 */
import UserController from "./controllers/User.controller";
import errorHandler from './middleware/ErrorHandler.middleware';





dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
    process.exit(1);
}
 
const PORT: number = parseInt(process.env.PORT as string, 10);
 
const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 *  App Routes
 */
const userController = new UserController();
app.get('/create-account', userController.createAccount)

/**
 *  App Configuration needed after routes declaration
 */
app.use(errorHandler);

/**
 * Server Activation
 */

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});