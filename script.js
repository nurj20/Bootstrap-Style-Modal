document.querySelector('.modalBtn').addEventListener('click', showModal);
document.querySelector('.head-span').addEventListener('click', closeModal);

window.addEventListener('click', function(e) {
    let modal = document.querySelector('.container');
    if (e.target == modal)
        closeModal();
});

function showModal() {
    document.querySelector('.modal').style.display = 'block';
    document.querySelector('.container').style.backgroundColor = 'lightgray';
}

function closeModal() {
    document.querySelector('.modal').style.display = "none";
    document.querySelector('.container').style.backgroundColor = 'white';
}