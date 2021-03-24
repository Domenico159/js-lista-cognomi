

var cognomi = ['bianchi', 'neri', 'rossi', 'verdi', 'gialli'];
cognomi.sort();

console.log(cognomi.sort());
var cognomeUser = prompt('Inserisci il tuo cognome').toLowerCase().trim();

var items='';


while(!isNaN(cognomeUser)){
    cognomeUser = prompt('ATTENZIONE!!! Inserire un cognome formato da caratteri alfabetici , per favore riprovare.').toLowerCase().trim();
}

if(isNaN(cognomeUser)){
   cognomi.push(cognomeUser);
}



for(var i = 0 ; i < cognomi.length;i++){

    items += '<li>' + cognomi.sort()[i] + '<li>';
    // console.log(items);
}

document.getElementById('cognomi').innerHTML = items;

console.log(cognomi.sort());

document.getElementById('cognomeUser').innerHTML = 'Il tuo cognome si trova alla posizione numero: ' + (cognomi.indexOf(cognomeUser)+ 1);
