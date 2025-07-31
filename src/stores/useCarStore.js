import { defineStore } from "pinia";
import { cars as mockCars } from "@/utils/mockCars.js";

export const useCarStore = defineStore("carStore", {
  state: () => ({
    cars: [],
    nextId: Math.max(...mockCars.map((c) => c.id)) + 1,
  }),
  actions: {
    initialize() {
      const storedCars = localStorage.getItem("carStore_cars");
      if (storedCars) {
        this.cars = JSON.parse(storedCars);
        this.nextId = this.cars.reduce((maxId, car) => Math.max(maxId, car.id), 0) + 1;
      } else {
        this.cars = [...mockCars];
        this.nextId = Math.max(...mockCars.map((c) => c.id)) + 1;
      }
    },
    persist() {
      localStorage.setItem("carStore_cars", JSON.stringify(this.cars));
    },
    addCar(newCar) {
      newCar.id = this.nextId++;
      this.cars.push(newCar);
      this.persist();
    },
    removeCar(carId) {
      this.cars = this.cars.filter((car) => car.id !== carId);
      this.persist();
    },
    updateCar(updatedCar) {
      const index = this.cars.findIndex((car) => car.id === updatedCar.id);
      if (index !== -1) {
        this.cars[index] = updatedCar;
        this.persist();
      }
    },
  },
  getters: {
    getCarById: (state) => {
      return (id) => state.cars.find((car) => car.id === id);
    },
  },
});
