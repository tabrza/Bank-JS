(function(exports){
    function Account(){
      this.transactions = [];
    }

    Account.prototype.deposit = function(amount){
      var deposit = new Deposit(amount);
      this.transactions.push(deposit);
    };

    Account.prototype.withdraw = function(amount){
      var withdraw = new Withdraw(amount);
      this.transactions.push(withdraw);
    };
     
    exports.Account = Account;
})(this);
