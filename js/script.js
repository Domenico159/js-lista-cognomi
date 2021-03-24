

var cognomi = ['bianchi', 'neri', 'rossi', 'verdi', 'gialli'];
cognomi.sort();

console.log(cognomi.sort());
var cognomeUser = prompt('Inserisci il tuo cognome').toLowerCase().trim();


while(!isNaN(cognomeUser)){
    cognomeUser = prompt('ATTENZIONE!!! Inserire un cognome formato da caratteri alfabetici , per favore riprovare.').toLowerCase().trim();
}

if(isNaN(cognomeUser)){
   cognomi.push(cognomeUser);
}


console.log(cognomi.sort());

console.log('Il tuo cognome si trova alla posizione numero: ' + (cognomi.indexOf(cognomeUser)+ 1));
