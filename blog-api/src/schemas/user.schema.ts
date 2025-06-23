import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ required: true, unique: true, trim: true, lowercase: true })
  email: string;

  @Prop({ required: true, minlength: 8 })
  password: string;

  @Prop({
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
