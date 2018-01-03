(function(exports){
    function Withdraw(amount, type, balance, date = new Date()){
        this.debit = amount;
        this.type = type;
        this.current_balance = balance;
        this.date = date;
    }

    exports.Withdraw = Withdraw;
})(this);
