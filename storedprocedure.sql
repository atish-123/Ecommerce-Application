CREATE DEFINER =`root` @`localhost` PROCEDURE `FundsTransfer` (
    amount float,
    accountto varchar(50),
    accountfrom varchar(50),
    timestamp DATETIME
) 
BEGIN
declare exit handler for sqlexception begin rollback;
END;
start transaction;
insert into transactions(toaccount,fromaccount,amount,createdat)
values(accountto, accountfrom, amount, timestamp);
update accounts
set balance=balance-amount
where accountnumber=accountfrom;
update accounts
set balance = balance+amount
where accountnumber = accountto;
commit;
END;

CREATE DEFINER = `root` @`localost` PROCEDURE `OrderPayment` (
amount float,
account_to varchar(50),
account_from varchar(50),
timestamp DATETIME,
order_id varchar(200)
)

BEGIN
DECLARE EXIT HANDLER FOR sqlexception begin rollback;
END;
start Transaction;
Insert Into  Transactions (to_account, from_account, amount,created_at)
values (account_to,account_from,amount,timestamp);
update accounts
set balance = balance-amount;
update accounts
set balance = balance +amount;
WHERE account_number = account_to;
update orders
SET status =success
WHERE ordr_id=order_id;

COMMIT;
END;
