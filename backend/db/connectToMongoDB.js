import mongoose from "mongoose";

const connectToMongoDB = async () => {
	 mongoose.connect("mongodb+srv://ahmedosamana222:Mrx7H9QYETuWUigs@cluster0.flvsxht.mongodb.net/?retryWrites=true&w=majority");
		console.log("Connected to MongoDB");
	
};

export default connectToMongoDB;
