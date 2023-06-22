function ElectricDevice(name) {
    this.name = name;
    this.voltage = 220;
    this.deviceTurned = false;
}

ElectricDevice.prototype.deviceSwitch = function(deviceSwitch) {
    if (deviceSwitch === 'on') {
        this.deviceTurned = true;
    } else {
        this.deviceTurned = false;
    }
};

ElectricDevice.prototype.energyConsumption = function(time) {
    let consumption = this.devicePower * time / 1000;
    console.log(`Электроприбор ${this.name} потребляет ${consumption} кВт*ч энергии за ${time} час(ов).`);
};

function Heater(name, power) {
    ElectricDevice.call(this, name);
    this.power = power;
    this.devicePower = this.voltage * this.power;
}

Heater.prototype = Object.create(ElectricDevice.prototype);
Heater.prototype.constructor = Heater;

function Convector(name, power, temperatureRange) {
    ElectricDevice.call(this, name);
    this.power = power;
    this.temperatureRange = temperatureRange;
    this.devicePower = this.voltage * this.power;
}

Convector.prototype = Object.create(ElectricDevice.prototype);
Convector.prototype.constructor = Convector;

const heater = new Heater("Обогреватель", 2000);
const convector = new Convector("Конвектор", 1500, "10-30°C");

heater.deviceSwitch('on');
heater.energyConsumption(5);

convector.deviceSwitch('on');
convector.energyConsumption(8);
