const array = [
    {
        szerzonev: "",
        korszakokszama: 0,
        korszaklista: ""
    }
]

const headArray = ["Költő neve", "Szám", "Korszakok listája"];

const formArray =  [
    { label: "Költő neve:", id: "kolto_nev", type: "text" },
    { label: "Korszakok száma:", id: "korszak_szam", type: "number" },
    { label: "Korszakok vesszővel elválasztva:", id: "korszak_lista", type: "text" },
]

const table = document.createElement('table');
table.className = "table";

const form = document.createElement('form');

const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const tr1 = document.createElement('tr');

for(const elem of formArray) {
    const mainDiv = document.createElement('div');
    mainDiv.className = 'div';

    const label = document.createElement('div'); 
    label.innerText = elem.label;

    const input = document.createElement('input');
    input.type = elem.type;
    input.id = elem.id;
    input.required = true;

    mainDiv.appendChild(label);
    mainDiv.appendChild(input);
    form.appendChild(mainDiv);
}

for(const elem of headArray) {
    const td1 = document.createElement('td');
    td1.innerHTML = elem;
    tr1.appendChild(td1);
}
thead.appendChild(tr1);
table.appendChild(thead);
table.appendChild(tbody);

const mainButton = document.createElement('button');
mainButton.innerHTML = "Küldés";
mainButton.className = "gomb";
form.appendChild(mainButton);

document.body.appendChild(form); 
document.body.appendChild(table);

function ujHozzadas(adat) {
    const sor = document.createElement('tr');
    sor.className = 'uj-sor';

    const korszakListaTomb = adat.korszaklista
        .split(',')
    if (adat.korszakokszama === korszakListaTomb.length) {
        sor.style.backgroundColor = 'lightgreen';
    }

    const koltoCella = document.createElement('td');
    koltoCella.textContent = adat.kolto;
    sor.appendChild(koltoCella);

    const korszakCella = document.createElement('td');
    korszakCella.textContent = adat.korszakokszama;
    sor.appendChild(korszakCella);

    const korszakListaja = document.createElement('td');
    korszakListaja.textContent = korszakListaTomb.join(' | ');
    sor.appendChild(korszakListaja);

    tbody.appendChild(sor);
}

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const koltoNeve = document.getElementById("kolto_nev").value.trim();
    const korszakSzam = parseInt(document.getElementById("korszak_szam").value);
    const korszakLista = document.getElementById("korszak_lista").value.trim();

    const data = {
        kolto: koltoNeve,
        korszakokszama: korszakSzam,
        korszaklista: korszakLista
    }

    array.push(data);
    ujHozzadas(data);
    form.reset();
});
