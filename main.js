/* const sottrazione = (num1, num2) => {       /* num1-num2/* in una riga 
    return num1 - num2;
}
const risultatoSottrazione = sottrazione(22, 20);
console.log(risultatoSottrazione);
 */

/*  const student ={
    name: 'Kevin',
    age: 16,
    information: function(){
        console.log(this.name, + this.age);
    },
    ageStudent: function(){
        this.age+=10;
    }
     
 };
student.information();
student.ageStudent();
student.information();
  */
/* window.addEventListener('load', function(){
    const div = document.getElementById("titolo");
    div.innerText=" cambia titolo";
    div.innerHTML+= "<strong> Ciao</strong>";
}); */

/* window.addEventListener('load', ()=>{
const mioDiv = document.getElementById("mioDiv");

        
        mioDiv.addEventListener("click", function() {
           
            if (mioDiv.classList.contains("blu")) {
             
                mioDiv.classList.add("rosso");
                mioDiv.classList.remove("blu");
                console.log("Classe 'rosso' aggiunta e classe 'blu' rimossa.");
            } else {
                
                mioDiv.classList.add("blu");
                mioDiv.classList.remove("rosso");
                console.log("Classe 'blu' aggiunta e classe 'rosso' rimossa.");
            }
        });

});
 */
/* 
window.addEventListener('load', ()=>{
    const pulsante = document.getElementById("Button");

    pulsante.setAttribute("disabled", '');
}); */

/* window.addEventListener('load', ()=>{
    const myDiv = document.getElementById("myDiv");

    // Aggiungi l'evento onmouseover per cambiare il colore del div
    myDiv.onmouseover = function() {
        myDiv.style.backgroundColor = "red";
    };

    // Aggiungi l'evento onmouseout per ripristinare il colore originale del div
    myDiv.onmouseout = function() {
        myDiv.style.backgroundColor = "blue";
    };

    // Aggiungi l'evento onclick per stampare un messaggio in console
    myDiv.onclick = function() {
        console.log("Hai cliccato sul div!");
    };
}) */;
/* const listaSpesa =["pomodori", "dentrificio", "carta igienica", "fagioli" ];
window.addEventListener('load', () =>{
    const body = document.body;
    const ul =document.createElement('ul');
    ul.setAttribute('class', 'ul-figo');
   for(let i=0; i<listaSpesa.length; i++){
    const li= document.createElement('li');
    li.innerText=listaSpesa[i];
    ul.appendChild(li);
   }
   body.appendChild(ul);
});
 */
/*
Anagrafica:

* Persona 1:
    nome: ... (tipo del dato: stringa/interno)
    cognome: ...
    eta: ...

* Persona 2:
    nome: ...
    cognome: ...
    eta: ...

*/







/* window.addEventListener('load', () => {
    
    const btn = document.querySelector('button');
    btn.addEventListener('click', () =>{
    const input = document.querySelector('input');
    const choices = document.querySelectorAll('[name="choice"]');
    for( let i=0; i<choices.length; i++){
        const choice = choices[i];
        if(choice.checked){
            operazione = choice.value;
            break;
        }
    }
    const p = document.getElementById('risultato');
    if(operazione === 'toLowerCase'){
        p.innerHTML = input.value.toLowerCase();
    }else{
        p.innerHTML = input.value.toUpperCase();
    }
    });
}); */
/*  
const anagrafica = [
    {
        name: 'Mario',
        surname: 'Rossi',
        age: 18,
    },
    {
        name: 'Anna',
        surname: 'Rossi',
        age: 25,
    },
] */

/* const Italy = {
    Persone: "500000",
    LinguaP: "italiano",
    Regioni: {
        Napoli: {
            Persone: "2M",
            Specialita: "Pizza",
            Turistico: "Margellina",
        },
        Roma: {
            Attrazioni: "colosseo",
            Specialita: "carbonara",
            Dialetto: "romano",
        }
    }
};
    const oggetto = (Object) => {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    console.log(li);
} */







/* const Italy = {
    Persone: "500000",
    LinguaP: "italiano",
    Regioni: {
        Napoli: {
            Persone: "2M",
            Specialita: "Pizza",
            Turistico: "Margellina",
        },
        Roma: {
            Attrazioni: "colosseo",
            Specialita: "carbonara",
            Dialetto: "romano",
        }
    }
};

const recursiveNumberToStringConversion = (obj) => {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = obj[key];
        if (typeof value === 'number') {
            obj[key] = String(value);
        } else if (typeof value === 'object') {
            recursiveNumberToStringConversion(value);
        }
    }

};

recursiveNumberToStringConversion(Italy);
console.log(Italy); */


const Italy={
    Persone:"500000",
    LinguaP:"italiano",
    Regioni:{
    Napoli:{
    Persone:"2M",
    Specialita:"Pizza",
    Turistico:"Margellina",
    },
    Roma:{
    Attrazioni:"colosseo",
    Specialita:"carbonara",
    Dialetto:"romano",
    }
    }
};

const recursiveNumberToStringConversion = (obj) => {

    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = obj[key];
        if (typeof value === 'number') {
            obj[key] = String(value);
        } else if (typeof value === 'object') {
            recursiveNumberToStringConversion(value);
        }
    }
    
};

 recursiveNumberToStringConversion(Italy);
 const div = document.createElement('div');

    // Aggiungi i valori convertiti direttamente al div
    for (let i=0; i<Italy.length; i++) {
        const value = Italy[key];
        const paragraph = document.createElement('p');
        paragraph.textContent = `${key}: ${value}`;
        div.appendChild(paragraph);
    }

    // Aggiungi il div al body del documento
    document.body.appendChild(div);
    console.log(Italy);