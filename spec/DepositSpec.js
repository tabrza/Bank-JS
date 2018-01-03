describe("Deposit", function () {
    "use strict";
    var deposit;

    beforeEach(function () {
        deposit = new Deposit(10, "credit", "2018/2/1");
    });

    it("returns a value of 10", function () {
        expect(deposit.credit).toEqual(10);
    });

    it("returns date of transaction", function () {
        expect(deposit.date).toEqual("2018/2/1");
    });
});
