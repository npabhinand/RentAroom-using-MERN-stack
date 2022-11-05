
const userSchema = new Schema({
    usertype: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: SVGStringList,
    content: {
        type: String,
        required: true,
        minlength: 8
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    place: {
        type: String,
        required: true,
    },
 });
  

 