const createButton = document.querySelector('#create_event');

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