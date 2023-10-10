const jwt = require("jsonwebtoken");

async function generatetoken(req, res, next) {
    try {
        let token = jwt.sign(
            { "user": req.query.username },
            "pallvijwtsign",
            { expiresIn: "3h" }
        );
        req.token1 = token
        next()
    } catch (e) {
        res.status(500).json({ "Message": "Error occurred while creating token" })
    }
}

async function verifytoken(req, res, next) {
    try {
        if (!req.headers.token) throw "Token is required in header"
        let decodetoken = jwt.verify(req.headers.token, "pallvijwtsign")

        req.decodeval = decodetoken.user
        next()
    } catch (e) {
        res.status(500).json({ "Message": e })
    }
    // res.status(200).json({success:true, data:{userId:decodedToken.userId,
    //  email:decodedToken.email}); 
}

module.exports = { generatetoken, verifytoken }