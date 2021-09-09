// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

let biciDaCorsa = [
    {
        "nome": "Bianchi",
        "peso": 5
    },

    {
        "nome": "Canyon",
        "peso": 6
    },

    {
        "nome": "Merida",
        "peso": 4
    },

    {
        "nome": "Trek",
        "peso": 7
    },

    {
        "nome": "Bottecchia",
        "peso": 7
    },
];

let biciLeggera = biciDaCorsa[0];

for(let i = 0; i < biciDaCorsa.length; i++) {
    if(biciDaCorsa[i].peso < biciLeggera.peso) {
        biciLeggera = biciDaCorsa[i];
    }
}

let {nome, peso} = biciLeggera;

console.log(`La bici più leggera è la ${nome} e pesa solo ${peso} chilogrammi.`);