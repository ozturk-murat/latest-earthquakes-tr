import axios, { AxiosInstance } from 'axios';
import dayjs from 'dayjs';

const earthquakeApi: AxiosInstance = axios.create({
  baseURL: 'https://earthquake.usgs.gov/fdsnws/event/1/',
  headers: {
    'Content-Type': 'application/json',
  }
});

export interface Earthquake {
  id: string;
  properties: any;
  geometry: any;
}

export async function getEarthquakes(startDate: Date, endDate: Date): Promise<Earthquake[]> {
  console.log("istek?", startDate, endDate);
  
  try {
    const response = await earthquakeApi.get('/query', {
      params: {
        format: "geojson",
        minlatitude: 36,
        maxlatitude: 42,
        minlongitude: 26,
        maxlongitude: 45,
        starttime: dayjs(startDate).format('YYYY-MM-DD'),
        endtime: dayjs(endDate).format('YYYY-MM-DD'),
      }
    });

    const data = response.data;

    if (data && data.features) {
      const fetchedEarthquakes = data.features.map((feature: any) => {
        return {
          id: feature.id,
          properties: feature.properties,
          geometry: feature.geometry,
        };
      });
      return fetchedEarthquakes;
    }
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
}
