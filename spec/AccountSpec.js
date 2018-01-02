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
            account.withdraw(5);
            expect(account.transactions[0].balance).toEqual(5);
        });
    });
});
