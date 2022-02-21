const fold = document.getElementsByClassName('contain')

for (i = 0; i < fold.length; i++) {
    fold[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}