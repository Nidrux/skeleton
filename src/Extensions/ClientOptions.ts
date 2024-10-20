import { GatewayIntentBits } from "discord.js";

export const clientOptions = {intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
  ],}