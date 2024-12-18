import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://josevillah:4blkAeIGFDEuO9Jr@juegozombies.se8wa.mongodb.net/gamez?retryWrites=true&w=majority'),
    LoginModule,
    UserModule,
    ProfileModule,
  ],
})
export class AppModule {}