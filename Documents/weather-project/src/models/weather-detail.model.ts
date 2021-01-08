export class WeatherDetailModel {
    capital: string;
    main?: TemperatureModel;
    wind?: WindModel;
}

class TemperatureModel {
    temp: number;
    humidity: number;
}

class WindModel {
    speed: number;
}