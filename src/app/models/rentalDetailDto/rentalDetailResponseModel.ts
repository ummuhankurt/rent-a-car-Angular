import { ResponseModel } from "../ResponseModel";
import { RentalDetail } from "./rentalDetail";

export interface RentalDetailResponseModel extends ResponseModel{
    data : RentalDetail[];
}