const express = require('express');
const router = express.Router();
const { Subscribe } = require('../models/Subscribe');


module.exports = {

    //Add Subscribe
    addSubscribe : async (req, res) =>{
                const subscribe = new Subscribe({
                    mobile: req.body.mobile,
                    name: req.body.name,
                    aarti_time: req.body.aarti_time,
                    image: req.body.image
                });
                subscribe.save().then(() => {
                    res.send({
                        message : "Subscribed Successfully"
                    });
                }).catch((e) => {
                    res.send(e);
                })
            },

    //List Of All Subscibes
    ListofSubscribe : async (req, res) => {
        Subscribe.find()
        .then(result => {
          res.status(200).json({
            subscribe:result
          })
        })
        .catch(err=>{
          console.log(err);
          res.status(500).json({
            error:err
          })
        })
    },

    //Details of a particular Subscriber
    subscribeDetails:async(req,res)=>{
        Subscribe.find({mobile:req.params.id})
        .then(result => {
          res.status(200).json({
            subscribe:result
          })
        })
        .catch(err=>{
          console.log(err);
          res.status(500).json({
            error:err
          })
        })
    },

    //Delete Subscribe
    deleteSubscribe : async(req,res)=>{
        Subscribe.findOneAndDelete({
            mobile:req.params.id,
            name:req.params.name
        })
        .then(result => {
          res.status(200).json({
            updated_status:{
                message : "Unsubscribed Successfully"
            }
          })
        })
        .catch(err=>{
          console.log(err);
          res.status(500).json({
            error:err
          })
        })
    }

}