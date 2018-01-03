describe("AccountView", function(){
  var accountView, deposit, withdraw, account;

  // beforeEach( function () {
  //   double = {
  //     deposit: function(amount, type, balance, date) {
  //       return [amount, type, balance, date];
  //     },
  //     withdraw: function(amount, type, balance, date) {
  //       return [amount, type, balance, date];
  //     },
  //     addTransaction: function(value){
  //       return value;
  //     },
  //   };
  //   deposit = double.deposit(20, "credit", 0, "03/01/2018");
  //   withdraw = double.withdraw(5, "debit", 20, "03/01/2018");
  //   first = double.addTransaction(deposit);
  //   second = double.addTransaction(withdraw);
  //   console.log(double)
  //   account = [];
  //   account.push(first);
  //   account.push(second);
  //   console.log(account)
  //   accountView = new AccountView(account);
  //   console.log(accountView)
  // });

  beforeEach ( function () {
    account = new Account();
    account.deposit(10);
    account.withdraw(5);
    deposit = new Deposit(10, "credit", 0, "03/01/2018");
    withdraw = new Withdraw(5, "debit", 20, "03/01/2018");
    accountView = new AccountView(account);
  });


  describe("#render", function(){
    it("renders account statement", function(){
      expect(accountView.render()).toContain('credit');
      expect(accountView.render()).toContain('debit');
    });
  });


});
