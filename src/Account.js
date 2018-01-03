(function (exports) {
    "use strict";
    function Account(balance= 0){
      this.transactions = [];
      this.balance = balance;
    }

    Account.prototype.deposit = function(amount){
      var that = this;
      var deposit = new Deposit(amount, this.balance, "credit");
      addAmount(amount);
      this.addTransaction(deposit);

      function addAmount(amount){
        that.balance += amount;
      }
    };

    Account.prototype.withdraw = function(amount){
      var checkAmountToBalance = amount > this.balance;
      if(checkAmountToBalance){
        throw new Error("Insufficient funds");
      }
      var withdraw = new Withdraw(amount, this.balance, "debit");
      var that = this;
      reduceAmount(amount)
      this.addTransaction(withdraw);


      function reduceAmount(amount){
        that.balance -= amount;
      }
    };

    Account.prototype.allTransactions = function(){
      return this.transactions;
    };

    Account.prototype.addTransaction = function(transaction){
      this.transactions.push(transaction);
    };

    exports.Account = Account;
})(this);
