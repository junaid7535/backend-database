const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://zunaidkhan1492:junaid@cluster0.y2xncie.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log("Db connected successfully"))
.catch((e) => console.log(e))

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
    isActive : Boolean,
    tags : [String]
});

const User = mongoose.model("User",userSchema);

async function runQuery(){
    try{
        // creating a new document

        const newUser = await User.create({
            name : 'Junaid',
            email : 'junaid@gmail.com',
            age : 22,
            isActive : true,
            tags : ['developer']
        })

        console.log(`Created new user`,newUser); 

        const allUsers = await User.find({});
        console.log(allUsers);
    }
    catch(e){
        console.log("error",e)
    }
    finally{
        await mongoose.connection.close()
    }
}

runQuery()

