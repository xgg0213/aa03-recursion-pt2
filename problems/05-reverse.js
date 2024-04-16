/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/


function reverse(str) {
  // Your code here 
  if (str.length===0) return ''
  let arr = str.split('');
  arr.pop()
  let newStr = arr.join('')
  return str[str.length-1] + reverse(newStr)
}

// console.log('house'.split('').pop())
console.log(reverse('house'));

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
