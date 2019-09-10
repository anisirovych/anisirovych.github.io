// add active button to reviews
let reviewsMenu = document.querySelectorAll('.reviews-menu_items');

for (let i = 0; i < reviewsMenu.length; i++) {
    reviewsMenu[i].addEventListener('click', function (e) {
        e.preventDefault();
        if (reviewsMenu[i].classList.contains('items-active')) {
            reviewsMenu[i].classList.remove('items-active');
        } else {
            reviewsMenu[i].classList.add('items-active');
        }
    });
}

$(function() {
    $("body").niceScroll();
});