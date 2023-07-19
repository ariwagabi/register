function nav() {
    var x = document.getElementById('nav')
    if (x.style.display === 'block') {
        x.style.display = 'none'
    }
    else {
        x.style.display = 'block'
    }
}

function search() {
    var x = document.getElementById('_search');
    var y = document.getElementById('search-icon')
    if (x.style.display === 'none') {
        x.style.display = 'block';
        y.style.visibility = 'hidden'
    }
    else {
        x.style.display = 'none'
    }
}

function hide_search() {
    var x = document.getElementById('_search');
    var y = document.getElementById('search-icon')
    x.style.display = 'none';
    y.style.visibility = 'visible'
}