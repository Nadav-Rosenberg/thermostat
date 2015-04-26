// $(document).ready(function(){
  
  var thermostat = new Thermostat();
  
  var color = function() {
    if (thermostat.temperature > 17 && thermostat.temperature < 26 ) {
      $('#temperature').css('color', 'rgb(255, 191, 0)'); 
    } else if (thermostat.temperature > 25){
      $('#temperature').css('color', 'rgb(255, 0, 0)');
    } else {
      $('#temperature').css('color', 'rgb(0, 255, 0)');
    };
  };

  var executeWithErrorHandler = function(object, method) {
    try {
      method.apply(object);
    }
    catch(errorMessage) {
        $('#error').html(errorMessage);
        $('#error').fadeOut(1500, function() {
          $('#error').text('');
          $('#error').show();
        });
    }
  };

  color();

  $('#temperature').html(thermostat.temperature);

  $('#up').click(function(){
    executeWithErrorHandler(thermostat, thermostat.increaseTemp);
    color();
    $('#temperature').html(thermostat.temperature);
    $.post('/temperature_change', 
      {
          temperature: thermostat.temperature   
      });
  });

  $('#down').click(function(){
    executeWithErrorHandler(thermostat, thermostat.decreaseTemp); 
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