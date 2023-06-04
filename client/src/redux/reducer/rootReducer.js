import { types } from "../actions/types";

let initialState = {
   dogs: [],
   auxDogs: [],
   temperaments: [],
   dogById: {},
};

export const rootReducer = (state = initialState, action) => {
   switch (action.type) {
      case types.GET_DATA:
         return {
            ...state,
            dogs: action.payload,
            auxDogs: action.payload
         };
      case types.GET_TEMPERAMENTS:
         return {
            ...state,
            temperaments: action.payload
         };
      case types.GET_BREED:
         // console.log(action.payload);
         let breeds = state.auxDogs.filter(dogs => dogs.name.toLowerCase().includes(action.payload.toLowerCase()));
         return {
            ...state,
            dogs: breeds
         };
      case types.GET_DOG_BY_ID:
         return {
            ...state,
            dogById: action.payload
         };
      case types.CREATE_DOG:
         return {
            ...state
         };
      default:
         return state;
   }
};