import mongoose from "mongoose";

const connectToDatabase = async (MONGODB_URI: string): Promise<void> => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI || "", {
      // @ts-expect-error
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("MongoDB connection failed");
  }
};

export default connectToDatabase;
