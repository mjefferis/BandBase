
// const bandsController = require("../../controllers/bandsController");
const express = require('express')
const router = require("express").Router();
const User = require('../../models/band')
const passport = require('../../passport')
const db = require("../../models");


// does not rely on bandsController, needs to handle the validation which involves passing it req and res, so I 
// updated the mongoose model in here. 
router.put('/:id', (req,res) => {
    console.log("yeah");
    if (req.user.id === req.params.id) {
        db.Band
        .findOneAndUpdate({ _id: req.params.id }, req.body, {new: true})
        .then(dbModel => 
            {
                return res.json(dbModel);
            })
        .catch(err => res.status(422).json(err));
    } else {
        res.status(401).json({});
        console.log("it does not work");
    }
  })
  
// // this route is just used to get the user basic info
// router.get('/user', (req, res, next) => {
// 	console.log('===== user!!======')
// 	console.log(req.user)
// 	if (req.user) {
// 		return res.json({ user: req.user })
// 	} else {
// 		return res.json({ user: null })
// 	}
// })



module.exports = router;
