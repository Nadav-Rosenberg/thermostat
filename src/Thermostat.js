var Thermostat = function() {
  this.temperature = 20;
  this.powerSave = true;
};

Thermostat.prototype.increaseTemp = function() {
  if(this.powerSave === true && this.temperature === 25){
    throw new Error('Power save on. Cannot go higher than 25')
  }
  if(this.temperature === 32){
    throw new Error('Sorry, cannot go higher than 32');
  }

  this.temperature ++;
};

Thermostat.prototype.decreaseTemp = function() {
  if(this.temperature === 10) {
    throw new Error('Sorry, cannot go lower than 10');
  }

  this.temperature --;
};

Thermostat.prototype.powerSaveSwitch = function() {
  if(this.powerSave === false) {
    this.powerSave = true;
  } else {
  this.powerSave = false;
}

};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};