describe("Withdraw", function () {
  var withdraw;
  var date;

  beforeEach(function () {
      withdraw = new Withdraw(5, "debit", 0, "2018/2/1");
  });

  it("returns a value of 5", function () {
      expect(withdraw.debit).toEqual(5);
  });

  it("returns date of transaction", function () {
      expect(withdraw.date).toEqual("2018/2/1");
  });

});
