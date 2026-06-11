import mongoose from "mongoose";

async function Connect(uri) {
    try {
        await mongoose.connect(uri);
        console.log(
            `Database Connected ${mongoose.connection.db.databaseName}`
        );
    } catch (error) {
        console.log(error);
    }
}

export default Connect;