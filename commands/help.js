const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'récapitule toutes les commandes disponibles',
    execute(message) {

      
      message.channel.send(new Discord.MessageEmbed()
        //.setColor("#339966")
        .setTitle("**Liste des commandes**")
        .attachFiles('./image/bostoBD2.png') //attention cette image est une image privée, remplacée là par l'image de votre choix
        .setThumbnail('attachment://bostoBD2.png') //pareil
        .setDescription("Vous trouverez ci-dessous toutes les commandes exécutable par le bot BostoNaski. \nN'oubliez pas avant chaque commande de mettre le préfix: **#**")
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: '#list', value: 'Donne la liste des anniversaires' },
            { name: '#sendlist', value: 'Envoie la liste des anniversaires par mp' },
            { name: '\u200B', value: '\u200B' },
        )

        .setTimestamp()
        .setFooter("Bot Discord créé par Ninon Begkoyian \n(PS: Les carottes c'est trop bon!)\t")
        );
    }
};
