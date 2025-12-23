import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCordinatesDTO } from './dto/create-cordinates.dto';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
    @Get()
    getRiderCoordinates(){
        return "I'm from rider coordinates test"
    }

    @Post()
    saveRiderCoordinates(
        @Body()
        createCordinate:CreateCordinatesDTO
    ){
        return createCordinate
    }
}
