//class creates an object based on user input
class Deposit {
  constructor(deposit, monthIcrease, period, currency, canDeposit) {
    this.deposit = deposit;
    this.monthIcrease = monthIcrease;
    this.period = period;
    this.currency = currency;
    this.canDeposit = monthIcrease > 0;
  }
}

//class contains all Bank products
class BankProduct {
  constructor() {
    this.res = banks;
  }
}

//class selects the most suitable offer
class Calculator {
  constructor() {}

  //function selects the most suitable offers
  calcFitted(startDoc, monthIncreaseDoc, periodDoc, bestOffers) {
    let total = startDoc;
    let maxOffer = this.getMaxIncomeBank(bestOffers);
    for (let bank of maxOffer) {
      total = startDoc;
      for (let i = 0; i < periodDoc; i++) {
        total += (total * bank.incomeType) / 12 / 100;
        if (i != periodDoc - 1) {
          total += monthIncreaseDoc;
        }
      }
      bank.total = Math.round(total);
    }
    return total;
  }

  //function finds all suitable offers based user input
  findOffers(client) {
    let bank = new BankProduct();
    let mainDiv = document.querySelector('.main');
    const fitOffer = bank.res.filter(b => {
      if (client.canDeposit) {
        if (client.deposit >= b.sumMin && client.deposit <= b.sumMax && client.canDeposit == b.canDeposit && client.period >= b.termMin && client.period <= b.termMax && client.currency == b.currency) {
          return b;
        }
      } else {
        if (client.deposit > b.sumMin && client.deposit < b.sumMax && client.period >= b.termMin && client.period <= b.termMax && client.currency == b.currency) {
          return b;
        }
      }
    });
    if (fitOffer.length == 0) {
      mainDiv.innerHTML = "Нет подходящих вариантов";
      //alert("Нет подходящих вариантов");
      return false;
    }
    return fitOffer;
  }

  //function finds the largest percent
  getMaxIncomeBank(bestOffers) {
    let maxIncome = bestOffers.reduce((prev, cur) => {
      if (prev.incomeType > cur.incomeType) {
        return prev;
      }
      return cur;
    });
    let maxIncomeBank = bestOffers.filter(b => b.incomeType == maxIncome.incomeType);
    return maxIncomeBank;
  }
}

//class shows all the most suitable offers
class Application {
  constructor() {
    this.offer = [];
    this.startDoc = document.getElementById("start");
    this.monthIncreaseDoc = document.getElementById("monthIncrease");
    this.periodDoc = document.getElementById("period");
    this.currency = document.querySelector("#currency");
    this.btn = document.getElementById("btn");
    const self = this;
    this.btn.addEventListener("click", function () {
      if (self.checkInput(+self.startDoc.value, +self.monthIncreaseDoc.value, +self.periodDoc.value)) {
        let e = currency.options[currency.selectedIndex].value;
        let client = new Deposit(+self.startDoc.value, +self.monthIncreaseDoc.value, +self.periodDoc.value, e);
        let calc = new Calculator();
        let bestOffers = calc.findOffers(client);
        if (bestOffers) {
          calc.calcFitted(+self.startDoc.value, +self.monthIncreaseDoc.value, +self.periodDoc.value, bestOffers);
          self.offer = Array.from(calc.getMaxIncomeBank(bestOffers));
          self.createTable();
        }
      }
      return false;
    });
  }

  createTable() {
    let main = document.querySelector(".main");
    let arr = [];
    arr[0] = '<table class="offer"><tr><th>Название банка</th><th>Вклад</th><th>Процент</th><th>Итоговая сумма</th></tr>';
    for (let i = 0; i < this.offer.length; i++) {
      let bankName = this.offer[i].bankName;
      let investName = this.offer[i].investName;
      let incomeType = this.offer[i].incomeType;
      let total = this.offer[i].total;
      arr[i + 1] = this.getRowCode(bankName, investName, incomeType, total, "tr" + i);
    }
    main.innerHTML = "<table>" + arr.join("") + "</table>";
  }

  //function creates rows of table
  getRowCode(bankName, investName, incomeType, total, id) {
    const name = "<td>" + bankName + "</td>";
    const invest = "<td>" + investName + "</td>";
    const income = "<td>" + incomeType + "</td>";
    const price = "<td>" + total + "</td>";

    let row = `<tr class="active" id=${id}>` + name + invest + income + price + "</tr>";
    return row;
  }

  checkInput(startDoc, monthIncreaseDoc, periodDoc) {
    let mainDiv = document.querySelector('.main');
    if (startDoc == "" && monthIncreaseDoc == "" && periodDoc == "") {
      mainDiv.innerHTML = "";
      alert("Заполните пожалуйста поля!");
      return false;
    }
    if (startDoc <= 0) {
      mainDiv.innerHTML = "";
      alert("Начальная сумма должна быть больше нуля");
      return false;
    }
    if (monthIncreaseDoc < 0) {
      mainDiv.innerHTML = "";
      alert("Сумма ежемесячного пополнения должна быть больше или равна нулю");
      return false;
    }
    if (periodDoc <= 0) {
      mainDiv.innerHTML = "";
      alert("Срок вклада должна быть больше нуля");
      return false;
    }
    return true;
  }
}

new Application();