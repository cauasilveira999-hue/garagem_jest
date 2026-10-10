import { car } from "./Car"; 

export class garage {
    private cars:  car[] = [];

    // botei "adicionar" pq o metodo addCar ja existe 
    adicionarCar(carItem: car): void {

      //usei o some pq foi o unico jeito que achei de verificar, na real tinha o if mas fds tbm
      const isDuplicate = this.cars.some(
        (c) =>
          c.getBrand() === carItem.getBrand() &&
          c.getModel() === carItem.getModel() &&
          c.getYear() === carItem.getYear()
      );
  
      if (isDuplicate) {
        throw new Error(
          `O carro ${carItem.getBrand()} ${carItem.getModel()} ${carItem.getYear()} já está cadastrado na garagem.`
        );
      }
  
      carItem.setStored(true);
      this.cars.push(carItem);
    }

    public addCar(car: car): void {
        car.setStored(true);
        this.cars.push(car);
    }

    public removeCar(car: car): boolean {
        const index = this.cars.indexOf(car);
    if (index !== -1) {
      car.setStored(false); 
      this.cars.splice(index, 1);
      return true;
    }
    return false;
    }

    public getCars(): car[] {
        return this.cars;
      }
    
    public getCarCount(): number {
        return this.cars.length;
      }

     public findCarByModel(model: string): car | undefined {
        return this.cars.find(carItem => carItem.getModel() === model);
}

}

const myGarage = new garage();

const car1 = new car("Toyota", "Corolla", 2025);
const car2 = new car("Toyota", "Corolla", 2025);

console.log(car1);
console.log(car2)