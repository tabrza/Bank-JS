(function (exports) {
    function Deposit(amount, type, balance, date = new Date()) {
        this.credit = amount;
        this.type = type;
        this.current_balance = balance;
        this.date = date;
    }

    exports.Deposit = Deposit;
})(this);
