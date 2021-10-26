const fs = require('fs');
const Discord = require('discord.js');

const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}




/**
 * Lorsqu'un message est écrit sur le server discord
 * Le bot vérifie si il a été ping/mentionné dans un message
 * -> si c'est le cas il envoie un message
 * Le bot vérifie si le prefix est présent et si la commande correspond à une de ses commandes
 * -> si la commande existe il l'execute
 */
client.on('message', message => {  

  var userrrr = message.mentions.users.first();

  //Lorsque l'utilisateur mentionne le bot 
  if (`${userrrr}` === `<@90147175645212641523>`){ //TO-CHANGE : ce nombre correspond à l'id discord de votre bot
    
    message.channel.send(`Pour savoir ce que je peux faire envoie **!help** au 7 14 14 :blush:`);
    
  }

  else{

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
      client.commands.get(command).execute(message, args);
    } catch (error) {
      console.error(error);
      message.reply("Une erreur s'est produite pendant l'exécution de la commande !");
    }
  }
})

client.once('ready', () => {
  console.log('---- Redémarrage du bot ----\nThe bot is Ready to be used!');
  client.user.setActivity('Pierre feuille ciseaux', {type: "PLAYING"});

  const Guilds = client.guilds.cache.map(guild => guild.id);
  Guilds.forEach(guild =>{
    let guildObj = client.guilds.cache.get(guild);
    let chan = guildObj.channels.cache.find(channel => channel.name === "général")
    chan.send('#lancementanniv');//TO-CHANGE : remplacer # par votre prefix
  });

});


client.on('guildMemberAdd', (member) =>{

  let welcome = client.channels.cache.get('760938647192076351'); //TO-CHANGE : ce nombre correspond à l'id du channel de votre choix (souvent le channel bienvenue)
  welcome.send(`Bienvenue ${member}! C'est un plaisir de te voir sur notre server! :hugging: \nN'hésite pas à te présenter dans le salon <#834073704974516284> !`); //TO-CHANGE : ce nombre correspond à l'id du salon de présentation
  
});

client.on('guildMemberRemove',(member) =>{
  
  let leave = client.channels.cache.get('76093864549782076351');  //TO-CHANGE : ce nombre correspond à l'id du channel de votre choix (souvent le channel bienvenue)
  leave.send(`${member} nous a malheureusement quitté... :pensive: `);

});

client.on("guildCreate", (guild) =>{
  console.log(`the client joins a guild`);

  let chan = guild.channels.cache.find(channel => channel.name === "bienvenue")
  chan.send('Salut la team! Je suis là pour souhaiter les anniversaires!' +
  '\n Mon préfix est   \`\`#\`\`   alors hésitez pas à m\'utiliser!'); //TO-CHANGE : remplacer # par votre prefix
});

client.login(token);
