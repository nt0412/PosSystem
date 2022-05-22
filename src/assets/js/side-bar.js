window.onload = function() {


    document.getElementById('toggler').onclick = function() {
        document.getElementById('toggler').toggle('active');
    };
    document.getElementById("toggler").onclick = function() {
        document.getElementById("toggler").classList.toggle("active");
        document.getElementById("side-bar-wide").classList.toggle("active");
    };

    document.querySelectorAll(".fa-circle-user").onclick = function() {
        alert("You clicked on the name!");
    }

};