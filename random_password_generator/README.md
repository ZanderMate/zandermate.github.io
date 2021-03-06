Random-Password-Generator

This is a password generator used to create a random assortment of letter (both upper and lower cases), numbers, and special characters.

The UI should look like this:

![image](https://user-images.githubusercontent.com/54219054/66240524-7dcad700-e6c2-11e9-9cb6-744a47ecaacb.png)

Upon pressing the "Generate a Password" button, it will start off by asking about the length of the password and will only accept a number between 8 and 128, repeating the question until receiving a valid response. Then it will ask a series of yes/no questions about the type of characters being used in the password criteria: numbers, lowercase letters, uppercase letters, and finally, special characters. If all the answers are no, the function will ask the user to pick at least one of the character types, repeating the series of questions until at least one is chosen.

![image](https://user-images.githubusercontent.com/54219054/66256596-15790580-e755-11e9-9715-e941a104e197.png)

Upon receiving the criteria, it will then go through each character type that have been set up in an array using random numbers to correspond with the index of the array, return the contents of the array as part of a string. This will then repeat the loop until the length of the string equals the number of characters inputed during the first question. Then it will input the completed password string into the textarea.

![image](https://user-images.githubusercontent.com/54219054/66256628-74d71580-e755-11e9-8043-0b3a90818c7d.png)

Upon pushing the "Copy to Clipboard" button, the textarea contents will be copied and from there can be transferred to any other program or website inputs.

![image](https://user-images.githubusercontent.com/54219054/66256653-a7810e00-e755-11e9-80bc-6566a38d11fc.png)
