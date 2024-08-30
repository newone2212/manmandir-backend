const express = require('express');
const router = express.Router();
const{CalendarEvent} = require('../models/calandarEvents');


module.exports = {

    //Add calender Event
    addEvent : async (req, res) =>{
                const calendarEvent = new CalendarEvent({
                    name: req.body.name,
                    description: req.body.description,
                    date: req.body.date
                });
                calendarEvent.save().then(() => {
                    res.send({
                        message : "Calender Event Added Successfully"
                    });
                }).catch((e) => {
                    res.send(e);
                })
            },

    //List Of All calender events
    ListofEvents : async (req, res) => {
        CalendarEvent.find()
        .then(result => {
          res.status(200).json({
            calendarEvent:result
          })
        })
        .catch(err=>{
          console.log(err);
          res.status(500).json({
            error:err
          })
        })
    },

    //Details of a particular calender event
    eventDetails:async(req,res)=>{
        CalendarEvent.findOne({date:req.params.id})
        .then(result => {
          res.status(200).json({
            calenderEvent:result
          })
        })
        .catch(err=>{
          console.log(err);
          res.status(500).json({
            error:err
          })
        })
    },

    //Update Calender Event
    updateEvent : async (req, res) => {
        CalendarEvent.findOneAndUpdate({_id:req.params.id},{
          $set:{
            name: req.body.image,
            description: req.body.description,
            date : req.body.date
          }
        })
        .then(result=>{
          res.status(200).json({
            updated_status:{
                message : "Calender Event updated successfully"
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
        CalendarEvent.findOneAndDelete({_id:req.body.id})
        .then(result => {
          res.status(200).json({
            updated_status:{
                message : "Calender Event Deleted Successfully"
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