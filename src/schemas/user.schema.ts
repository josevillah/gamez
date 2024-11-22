import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class User {
    @Prop({ 
        unique: true,
        required: true, 
        trim: true
    })
    email: string;

    @Prop({ 
        unique: true,
        required: true, 
        trim: true 
    })
    username: string;

    @Prop({ 
        required: true, 
        trim: true
    })
    password: string;

    @Prop({ 
        required: true, 
        trim: true
     })
    role: number;
}

export const UserSchema = SchemaFactory.createForClass(User);