var isPalindrome = function(x) {
    var reverse = 0; // set to zero
    var copy = x; // copy the input eg. 1141

    while (copy > 0) { // while our copy is positive (negative numbers cannot be palindromes)
      const digit = copy % 10; //  i=1 ==> 1141 % 10 = 1 |i=2 ==> 114 % 10 = 4 | i=3 ==> 11 % 10 = 1| i=4  ==> 1 % 10 = 1
      reverse = reverse * 10 + digit; //  i=1 ==> 0 * 10 + 1 =1| i=2 ==> 1 * 10 + 4 = 14| i=3 ==> 14 * 10 + 1 = 141 | i=4 ==> 141 * 10 + 1 = 1411
      copy = ~~(copy / 10); //Math.floor(copy / 10) |/|/ i=1 ==>  1141 / 10 (rounded down) = 114 |i=2  ==> 114/10 = 11| i=3 ==> 11/10  = 1| i=4 ==> 1/10 = 0 - break while loop
    }

    return reverse == x; // is 1411 == 1141? ==> false
};
