const express = require('express');
const router = express.Router();
const { History } = require('../models/History');


module.exports = {

    //Add History
    addHistory : async (req, res) =>{
                const history = new History({
                    title: req.body.title,
                    description: req.body.description,
                    date: req.body.date
                });
                history.save().then(() => {
                    res.send({
                        message : "History Added Successfully"
                    });
                }).catch((e) => {
                    res.send(e);
                })
            },

    //List Of All History
    ListofHistory : async (req, res) => {
        History.find()
        .then(result => {
          res.status(200).json({
            history:result
          })
        })
        .catch(err=>{
          console.log(err);
          res.status(500).json({
            error:err
          })
        })
    },

    //Details of a particular history
    historyDetails:async(req,res)=>{
        try {
            // Get the current date
            const currentDate = new Date();
            // Set the time to the start of the day (midnight)
            currentDate.setHours(0, 0, 0, 0);
            // Get data for the current date
            const data = await History.find({ date: currentDate });
            res.status(200).json({
                history:data
              })
          } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Server error' });
          }
    }
}