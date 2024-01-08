
const express = require("express")
const app = express()
const connectDB =require("./config/connectDB")
const port = 5001
const Person = require("./models/person")


connectDB()

app.listen(port,(err) => {
    err?console.log(err): console.log(`server is running on port ${port}`)
    
})


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
//.then((el)=> console.log("Person found",el))

Person.find()
.then(persons => {
    console.log('people in da restaurant', persons);
  })
  .catch(error => {
    console.error('Error finding persons:', error);
  });

Person.find({ favoriteFoods: { $in: ['loubeya']} })
  .then(persons => {
    console.log('Persons with specified foods:', persons);
  })
  .catch(error => {
    console.error('Error finding persons:', error);
  });

  
  