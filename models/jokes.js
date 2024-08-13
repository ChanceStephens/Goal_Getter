// const mongoose = require('mongoose');                                           //✜ MONGOOSE
// const Schema = mongoose.Schema;                                                 //✜ SCHEMA
// const jokesSchema = new Schema({                                                //✜ JOKE SCHEMA
//     joke: { type: String, required: true },                                     //✜ JOKE
// })
// module.exports = mongoose.model('Jokes', jokesSchema);                          

const mongoose = require('mongoose');                                           //✜ MONGOOSE
const Schema = mongoose.Schema;                                                 //✜ SCHEMA
const jokesSchema = new Schema({                                                //✜ JOKE SCHEMA
    joke: { type: String, required: true },                                     //✜ JOKE
})
module.exports = mongoose.model('Jokes', jokesSchema);    