window.onload = function() {
    document.querySelector('.filter-btn').onclick = function() {
        document.querySelector('.modal-wrapper').style.display = 'flex';
        var elems = document.getElementsByClassName('active');
        for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = 'block';
        }

    };

    document.querySelector('.close-modal-btn').onclick = function() {
        document.querySelector('.modal-wrapper').style.display = 'none';
        var elems = document.getElementsByClassName('active');
        for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = 'none';
        }
    }

    let feature = document.querySelectorAll('.feature');
    for (let i = 0; i < feature.length; i++) {
        feature[i].onclick = function() {
            feature[i].classList.toggle('active');
        }
    };

    document.getElementById('toggler').onclick = function() {
        document.getElementById('toggler').toggle('active');
    };
    document.getElementById("toggler").onclick = function() {
        document.getElementById("toggler").classList.toggle("active");
        document.getElementById("side-bar-wide").classList.toggle("active");
    };
};