// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

var soccerTeams = [
    {
        "teamName": "Inter",
    },

    {
        "teamName": "Juventus",
    },

    {
        "teamName": "Roma",
    },

    {
        "teamName": "Milan",
    },

    {
        "teamName": "Fiorentina",
    },

    {
        "teamName": "Lazio",
    },
];

//creo una funzione che generi numeri casuali
const rndInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//aggiungo agli oggetti le punti fatti e falli subiti ciclando l'array soccerTeams
for(let i = 0; i < soccerTeams.length; i++) {
    soccerTeams[i]["score"] = rndInt(0, 50);
    soccerTeams[i]["faultNumber"] = rndInt(0, 20);
}

console.log(soccerTeams);

//inizializzo il nuovo array
var teamsAndFaults = [];

//ciclo soccerTeams per estrapolare le proprietà teamName e faultNumber e aggiungerle in un nuovo oggetto da inserire nell'array teamsAndFaults
for(let i = 0; i < soccerTeams.length; i++) {
    //estrapolo le proprietà destrutturando l'elemento
    let {teamName, faultNumber} = soccerTeams[i];
    //creo un oggetto in cui inserire le proprietà
    let newTeam = {teamName, faultNumber};
    //inserisco il nuovo oggetto nell'array
    teamsAndFaults.push(newTeam);
}

console.log(teamsAndFaults);