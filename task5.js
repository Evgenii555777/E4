class ElectricDevice {
    constructor(name) {
        this.name = name;
        this.voltage = 220;
        this.deviceTurned = false;
    }

    deviceSwitch(deviceSwitch) {
        if (deviceSwitch === 'on') {
            this.deviceTurned = true;
        } else {
            this.deviceTurned = false;
        }
    }

    energyConsumption(time) {
        let consumption = this.devicePower * time / 1000;
        console.log(`Электроприбор ${this.name} потребляет ${consumption} кВт*ч энергии за ${time} час(ов).`);
    }
}

class Heater extends ElectricDevice {
    constructor(name, power) {
        super(name);
        this.power = power;
        this.devicePower = this.voltage * this.power;
    }
}

class Convector extends ElectricDevice {
    constructor(name, power, temperatureRange) {
        super(name);
        this.power = power;
        this.temperatureRange = temperatureRange;
        this.devicePower = this.voltage * this.power;
    }
}

const heater = new Heater("Обогреватель", 2000);
const convector = new Convector("Конвектор", 1500, "10-30°C");

heater.deviceSwitch('on');
heater.energyConsumption(5);

convector.deviceSwitch('on');
convector.energyConsumption(8);
