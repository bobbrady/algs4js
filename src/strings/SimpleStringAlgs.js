import logger from '../util/LogUtil';
/**
 * Class SimpleStringAlgs
 *
 * Provides simple string algorithm functionality.
 */
class SimpleStringAlgs {

  static validate(str) {
    const isValid = (typeof str === 'string' || str instanceof String);
    if (!isValid) {
      throw new Error(`Input ${str} was not a string primitive or String object.`);
    }
  }

  /**
   * Reverses a string using built-in JavaScript functionality.
   *
   * @param {string} The string to reverse
   * @return {string The reversed string}
   */
  static reverseWithBuiltIns(str) {
    this.validate(str);
    logger.debug(`Reversing string ${str}`);
    const charArr = str.split('');
    logger.debug(`Character array = ${charArr}`);
    charArr.reverse();
    logger.debug(`Reversed character array = ${charArr}`);
    return charArr.join('');
  }

  /**
   * Reverses a string without the use of built-in JavaScript functionality.
   *
   * @param {string} The string to reverse
   * @return {string The reversed string}
   */
  static reverse(str) {
    this.validate(str);
    logger.debug(`Reversing string ${str}`);
    let revStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      revStr += str.charAt(i);
    }
    return revStr;
  }

  /**
   * Checks for palindromes.
   *
   * Ignores non-word characters and the underscore
   *
   * @param {string} str, the string to Check.
   * @return {boolean} true if palindrome, false otherwise.
   */
  static isPalindrome(str) {
    this.validate(str);
    const testStr = str.toLowerCase().replace(/\W/g, '').replace('_', '');
    for (let i = 0; i < testStr.length / 2; i++) {
      if (testStr.charAt(i) !== testStr.charAt(testStr.length - 1 - i)) {
        return false;
      }
    }
    return true;
  }
}

export default SimpleStringAlgs;
