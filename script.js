let accordion = document.getElementsByClassName('container');

for (let  i = 0; 1 < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
}