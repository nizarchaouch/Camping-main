const adminModel = require('./adminModel');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');


const signup = async (req, res) => {
    const { nom, prenom, mail, numero, password } = req.body;


    let existingAdmin;
    try {
        existingAdmin = await adminModel.findOne({ mail: mail });
    } catch (err) {
        console.log(err);
    }
    if (existingAdmin) {
        return res
            .status(400)
            .json({ message: "Admin already exists! Login Instead" });
    }
    const hashedPassword = bcrypt.hashSync(password);
    const Admin = new adminModel({
        nom,
        prenom,
        mail,
        numero,
        role:1,
        password,
        password: hashedPassword,

    });
    try {
        await Admin.save();
    } catch (err) {
        console.log(err);
    }

    return res.status(201).json({ message: Admin });
};

const login = async (req, res) => {
    data = req.body;
    admin = await adminModel.findOne({ mail: data.mail })
    if (!admin) {
        res.status(404).send('mail or password invalid!')
    } else {
        validPass = bcrypt.compareSync(data.password, admin.password)
        if (!validPass) {
            res.status(401).send('mail or password invalid!')
        } else {
            payload = {
                _id: admin._id,
                mail: admin.mail,
                nom: admin.nom
            }
            token = jwt.sign(payload, 'nizar123')

            res.status(200).send({ mytoken: token })
        }
    }

}

module.exports = { login, signup }