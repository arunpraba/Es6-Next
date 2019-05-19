/*
    Arrow Function Practice
*/

// converting Node list into Array
const items = Array.from(document.querySelectorAll('[data-time]'));

const filtered = items
  .filter(item => item.textContent.includes('Flex'))
  .map(item => item.dataset.time)
  .map(timeCode => {
    const parts = timeCode.split(':').map(part => parseFloat(part));
    return parts[0] * 60 + parts[1]; //indivual items will be converted to time
  })
  .reduce((runningTotal, seconds) => runningTotal + seconds, 0);

console.log(`Total running seconds is ${filtered}`);
