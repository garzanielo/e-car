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
    image: toyotaImg
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
    image: mustangImg
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
    image: teslaImg
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
    image: onixImg
  },
  // Nuevos autos agregados:
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
    image: hondaCivicImg
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
    image: bmwX5Img
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
    image: audiA4Img
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
    image: volkswagenGolfImg
  }
]
