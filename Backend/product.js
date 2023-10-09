const rp =require("request-promise")

async function getproduct(req,res){
    try{
        var options = {
            uri: 'https://dummyjson.com/products',
            json: true
        };
         
        rp(options)
            .then(function (repos) {
                res.status(200).json({ "Success": true, "Data": repos }) 
            })
            .catch(function (err) {
                res.status(400).json({ "Success": true, "Message": err }) 
            });
    }catch(e){
        console.log(e)
        res.status(500).json({ "Success": false, "Error": e })
    }
}

module.exports={
    getproduct
}