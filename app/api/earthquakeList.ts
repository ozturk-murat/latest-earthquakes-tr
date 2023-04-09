import axios from "axios";
const baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/';

export const getEarthquakes = async () => {
    try {
      const response = await axios.get(`${baseUrl}/query?format=geojson&minlatitude=36&maxlatitude=42&minlongitude=26&maxlongitude=45`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  