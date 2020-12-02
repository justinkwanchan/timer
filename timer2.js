// W02 D2 - Interactive Timer
// Instead of receiving all the timers ahead of time via process.argv, let's listen for user input and set timers "on demand".


const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'b') {
    console.log('.');
  }
  if (key >= 1 && key <= 9) {
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => {
      console.log('.');
    }, Number(key) * 1000);
  }
});

console.log('after callback');