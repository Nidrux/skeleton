import ClientHandler from "../Handlers/ClientHandler"
import Event from "../Interfaces/IEvent"

export const event: Event = {
    event: "ready",
    execute: async (client: ClientHandler) => {
    }
}