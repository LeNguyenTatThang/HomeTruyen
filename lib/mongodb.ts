import mongoose from 'mongoose';

const connection: { isConnected?: boolean; db?: mongoose.Mongoose } = {};

async function connectToDatabase() {
    if (connection.isConnected) {
        console.log('Already connected to the database.');
        return connection.db;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI as string, {
            // Tùy chọn này không còn cần thiết trong các phiên bản hiện tại của Mongoose
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });

        connection.isConnected = db.connections[0].readyState === 1; // 1 indicates connected
        connection.db = db;

        console.log('Database connection established.');
        return connection.db;
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
}

export default connectToDatabase;
