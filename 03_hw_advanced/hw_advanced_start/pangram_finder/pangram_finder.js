const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase().split('');
};

PangramFinder.prototype.isPangram = function () {
  const result = this.alphabet.every((letterInAlphabet) => this.phrase.includes(letterInAlphabet));
  return result
};

module.exports = PangramFinder;
g