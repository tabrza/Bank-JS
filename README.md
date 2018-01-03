# Bank App

A JavaScript console log application which allows the user to create a new account, add a deposit, a withdrawal and print out their statement. Should the user not have enough money in their account, they will receive an error with "Insufficient funds".

Using Jasmine, a complete TDD approach has been applied to test this project, including edge cases. Following the SRP methodology, each class is responsible for a single job.

#### To Run
In order to run this application, please clone it to your local desktop. No packages have been used and it can therefore be started immediately. Pls open SpecRunner.html to view the tests implemented and to interact with the code in the console.

#### Create Account
In order to get started, the user will first need to create an account.
> account = new Account();

#### Create Deposit
Now the user fills out the deposit 'slip' with the following information:
> deposit = new Deposit(10, "credit", 0, "03/01/2018");

#### Complete Deposit
In order for the deposit to enter the account, the bank verifies the amount and enters the deposit as follows:
> account.deposit(10);

#### Create Withdrawal
To following command needs to be entered in order to initiate withdrawal proceedings.
> withdraw = new Withdraw(5, "debit", 20, "03/01/2018");

#### Complete Withdrawal
For the bank to finalise the withdrawal, the amount will be re-entered as follows resulting in the deduction from the account:
> account.withdraw(5);

#### View Account
In order to view the transactions belonging to the account, the following commands should be entered, passing in the account details:
> accountView = new AccountView(account);

A view can now be rendered showing the details of withdrawals and deposits in the console:
>accountView.render();
