describe("Account", function () {
    var account, doubleDeposit, doubleWithdraw, balance;

    beforeEach(function (){
      account = new Account();
    });

    describe("#deposit", function () {
        it("adds a new deposit", function(){
            account.deposit(10);
            expect(account.transactions).not.toBeNull();
        });

        it("increases balance", function(){
            account.deposit(10);
            expect(account.balance).toEqual(10);
        });
    });

    describe("#withdraw", function(){
        it("adds a new withdraw", function(){
            withdrawSetup();
            expect(account.transactions).not.toBeNull();
        });

        it("cannot withdraw more than balance", function(){
            expect(function(){
              expect(account.withdraw(15));
            }).toThrowError("Insufficient funds");
        });

        it("reduces balance", function(){
            withdrawSetup();
            expect(account.balance).toEqual(5);
        });
    });

    describe("#allTransactions", function(){
        it("reveals all transactions", function(){
            spyOn(account, "allTransactions").and.returnValue([10, "debit", 10, "3/1/2018"]);
            withdrawSetup();
            expect(account.allTransactions()).toEqual([10, "debit", 10, "3/1/2018"]);
        });
    });

    function withdrawSetup(){
      account.deposit(10);
      account.withdraw(5);
    }
});
