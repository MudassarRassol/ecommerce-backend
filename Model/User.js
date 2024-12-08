import mongoose from 'mongoose';

const createuser = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true, // Automatically convert emails to lowercase
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true, // Automatically convert emails to lowercase
        trim: true
    },
    password: {
        type: String,
        required: true,
        lowercase: true, // Automatically convert emails to lowercase
        trim: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    productstatus : {
        type: String,
        enum: [' in stock ', 'out of stock '],
        default: 'in stock'
    },
    Profilephoto:{
        type: String,
        default: 'https://static.vecteezy.com/system/resources/previews/045/944/199/large_2x/male-default-placeholder-avatar-profile-gray-picture-isolated-on-background-man-silhouette-picture-for-user-profile-in-social-media-forum-chat-greyscale-illustration-vector.jpg',
    }
},{timestamps : true})

const usermodel = mongoose.model('User', createuser);

export default usermodel;