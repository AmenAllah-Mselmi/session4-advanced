const controller=require('../controller/person_controller');
const express=require('express');
const router=express.Router();
router.post('/create',controller.createPerson);
router.get('/all',controller.findAndRedAll);
router.put('/update/:id',controller.updatePerson);
router.delete('/delete/:id',controller.deletePerson);
module.exports=router;