function frutas() {
    for (let i = 0; i < document.getElementById("lista").children.length; i++) {
        document.getElementById("lista").children[i].style.backgroundColor = "#fff7d6";
    }
}

function frutasimpares() {
    for (let i = 0; i <= document.getElementById("lista").children.length; i++) {
        if (i % 2 == 0) {
            document.getElementById("lista").children[i].style.backgroundColor = "#007789";
        } else {
            document.getElementById("lista").children[i].style.backgroundColor = "#fff7d6";
        }
    }
    
}

function frutaspares() {
    for (let i = 0; i < document.getElementById("lista").children.length; i++) {
        if (i % 2 != 0) {
            document.getElementById("lista").children[i].style.backgroundColor = "#007789";
        } else {
            document.getElementById("lista").children[i].style.backgroundColor = "#fff7d6";
        }
    }
}



