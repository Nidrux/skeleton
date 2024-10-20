import { ActivityType, Client } from "discord.js";
import { clientOptions } from "../Extensions/ClientOptions";
import { fileHandler, log } from "..";


export default class ClientHandler extends Client {
    _token : string = ""
    constructor(token : string = "") {
        super(clientOptions)
        this._token = token
    }
    public start(): void {
        log.info(`Starting up bot.`)
        try {
            const isDataDirectoryCreated = fileHandler.ensureDataDirectoryCreated()
            if(isDataDirectoryCreated.succes) {
                log.info(isDataDirectoryCreated.result)
                this.login(this._token)
                this.setClientStatus()   
            } else {
                log.error(`Failed to create Data directory before starting up the bot. Error: ${isDataDirectoryCreated.result}`)
                process.exit(1);
            }
        } catch (error) {
            log.fatal(`Failed to login.. With error message: ${error}. Terminating PROC`)
            process.exit(1);
        }
    }
    private setClientStatus() : void {
        this.user?.setPresence({
            activities: [{ 
                name: 'Living on a random cluster', 
                type: ActivityType.Watching
            }], 
            status: 'online' 
        })
    }
}
