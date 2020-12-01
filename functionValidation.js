
const formulario = document.getElementById("formulario");
// END DATE VARIABLES 
const endDate = document.getElementById("newDateEnd");
const checkDate = document.getElementById("checked_endDate");
// REMIND EVENT VARIABLES
const reminder = document.getElementById("remindChoose");
const checkReminder = document.getElementById("check_remind");


formulario.addEventListener("submit", (e) => {
    e.preventDefault();
})


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