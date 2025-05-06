import express from 'express';
import Model from '../models/model.js'

const router = express.Router();

router.post('/leads', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    });

    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch(err){
        res.status(400).json({
            message: err.message
        });
    }

});

router.get('/leads', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data);
    } catch(err){
        res.status(500).json({
            message: err.message
        });
    }
});

router.get('/leads/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data);
    } catch(err){
        res.status(500).json({
            message: err.message
        });
    }
});

router.patch('/leads/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        );

        res.send(result);
    } catch(err){
        res.status(400).json({
            message: err.message
        })
    }
});

router.delete('/leads/:_id', async (req, res) => {
    try{
        const _id = req.params._id;
        await Model.findByIdAndDelete(_id);
        res.status(200).json({message: 'Excluído com sucesso'})
    } catch(err){
        res.status(400).json({
            message: err.message
        });

    }
});

export default router;