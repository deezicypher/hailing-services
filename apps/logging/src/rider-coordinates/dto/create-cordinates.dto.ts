import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCordinatesDTO {
    @IsNumber()
    @IsNotEmpty()
    lat: number;

    @IsNumber()
    @IsNotEmpty()
    lng: number;

    @IsString()
    @IsNotEmpty()
    rider: string;
}