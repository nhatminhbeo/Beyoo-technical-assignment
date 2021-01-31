var mongoose = require('./database');
var Schema = mongoose.Schema;

// Schema: Users
var UserSchema = new Schema({

	// Login info
	username: { $type: String, index: { unique: true, sparse: true } },
	password: String,

	// Basic info
	fullname: String,
	birthday: String

}, { typeKey: '$type', collection: 'User'});

module.exports = mongoose.model('Users', UserSchema);
module.exports.schema = UserSchema;
