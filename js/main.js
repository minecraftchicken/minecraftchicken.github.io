/* Hamburger icon animation */

function myFunction(x) {
    x.classList.toggle("change");
  }

/* Horizontal Mousewheel Scroll */
var view = document.getElementById('wrapper');
horwheel(view);

/* Custom Cursor */
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 5)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})


/* Click to scroll event (RIGHT) */
$('a.scroll-right').click(function() {
var pos = $('div.flex-container').scrollLeft() + 390;
$('div.flex-container').scrollLeft(pos);
});

/* Click to scroll event (LEFT) */
$('a.scroll-left').click(function() {
    var pos = $('div.flex-container').scrollLeft() + -390;
    $('div.flex-container').scrollLeft(pos);
    });

