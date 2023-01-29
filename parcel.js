let accountbBalance = 100;
let smsCode = "A001DFX0";
let parcelLocker = [0, 0, 0, 4, 0];
let lockerCode = "A001DFX0";

if (lockerCode == smsCode) {
  console.log(
    `Вы получили посылку из ячейки ${parcelLocker[3]} и ваш счет составляет: ${
      accountbBalance - 100
    } руб.`
  );
} 
