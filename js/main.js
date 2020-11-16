/* Hamburger icon animation */

function myFunction(x) {
    x.classList.toggle("change");
}

function fullScreen(x) {
    x.classList.toggle("change");
}



/* Custom Cursor 
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 5)+"px; left: "+(e.pageX - 10)+"px;")
}) */

/* Add class to cursor on hover 
$(document).ready(function() {  */
    /* Classes & IDs that needs to be hovered  
        $('#hamburger-hover, #menu-item-hover, .social-icon, .logo-image, .flex-item-header').hover(function(){      
            $('#cursor-hover').addClass('cursor-hover-active');
        },
        function(){
            $('#cursor-hover').removeClass('cursor-hover-active');     
        });
    });
*/  

$( document ).ready(function() {
    var clipboard = new ClipboardJS('.clipboard');
  });
  



