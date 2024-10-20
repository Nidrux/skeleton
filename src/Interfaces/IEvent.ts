import ClientHandler from "../Handlers/ClientHandler";

export default interface Event {
    event: string,
    execute(client : ClientHandler): Promise<void>;
}