(function (exports) {
    function Deposit(amount, date = new Date()) {
        this.balance = amount;
        this.date = date;
    }


    exports.Deposit = Deposit;
})(this);
