import axios from 'axios';

export interface Earthquake {
  id: string;
  properties: any;
  geometry: any;
}

export async function getEarthquakes(): Promise<Earthquake[]> {
  try {
    const response = await axios.get('https://earthquake.usgs.gov/fdsnws/event/1/query', {
      params: {
        format: 'geojson',
        minlatitude: 36,
        maxlatitude: 42,
        minlongitude: 26,
        maxlongitude: 45
      }
    });
    const data = response.data;
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
