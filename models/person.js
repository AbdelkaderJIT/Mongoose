const mongoose = require ("mongoose")
const schema = mongoose.Schema

const personSchema = new schema ({
    name : {
        type: String ,
        required : true
    },
    
    age : {
        type : Number
    },
    favoriteFoods : {
        type : Array,
        of : String
    }
})
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
