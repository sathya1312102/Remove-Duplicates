function removeDuplicates() {
    const inputArrayString = document.getElementById('inputArray').value.trim();
    const inputArray = inputArrayString.split(',').map(item => parseInt(item.trim(), 10));
    const uniqueValues = {};
    const result = [];

    for (let i = 0; i < inputArray.length; i++) {
      if (!uniqueValues[inputArray[i]]) {
        uniqueValues[inputArray[i]] = true;
        result.push(inputArray[i]);
      }
    }

    const outputContainer = document.getElementById('output');
    outputContainer.textContent = 'Output: [' + result.join(', ') + ']';
  }