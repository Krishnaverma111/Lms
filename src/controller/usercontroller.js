const mongoose = require("mongoose")

exports.createuser = (req, res) => {
    const data = req.body;
    console.log(data); 

    return res.status(200).json({msg: "Data created successfully",data: data});
};






