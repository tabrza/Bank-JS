(function (exports) {
    function Deposit(amount, date = new Date(), balance) {
        this.credit = amount;
        this.date = date;
        this.current_balance = balance;
    }


    exports.Deposit = Deposit;
})(this);
