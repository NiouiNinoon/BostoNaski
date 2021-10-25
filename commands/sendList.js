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
                        "- 24 janvier Benjamin 1A\n"+
                        "- 28 janvier Max/Romain Dufils\n" +
                        "- 28 janvier ECOBOSTO\n" +
                        "\t\n **===> FEVRIER**\n"+
                        "- 6 février Nolann filleul Antoine\n"+
                        "\t\n **===> MARS**\n"+
                        "- 7 mars Joris Flohic\n"+
                        "- 23 mars Théo Genette\n"+
                        "\t\n **===> JUIN**\n"+
                        "- 7 juin Ehouarn Beriot\n"+
                        "- 14 juin Anthony filleul Yohan\n"+
                        "- 24 juin Boris\n"+
                        "\t\n **===> JUILLET**\n"+
                        "- 7 juillet Matteo (ARK)\n"+
                        "\t\n **===> AOUT**\n"+
                        "- 9 août Clément filleul Ehouarn\n"+
                        "- 16 août Yohan Carn\n"+
                        "- 20 août Lisa Le Goff\n"+
                        "- 21 août Lucas (Nakizame)\n"+
                        "- 22 août Antoine Le Nours\n"+
                        "- 26 août Ninon Begkoyian\n"+
                        "- 30 août Thomas Cloarec\n"+
                        "\t\n **===> SEPTEMBRE**\n"+
                        "- 17 septembre Gildas Garin--Hameline\n"+
                        "- 18 septembre Mélie Bodiou\n"+
                        "- 23 septembre Pierre Oh\n"+
                        "\t\n **===> OCTOBRE**\n"+
                        "- 1er octobre Henri Jézo\n"+
                        "- 4 octobre Axel Guillou\n"+
                        "- 13 octobre Simon Barron\n"+
                        "- 23 octobre Emeline Breit Hoarau\n"+
                        "- 27 octobre Benjamin Gireau--Renard\n"+
                        "\t\n **===> DECEMBRE**\n"+
                        "- 1er décembre Maïwen Lavolée\n"+
                        "- 4 décembre Matisse Pedron\n"+
                        "- 10 décembre Baptou 1A\n"+
                        "- 14 décembre Titouan Le Berre\n"+
                        "- 22 décembre Thomas Poulain\n"+
                        "- 28 décembre Anna filleule Lisa")


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