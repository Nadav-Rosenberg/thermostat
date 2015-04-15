// $(document).ready(function(){
  var thermostat = new Thermostat();
  $('#temperature').html(thermostat.temperature);

  $('#up').click(function(){
    thermostat.increaseTemp();
    $('#temperature').html(thermostat.temperature);
  });

  $('#down').click(function(){
    thermostat.decreaseTemp();
    $('#temperature').html(thermostat.temperature);
  });
// });