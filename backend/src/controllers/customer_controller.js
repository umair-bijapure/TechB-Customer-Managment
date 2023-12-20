const User = require('..//adapters/customers');
var jwt = require('jsonwebtoken');
const JWT_SECRET = "U8sp1ioD6mJjFZwCHpMRhJHvruuH7yC9xvol3Te1dSRqA1EZSplNE0j5zay9JgvZ05eaR1Rmr6PtTLMsGGU6aTBJWCvigsPP0H9a";

console.log("is is comming in contoller")
async function getallCustomer(req, res) {
    console.log("Reached getallCustomer");
    try {
        const allUsers = await User.find({});
        return res.json(allUsers);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Some Error Occurred!"
        });
    }
}

async function registerCustomer(req, res) {
    console.log(req.body, "is it hereeee for user signup");
    try {
        let body = req.body;
        let username = body['name'];
        let doesUsernameExist = await User.findOne({ _id: username });
        if (doesUsernameExist) {
            return res.status(403).json({
                "message": "Username already exists!"
            });
        }
        body['_id'] = username;
        const newUser = await User.create(body);
        const token = jwt.sign({
            username, profile: newUser
        }, JWT_SECRET);

        return res.status(201).json({
            "message": `Successfully Added Customer ${req.body.name}`,
            token
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "Some Error Occurred!"
        });
    }
}



async function getCustomer(req, res) {
    console.log("is it hereeee get user")
    try{
        const theUser = await User.findOne({_id: req.params.name});
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
    console.log("is it here to update");
    try{
        const body = req.body;
        const theUser = await User.findOne({_id: req.params.name});
        if(theUser){
            const updateUser = await User.findOneAndUpdate({_id: req.params.name}, body);
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
async function deleteCustomer(req, res) {
    console.log("is it hereeeennnnnnnnnnnnn delete");
    try {
        const result = await User.findOneAndDelete({ _id:  req.params.name });
        console.log("Delete Result:", result);
    
        if (result) {
            return res.status(200).json({
                message: "Deleted Successfully!"
            });
        } else {
            return res.status(404).json({
                message: "User not found for deletion"
            });
        }
    } catch (error) {
        console.error("Delete Error:", error);
        return res.status(500).json({
            message: "Some Error Occurred during deletion"
        });
    }
}



async function deleteAllCustomers(req, res) {
    console.log("comming to delete all customers");

    try {
        
        await User.deleteMany({});  // Assuming your model is named 'User'

        return res.status(200).json({
            message: "All customers deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting all customers:", error);
        return res.status(500).json({
            message: "Some error occurred",
        });
    }
}






module.exports = { registerCustomer,getCustomer,getallCustomer,updateCustomer,deleteCustomer,deleteAllCustomers};