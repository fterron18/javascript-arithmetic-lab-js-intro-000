function add() {
   number += 5
}

function add(a, b) {
    return function(a) { return a + b; };
}
