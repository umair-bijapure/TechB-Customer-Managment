const User = require('..//adapters/customers');


async function registerCustomer(req, res) {
    console.log(req.body,"is it hereeee for user signup")
    try{
        let body = req.body;
        let username = body['name'];
       

        let doesUsernameExist = await Auth.findOne({_id: username});
        if(doesUsernameExist){
            return res.status(403).json({
                "message": "Username already exists!"
            });
        }
        body['_id'] = body['username'];
        const newAuth = await Auth.create({_id: username, password, role: "user"})
        const newUser = await User.create(body);
        const token = jwt.sign({
            username, role: 'user', profile: newUser
        }, JWT_SECRET);
        return res.status(201).json({
            "message": "Successfully Signed Up!",
            token
        });
    }catch(e) {
        console.log(e)
        return res.status(500).json({
            message: "Some Error Occurred!"
        });
    }
}
async function getallCustomer(req, res) {
    console.log("is it hereeee get all users")
    try{
        const allUsers = await User.find({});
        return res.json(allUsers);
    }
    catch {
        return res.status(500).json({
            message: "Some Error Occurred!"
        });
    }

}

async function getCustomer(req, res) {
    console.log("is it hereeee get user")
    try{
        const theUser = await User.findOne({_id: req.params.username});
        if(theUser){
            return res.json(theUser);
        }
        return res.status(404).json({
            messsage: "User does not exist"
        })
    }
    catch {
        return res.status(500).json({
            message: "Some Error Occurred!"
        });
    }

}

async function updateCustomer(req, res) {
    console.log("is it hereeee update");
    try{
        const body = req.body;
        const theUser = await User.findOne({_id: req.params.username});
        if(theUser){
            const updateUser = await User.findOneAndUpdate({_id: req.params.username}, body);
            // TODO: Add a Token Here
            return res.status(201).json({
                message: "Updated Successfully!"
            })
        }
        return res.status(404).json({
            messsage: "User does not exist"
        })
    }
    catch {
        return res.status(500).json({
            message: "Some Error Occurred!"
        });
    }
}




module.exports = { registerCustomer,getCustomer,getallCustomer,updateCustomer};