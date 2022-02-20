const myArgs = process.argv.slice(2);

const alarmClock = () => {
for (const arg of myArgs) {
  // arg is a string 
  time = Number(arg * 1000);

  if (time < 0 || isNaN(time)) {
    continue;
  }

  setTimeout(() => {
    console.log('Beep!' + '\x07');
  }, time);
}
}

alarmClock();
