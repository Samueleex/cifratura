let normalAlphabet = 'abcdefghijklmnopqrstuvwxyz';
let shuffledAlphabet = localStorage.getItem('shuffledAlphabet');

if (!shuffledAlphabet) {
  shuffledAlphabet = randomizeAlphabet();
  localStorage.setItem('shuffledAlphabet', shuffledAlphabet);
}

function randomizeAlphabet() {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let shuffledAlphabet = alphabet.split('').sort(() => Math.random() - 0.5).join('');
  return shuffledAlphabet;
}

function encrypt() {
  let plaintext = document.getElementById('text').value.toLowerCase();
  let ciphertext = '';

  for (let i = 0; i < plaintext.length; i++) {
    let char = plaintext[i];
    let index = normalAlphabet.indexOf(char);
    if (index !== -1) {
      ciphertext += shuffledAlphabet[index];
    } else {
      ciphertext += char;
    }
  }

  document.getElementById('result').value = ciphertext;
}

function decrypt() {
  let ciphertext = document.getElementById('text').value.toLowerCase();
  let decryptedtext = '';

  for (let i = 0; i < ciphertext.length; i++) {
    let char = ciphertext[i];
    let index = shuffledAlphabet.indexOf(char);
    if (index !== -1) {
      decryptedtext += normalAlphabet[index];
    } else {
      decryptedtext += char;
    }
  }

  document.getElementById('result').value = decryptedtext;
}

// mappatura dell'alfabeto
function showMapping() {
  let mapping = '';
  for (let i = 0; i < normalAlphabet.length; i++) {
    mapping += `${normalAlphabet[i]} -> ${shuffledAlphabet[i]}\n`;
  }
  document.getElementById('mapping').value = mapping;
}

showMapping();