
const formulario = document.getElementById("formulario");
// BUTTON FOR CREATE NEW EVENT
const createEvent = document.getElementById("create_event");
// APPEAR EVENT FORM
const formEvent = document.getElementById("event_form");
// TITLE EVENT INPUT
const nameEvent = document.getElementById("title_input");
// DISAPPEAR EVENT FORM
const closeEvent = document.getElementById("cross");
// END DATE VARIABLES 
const endDate = document.getElementById("newDateEnd");
const checkDate = document.getElementById("checked_endDate");
// REMIND EVENT VARIABLES
const reminder = document.getElementById("remindChoose");
const checkReminder = document.getElementById("check_remind");
// MODAL CONTAINER 
const modal_container = document.getElementById("modal_container");
// DATE INITIAL 
const first


formulario.addEventListener("submit", (e) => {
    e.preventDefault();
})

// FORM VALIDATION


// Create NEW EVENT FORM
createEvent.addEventListener('click', () => {
    modal_container.classList.add('show');
    formEvent.style.display="block"; 
  });

closeEvent.onclick = function(){
    formEvent.style.display="none";
}
    
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