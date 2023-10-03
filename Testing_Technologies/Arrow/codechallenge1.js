let reverseString = (name) => name.split("").reverse().join("");
console.log(reverseString("John"));
console.log(reverseString("James"));
console.log(reverseString("David"));
console.log(reverseString("Jorge"));
//I had to google this and saw that I had to split the string into an array to reverse it. I followed the website example on the formatting

let reverseArray = (arr) => arr.reverse();
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(reverseArray(["I", "like", "javascript"]));
//at first I tried to emulate the previous code, which did not work. A search on google showed me the "arr.reverse function" and after much swearing and putting the commas and brackets, it finally worked. I also see that the error feature on vsc is not always accurate to how the code is not functioning.

//I really struggled to even know what to do with this. I found the following on chatgpt but I look forward to a detailed explaination from Jorge to see exactly how it works. I can see "how" it works, but creating code like this is way above my current skill level
const mostExpensiveItem = (items) =>
  items.reduce(
    (maxItem, currentItem) =>
      currentItem.price * currentItem.stock > maxItem.price * maxItem.stock
        ? currentItem
        : maxItem,
    items[0]
  );

// Test Data
const items = [
  { item: "irn bru", price: 3.25, stock: 50 },
  { item: "fanta", price: 3.98, stock: 45 },
  { item: "diet coke", price: 4.4, stock: 38 },
  { item: "7up", price: 3.99, stock: 42 },
];

console.log(mostExpensiveItem(items));
