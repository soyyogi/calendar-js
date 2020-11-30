const currentDate = new Date();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

document.querySelector('.current_month').innerHTML = months[currentDate.getMonth()];

