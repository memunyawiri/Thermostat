'use strict';

function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.up = function() {
  this.DEFAULT_TEMPERATURE += 1;
};

Thermostat.prototype.down = function() {
  this.DEFAULT_TEMPERATURE -= 1;
};
