const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'récapitule toutes les commandes disponibles',
    execute(message) {

      
      message.channel.send(new Discord.MessageEmbed()
        .setTitle("**Liste des commandes**")
        .attachFiles('./image/image.png') //TO-CHANGE : attention cette image doit correspondre à une de vos images située dans le dossier "image"
        .setThumbnail('attachment://image.png') //TO-CHANGE : pareil
        .setDescription("Vous trouverez ci-dessous toutes les commandes exécutable par ce bot. \nN'oubliez pas avant chaque commande de mettre le préfix: **#**")//TO-CHANGE : remplacer # par votre prefix
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
