function Account() {
    "use strict";
    this.balance = 0;
}


Account.prototype.deposit = function (amount) {
    "use strict";
    this.balance += amount;
};

Account.prototype.withdraw = function (amount) {
    "use strict";
    if (amount > this.balance) {
        throw new Error("Insufficient funds");
    }
    this.balance -= amount;
};
