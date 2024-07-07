const generateButton = document.getElementById('generate');
const sequenceDiv = document.getElementById('sequence');
const inputField = document.getElementById('n');

generateButton.addEventListener('click', () => {
  const n = parseInt(inputField.value);
  if (n <= 0) {
    alert('Please enter a positive integer');
    return;
  }
  const sequence = fibonacci(n);
  displaySequence(sequence);
});

function fibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

function displaySequence(sequence) {
  sequenceDiv.innerHTML = '';
  sequence.forEach((num, index) => {
    const span = document.createElement('span');
    span.textContent = num;
    if (index < sequence.length - 1) {
      span.textContent += ', ';
    }
    sequenceDiv.appendChild(span);
  });
}