describe("Withdraw", function () {
  var withdraw;

  beforeEach(function () {
      withdraw = new Withdraw(5);
  });

  it("returns a value of 5", function () {
      expect(withdraw.balance).toEqual(5);
  });

  // it("cannot withdraw more than balance", function () {
  //     expect(function () {
  //         expect(account.withdraw(15));
  //     }).toThrowError("Insufficient funds");
  // });
});
