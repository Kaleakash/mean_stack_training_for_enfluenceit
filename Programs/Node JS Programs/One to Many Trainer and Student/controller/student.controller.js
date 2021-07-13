let Student = require("../model/student.model");

findAll = (req, res) => {
	Student.find()
    .then(trainer => {
        res.send(trainer);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

module.exports= {findAll};