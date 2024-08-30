const express = require('express');
const router = express.Router();
const{Mandir} = require('../models/Mandirs');
const{Users} = require('../models/Users');


module.exports = {

    //Add Mandirs
    addMandir : async (req, res) =>{
        Mandir.find({name: req.body.name}).exec().then((mandir) => {
            if(mandir.length >=1){
                return res.status(401).json({
                    message: "Name already exists",
                    data: undefined
                })
            }else{
                const mandir = new Mandir({
                    name: req.body.name,
                    description: req.body.description,
                    image: req.body.image,
                    location: req.body.location,
                    aarti_time: req.body.aarti_time,
                    video_id : 'https://www.youtube.com/embed/'+req.body.video_id+'?rel=0&autoplay=0&controls=1&showinfo=0&fullscreen=1',
                    offline_video: 'https://www.youtube.com/embed/'+req.body.offline_video+'?rel=0&autoplay=0&controls=1&showinfo=0&fullscreen=1',
                    status: req.body.status,
                });
                mandir.save().then(() => {
                    res.send({
                        message : "Mandir Added Successfully"
                    });
                }).catch((e) => {
                    res.send(e);
                })
            }
        })
    },

    //List Of All Mandirs
    ListofMandirs : async (req, res) => {
        Mandir.find()
        .then(result => {
          res.status(200).json({
            mandir:result
          })
        })
        .catch(err=>{
          console.log(err);
          res.status(500).json({
            error:err
          })
        })
    },

    //Details of a particular Mandir
    mandirDetails:async(req,res)=>{
        Mandir.findOne({name:req.params.id})
        .then(result => {
          res.status(200).json({
            mandir:result
          })
        })
        .catch(err=>{
          console.log(err);
          res.status(500).json({
            error:err
          })
        })
    },

    //Update Manidr
    updateMandir : async (req, res) => {
        Mandir.findOneAndUpdate({name:req.params.id},{
          $set:{
            name: req.body.name,
            description: req.body.description,
            image: [req.body.image],
            location: req.body.location,
            aarti_time: req.body.aarti_time,
            video_id : req.body.video_id
          }
        })
        .then(result=>{
          res.status(200).json({
            updated_status:{
                message : "Mandir updated successfully"
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

    //Update Manidr
    updateStatus : async (req, res) => {
        Mandir.findOneAndUpdate({name:req.params.id},{
          $set:{
            video_id : req.body.video_id,
            status:req.body.status
          }
        })
        .then(result=>{
          res.status(200).json({
            updated_status:{
                message : "Mandir Status updated successfully"
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

    //Delete Mandir
    deleteMandir : async(req,res)=>{
        Mandir.findOneAndDelete({name:req.body.id})
        .then(result => {
          res.status(200).json({
            updated_status:{
                message : "Mandir Deleted Successfully"
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

    //search on the basis of a keyword
    search:async (req, res) => {
      const keyword = req.body.keyword;
    
      try {
        const users = await Mandir.find({ name: { $regex: keyword, $options: 'i' } });
        res.json(users);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
      }
    },

    random: async (req, res) => {
      try {
        // Get the total number of users in the database
        const count = await Mandir.countDocuments();
        // Generate a random index based on the count
        const randomIndex = Math.floor(Math.random() * count);
        // Find a user at the random index
        const randomUser = await Mandir.findOne().skip(randomIndex);
        res.json(randomUser);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
      }
    },

    //get unsubscribed mandir of a particular user
    unsubscribed:async(req,res)=>{
      try {
        const mobile = req.params.mobile;
    
        // Fetch the user's subscriptions
        const user = await Users.find({mobile});
    
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
        // Fetch mandirs from name the user is not subscribed to
        const unsubscribedPosts = await Mandir.find({ name: { $nin: user[0].subscribe } });
    
        res.json(unsubscribedPosts);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      }

}
}