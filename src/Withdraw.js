(function(exports){
    function Withdraw(amount, date = Date.now(), balance){
        this.type = "debit";
        this.debit = amount;
        this.date = date;
        this.current_balance = balance;
    }

    exports.Withdraw = Withdraw;
})(this);
