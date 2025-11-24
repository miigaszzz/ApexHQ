// src/data/mockData.ts

export interface Driver {
  id: number;
  name: string;
  number: number;
  image: string; 
  country: string;
}

export interface Team {
  id: string;
  name: string;
  full_name: string;
  car_image: string; 
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
      { id: 11, name: "Yuki Tsunoda", number: 22, country: "JAP", image: "https://media.formula1.com/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/2col/image.png" }
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
  },
  {
    id: "astonmartin",
    name: "Aston Martin",
    full_name: "Aston Martin Aramco Cognizant F1 Team",
    logo: "https://media.formula1.com/content/dam/fom-website/teams/2024/aston-martin-logo.png.transform/2col/image.png",
    car_image: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/aston-martin.png.transform/4col/image.png",
    drivers: [
      { id: 4, name: "Fernando Alonso", number: 14, country: "ESP", image: "https://media.formula1.com/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/2col/image.png" },
      { id: 81, name: "Lance Stroll", number: 18, country: "CND", image: "https://media.formula1.com/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/2col/image.png" }
    ]
  }
];