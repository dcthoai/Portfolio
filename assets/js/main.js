var moveUpButton = document.querySelector('.move-up');

console.log(moveUpButton)

window.addEventListener("scroll", function(){
    if (window.scrollY > 100){
        moveUpButton.style.display = 'block';
    } else {
        moveUpButton.style.display = 'none';
    }
});