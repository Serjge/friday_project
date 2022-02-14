import {AppActionsType} from "types/actions";

const initialState: [] = [];

export const exampleReducer = (state=initialState, action: AppActionsType): [] => {
    switch (action.type) {
        case 'example':
            return state
        default:
            return state
    }
}