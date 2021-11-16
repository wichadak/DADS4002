// Source: https://mongoosejs.com/docs/index.html
// kitten-mongoose.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/kitten', {useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!

  // Define schema
  const kittySchema = new mongoose.Schema({
    name: String
  });
  
  // NOTE: methods must be added to the schema before compiling it with mongoose.model()
  kittySchema.methods.speak = function () {
    const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
    console.log(greeting);
  } 

  // Compile schema into a model 
  // A model is a class with which we construct documents. 
  // Here, each document will be a kitten with properties and behaviors as declared in our schema. 
  const Kitten = mongoose.model('Kitten', kittySchema);
  
  // Let's create a kitten document
  console.log("\n=== Create the first kitten \"Silence\"");
  const silence = new Kitten({ name: 'Silence' });
  console.log(silence.name); // 'Silence'

  // Kittens can meow, so let's take a look at how to add "speak" functionality to our documents:
  console.log("\n=== Create the second kitten \"fluffy\" with also adding behavior");
  const fluffy = new Kitten({ name: 'fluffy' });
  fluffy.speak(); // "Meow name is fluffy"

  // Save the kitten to the db
  /*
  console.log("\n=== Save the kitten fluffy to the kitten db");
  fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
  });

  // Display all the kittens we have seen
  console.log("=== Display all the kitten we have seen!");
  Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  })

  // Search all documents with the name property that begins with "fluff" and return the results as an array of kittens
  console.log("\n=== Search all documents with the name property that begins with \"fluff\"");
  Kitten.find({ name: /^fluff/ });

  */
});
