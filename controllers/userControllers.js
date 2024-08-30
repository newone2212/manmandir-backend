const express = require('express');
const router = express.Router();
require("dotenv").config();
const{Users} = require('../models/Users');


module.exports = {

    //Register User
    register : async (req, res) =>{
        Users.find({mobile: req.body.mobile}).exec().then((user) => {
            if(user.length >=1){
                return res.status(401).json({
                    message: "Mobile Number already exists",
                    data: undefined
                })
            }else{
                const user = new Users({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    mobile: req.body.mobile,
                    email_id: req.body.email_id
                });
                user.save().then(() => {
                    res.send({
                        message : "User Registered Successfully"
                    });
                }).catch((e) => {
                    res.send(e);
                })
            }
        })
    },

    //login 
    login : async(req,res)=>{
      Users.findOne({mobile: req.body.mobile}).exec()
      .then((user) => {
          if(!user){
              return res.status(401).json({
                  message: "User not Registered",
                  data: undefined
              })
          }else{
            Users.findOneAndUpdate({mobile:req.body.mobile},{
              mobile:req.body.mobile,
              $set:{
              token : req.body.token
              }
            })
            .then(result=>{
              res.status(200).json({
                updated_status:{
                    message : "user logged in successfully"
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
        })            
        .catch(err=>{
          console.log(err);
          res.status(501).json({
            error:err
          })
        })

    },

    //Profile of a Particular User
    Profile : async (req, res) => {
        Users.findOne({mobile:req.params.id})
        .then(result => {
          res.status(200).json({
            user:result
          })
        })
        .catch(err=>{
          console.log(err);
          res.status(500).json({
            error:err
          })
        })
    },

    //Profile of all User
    allProfile : async (req, res) => {
        Users.find()
        .then(result => {
            res.status(200).json({
            user:result
            })
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
            error:err
            })
        })
    },

    //Update Profile
    updateProfile : async (req, res) => {
        Users.findOneAndUpdate({mobile:req.params.id},{
          $set:{
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            email_id: req.body.email_id,
            image:req.body.image
          }
        })
        .then(result=>{
          res.status(200).json({
            updated_status:{
                message : "user profile updated successfully"
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

    //update subscribe mandirs in user-list
    updateSubscribe:async(req,res)=>{
      Users.findOneAndUpdate({mobile:req.params.id},
        {
          $push:
        {
          subscribe : req.query.subscribe
      }
      })
      .then(result=>{
        res.status(200).json({
          updated_user:{
            message:"subscription updated successfully"
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

    //update unsubscribe mandirs in user-list
    updateUnubscribe:async(req,res)=>{
      Users.findOneAndUpdate({mobile:req.params.id},
        {
          $pull:
        {
          subscribe : req.query.subscribe
      }
      })
      .then(result=>{
        res.status(200).json({
          updated_user:{
            message:"Unsubscription updated successfully"
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