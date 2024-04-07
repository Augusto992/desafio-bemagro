export interface ICityDetails {
  place_id: number,
  licence: string,
  osm_type: string,
  osm_id: number,
  lat: string,
  lon: string,
  class: string,
  type: string,
  place_rank: number,
  importance: number,
  adresstype: string,
  name: string,
  displayname: string,
  boundingbox: string[]
}

export interface IWeather {
  coord: {
    lon: number,
    lat: number
  }
  weather: {
    id: number,
    main: string,
    description: string,
    icon: string
  }[],
  base: string,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
  },
  visibility: number,
  wind: {
    speed: number,
    deg: number,
    gust: number
  },
  clouds: {
    all: number
  },
  dt: number,
  sys: {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number
  }
  timezone: number,
  id: number,
  name: string,
  cod: number
}