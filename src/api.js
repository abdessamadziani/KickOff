import axios from 'axios';
import { setData } from './reducers';

export const fetchData = () => async (dispatch) => {
 try {
 const response = await await fetch(`https://api.sportmonks.com/v3/football/fixtures?api_token=fSyr6ZRRSV8pMPng0v0EoX3t2uHU61kau88clbO09bTjWtrQvHurZyQzlBR4`);
 dispatch(setData(response.data));
 } catch (error) {
 console.error('Error fetching data: ', error);
 }
};