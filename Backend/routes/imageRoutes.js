const cloudinary = require('cloudinary');
const router = require('express').Router();
require('dotenv').config();

cloudinary.config({
    cloud_name: "di2fk8fx1",
    api_key: "881569533778676",
    api_secret: "immGAboPjqyBS7yAomh4toyCItg"
})

router.delete('/:public_id', async (req, res) => {
    const { public_id } = req.params;
    try {
        await cloudinary.uploader.destroy(public_id);
        res.status(200).send();
    } catch (e) {
        res.status(400).send(e.message)
    }
})

module.exports = router;