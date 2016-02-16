describe ('Feature test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it("Lands a plane at the airport", function() {
    plane.land(airport);
    expect(airport.hanger).toContain(plane);
  });

});
