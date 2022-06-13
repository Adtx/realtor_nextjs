import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY ,
      'x-rapidapi-key': '0c2c964224msh0a3a93744e1ad78p1062e0jsn3d40a5587ccc' ,
    },
  });
    
  return data;
}