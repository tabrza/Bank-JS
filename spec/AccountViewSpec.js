describe("AccountView", function(){

  beforeEach( function () {
    var deposit = new Deposit(20, "credit", 0);
    var withdraw = new Withdraw(5, "debit", 20);
    account = new Account();
    account.addTransaction(deposit);
    account.addTransaction(withdraw);
    accountView = new AccountView(account);
  });


  describe("#render", function(){
    it("renders account statement", function(){
      expect(accountView.render()).toContain('credit');
      expect(accountView.render()).toContain('debit');
    });
  });


});
