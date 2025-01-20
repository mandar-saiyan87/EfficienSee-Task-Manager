import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    emailId: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    isGoogleUser: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: function () {
        return !this.isGoogleUser;
      },
      select: false,
    },
  },
  { timestamps: true }
);

const Users = mongoose.model("Users", UserSchema);
export default Users;
