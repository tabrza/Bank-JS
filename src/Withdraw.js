(function(exports){
    function Withdraw(amount, date = Date.now()){
        this.balance = amount;
        this.date = date;
    }

    exports.Withdraw = Withdraw;
})(this);
