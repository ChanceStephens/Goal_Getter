// const mongoose = require('mongoose');
// const Schema = mongoose.Schema            

// const paceTrackerSchema = new Schema({
//     startDate: {
//         type: String,
//     },
//     finishDate: {
//         type: String,
//     },
//     totalPointsTarget: {
//         type: Number,
//     },
//     standupRecord: [
//         {
//             type: Schema.Types.Mixed,
//             ref: 'DailyStandup'
//         }
//     ],
//     userId: {
//         type: Schema.Types.ObjectId,
//         ref: 'User',
//     }

// })
// module.exports = mongoose.model('PaceTracker', paceTrackerSchema);     


const mongoose = require('mongoose');
const Schema = mongoose.Schema            

const paceTrackerSchema = new Schema({
    startDate: {//This one
        type: String,
    },
    finishDate: {//This one
        type: String,
    },
    totalPointsTarget: {
        type: Number,
    },
    // dailyPointsTarget: {//math on front end
    //     type: Number,
    // },
    standupRecord: [
        {
            type: Schema.Types.Mixed,
            ref: 'DailyStandup'
        }
    ],
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
})
module.exports = mongoose.model('PaceTracker', paceTrackerSchema);              