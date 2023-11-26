function BankAccount(acNum,name,type,balance){
    this.accountNumber=acNum;
    this.name=name;
    this.type=type;
    this.balance=balance || 0;
}


BankAccount.prototype.diposit=function(balance){
    this.balance+=balance
    console.log(`${balance} is diposited in your ${this.type} account . Current Balance is ${this.balance}`);

}
BankAccount.prototype.withdraw=function(balance){
    this.balance-=balance
    console.log(`${balance} is withdrawled from your ${this.type} account . Current Balance is ${this.balance}`);

}
BankAccount.prototype.checkBalance=function(){
    console.log(`Your account balance is ${this.balance} rupess.`);
}
 
BankAccount.prototype.isActive=function(){
    if(this.balance>=1000){
        console.log("This account is Active");
         return true;
    }else{
        console.log("This account is Inactive");
        console.log(false);
    }
}
let ac1=new BankAccount(37700100013615,"Ayush","Savings",75000);
let ac2=new BankAccount(37700100013345,"Ankush","Savings",35000);
let ac3=new BankAccount(37700100013655,"Aman","Savings",54000);
let ac4=new BankAccount(37700100013875,"Nishu","Savings",1500);
let ac5=new BankAccount(37700100013756,"Trapti","Savings",50000);

console.log(ac1,ac2,ac3,ac4,ac5); 
ac1.diposit(25000) 
console.log(ac1); 
ac2.withdraw(10000)
console.log(ac2); 
ac3.checkBalance()
ac4.isActive()
let all=[ac1,ac2,ac3,ac4,ac5]
let total=0;
BankAccount.prototype.getTotalBalance=function(){
    total=ac1.balance+ac2.balance+ac3.balance+ac4.balance+ac5.balance;
    return total;
}
let total_amount=ac1.getTotalBalance() 
console.log(total_amount);
 