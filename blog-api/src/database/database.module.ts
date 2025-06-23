import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/blog', {
      onConnectionCreate: (connection) => {
        connection.on('connected', () => {
          console.log('✅ MongoDB connected');
        });
        connection.on('disconnected', () => {
          console.log('❌ MongoDB disconnected');
        });
        connection.on('error', (error) => {
          console.error('⚠️ MongoDB connection error:', error);
        });
        connection.on('reconnected', () => {
          console.log('🔄 MongoDB reconnected');
        });
        return connection;
      },
    }),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
