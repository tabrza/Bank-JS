(function(exports){
    function Withdraw(amount, type, date = Date.now(), balance){
        this.type = type;
        this.debit = amount;
        this.date = date;
        this.current_balance = balance;
    }

    exports.Withdraw = Withdraw;
})(this);
