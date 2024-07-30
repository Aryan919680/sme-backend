// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { FormUser } from './user.entity';

// @Injectable()
// export class UserService {
//   constructor(
//     @InjectRepository(FormUser)
//     private readonly userRepository: Repository<FormUser>,
//   ) {}

//   async createUser(data: {
//     companyUEN: string;
//     companyName: string;
//     fullName: string;
//     position: string;
//     email: string;
//     mobile: string;
//     confirmEmail: string;
//     documents: string;
//   }): Promise<FormUser> {
//     const user = new FormUser();
//     user.companyUEN = data.companyUEN;
//     user.companyName = data.companyName;
//     user.fullName = data.fullName;
//     user.position = data.position;
//     user.email = data.email;
//     user.mobile = data.mobile;
//     user.confirmEmail = data.confirmEmail;
//     user.documents = data.documents;

//     return await this.userRepository.save(user);
//   }
// }
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FormUser } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(FormUser)
    private readonly userRepository: Repository<FormUser>,
  ) {}

  async createUserForm(userData: Partial<FormUser>): Promise<FormUser> {
    const user = this.userRepository.create(userData);
    return await this.userRepository.save(user);
  }

  async getAllUsersForm(): Promise<FormUser[]> {
    return await this.userRepository.find();
  }
}
