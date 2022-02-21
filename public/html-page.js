function toggleFold() {
    let fold = document.getElementById('fold');
    let content = fold.style.display;
    let foldBtn = document.getElementById('foldBtn');

    if (content == 'block') {
        fold.style.display = 'none';
        foldBtn.innerHTML = 'Show text'
    } else {
        fold.style.display = 'block';
        foldBtn.innerHTML = 'Hide Text';
    }
}


/*
const fold = document.getElementsByClassName('contain')

for (i = 0; i < fold.length; i++) {
    fold[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}
*/