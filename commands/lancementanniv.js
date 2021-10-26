const { MessageAttachment } = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'lancementanniv',
    description: 'regarde si c\'est l\'anniv de qq1 et si oui, le souhaite dans le channel où la commande a été tapée',
    commentaire: 'cette commande active la capacité du bot à souhaiter les anniversaires et est à utiliser si le bot ne s\'est pas initialisé lui-même',
    commentaire1: 'cette commande s\'exécute par le bot lui même mais peut aussi être utilisée par un utilisateur',
    commentaire2: 'cette commande ce supprime elle même afin de ne pas être visible par les autres utilisateur discord',
    execute(message) {

        //supprime la commande qui a été tapée pour pas qu'elle soit visible par les autres utilisateurs
        message.channel.bulkDelete(1);

        //petit gif sympa pour animer le message d'anniversaire
        const att = new MessageAttachment("https://c.tenor.com/NB49u_pNRo0AAAAd/yay-excited.gif");

        //commentaire : le bot va checker à chaque interval de temps si le jour à changé
        var checkminutes = 1, checkthe_interval = checkminutes * 60 * 1000; //Cette commande check le temps qui s'écoule (en minutes), change le 1 par le nombre de minutes que vous voulez
        setInterval(function() {
            
            //récupération des données présente dans le fichier JSON contenant les id/noms-prenoms/date-anniversaires
            let rawdata = fs.readFileSync('./data/anniv.json', { encoding: 'utf8' });
            const data = JSON.parse(rawdata, 'utf8');
        
            //récupération de la date du jour
            var today = new Date();
            var jour = today.getDate();
            var mois = today.getMonth() + 1;
            var dateJour = jour + '/' + mois;
        
            //récupération de la dernière date du jour enregistrée par le bot et présente dans le fichier JSON
            var oldDate = data.tab[1].dateJour[0].date;

            //check si la date du jour a changé
            if (oldDate !== dateJour){
        
                //enregistrement de la nouvelle date du jour dans le JSON
                data.tab[1].dateJour[0].date = dateJour;
                let newdata = JSON.stringify(data, 'utf8', 1);
                fs.writeFileSync('./data/anniv.json', newdata);
        
                //parcours du fichier JSON pour voir si c'est l'anniversaire de qq1 et si oui, le souhaite
                for (let i = 0 ; i < data.tab[0].anniversaires.length; i++){
                    const id = data.tab[0].anniversaires[i].id;
                    const name = data.tab[0].anniversaires[i].name;
                    const annivJSON = data.tab[0].anniversaires[i].anniv.split('/');
                    let annivBis = annivJSON[0] + '/' + annivJSON[1];
                    if(annivBis === dateJour){
                        console.log('c\'est l\'anniversaire de ' + name);

                        //si l'id de la personne est inconnu veuillez penser à mettre comme id 0 dans le JSON
                        if (id !== '0'){
                            message.channel.send(`@everyone Aujourd'hui c'est l'anniversaire de **` + name + '**!' +
                                            `\nOn souhaite tous un bon anniversaire à <@${id}> !!!  :partying_face: :partying_face:`, att);

                        }
                        else {
                            message.channel.send(`@everyone Aujourd'hui c'est l'anniversaire de **` + name + '**!', att);
                            
                        }
                        
                    }
                
                }
        
            }

        }, checkthe_interval);

    }
}

