/* eslint-env mocha */
import chai from 'chai';
import SimpleStringAlgs from '../../src/strings/SimpleStringAlgs';

const assert = chai.assert;

describe('SimpleStringAlgs', () => {
  describe('SimpleStringAlgs.reverseWithBuiltIns', () => {
    it('Reverses an even length string \'jeopardy\'', () => {
      assert.strictEqual(SimpleStringAlgs.reverseWithBuiltIns('jeopardy'), 'ydrapoej');
    });
    it('Reverses an odd length string \'steve\'', () => {
      assert.strictEqual(SimpleStringAlgs.reverseWithBuiltIns('steve'), 'evets');
    });
    it('Reverses a string having a cap letter \'Frank\'', () => {
      assert.strictEqual(SimpleStringAlgs.reverseWithBuiltIns('Frank'), 'knarF');
    });
    it('Reverses a string having all cap letters \'FUBAR\'', () => {
      assert.strictEqual(SimpleStringAlgs.reverseWithBuiltIns('FUBAR'), 'RABUF');
    });
    it('Reverses a string having one letter \'A\'', () => {
      assert.strictEqual(SimpleStringAlgs.reverseWithBuiltIns('A'), 'A');
    });
    it('Reverses empty string \'\'', () => {
      assert.strictEqual(SimpleStringAlgs.reverseWithBuiltIns(''), '');
    });
    it('Throws an error on invalid input {foo: \'bar\'}', () => {
      const err = 'Input [object Object] was not a string primitive or String object.';
      assert.throws(() => SimpleStringAlgs.reverseWithBuiltIns({
        foo: 'bar'
      }), err);
    });
  });
  describe('SimpleStringAlgs.reverse', () => {
    it('Reverses an even length string \'jeopardy\'', () => {
      assert.strictEqual(SimpleStringAlgs.reverse('jeopardy'), 'ydrapoej');
    });
    it('Reverses an odd length string \'steve\'', () => {
      assert.strictEqual(SimpleStringAlgs.reverse('steve'), 'evets');
    });
    it('Reverses a string having a cap letter \'Frank\'', () => {
      assert.strictEqual(SimpleStringAlgs.reverse('Frank'), 'knarF');
    });
    it('Reverses a string having all cap letters \'FUBAR\'', () => {
      assert.strictEqual(SimpleStringAlgs.reverse('FUBAR'), 'RABUF');
    });
    it('Reverses a string having one letter \'A\'', () => {
      assert.strictEqual(SimpleStringAlgs.reverse('A'), 'A');
    });
    it('Reverses empty string \'\'', () => {
      assert.strictEqual(SimpleStringAlgs.reverse(''), '');
    });
    it('Throws an error on invalid input {foo: \'bar\'}', () => {
      const err = 'Input [object Object] was not a string primitive or String object.';
      assert.throws(() => SimpleStringAlgs.reverse({
        foo: 'bar'
      }), err);
    });
  });
  describe('SimpleStringAlgs.isPalindrome', () => {
    it('Determines single letter word is palindrome \'a\'', () => {
      assert.isTrue(SimpleStringAlgs.isPalindrome('a'));
    });
    it('Determines two letter word is palindrome \'aa\'', () => {
      assert.isTrue(SimpleStringAlgs.isPalindrome('aa'));
    });
    it('Determines two letter word is not palindrome \'ab\'', () => {
      assert.isFalse(SimpleStringAlgs.isPalindrome('ab'));
    });
    it('Determines three letter word is palindrome \'aba\'', () => {
      assert.isTrue(SimpleStringAlgs.isPalindrome('aba'));
    });
    it('Determines three letter word is not palindrome \'bba\'', () => {
      assert.isFalse(SimpleStringAlgs.isPalindrome('bba'));
    });
    it('Determines four letter word is not palindrome \'nope\'', () => {
      assert.isFalse(SimpleStringAlgs.isPalindrome('nope'));
    });
    it('Determines empty string is palindrome \'\'', () => {
      assert.isTrue(SimpleStringAlgs.isPalindrome(''));
    });
    it('Determines \'A man, A plan, A canal, Panama\' is palindrome \'\'', () => {
      assert.isTrue(SimpleStringAlgs.isPalindrome('A man, A plan, A canal, Panama'));
    });
    it('Throws an error on invalid input {foo: \'bar\'}', () => {
      const str = {
        foo: 'bar'
      };
      const err = 'Input [object Object] was not a string primitive or String object.';
      assert.throws(() => SimpleStringAlgs.isPalindrome(str), err);
    });
  });
});
