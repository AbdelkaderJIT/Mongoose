
const express = require("express")
const app = express()
const connectDB =require("./config/connectDB")
const port = 5001
const Person = require("./models/person")


connectDB()

app.listen(port,(err) => {
    err?console.log(err): console.log(`server is running on port ${port}`)
    
})

// Tables Creation.

    Person.create([{
        name:"farid",
        age:40,
        favoriteFoods:["loubeya","mhamsa","madfouna"]
    },
    {
        name:"sameh",
        age:26,
        favoriteFoods:["macarona","brika","malsouka"]
    },
    {
        name:"monji",
        age:40,
        favoriteFoods:["lablebi","hargma","khmaj"]
    }
])


Person.find()  // Display of all the data on the database

Person.find({ favoriteFoods: { $in: ['loubeya']} })  // Display of the person who has a specified food


Person.findById({_id:"659b3fb22fafc5a2f6192000"}) // Display of the person with the specified ID 

Person.findByIdAndUpdate({_id:"659b3fb22fafc5a2f6192000"}, {$push: {favoriteFoods:("Houreya")}}, {new:true}) // Find a person by ID then edit the specified food section

Person.findOneAndUpdate({name:"sameh"}, {age:20}) // Set the person's age 20 which is found by name

Person.findOneAndDelete({_id :"659b3fd3bb7fc26032028ce6"})  // Delete the person with the specified ID

Person.deleteMany({ name : 'monji' }) // Delete all the persons with the name monji
  .then(persons => {
    console.log('Persons Deleted are ', persons);
  })
  .catch(error => {
    console.error('Error finding persons:', error);
  });

  var queryChain = function(done) {   // find and sort and limit the documents to 2 then select them and excute the function done
    var foodToSearch = "loubeya";
    Person.find({favoriteFoods:"loubeya"}).sort({name : "desc"}).limit(2).select("-age").exec((err, data) => {
       if(err)
         done(err);
      done(null, data);
    })
  };



  
  