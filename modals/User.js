const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {type: String, require: true},
    email: {type: String, require: true, unique: true },
    password: {type: String, require: true},
    profile: {type: String, default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrdP5GZ_yXosqFVKne1PXBeeb7weSOMV4Rmw&usqp=CAU"},
}, {timestamps: true});

module.exports = mongoose.model("User", UserSchema)

