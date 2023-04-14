import axios, { AxiosRequestConfig } from 'axios';
import iconv from 'iconv-lite';


export interface Earthquake {
  id: string;
  properties: any;
  geometry: any;
}

const config: AxiosRequestConfig = {
  params: {
    format: 'geojson',
    minlatitude: 36,
    maxlatitude: 42,
    minlongitude: 26,
    maxlongitude: 45
  },
  responseType: 'arraybuffer'
};


export async function getEarthquakes(): Promise<Earthquake[]> {
  try {
    const response = await axios.get('https://earthquake.usgs.gov/fdsnws/event/1/query', config);
    const decodedResponse = iconv.decode(response.data, 'utf-8');
    const test2 = JSON.parse(decodedResponse);
    console.log("test2", test2);
    
    const data = response.data;

    console.log(typeof response.data);

    if (data && data.features) {


      const fetchedEarthquakes = data.features.map((feature: any) => {
        return {
          id: feature.id,
          properties: feature.properties,
          geometry: feature.geometry
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
