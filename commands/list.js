const Discord = require('discord.js');
const pagination = require('discord.js-pagination');

module.exports = {
    
    name: 'list',
    description: 'envoie la list des annivs',
    async execute(message) {
    
        const page1 = new Discord.MessageEmbed()
                .setTitle(":birthday: JANVIER :birthday:")
                .setDescription("28 : Max/Romain Dufils\n"+
                                "28 : ECOBOSTO")
        const page2 = new Discord.MessageEmbed()
                .setTitle(":birthday: FEVRIER :birthday:")
                .setDescription("6 : Nolann filleul\n")
        const page3 = new Discord.MessageEmbed()
                .setTitle(":birthday: MARS :birthday:")
                .setDescription("7 : Joris Flohic\n"+
                                "23 : Théo Genette")
        const page4 = new Discord.MessageEmbed()
                .setTitle(":birthday: JUIN :birthday:")
                .setDescription("7 : Ehouarn Beriot\n"+
                                "24 : Boris")
        const page5 = new Discord.MessageEmbed()
                .setTitle(":birthday: JUILLET :birthday:")
                .setDescription("7 : Mattéo (ARK)")
        const page6 = new Discord.MessageEmbed()
                .setTitle(":birthday: AOUT :birthday:")
                .setDescription("16 : Yohan\n"+
                                "20 : Lisa Le Goff\n"+
                                "21 : Lucas (Nakizame)\n"+
                                "22 : Antoine Le Nours\n"+
                                "26 : Ninon Begkoyian\n"+
                                "30 : Thomas Cloarec")
        const page7 = new Discord.MessageEmbed()
                .setTitle(":birthday: SEPTEMBRE :birthday:")
                .setDescription("17 : Gildas Garin--Hameline\n"+
                                "18 : Amélie Bodiou\n"+
                                "23 : Pierre Oh")
        const page8 = new Discord.MessageEmbed()
                .setTitle(":birthday: OCTOBRE :birthday:")
                .setDescription("1 : Henri Jézo\n" +
                                "4 : Axel Guillou\n" +
                                "13 : Simon Barron\n" +
                                "23 : Emeline Breit Hoarau\n" +
                                "27 : Benjamin Gireau--Renard")
        const page9 = new Discord.MessageEmbed()
                .setTitle(":birthday: DECEMBRE :birthday:")
                .setDescription("1 : Maïwen Lavolée\n" +
                                "4 : Matisse Pedron\n" +
                                "10 : Baptou 1A\n"+
                                "14 : Titouan Le Berre\n" +
                                "22 : Thomas Poulain")

        const pages = [
            page1,
            page2,
            page3,
            page4,
            page5,
            page6,
            page7,
            page8,
            page9
        ]

        const emoji = ["⬅️", "➡️"]

        const timeout = '100000'

        pagination(message, pages, emoji, timeout)
    }
};