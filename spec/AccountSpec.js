describe("Account", function () {
    "use strict";
    var account;

    beforeEach(function () {
        account = new Account();
    });

    it("initializes with a value of 0", function () {
        expect(account.balance).toEqual(0);
    });

    describe("deposit", function () {
        beforeEach(function () {
            account.deposit(10);
        });

        it("returns a value of 10", function () {
            expect(account.balance).toEqual(10);
        });
    });

    describe("withdraw", function () {
        beforeEach(function () {
            account.deposit(10);
        });

        it("returns a value of 5", function () {
            account.withdraw(5);
            expect(account.balance).toEqual(5);
        });

        it("cannot withdraw more than balance", function () {
          expect(function () {
            expect(account.withdraw(15));
          }).toThrowError("Insufficient funds");
        });
    });

  

});
