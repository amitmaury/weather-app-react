import {
  EmptyLocationPositionModel,
  LocationPositionModel,
} from "./LocationPositionModel";

/* Defined the type*/
export interface LocationModel {
  position: LocationPositionModel;
  country: string;
  locality: string;
}

/* Defined the type*/
export const EmptyLocationModel = {
  position: EmptyLocationPositionModel,
  country: "",
  locality: "",
};
