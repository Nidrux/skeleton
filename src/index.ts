import { LoggingManager } from "nilog";
import ClientHandler from "./Handlers/ClientHandler";
import { config } from "dotenv";
import FileHandler from "./Handlers/FileHandler";
config(); //Load ENV

export const log = new LoggingManager();
export const fileHandler = new FileHandler();
export const client = new ClientHandler(process.env.TOKEN);

client.start();