import logger from '../util/LogUtil';

/**
 * Class MaxSubArray
 *
 * Exposes static fucntionality for finding the maxium subarray sum through dynamic programming
 */
class MaxSubArray {

  /**
   * Finds the maximum subarray for a given array.  Uses the following dynamic programming
   * algorithm:
   *
   * S(0) = A(0);
   * S(i) = max(S(i-i) + A(i), A(i))
   *
   * @param {number[]} the input array of numbers
   * @returns {number} the maxium subarray sum
   */
  static findMaxSubArray(arr) {
    logger.debug(`Finding max of arr ${arr}`);
    if (!Array.isArray(arr) || arr.length === 0) {
      return null;
    }
    const sum = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
      sum[i] = Math.max(sum[i - 1] + arr[i], arr[i]);
    }
    logger.debug(`Resulting S[i]: ${sum}`);
    const maxSum = Math.max(...sum);
    logger.debug(`Found max sum to be: ${maxSum}`);
    return maxSum;
  }
}

export default MaxSubArray;
