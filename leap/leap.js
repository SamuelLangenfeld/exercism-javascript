//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//
/*``plain
on every year that is evenly divisible by 4 true
  except every year that is evenly divisible by 100 false
    unless the year is also evenly divisible by 400 true
```
*/

var Year = function(input) {
  this.year = input;
};

Year.prototype.isLeap = function() {
  if (this.year % 4 == 0) {
    if ((this.year % 100 == 0) && (this.year % 400 == 0)) {
      return true;
    } else if (this.year % 100 == 0) {
      return false;
    }
    return true;
  }

  return false;
};

module.exports = Year;
