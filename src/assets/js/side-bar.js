window.onload = function() {
    let feature = document.querySelectorAll('.feature');
    for (let i = 0; i < feature.length; i++) {
        feature[i].onclick = function() {
            let j = 0;
            while (j < feature.length) {
                feature[j++].className = "feature";
            }
            feature[i].className = "feature active";
        }
    };

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