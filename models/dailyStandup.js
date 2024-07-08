// const mongoose = require('mongoose')
// const Schema = mongoose.Schema

// const dailyStandupSchema = new Schema ({
//     date: {
//         type: Date,
//         required: true,
//         default: Date.now
//     },
//     pointsReported: {
//         type: Number,
//         required: true, 
//     },
//     userId: {
//         type: Schema.Types.ObjectId, 
//         ref: 'User',
//     }
// })

// module.exports = mongoose.model('DailyStandup', dailyStandupSchema)


const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dailyStandupSchema = new Schema ({
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    pointsReported: {
        type: Number,
        required: true, 
    },
    userId: {
        type: Schema.Types.ObjectId, 
        ref: 'User',
    }
})

module.exports = mongoose.model('DailyStandup', dailyStandupSchema)