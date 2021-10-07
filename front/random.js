const word = "i love u till the and of the life";
let warray = word.toLowerCase().split(" ");
console.log(warray);
let newArray = [];
for (i = 0; i < warray.length; i++) {
  if (
    warray[i].substr(0, 1) === "a" ||
    warray[i].substr(0, 1) === "e" ||
    warray[i].substr(0, 1) === "i"
  ) {
    newArray.push(warray[i]);
  }
  const baba = "ssstts ddd";
}
console.log(newArray);

// var text = "";
// var arr = "Java Script Object Notation".split(" ");
// for (i = 0; i < arr.length; i++) {
//   text += arr[i].substr(0, 1);
// }
// console.log(text);
