const { mongoose } = require('mongoose'); // backend error found!!! Did not have curly brackets!

const userSchema = mongoose.Schema({
    username: { type: String, required: true, },
    hashedPassword: { type: String, required: true, },
});

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.hashedPassword;
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;