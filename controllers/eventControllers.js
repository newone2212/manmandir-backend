const express = require('express');
const router = express.Router();
const{Event} = require('../models/Events');


module.exports = {

    //Add Event
    addEvent : async (req, res) =>{
                const event = new Event({
                    name: req.body.name,
                    image: req.body.image,
                    location: req.body.location,
                    date: req.body.date
                });
                event.save().then(() => {
                    res.send({
                        message : "Event Added Successfully"
                    });
                }).catch((e) => {
                    res.send(e);
                })
            },

    //List Of All events
    ListofEvents : async (req, res) => {
        Event.find()
        .then(result => {
          res.status(200).json({
            event:result
          })
        })
        .catch(err=>{
          console.log(err);
          res.status(500).json({
            error:err
          })
        })
    },

    //Details of a particular event
    eventDetails:async(req,res)=>{
        Event.findOne({name:req.params.id})
        .then(result => {
          res.status(200).json({
            event:result
          })
        })
        .catch(err=>{
          console.log(err);
          res.status(500).json({
            error:err
          })
        })
    },

    //Update Event
    updateEvent : async (req, res) => {
        Event.findOneAndUpdate({name:req.params.id},{
          $set:{
            image: req.body.image,
            location: req.body.location,
            date : req.body.date
          }
        })
        .then(result=>{
          res.status(200).json({
            updated_status:{
                message : "Event updated successfully"
            }
          })
        })
        .catch(err=>{
          console.log(err);
          res.status(500).json({
            error:err
          })
        })
    },

    //Delete Event
    deleteEvent : async(req,res)=>{
        Event.findOneAndDelete({name:req.body.id})
        .then(result => {
          res.status(200).json({
            updated_status:{
                message : "Event Deleted Successfully"
            }
          })
        })
        .catch(err=>{
          console.log(err);
          res.status(500).json({
            error:err
          })
        })
    },

}