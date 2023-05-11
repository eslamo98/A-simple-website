var menubtn = document.getElementById("menu"),
sidenav = document.getElementById("sidenav").style.right="-250px";

menubtn.onclick = function(){
    if ( sidenav == "-250px"){
        sidenav = document.getElementById("sidenav").style.right="0";
    } else {
        sidenav = document.getElementById("sidenav").style.right="-250px";
    }
}
