describe ('Feature test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it("Lands a plane at the airport", function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it("Instructs a plane to take off", function() {
    plane.land(airport);
    plane.takeOff();
    expect(airport.planes()).not.toContain(plane);
  });
});
