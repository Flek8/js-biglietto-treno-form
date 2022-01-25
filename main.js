let nome = document.getElementById('name').value;
let km = document.getElementById('km').value;
let eta = document.getElementById('eta').value;
let offerta = document.getElementById('offerta');
let genera = document.getElementById('genera');

let nominativo = document.getElementById('nome');
let datiNominativo = document.createElement('span');

genera.addEventListener('click',
    function() {
        datiNominativo.append(nome);
        nominativo.append(datiNominativo);
    },
    function() {
        
    }
);




/*
function() {
    if (eta == 'min') 
        document.getElementById('offerta').innerHTML = "Sconto 20% per minorenni";
    else if (eta == 'mag') 
        document.getElementById('offerta').innerHTML = "Biglietto Standard";
    else if (eta == 'over') 
         document.getElementById('offerta').innerHTML = "Sconto 40% per ver 65";
    else {
        alert("Selezionare una fascia d'età corretta");
    }
}
*/