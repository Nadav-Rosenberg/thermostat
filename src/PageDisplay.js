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

  $('#reset').click(function(){
    thermostat.reset();
    $('#temperature').css("color", "blue");
    console.log($('#temperature').css("color"));
    $('#temperature').html(thermostat.temperature);
  });

  $('#powersave').click(function(){ 
    console.log('Hello')
    thermostat.powerSaveSwitch();
    console.log(thermostat.powerSave);
    $('#temperature').html(thermostat.temperature);
  });


// });