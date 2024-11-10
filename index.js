/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import qr from "qr-image";
import fs from "fs";
import inquirer from 'inquirer';

inquirer
  .prompt([
    {
        message: "Link",
        name :"URL"
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url=answers.URL;
    var qr_svg = qr.image("https://zaveriadi7.github.io/hello/", { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("error");
    } else {
      // Something else went wrong
      console.log("eh");
    }
  });