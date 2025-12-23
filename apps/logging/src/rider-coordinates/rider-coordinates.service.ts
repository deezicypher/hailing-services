import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinate, RiderCoordinateDocument } from './schemas/rider-coordinates';
import { Model } from 'mongoose';
import { CreateCoordinateDTO } from './dto/create-coordinate.dto';

@Injectable()
export class RiderCoordinatesService {
    constructor(
        @InjectModel(RiderCoordinate.name)
        private readonly riderCoordinateModel:Model<RiderCoordinateDocument>
    ){}

    async saveRiderCoordinate(createCoordinateDTO:CreateCoordinateDTO){
        return this.riderCoordinateModel.create(createCoordinateDTO)
    }

    async getCoordinate(id:string){
        return this.riderCoordinateModel.findById(id)
    }

    async getCoordinates(){
        return this.riderCoordinateModel.find()
    }
}
