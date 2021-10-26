const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'sendlist',
    description: 'envoi la liste des anniversaires en mp',
    execute(message) {

        
        //création d'un embed contenant un gif aléatoire du tab
        const emb = new Discord.MessageEmbed()
        .setTitle(":birthday: Liste des anniversaires :birthday: ")
        .setDescription("\t\n **===> JANVIER**\n"+
                        "- jour mois Nom Prenom\n"+
                        "- jour mois Nom Prenom\n"+
                        "- etc.\n"+
                        "\t\n **===> FEVRIER**\n"+
                        "- jour mois Nom Prenom\n"+
                        "- jour mois Nom Prenom\n"+
                        "- etc.\n"+
                        "\t\n **===> MARS**\n"+
                        "- jour mois Nom Prenom\n"+
                        "- jour mois Nom Prenom\n"+
                        "- etc.\n"+
                        "\t\n **===> AVRIL**\n"+
                        "- jour mois Nom Prenom\n"+
                        "- jour mois Nom Prenom\n"+
                        "- etc.\n"+
                        "\t\n **===> MAI**\n"+
                        "- jour mois Nom Prenom\n"+
                        "- jour mois Nom Prenom\n"+
                        "- etc.\n"+
                        "\t\n **===> JUIN**\n"+
                        "- jour mois Nom Prenom\n"+
                        "- jour mois Nom Prenom\n"+
                        "- etc.\n"+
                        "\t\n **===> JUILLET**\n"+
                        "- jour mois Nom Prenom\n"+
                        "- jour mois Nom Prenom\n"+
                        "- etc.\n"+
                        "\t\n **===> AOUT**\n"+
                        "- jour mois Nom Prenom\n"+
                        "- jour mois Nom Prenom\n"+
                        "- etc.\n"+
                        "\t\n **===> SEPTEMBRE**\n"+
                        "- jour mois Nom Prenom\n"+
                        "- jour mois Nom Prenom\n"+
                        "- etc.\n"+
                        "\t\n **===> OCTOBRE**\n"+
                        "- jour mois Nom Prenom\n"+
                        "- jour mois Nom Prenom\n"+
                        "- etc.\n"+
                        "\t\n **===> NOVEMBRE**\n"+
                        "- jour mois Nom Prenom\n"+
                        "- jour mois Nom Prenom\n"+
                        "- etc.\n"+
                        "\t\n **===> DECEMBRE**\n"+
                        "- jour mois Nom Prenom\n"+
                        "- jour mois Nom Prenom\n"+
                        "- etc.\n")


       //essaye d'envoyer le gif en mp et renvoi un msg d'état de la commande (ok ou erreur)
        try {
            message.author.send(emb);
            message.channel.send(`:white_check_mark: ${message.author} Liste envoyée ! `);

        } catch (error) {

            console.error(error);

            //renvoi d'un msg d'erreur / non transmission du gif
            message.reply(' Erreur de transmission...');
        }

        
        
    }
};