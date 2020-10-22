# Instructions

Create a function that invokes `func` with arguments reversed.

```js
var flipped = flipArgs(function() {
  console.log(arguments);
});
 
flipped('a', 'b', 'c', 'd');
// => ['d', 'c', 'b', 'a']
```

# Requirements

### **What are some good real-life use cases for such a function?**

- While calculating mathematical operations such left to right or right to left , In that case flipping of arguments useful
  ex- const foo = (x,y)=> x/y or const foo = (x,y)=> y/x

### **What test cases can you add to the test file?**

*Add the relevant test-cases in the test file*


# Restrictions
- Don't use any libraries