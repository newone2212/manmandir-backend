const express = require('express');
const router = express.Router();
const { Significance } = require('../models/Significance');


module.exports = {

    //Add Significance
    addSignificance : async (req, res) =>{
                const significance = new Significance({
                    name: req.body.name,
                    description: req.body.description,
                    date: req.body.date
                });
                significance.save().then(() => {
                    res.send({
                        message : "Significance Added Successfully"
                    });
                }).catch((e) => {
                    res.send(e);
                })
            },

    //List Of All significance
    ListofSignificance : async (req, res) => {
        Significance.find()
        .then(result => {
          res.status(200).json({
            significance:result
          })
        })
        .catch(err=>{
          console.log(err);
          res.status(500).json({
            error:err
          })
        })
    },

    //Details of a particular significance
    significanceDetails:async(req,res)=>{
        Significance.findOne({date:req.params.id})
        .then(result => {
          res.status(200).json({
            significance:result
          })
        })
        .catch(err=>{
          console.log(err);
          res.status(500).json({
            error:err
          })
        })
    },

    //Update Significance
    updateSignificance : async (req, res) => {
        Significance.findOneAndUpdate({date:req.params.id},{
          $set:{
            description:req.body.significance,
            date : req.body.date
          }
        })
        .then(result=>{
          res.status(200).json({
            updated_status:{
                message : "Significance updated successfully"
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

    //Delete Significance
    deleteSignificance : async(req,res)=>{
        Significance.findOneAndDelete({date:req.body.id})
        .then(result => {
          res.status(200).json({
            updated_status:{
                message : "Significance Deleted Successfully"
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