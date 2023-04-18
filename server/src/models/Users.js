import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
   username: { type: String, required: true },
   firstname: { type: String, },
   lastname: { type: String },
   email: { type: String, require: [ true, 'please add your email address' ], unique: true },
   phonenumber: { type: String },
   town: { type: String, require: [ true, 'please add the town' ] },
   street: { type: String },
   estate: { type: String },
   country: { type: String },
   password: { type: String, required: true },
   savedProducts: [ { type: mongoose.Schema.Types.ObjectId, ref: "products" } ],
},
   {
      timestamps: true
   }
);

export const UserModel = mongoose.model("users", UserSchema);
