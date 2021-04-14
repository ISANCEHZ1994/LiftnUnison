import mongoose from 'mongoose';
import { UserSchema } from '../Models/User';

const User = mongoose.model('User', UserSchema); 

export const addNewUser = (req, res) => {
    let newUser = new User(req.body) 
    newUser.save( (err, User) => { 
        if(err){
            res.send(err);
        }
        res.json(User);
     });
};

export const getUsers = (req, res) => {
    User.find( {}, (err, User) => { 
        if(err){
            res.send(err);
        }
        res.json(User);
     });
};

export const getUserWithId = (req, res) => {
    User.findById(req.params.UserId, (err, User) => {   
        if(err){
            res.send(err, 'we have a problem');
        }
        res.json(User);
     });
};

export const updateUser = (req, res) => {
    User.findOneAndUpdate( {_id: req.params.UserId}, req.body, {new: true}, (err, User) => { // first we find the id that we want to update then (req.body)
         // we pass what we have as data in our body - I believe it means that all other data will be the same except for the data that is getting updating
         // the reason we put { new: true } is so that our updated player gets displayed and not the previous one
        if(err){
            res.send(err);
        }     
        res.json(User);
     });
};

export const deleteUser = (req, res) => {
    User.remove({_id: req.params.UserId}, (err, User) => {   
        if(err){
            res.send(err);
        }
        res.json({ message: 'Successfully deleted User!' });
     });
};