import { ResponseModel } from "../ResponseModel";
import { CarDetail } from "./cardetail";

export interface CarDetailResponseModel extends ResponseModel{
    data : CarDetail[];
}