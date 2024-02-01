import { connect } from "mongoose";

const connectDB = (url) => {
  return connect(url);
};

export default connectDB;
