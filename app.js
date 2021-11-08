const fs = require('fs');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;



fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);
  const generatePage = require('./src/page-template.js');

  console.log('Portfolio complete! Check out index.html to see the output!');
});