import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCoordinateDTO } from './dto/create-coordinate.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
    constructor(
        private coordinateService: RiderCoordinatesService
    ){}

    @Get()
    getRiderCoordinates(){
        return this.coordinateService.getCoordinates()
    }

    @Get(':id')
    getRiderCoordinate(
        @Param('id')
        id:string
    ){
        return this.coordinateService.getCoordinate(id)
    }

    @Post()
    saveRiderCoordinate(
        @Body()
        createCoordinate:CreateCoordinateDTO
    ){
        return this.coordinateService.saveRiderCoordinate(createCoordinate)
    }
}
