function balancedBrackets(string) {
  // your code here
  /**
   * Define opening braces
   * Define closing braces
   * Create a stack of braces
   * Check string for braces:
   *        If brace is an opening brace:
   *              Push bracket to stack of braces
   *        If brace is a closing brace:
   *              Check if closing brace matches type of top stack
   *                    If Yes: Pop braces from stack
   *                    If No: Return false
   * Return boolean (is tack of braces empty)
   * */

  const openingBraces = ['(', '{', '['];
  const closingBraces = [')', '}', ']'];

  const braceStack = [];

  for (let i = 0; i < string.length; i++) {
    let currentCharacters = string.charAt(i);
    if (openingBraces.includes(currentCharacters)) {
      braceStack.push(currentCharacters);
    } else if (closingBraces.includes(currentCharacters)) {
      if (braceStack.length === 0) {
        return false;
      }
      let prevBrace = braceStack[braceStack.length - 1];
      if (openingBraces.indexOf(prevBrace) === closingBraces.indexOf(currentCharacters)) {
        braceStack.pop();
      } else {
        return false;
      }

    }
  }

  return (braceStack.length === 0);
}

console.log(balancedBrackets('(hello)[world]'))
// => true

console.log(balancedBrackets('([)]'))
// => false

console.log(balancedBrackets('[({}{}{})([])]'))
// => true

module.exports = balancedBrackets
