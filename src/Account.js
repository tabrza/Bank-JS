(function(exports){
    function Account(balance = 0){
      this.transactions = [];
      this.balance = balance;
    }

    Account.prototype.deposit = function(amount){
      var deposit = new Deposit(amount);
      this.balance += amount;
      this.transactions.push(deposit);
    };

    Account.prototype.withdraw = function(amount){
      if(amount > this.balance){
        throw new Error("Insufficient funds");
      }
      var withdraw = new Withdraw(amount);
      this.transactions.push(withdraw);
    };

    Account.prototype.allTransactions = function(){
      return this.transactions;
    };

    exports.Account = Account;
})(this);
