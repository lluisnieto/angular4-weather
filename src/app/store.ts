import { CityTemp } from "../models/citytemp-model";
import { UPDATE } from "./actions";

export interface IAppState {
    cities: CityTemp[]
}

export const INITIAL_STATE: IAppState = {
    cities: []
};

export function rootReducer(state, action): IAppState {

    switch(action.type){
        case UPDATE:
            return { cities: action.body }
    }

    return state;
}