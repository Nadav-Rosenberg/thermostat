describe('Thermostat', function() {

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');

  });

  it('displays default temperature', function(){
    expect('#temperature').toContainText('20');
  });

  it('raises the temperature when we click the up button', function(){
     $("input#up").click();
     expect('#temperature').toContainText('21');
  });

  it('lowers the temperature when we click the down button', function() {
    $("input#down").click();
    expect('#temperature').toContainText('19');

  });

  it('rest temperature to 20 when we click the reset button', function() {
    thermostat.temperature = 26;
    $('#temperature').html(thermostat.temperature);
    $("#reset").click();
    expect('#temperature').toContainText('20');
  });

  it('can go above 25 when powersave mode is turned off', function(){
    $('#powersave').click();
    for (i = 0; i < 6; i++) {
      $("input#up").click();
    }
    expect('#temperature').toContainText('26');
  });

  it('displays degrres in green when temp is lower than 18', function() {
    for (i = 0; i < 6; i++) {
      $("input#down").click();
    }
    $('#temperature').html(thermostat.temperature);
    expect($('#temperature').css("color")).toEqual('rgb(0, 255, 0)');
  });

  it('displays degrees in yellow when the temp is between 18 and 25', function(){
    $('#temperature').html(thermostat.temperature);
    expect($('#temperature').css("color")).toEqual('rgb(255, 255, 0)');
  });

  it('dispplays degrees in red when the temp is over 25', function() {
    $('#powersave').click();
    for (i = 0; i < 6; i++) {
      $("input#up").click();
    }
    $('#temperature').html(thermostat.temperature);
    expect($('#temperature').css("color")).toEqual('rgb(255, 0, 0)');
  });

  it('it displays any new temperature on the page /temperature_change', function() {
    $("input#up").click();
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('/temperature_change');
    expect($('#displayTemperature')).toContainText('21');
  });


});