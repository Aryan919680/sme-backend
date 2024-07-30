import { Controller, Post, Body, Logger, HttpException, HttpStatus, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { FormUser } from './user.entity';

@Controller('users')
export class UserController {
  private readonly logger = new Logger(UserController.name);

  constructor(private readonly userService: UserService) {}

  @Post('submit')
  async submitForm(
    @Body() body: {
      companyUEN: string;
      companyName: string;
      fullName: string;
      position: string;
      email: string;
      mobile: string;
      confirmEmail: string;
      documents: string; // Only a single document name
    }
  ) {
    try {
      this.logger.log(`Handling form submission... body: ${JSON.stringify(body)}`);
      const user = await this.userService.createUserForm({ ...body });
      this.logger.log('Form submitted successfully');
      return { message: 'Form submitted successfully', user };
    } catch (error) {
      this.logger.error('Error during form submission', error.stack);
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

 @Get()
  async getAllUsers(): Promise<FormUser[]> {
    try {
      const users = await this.userService.getAllUsersForm();
      this.logger.log('Fetched all users successfully');
      return users;
    } catch (error) {
      this.logger.error('Error fetching users', error.stack);
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
}
}
