describe('ping pong', function() {

  it("numbers divisible by 3 are replaced with ping", function(){
    expect (count('3')).to.eql([1, 2, "ping"]);
  });

  it("numbers divisible by 5 are replaced with pong", function(){
    expect (count('5')).to.eql([1, 2, "ping", 4, "pong"]);
  });

  it("numbers divisible by 15 are replaced with pingpong", function(){
    expect (count('15')).to.eql([1, 2, "ping", 4, "pong" , "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "pingpong"]);
  });

});
