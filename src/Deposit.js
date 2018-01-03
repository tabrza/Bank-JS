(function (exports) {
    function Deposit(amount, type, date = new Date(), balance) {
        this.type = type;
        this.credit = amount;
        this.date = date;
        this.current_balance = balance;
    }

    exports.Deposit = Deposit;
})(this);
