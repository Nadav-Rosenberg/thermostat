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

});