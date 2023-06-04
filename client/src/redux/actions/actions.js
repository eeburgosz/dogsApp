import axios from "axios";
import { types } from "./types";


export const getDogs = () => {
   return async function (dispatch) {
      try {
         const payload = (await axios.get("http://localhost:3005/api/dogs")).data;
         return dispatch({
            type: types.GET_DATA,
            payload
         });
      } catch (error) {
         throw new Error(error.message);
      }
   };
};

export const getTemperaments = () => {
   return async function (dispatch) {
      try {
         const payload = (await axios.get("http://localhost:3005/api/temperament")).data;
         return dispatch({
            type: types.GET_TEMPERAMENTS,
            payload
         });
      } catch (error) {
         throw new Error(error.message);
      }
   };
};

export const getBreedByName = (payload) => {
   return {
      type: types.GET_BREED,
      payload
   };
};
export const getDogById = (id) => {
   return async function (dispatch) {
      try {
         const payload = (await axios.get(`http://localhost:3005/api/dogs/${id}`)).data;
         return dispatch({
            type: types.GET_DOG_BY_ID,
            payload
         });
      } catch (error) {
         throw new Error(error.message);
      }
   };
};

export const createDog = (payload) => {
   console.log(payload);
   return async function (dispatch) {
      try {
         payload.minWeight = parseInt(payload.minWeight);
         payload.maxWeight = parseInt(payload.maxWeight);
         payload.minHeight = parseInt(payload.minHeight);
         payload.maxHeight = parseInt(payload.maxHeight);
         payload.life_span = parseInt(payload.life_span);
         const data = await axios.post(`http://localhost:3005/api/dog`, payload);
         return dispatch({
            type: types.CREATE_DOG,
            data
         });
      } catch (error) {
         throw new Error(error.message);
      }
   };
};