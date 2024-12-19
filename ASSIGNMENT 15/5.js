var userString = prompt("Enter a string to check if it's a palindrome:");

      userString = userString.toLowerCase();

      var isPalindrome = true;

      var length = userString.length;

      for (var i = 0; i < length / 2; i++) {
        if (userString[i] !== userString[length - i - 1]) {
          isPalindrome = false;
          break;
        }
      }

      if (isPalindrome) {
        document.write('The string "' + userString + '" is a Palindrome.');
      } else {
        document.write('The string "' + userString + '" is not a Palindrome.');
      }