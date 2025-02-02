const { json } = require("express");
const Person=require("../model/person");
const controller={
    findAndRedAll:async(req,res)=>{
        try{
            const persons= await Person.find();
            res.status(200).json(persons);
        }
        catch(err){
            res.status(500).json({message:"server error",error:err});
        }
    },
    createPerson:async(req,res)=>{
        try{
            const person=await Person.create(req.body);
            res.status(201).json(person);
        }
        catch(err){
            res.status(500).json({message:"server error when creating",error:err});
        }
    },
    updatePerson:async(req,res)=>{
        try{
            const person=await Person.findByIdAndUpdate({_id:req.params.id},req.body,{new:true});
            if (!person) return res.status(504).json({message:"person not found"});
            res.status(200).json(person)
        }
        catch(err){
            res.status(500).json({message:"server error",error:err});
        }
    },
    deletePerson:async(req,res)=>{
        try{
const person=await Person.findByIdAndDelete(req.params.id);
if (!person) return res.status(504).json({message:"person not found"});
            res.status(200).json(person)
        }
        catch(err){
            res.status(500).json({message:"server error",error:err});
        }
    }
}
module.exports=controller;