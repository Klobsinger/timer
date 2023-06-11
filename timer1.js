const alarms = process.argv.slice(2).map(Number);

const alarm = function() {
  let validDings = 0; // create a var to have numbers added for valid alarms for the final message
  for (let i = 0; i < alarms.length; i ++) {
    if (alarms[i] === 1) { // an if statement for single second
      setTimeout(() => {
        process.stdout.write(`ding ${alarms[i]} second has passed \n`);
        validDings ++; // every valid alarm increase the ding count
      },alarms[i] * 1000);
    } else if (alarms[i] < 0 || isNaN(alarms[i])) { // making negative and non numbers not count
      continue;
    } else {
      setTimeout(() => {
        process.stdout.write(`ding ${alarms[i]} seconds has passed \n`); // the setTimeout for all numbers excluding 1
        validDings ++; // once again increasing the ding count
      },alarms[i] * 1000);
    }
  }
  setTimeout(() => {
    process.stdout.write(`alarm over after ${validDings} dings \n`);// i tried using alarms.length previously but would run into issues
  }, (alarms.length + 1) * 1000);                                    // when non numbers were added they were still counted as dings
};
alarm();
// the current code still has an issue where the final alarm over message will still count non valid inputs
//and delay the final alarm message longer then needed if they are present. I could not think of a good way of fixing this
// I tried making valid dings an array which new values got pushed for each valid alarm then do validDings.length for the final message
// but that didnt seem to work :(