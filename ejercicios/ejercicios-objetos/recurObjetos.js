const isSimilar = (term1, term2) => {
    if (typeof term1 == typeof term2){
        if (Array.isArray(term1) && term1.length === term2.length) {
            return term1.every((element, index) =>
              isSimilar(element, term2[index])
            );
        } else if (typeof term1 == "object" && isSimilar(Object.keys(term1), Object.keys(term2))) {
            return Object.keys(term1).every((key) => isSimilar(term1[key], term2[key]));
        } else {
            return term1 == term2
        }
    } else {
        return false;
    }
}


// TEST

console.log(isSimilar(["cars", "trains", ["roads", ["railways"]]], ["cars", "trains", ["roads", ["railways"]]])) // true

console.log(isSimilar({"pairs": [[3, 5], [1, 7], [2, 6], [0, 8]]}, {"pairs": [[3, 5], [1, 1], [2, 6], [0, 8]]})) // false

console.log(isSimilar({"Sam": 4, "Elliot": 4, "equality": true}, {"Sam": 4, "Elliot": 5, "equality": false}) )// false

console.log(isSimilar([{"D": [0, 3]}, {"X": [1, 3]}, {"D": [3, 7]}], [{"D": [0, 3]}, {"X": [1, 3]}, {"D": [3, 7]}])) // true


