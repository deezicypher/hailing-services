import { Controller, Get, Param } from '@nestjs/common';
import { RiderService } from './rider.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('rider')
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

 // @Get(':id')
 @MessagePattern({cmd: "get-rider"})
  getRiderById(
    // @Param()
    // param: any
    data: any
  ){
    return Promise.resolve({
        _id: data.id,
        firstName: "John",
        lastName:"Doe",
        email:"JohnDoe@gmail.com"
    })
  }
}
