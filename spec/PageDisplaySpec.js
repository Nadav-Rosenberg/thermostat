describe('Thermostat', function() {

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
  });

  it('displays default temperature', function(){
    expect('#temperature').toContainText('20');
  });

});