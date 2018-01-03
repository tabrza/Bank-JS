(function(exports){
    function AccountView(account){
        this.account = account;
    }


    AccountView.prototype.render = function(){
      list = [];
      for (var i = 0; i < this.account.transactions.length; i++){
        list.push(`<li><div>
                  Date ${this.account.transactions[i].date}
                  Type ${this.account.transactions[i].type}
                  Credit ${this.account.transactions[i].credit}
                  Debit ${this.account.transactions[i].debit}
                  Balance ${this.account.transactions[i].current_balance}
                  </div></li>`)
      }
      return ("<ul>" + list.join(' ') + "</ul>");
    };

    exports.AccountView = AccountView;
})(this);
