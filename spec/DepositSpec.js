describe("Deposit", function () {
    "use strict";
    var deposit;

    beforeEach(function () {
        deposit = new Deposit(10);
    });


    it("returns a value of 10", function () {
        expect(deposit.balance).toEqual(10);
    });

});
