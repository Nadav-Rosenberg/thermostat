// $(document).ready(function(){
  
  var thermostat = new Thermostat();
  
  var color = function() {
    if (thermostat.temperature > 17 && thermostat.temperature < 26 ) {
      $('#temperature').css('color', 'rgb(255, 255, 0)'); 
    } else if (thermostat.temperature > 25){
      $('#temperature').css('color', 'rgb(255, 0, 0)');
    } else {
      $('#temperature').css('color', 'rgb(0, 255, 0)');
    };
  };

  color();

  $('#temperature').html(thermostat.temperature);

  $('#up').click(function(){
    thermostat.increaseTemp();
    color();
    $('#temperature').html(thermostat.temperature);
  });

  $('#down').click(function(){
    thermostat.decreaseTemp();
    color();
    $('#temperature').html(thermostat.temperature);
  });

  $('#reset').click(function(){
    thermostat.reset();
    color();
    $('#temperature').html(thermostat.temperature);
  });

  $('#powersave').click(function(){ 
    thermostat.powerSaveSwitch();
    color();
    $('#temperature').html(thermostat.temperature);
  });

// });