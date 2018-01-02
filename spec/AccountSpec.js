describe("Account", function () {
    var account;

    beforeEach(function (){
      account = new Account();
    });

    describe("#deposit", function () {
        it("adds a new deposit", function(){
            account.deposit(10);
            expect(account.transactions[0].balance).toEqual(10);
        });
    });

    describe("#withdraw", function(){
        it("adds a new withdraw", function(){
            withdrawSetup();
            expect(account.transactions[1].balance).toEqual(5);
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
          //add date for current transaction
            withdrawSetup();
            expect(account.allTransactions()[0].balance).toEqual(10);
            expect(account.allTransactions()[1].balance).toEqual(5);
        });
    });


    function withdrawSetup(){
      account.deposit(10);
      account.withdraw(5);
    }
});
