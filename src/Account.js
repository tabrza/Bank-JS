function Account() {
    "use strict";
    this.balance = 0;
}


Account.prototype.deposit = function (amount) {
    "use strict";
    this.balance += amount;
};
