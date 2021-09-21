const sentence = "hello there from lighthouse labs";

const sentArr = sentence.split('');

sentArr.forEach((elem, iter) => {
  setTimeout(() => {
    process.stdout.write(elem + '\n');
  }, 50 * iter);
  
});
