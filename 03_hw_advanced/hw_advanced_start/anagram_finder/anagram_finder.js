const AnagramFinder = function (word) {
this.word = word.toLowerCase().split('')
};

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    const result = otherWords.filter((wordInArray)=>wordInArray.toLowerCase().split('').every((letterInArray)=>this.word.includes(letterInArray)));
    
    if (result.length == 0) {
       result.push("p")}; //using a one letter string as placeholder for empty arrays as one letter can never be an anagram of anything else.


    let length1 = result[0].length;
    let length2 = this.word.length;
    
    if (this.word.join('') === result[0]) {return []}
    else if (length1 === length2) {return result}
    else {return []};

  

}

module.exports = AnagramFinder;
