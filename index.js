require("dotenv").config();

const {
  Client,
  GatewayIntentBits
} = require("discord.js");

const updateRepo = require("./downloader");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", async () => {
  console.log(`Logged in as ${client.user.tag}`);

  // tải/update repo github
  await updateRepo();

  console.log("Bot online.");
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }

  if (interaction.commandName === "update") {
    await interaction.reply("Đang update GitHub...");

    await updateRepo();

    await interaction.followUp("Update xong.");
  }
});

client.login(process.env.TOKEN);