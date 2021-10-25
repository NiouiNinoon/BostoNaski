const { MessageAttachment } = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'lancementanniv',
    description: 'regarde si c\'est l\'anniv de qq1 et si oui, le souhaite',
    execute(message) {

        
        message.channel.bulkDelete(1);
        const att = new MessageAttachment("https://c.tenor.com/NB49u_pNRo0AAAAd/yay-excited.gif");

        var checkminutes = 60, checkthe_interval = checkminutes * 60 * 1000; //This checks every 1 minutes, change 1 to whatever minute you'd like
        setInterval(function() {
            

            let rawdata = fs.readFileSync('./data/anniv.json', { encoding: 'utf8' });
            const data = JSON.parse(rawdata, 'utf8');
        
            //récupération du jour d'aujourd'hui
            var today = new Date();
            var jour = today.getDate();
            var mois = today.getMonth() + 1;
            var dateJour = jour + '/' + mois;
        
        
            var oldDate = data.tab[1].dateJour[0].date;


            if (oldDate !== dateJour){
        
                data.tab[1].dateJour[0].date = dateJour;
                let newdata = JSON.stringify(data, 'utf8', 1);
                fs.writeFileSync('./data/anniv.json', newdata);
        
                //vérification de si c'est l'anniv de qq1 car on a changé de jour
                for (let i = 0 ; i < data.tab[0].anniversaires.length; i++){
                    const id = data.tab[0].anniversaires[i].id;
                    const name = data.tab[0].anniversaires[i].name;
                    const anniv = data.tab[0].anniversaires[i].anniv.split('/');
                    let annivBis = anniv[0] + '/' + anniv[1];
                    if(annivBis === dateJour){
                        console.log('c\'est l\'anniversaire de ' + name);

                        if (id !== '0'){
                            message.channel.send(`@everyone Aujourd'hui c'est l'anniversaire de **` + name + '**!' +
                                            `\nOn souhaite tous un bon anniversaire à <@${id}> !!!  :partying_face: :partying_face:`, att);

                        }
                        else {
                            message.channel.send(`@everyone Aujourd'hui c'est l'anniversaire de **` + name + '**!', att);
                            
                        }
                        
                    }
                    else{

                    }
                
                }
        
            }
            
            

        }, checkthe_interval);

    }
}

