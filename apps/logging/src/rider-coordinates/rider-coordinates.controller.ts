import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinateDTO } from './dto/create-coordinate.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
    constructor(
        private coordinateService: RiderCoordinatesService
    ){}

    @Get()
    getRiderCoordinates(){
        return "I'm from rider coordinates test"
    }

    @Post()
    saveRiderCoordinate(
        @Body()
        createCoordinate:CreateCoordinateDTO
    ){
        return this.coordinateService.saveRiderCoordinate(createCoordinate)
    }
}
