// src/data/mockData.ts

export interface Driver {
  id: number;
  name: string;
  number: number;
  image: string; // URL da foto
  country: string;
}

export interface Team {
  id: string;
  name: string;
  full_name: string;
  car_image: string; // URL do carro
  logo: string;
  drivers: Driver[];
}

// Dados de Exemplo (2024/25)
export const mockTeams: Team[] = [
  {
    id: "red_bull",
    name: "Red Bull Racing",
    full_name: "Oracle Red Bull Racing",
    logo: "https://media.formula1.com/content/dam/fom-website/teams/2024/red-bull-racing-logo.png.transform/2col/image.png",
    car_image: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/red-bull-racing.png.transform/4col/image.png",
    drivers: [
      { id: 1, name: "Max Verstappen", number: 1, country: "NED", image: "https://media.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png" },
      { id: 11, name: "Sergio Perez", number: 11, country: "MEX", image: "https://media.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/2col/image.png" }
    ]
  },
  {
    id: "ferrari",
    name: "Ferrari",
    full_name: "Scuderia Ferrari HP",
    logo: "https://media.formula1.com/content/dam/fom-website/teams/2024/ferrari-logo.png.transform/2col/image.png",
    car_image: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/ferrari.png.transform/4col/image.png",
    drivers: [
      { id: 16, name: "Charles Leclerc", number: 16, country: "MON", image: "https://media.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png" },
      { id: 44, name: "Lewis Hamilton", number: 44, country: "GBR", image: "https://media.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col/image.png" } 
    ]
  },
  {
    id: "mclaren",
    name: "McLaren",
    full_name: "McLaren Formula 1 Team",
    logo: "https://media.formula1.com/content/dam/fom-website/teams/2024/mclaren-logo.png.transform/2col/image.png",
    car_image: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/mclaren.png.transform/4col/image.png",
    drivers: [
      { id: 4, name: "Lando Norris", number: 4, country: "GBR", image: "https://media.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/2col/image.png" },
      { id: 81, name: "Oscar Piastri", number: 81, country: "AUS", image: "https://media.formula1.com/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png.transform/2col/image.png" }
    ]
  }
];