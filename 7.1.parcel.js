let accountbBalance = 100;
let smsCode = "A001DFX0";
let parcelLocker = [0, 0, 0, 4, 0];
let lockerCode = "A001DFX0";

if (smsCode === lockerCode && accountbBalance >= 100) {
  console.log(
    `Вы получили посылку из ячейки ${parcelLocker[3]} и ваш счет составляет: ${
      accountbBalance - 100
    } руб.`
  );
} else if (smsCode !== lockerCode) {
  console.log(`Вы ввели неправильный код`);
} else if (accountbBalance < 100) {
  console.log(`На вашем счете недостаточно средств`);
}
