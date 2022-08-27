const taxiPark = {
    cars: [
		{ brand: 'Mazda', mileage: 17 },
		{ brand: 'Honda', mileage: 80 },
		{ brand: 'Nissan', mileage: 50 },
	],
    getCars() {
        return this.cars;
    },
    addCar(newCar) {
        const limit = 90;
        for (const car of this.cars) {
            if (newCar.brand === car.brand || newCar.mileage >= limit) {
                return `Sorry! We don't need ${newCar.brand}!`;
            }
        }
        this.cars.push(newCar);
        return this.cars;
    },
    removeCar(carName) {
        for (const car of this.cars) {
            let idx = this.cars.indexOf(car);
            if (carName === this.cars[idx].brand) {
                return this.cars.splice(idx, 1);
            }
        }
        return `We don't have ${carName} in our taxi Park!`;
    },
    updateCarMileage(carName, newMileage) {
        let idx = this.cars.map(car => car.brand).indexOf(carName);

        if (idx >= 0) {
        
            this.cars[idx].mileage = newMileage;
            return this.cars;
}

        // for (const car of this.cars) {
        //     let idx = this.cars.indexOf(car);
        //     if (carName === car.brand) {
        //         this.cars[idx].mileage = newMileage;
        //         break;
        //     }
        // }
        return `No such ${carName} in our taxi Park - can't update mileage!`;
    },
}

console.log(taxiPark.getCars());
console.log(taxiPark.addCar({brand: 'Toyota', mileage: 40}));
console.log(taxiPark.addCar({brand: 'Mazda', mileage: 10}));
console.log(taxiPark.addCar({brand: 'Volvo', mileage: 109}));
console.log(taxiPark.getCars());
console.log(taxiPark.removeCar('Audi'));
console.log(taxiPark.getCars());
console.log(taxiPark.removeCar('Honda'));
console.log(taxiPark.getCars());
console.log(taxiPark.updateCarMileage('Nissan', 75));
console.log(taxiPark.getCars());
console.log(taxiPark.updateCarMileage('BMW', 36));
console.log(taxiPark.getCars());

