describe('ping pong', function() {
  it("numbers divisible by 3 are replaced with ping", function(){
    expect (number('3')).to.equal('ping');
  });

  it("numbers divisible by 5 are replaced with pong", function(){
      expect (number('5')).to.equal('pong');
  });

  it("numbers divisible by 15 are replaced with pingpong", function(){
      expect (number('15')).to.equal('pingpong');
  });
})
