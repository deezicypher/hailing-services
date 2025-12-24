import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinate, RiderCoordinateDocument } from './schemas/rider-coordinates';
import { Model } from 'mongoose';
import { CreateCoordinateDTO } from './dto/create-coordinate.dto';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';




@Injectable()
export class RiderCoordinatesService {
    constructor(
        @InjectModel(RiderCoordinate.name)
        private readonly riderCoordinateModel:Model<RiderCoordinateDocument>,

        @Inject('RIDER_SERVICE')
        private client: ClientProxy
    ){}

    async saveRiderCoordinate(createCoordinateDTO:CreateCoordinateDTO){
        return this.riderCoordinateModel.create(createCoordinateDTO)
    }

    async getCoordinate(id:string){
        const coordinate = await this.riderCoordinateModel.find({rider:id})
        const pattern = {cmd: 'get-rider'}
        const payload = {id}
        const rider = await firstValueFrom(this.client.send(pattern, payload))
        return {coordinate, rider}
    }

    async getCoordinates(){
        return this.riderCoordinateModel.find()
    }
}
