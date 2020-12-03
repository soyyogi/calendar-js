const createButton = document.querySelector('#create_event');

const reminder = document.getElementById("remindChoose");
const checkReminder = document.getElementById("check_remind");
const checkDate = document.getElementById("checked_endDate");
const endDate = document.getElementById("newDateEnd");

createButton.addEventListener('click', () => {
    document.querySelector('.form_section').classList.remove('hidden');
    document.querySelector('.days').classList.add('parentDiable');
})

function hideForm(){
    document.querySelector('.form_section').classList.add('hidden');
}

document.querySelector('.form_section').addEventListener('focusout', hideForm)
window.addEventListener('keypress', (e) => {
    if (e.key === 'Delete')
        hideForm()
})
document.querySelector('#cross').addEventListener('click', hideForm)

//              TECLA ESC
var addressInputContainer = document.querySelectorAll(".addressInputContainer");
addressInputContainer.forEach(elem =>  {
    elem.addEventListener("click", validateInput);
    elem.addEventListener("keyup", validateInput);
})

function validateInput(e){
    if(e.target.hasAttribute('required')){
        if(e.target.value.length === 0){
            console.log(e.target.nextSibling);
            e.target.style.border = "1px solid red";
            e.target.nextSibling.innerHTML = "field empty";
        }
        else{
            e.target.style.border = "1px solid black";
            e.target.nextSibling.innerHTML = "";
        }
    }
}


const today = new Date().toISOString().substr(0, 10);
document.querySelector("#date_input").value = today;


// APPEAR OR DISAPPEAR DATE END CHOOSE
function on(){
    endDate.style.display = "block";
  }
  
  function off(){
    endDate.style.display = "none";
  }
  
  checkDate.addEventListener("change", finishDate, false);
  
  function finishDate(){
    if(checkDate.checked){
        on();
    }else{
       off();
    }
  }
// APPEAR OR DISAPPEAR REMIND EVENT
function appear(){
    reminder.style.display = "block";
  }
  
  function disappear(){
    reminder.style.display = "none";
  }
  
  checkReminder.addEventListener("change", appearRemind, false);
  
  function appearRemind(){
    if(checkReminder.checked){
        appear();
    }else{
       disappear();
    }
  }