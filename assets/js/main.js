var moveUpButton = document.querySelector('.move-up');
var navbarButton = document.getElementById('navbar');
var navlist = document.querySelector('.header .navlist');

navbarButton.addEventListener('mousedown', function() {
    navbarButton.classList.add('active');
});

navbarButton.addEventListener('mouseup', function() {
    if (navbarButton.classList.contains('active')){
        navbarButton.classList.remove('active');
    }

    if (navlist.classList.contains('active')){
        setTimeout(function(){
            navlist.classList.remove('active');
            navbarButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }, 300);
    } else {
        navlist.classList.add('active');     
        navbarButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
});


window.addEventListener("scroll", function(){
    if (window.scrollY > 100){
        moveUpButton.style.display = 'block';
    } else {
        moveUpButton.style.display = 'none';
    }
});