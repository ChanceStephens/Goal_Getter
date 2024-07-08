const express = require('express');
const paceSetterRouter = express.Router();
const PaceSetter = require('../models/pacesetter');
const DailyStandup = require('../models/dailyStandup');

// Get all pace data for the user
paceSetterRouter.get('/', async (req, res, next) => {
    try {
        const trackerData = await PaceSetter.find({ userId: req.auth._id });
        return res.status(200).send(trackerData);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

// Get all standup submissions for the user
paceSetterRouter.get('/standup', async (req, res, next) => {
    try {
        const standups = await DailyStandup.find({ userId: req.auth._id }).sort({ date: 1 });
        res.status(200).send(standups);
    } catch (err) {
        res.status(500).send({ errMsg: err.message });
        return next(err);
    }
});

// Post a new pace tracker entry
paceSetterRouter.post('/', async (req, res, next) => {
    try {
        req.body.userId = req.auth._id;
        const newTrackerData = new PaceSetter(req.body);
        const savedTrackerData = await newTrackerData.save();
        return res.status(201).send(savedTrackerData);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

// Post a new standup submission
paceSetterRouter.put('/standup', async (req, res, next) => {
    try {
        if (!req.auth || !req.auth._id) {
            throw new Error('User ID is missing in request');
        }

        req.body.userId = req.auth._id;
        const newStandup = new DailyStandup(req.body);
        const savedStandup = await newStandup.save();

        const updatedPaceSetter = await PaceSetter.findOneAndUpdate(
            { userId: req.auth._id },
            { $push: { standupRecord: savedStandup } },
            { new: true }
        ).populate('standupRecord');

        if (!updatedPaceSetter) {
            return res.status(404).send({ errMsg: 'PaceSetter document not found for the user' });
        }

        return res.status(201).send({ newStandup: savedStandup, updatedPaceSetter });
    } catch (err) {
        console.error('Error updating PaceSetter:', err.message);
        res.status(500).send({ errMsg: err.message });
        return next(err);
    }
});

// Update standup submission
paceSetterRouter.put('/standup/:id', async (req, res, next) => {
    try {
        const pointsReported = parseFloat(req.body.pointsReported);
        const updatedStandup = await DailyStandup.findOneAndUpdate(
            { _id: req.params.id },
            { pointsReported: pointsReported },
            { new: true }
        );

        const updatedPace = await PaceSetter.findOneAndUpdate(
            { standupRecord: { $elemMatch: { _id: req.params.id } } },
            { $set: { "standupRecord.$": updatedStandup } },
            { new: true }
        ).populate('standupRecord');

        return res.status(200).send(updatedPace);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

// Delete standup submission
paceSetterRouter.delete('/standup/:id', async (req, res, next) => {
    try {
        await DailyStandup.findOneAndDelete({ _id: req.params.id });
        return res.status(204).send();
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

module.exports = paceSetterRouter;
