import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCordinateDTO } from './dto/create-cordinate.dto';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
    @Get()
    getRiderCoordinates(){
        return "I'm from rider coordinates test"
    }

    @Post()
    saveRiderCoordinate(
        @Body()
        createCordinate:CreateCordinateDTO
    ){
        return createCordinate
    }
}
