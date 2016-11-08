import logger from '../util/LogUtil';

/**
 * Class Factorial
 *
 * Exposes static fucntionality for generating the factorial of a number.
 */
class Factorial {

  /**
   * Validates if the passed in number is an integer of zero or greater
   *
   * @param {number} num, the number to validate
   * @throws {Error} error, if not an  integer >= 0
   */
  static validate(num) {
    const isValid = Number.isInteger(num) && num >= 0;
    logger.debug(`isValid for ${num}: ${isValid}`);
    if (!isValid) {
      throw new Error(`${num} is not a valid integer >= 0`);
    }
  }

  /**
   * Uses dynamic programming to calculate the factorial of a number, n!.
   *
   * Algorithm:
   * X(i) = Sequence {1, 2, 3, ..., i}
   * F(i) = Factorial for X(i)
   * F(1) = 1;
   * F(i) = F(i-1) * X(i)
   *
   * @param {number} num, the number to calculate its factorial
   * @returns {number} the factorial
   */
  static calculateFactorial(num) {
    this.validate(num);
    logger.debug(`Calculating the factorial of ${num}`);
    let fim1 = 1;
    let fi = fim1;
    for (let i = 2; i <= num; i++) {
      fi = fim1 * i;
      fim1 = fi;
    }
    return fi;
  }
}

export default Factorial;
