import toyotaImg from '@/assets/cars/toyota.webp'
import mustangImg from '@/assets/cars/mustang.webp'
import teslaImg from '@/assets/cars/tesla.webp'
import onixImg from '@/assets/cars/onix.webp'
import hondaCivicImg from '@/assets/cars/honda-civic.webp'
import bmwX5Img from '@/assets/cars/bmw-x5.webp'
import audiA4Img from '@/assets/cars/audi-a4.webp'
import volkswagenGolfImg from '@/assets/cars/volkswagen-golf.jpg'

export const cars = [
  {
    id: 1,
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    price: 18000,
    fuelType: "Nafta",
    transmission: "Automático",
    mileage: 15000,
    condition: "Usado",
    image: toyotaImg,
    engine: "1.8L",
    color: "Gris Plata",
    doors: 4
  },
  {
    id: 2,
    brand: "Ford",
    model: "Mustang",
    year: 2024,
    price: 42000,
    fuelType: "Nafta",
    transmission: "Manual",
    mileage: 0,
    condition: "Nuevo",
    image: mustangImg,
    engine: "5.0L V8",
    color: "Rojo Fuego",
    doors: 2
  },
  {
    id: 3,
    brand: "Tesla",
    model: "Model 3",
    year: 2023,
    price: 38000,
    fuelType: "Eléctrico",
    transmission: "Automático",
    mileage: 8000,
    condition: "Usado",
    image: teslaImg,
    engine: "Motor Dual Eléctrico",
    color: "Blanco Perlado",
    doors: 4
  },
  {
    id: 4,
    brand: "Chevrolet",
    model: "Onix",
    year: 2021,
    price: 12500,
    fuelType: "Nafta",
    transmission: "Manual",
    mileage: 30000,
    condition: "Usado",
    image: onixImg,
    engine: "1.2L",
    color: "Azul Marino",
    doors: 5
  },
  {
    id: 5,
    brand: "Honda",
    model: "Civic",
    year: 2023,
    price: 22000,
    fuelType: "Nafta",
    transmission: "Automático",
    mileage: 12000,
    condition: "Usado",
    image: hondaCivicImg,
    engine: "2.0L",
    color: "Negro Cristal",
    doors: 4
  },
  {
    id: 6,
    brand: "BMW",
    model: "X5",
    year: 2024,
    price: 60000,
    fuelType: "Diesel",
    transmission: "Automático",
    mileage: 0,
    condition: "Nuevo",
    image: bmwX5Img,
    engine: "3.0L Turbo",
    color: "Gris Mineral",
    doors: 5
  },
  {
    id: 7,
    brand: "Audi",
    model: "A4",
    year: 2022,
    price: 35000,
    fuelType: "Nafta",
    transmission: "Manual",
    mileage: 15000,
    condition: "Usado",
    image: audiA4Img,
    engine: "2.0L TFSI",
    color: "Blanco Glaciar",
    doors: 4
  },
  {
    id: 8,
    brand: "Volkswagen",
    model: "Golf",
    year: 2021,
    price: 17000,
    fuelType: "Nafta",
    transmission: "Manual",
    mileage: 25000,
    condition: "Usado",
    image: volkswagenGolfImg,
    engine: "1.4L TSI",
    color: "Rojo Tornado",
    doors: 5
  }
]
