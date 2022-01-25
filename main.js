const genera = document.getElementById('genera');

genera.addEventListener('click',
    function() {
        const nome = document.getElementById('name').value;
        console.log(nome);

        const km = document.getElementById('km').value;
        console.log(km);

        const fasciaEta = document.getElementById('eta').value;
        console.log(fasciaEta);
        
        const prezzoKm = 0.21;

        let prezzoBiglietto = km * prezzoKm;
        let offerta = 'Biglietto Standard'

        if (fasciaEta == 'min') {

            prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * 0.2);
            offerta = 'Sconto Minorenni'

        } else if (fasciaEta == 'over') {

            prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * 0.4);
            offerta = 'Sconto Over 65'

        }

        let biglietto = document.getElementById('biglietto');
        biglietto.classList.remove('hidden');


        document.getElementById('nome').innerHTML = nome;

        document.getElementById('costo').innerHTML = prezzoBiglietto.toFixed(2) + '&euro;'

        document.getElementById('offerta').innerHTML = offerta;

        document.getElementById('carrozza').innerHTML = (Math.floor(Math.random()*9)+1);

        document.getElementById('CP').innerHTML = ((Number(90000) + Number(Math.random()*10000)).toFixed(0));
    }
);

const annulla = document.getElementById('annulla');

annulla.addEventListener('click',
    function() {

        let biglietto = document.getElementById('biglietto');
        biglietto.classList.add('hidden');

        document.getElementById('name').value = '';
        document.getElementById('km').value = '';
        document.getElementById('eta').value = 'default';
    }
);