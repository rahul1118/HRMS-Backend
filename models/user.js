var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
require('mongoose-type-email');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    
    type: {type: String},
    email: {type: mongoose.SchemaTypes.Email, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    dateOfBirth: {type: Date, required: true},
    contactNumber: {type: String, required: true},
    address: {type: String, required: true},
    pancard: {type: String, required: true},
    bloodgroup: {type: String, required: true},
    emergencycontactname: {type: String, required: true},
    emergencycontactnumber: {type: Number, required: true},
    maritalstatus: {type: String, required: true},
    familydetails: {type: String, required: true},
    institutename: {type: String, required: true},
    degree: {type: String, required: true},
    startdate: {type: Number, required: true},
    enddate : {type: Number, required: true},
    companyname: {type: String, required: true},
    designation: {type: String, required: true},
    joiningdate: {type: Number, required: true},
});

UserSchema.methods.encryptPassword = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};
UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model('User', UserSchema);