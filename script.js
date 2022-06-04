
let navigation = document.getElementById('list');
let toggleButton = document.getElementById('toggleBurger');

toggleButton.addEventListener('click', function() {
    navigation.classList.toggle('activeNav');
    toggleButton.classList.toggle('pressed');
})

let accordion = document.getElementsByClassName('container');

for (let  i = 0; 1 < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
}

