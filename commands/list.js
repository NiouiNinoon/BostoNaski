const Discord = require('discord.js');
const pagination = require('discord.js-pagination');

module.exports = {
    
    name: 'list',
    description: 'envoie la liste des annivs',
    async execute(message) {
    
        //TO-CHANGE : remplacez les jours noms et prenoms par ceux de vos amis/famille (bien-sur les lignes "etc." ne sont pas à inclure dans le bot)
        const page1 = new Discord.MessageEmbed()
                .setTitle(":birthday: JANVIER :birthday:")
                .setDescription("jour : Nom Prenom\n"+
                                "jour : Nom prenom\n"+
                                "etc.")
        const page2 = new Discord.MessageEmbed()
                .setTitle(":birthday: FEVRIER :birthday:")
                .setDescription("jour : Nom Prenom\n"+
                                "jour : Nom prenom\n"+
                                "etc.")
        const page3 = new Discord.MessageEmbed()
                .setTitle(":birthday: MARS :birthday:")
                .setDescription("jour : Nom Prenom\n"+
                                "jour : Nom prenom\n"+
                                "etc.")
        const page4 = new Discord.MessageEmbed()
                .setTitle(":birthday: AVRIL :birthday:")
                .setDescription("jour : Nom Prenom\n"+
                                "jour : Nom prenom\n"+
                                "etc.")
        const page5 = new Discord.MessageEmbed()
                .setTitle(":birthday: MAI :birthday:")
                .setDescription("jour : Nom Prenom\n"+
                                "jour : Nom prenom\n"+
                                "etc.")
        const page6 = new Discord.MessageEmbed()
                .setTitle(":birthday: JUIN :birthday:")
                .setDescription("jour : Nom Prenom\n"+
                                "jour : Nom prenom\n"+
                                "etc.")
        const page7 = new Discord.MessageEmbed()
                .setTitle(":birthday: JUILLET :birthday:")
                .setDescription("jour : Nom Prenom\n"+
                                "jour : Nom prenom\n"+
                                "etc.")
        const page8 = new Discord.MessageEmbed()
                .setTitle(":birthday: AOUT :birthday:")
                .setDescription("jour : Nom Prenom\n"+
                                "jour : Nom prenom\n"+
                                "etc.")
        const page9 = new Discord.MessageEmbed()
                .setTitle(":birthday: SEPTEMBRE :birthday:")
                .setDescription("jour : Nom Prenom\n"+
                                "jour : Nom prenom\n"+
                                "etc.")
        const page10 = new Discord.MessageEmbed()
                .setTitle(":birthday: OCTOBRE :birthday:")
                .setDescription("jour : Nom Prenom\n"+
                                "jour : Nom prenom\n"+
                                "etc.")
        const page11 = new Discord.MessageEmbed()
                .setTitle(":birthday: NOVEMBRE :birthday:")
                .setDescription("jour : Nom Prenom\n"+
                                "jour : Nom prenom\n"+
                                "etc.")
        const page12 = new Discord.MessageEmbed()
                .setTitle(":birthday: DECEMBRE :birthday:")
                .setDescription("jour : Nom Prenom\n"+
                                "jour : Nom prenom\n"+
                                "etc.")

        const pages = [
            page1,
            page2,
            page3,
            page4,
            page5,
            page6,
            page7,
            page8,
            page9,
            page10,
            page11,
            page12
        ]

        const emoji = ["⬅️", "➡️"]

        const timeout = '100000'

        pagination(message, pages, emoji, timeout)
    }
};
