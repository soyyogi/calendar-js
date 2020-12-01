
const formulario = document.getElementById("formulario");
const eventInput = document.getElementById("title_input");
const dateInput = document.getElementById("date_input");
const endDate = document.getElementById("end_date");


formulario.addEventListener("submit", (e) => {
    e.preventDefault();
})

eventInput.addEventListener("keyup", titleValidation);
var titleValidation = function(){
    var patternUsername = /^[a-zA-Z0-9][^\s]*$/;
    if(patternUsername.test(eventInput.value)){
        
    }
}

// Injectar 

const labelEnd = document.createElement('label');
const salto = document.createElement('br');
const inputDateEnd = document.createElement('input');

inputDateEnd.setAttribute("type","datetime-local");
inputDateEnd.setAttribute("id","endData_input");
labelEnd.textContent = 'End date:';

endDate.appendChild(salto);
endDate.appendChild(labelEnd);
endDate.appendChild(inputDateEnd);