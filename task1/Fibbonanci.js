
  function printPattern(n) {
    let middle = Math.ceil(n/2);
    let pattern = "";
  
    for (let i = 1; i <= middle; i++) {
      for (let j = middle; j > i; j--) {
        pattern += " ";
      }
      for (let k = 1; k <= i; k++) {
        if (k === 1) {
          pattern += "1 ";
        } else if (k === 2) {
          pattern += "3 ";
        } else {
          pattern += "A";
        }
      }
      pattern += "\n";
    }
  
    for (let i = middle + 1; i <= n; i++) {
      for (let j = middle; j < i; j++) {
        pattern += " ";
      }
      for (let k = i; k <= n; k++) {
        if (k === i || k === n) {
          pattern += "1";
        } else if (k === i + 1) {
          pattern += "3";
        } else if (k === n - 1) {
          pattern += "A";
        } else {
          pattern += "B";
        }
      }
      pattern += "\n";
    }
  
    console.log(pattern);
  }
  
  printPattern(5);
  