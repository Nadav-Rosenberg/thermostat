describe('Thermostat', function() {

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
  });

  it('displays default temperature', function(){
    expect('#temperature').toContainText('20');
  });

  it('raises the temperature when we click the up button', function(){
     console.log($("#up"));
     $("input#up").click();
     expect('#temperature').toContainText('21');
  });

});