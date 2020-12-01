// W02 D2 - Simple Timer
// Implement an alarm clock / timer which will beep after a specified amount of time has passed.
// The user can specify an unlimited number of alarms using command line arguments.

const alarmArr = process.argv.slice(2);

alarmArr.map(element => Number(element))
        .filter(element => element > 0)
        .forEach((element, index, arr) => {
          setTimeout(() => {
            process.stdout.write('.');
            if (element === Math.max(...arr)) {
              console.log();
            }
          }, element * 1000);
        });