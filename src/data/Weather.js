import axios from 'axios';

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = '3323f6e68cfbc697b7d44640669e1ae2';

export const getWeatherData = async (cityname) => {
    try{
        const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);
        return data;
    }catch(error) {
        throw error;
    }
}