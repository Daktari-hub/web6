let modal = document.querySelector(`.modal`);
let close = document.querySelector(`.close`);
let openModal = document.querySelector(`.modal-btn`);
let overall = document.querySelector(`.overall`)
let date = document.querySelector(`.date`)
let hides = document.querySelector(`.hides`)
let confirms = document.querySelector(`.formres`)
let inputs = document.querySelectorAll(`.inputs`)
let overlay = document.querySelector(`.overlay`)


openModal.addEventListener('click', function () {
    modal.classList.remove(`hidden`);
    overlay.classList.remove(`hidden`)
    hides.style.display = "none";
    confirms.style.display = "none"
    


})

close.addEventListener(`click`, function () {
    modal.classList.add(`hidden`)
    hides.style.display = "block"
    confirms.style.display = "block"
})
overall.addEventListener(`click`, function () {
    modal.classList.add(`hidden`)
})