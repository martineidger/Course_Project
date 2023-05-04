
const but_more = document.querySelector('.but-more');
const ev = document.querySelector('.ev');
but_more.addEventListener('click', () => {
    ev.classList.toggle('ev-hidden');
});

