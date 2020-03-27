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
    this.res = [{
        bankName: "Газпромбанк",
        investName: "Ваш успех",
        currency: "RUB",
        incomeType: 6.22,
        sumMin: 50000,
        sumMax: Infinity,
        termMin: 12,
        termMax: 12,
        canDeposit: false
      },
      {
        bankName: "Кредит Европа Банк",
        investName: "Оптимальный на 2 года",
        currency: "RUB",
        incomeType: 6.45,
        sumMin: 100000,
        sumMax: Infinity,
        termMin: 24,
        termMax: 24,
        canDeposit: false
      },
      {
        bankName: "Банк Зенит",
        investName: "Праздничный 500+",
        currency: "RUB",
        incomeType: 6,
        sumMin: 30000,
        sumMax: Infinity,
        termMin: 17,
        termMax: 17,
        canDeposit: false
      },
      {
        bankName: "Еврофинанс Моснарбанк",
        investName: "Классический",
        currency: "RUB",
        incomeType: 6.95,
        sumMin: 30000,
        sumMax: Infinity,
        termMin: 12,
        termMax: 24,
        canDeposit: false
      },
      {
        bankName: "Джей энд Ти Банк",
        investName: "Магнус-Онлайн",
        currency: "RUB",
        incomeType: 6.8,
        sumMin: 100000,
        sumMax: Infinity,
        termMin: 6,
        termMax: 6,
        canDeposit: false
      },
      {
        bankName: "МТС Банк",
        investName: "В вашу пользу",
        currency: "RUB",
        incomeType: 6.75,
        sumMin: 50000,
        sumMax: Infinity,
        termMin: 12,
        termMax: 12,
        canDeposit: true
      },
      {
        bankName: "Эс-Би-Ай Банк",
        investName: "Свои правила Онлайн",
        currency: "RUB",
        incomeType: 6.7,
        sumMin: 30000,
        sumMax: 30000000,
        termMin: 24,
        termMax: 24,
        canDeposit: false
      },
      {
        bankName: "Банк Уралсиб",
        investName: "Прогноз отличный",
        currency: "RUB",
        incomeType: 6.7,
        sumMin: 100000,
        sumMax: Infinity,
        termMin: 37,
        termMax: 37,
        canDeposit: false
      },
      {
        bankName: "Инвестторгбанк",
        investName: "ИТБ-Постоянный доход",
        currency: "RUB",
        incomeType: 6.6,
        sumMin: 50000,
        sumMax: Infinity,
        termMin: 37,
        termMax: 37,
        canDeposit: false
      },
      {
        bankName: "Транскапиталбанк",
        investName: "ТКБ.Постоянный доход",
        currency: "RUB",
        incomeType: 6.6,
        sumMin: 50000,
        sumMax: Infinity,
        termMin: 37,
        termMax: 37,
        canDeposit: false
      },
      {
        bankName: "Совкомбанк",
        investName: "Зимний праздник с Халвой",
        currency: "RUB",
        incomeType: 5.6,
        sumMin: 50000,
        sumMax: Infinity,
        termMin: 2,
        termMax: 2,
        canDeposit: true
      },
      {
        bankName: "Агророс",
        investName: "Медовый месяц",
        currency: "RUB",
        incomeType: 5.51,
        sumMin: 20000,
        sumMax: Infinity,
        termMin: 1,
        termMax: 1,
        canDeposit: true
      },
      {
        bankName: "Росдорбанк",
        investName: "Онлайн-1",
        currency: "RUB",
        incomeType: 5.1,
        sumMin: 100000,
        sumMax: 150000000,
        termMin: 1,
        termMax: 1,
        canDeposit: true
      },
      {
        bankName: "Национальный Стандарт",
        investName: "Сберегательный стандарт",
        currency: "RUB",
        incomeType: 5.1,
        sumMin: 100000,
        sumMax: Infinity,
        termMin: 1,
        termMax: 3,
        canDeposit: true
      },
      {
        bankName: "Россия",
        investName: "Морозные узоры",
        currency: "RUB",
        incomeType: 5,
        sumMin: 100000,
        sumMax: Infinity,
        termMin: 1,
        termMax: 1,
        canDeposit: true
      },
      {
        bankName: "Кузнецкий Мост",
        investName: "Накопительный",
        currency: "RUB",
        incomeType: 4.85,
        sumMin: 50000,
        sumMax: Infinity,
        termMin: 1,
        termMax: 3,
        canDeposit: true
      },
      {
        bankName: "Тексбанк",
        investName: "Универсальный",
        currency: "RUB",
        incomeType: 4.6,
        sumMin: 10000,
        sumMax: Infinity,
        termMin: 1,
        termMax: 1,
        canDeposit: true
      },
      {
        bankName: "Морской Банк",
        investName: "Правильным курсом +",
        currency: "RUB",
        incomeType: 4.55,
        sumMin: 100000,
        sumMax: Infinity,
        termMin: 1,
        termMax: 3,
        canDeposit: true
      },
      {
        bankName: "Норвик Банк",
        investName: "Лаконичный",
        currency: "RUB",
        incomeType: 4.5,
        sumMin: 500,
        sumMax: 50000000,
        termMin: 1,
        termMax: 1,
        canDeposit: true
      },
      {
        bankName: "Промсельхозбанк",
        investName: "Конструктор",
        currency: "RUB",
        incomeType: 4.5,
        sumMin: 10000,
        sumMax: Infinity,
        termMin: 1,
        termMax: 3,
        canDeposit: true
      },
      {
        bankName: "Акибанк",
        investName: "Онлайн",
        currency: "RUB",
        incomeType: 6.5,
        sumMin: 1000,
        sumMax: Infinity,
        termMin: 6,
        termMax: 6,
        canDeposit: true
      },
      {
        bankName: "Банк БКФ",
        investName: "Ключевой стандарт",
        currency: "RUB",
        incomeType: 6.5,
        sumMin: 100000,
        sumMax: Infinity,
        termMin: 6,
        termMax: 13,
        canDeposit: true
      },
      {
        bankName: "Экспобанк",
        investName: "Специальный (в конце срока)",
        currency: "RUB",
        incomeType: 6.35,
        sumMin: 50000,
        sumMax: 10000000,
        termMin: 6,
        termMax: 6,
        canDeposit: true
      },
      {
        bankName: "Инвестторгбанк",
        investName: "ИТБ-Пополняемый",
        currency: "RUB",
        incomeType: 6.15,
        sumMin: 50000,
        sumMax: 30000000,
        termMin: 6,
        termMax: 6,
        canDeposit: true
      },
      {
        bankName: "Транскапиталбанк",
        investName: "ТКБ.Пополняемый",
        currency: "RUB",
        incomeType: 6.15,
        sumMin: 50000,
        sumMax: 30000000,
        termMin: 6,
        termMax: 6,
        canDeposit: true
      },
      {
        bankName: "Евроазиатский Инвестиционный Банк",
        investName: "Классика",
        currency: "RUB",
        incomeType: 6.1,
        sumMin: 100000,
        sumMax: Infinity,
        termMin: 6,
        termMax: 12,
        canDeposit: true
      },
      {
        bankName: "Тимер Банк",
        investName: "Надежный выбор",
        currency: "RUB",
        incomeType: 6,
        sumMin: 10000,
        sumMax: Infinity,
        termMin: 6,
        termMax: 6,
        canDeposit: true
      },
      {
        bankName: "Евразийский Банк",
        investName: "TURBO MAXIMUM",
        currency: "RUB",
        incomeType: 6,
        sumMin: 30000,
        sumMax: 299999,
        termMin: 6,
        termMax: 6,
        canDeposit: true
      },
      {
        bankName: "Таврический Банк",
        investName: "Достижимый (онлайн)",
        currency: "RUB",
        incomeType: 6,
        sumMin: 50000,
        sumMax: Infinity,
        termMin: 6,
        termMax: 6,
        canDeposit: true
      },
      {
        bankName: "Экспобанк",
        investName: "Юбилейный 25 (в конце срока)",
        currency: "RUB",
        incomeType: 6.5,
        sumMin: 100000,
        sumMax: 20000000,
        termMin: 12,
        termMax: 12,
        canDeposit: true
      },
      {
        bankName: "Крокус-Банк",
        investName: "Ежемесячный доход",
        currency: "RUB",
        incomeType: 6.35,
        sumMin: 50000,
        sumMax: Infinity,
        termMin: 12,
        termMax: 12,
        canDeposit: true
      },
      {
        bankName: "Промсельхозбанк",
        investName: "Ваш выбор",
        currency: "RUB",
        incomeType: 6.3,
        sumMin: 10000,
        sumMax: Infinity,
        termMin: 12,
        termMax: 12,
        canDeposit: true
      },
      {
        bankName: "Нацинвестпромбанк",
        investName: "Прибыльный",
        currency: "RUB",
        incomeType: 6.3,
        sumMin: 50000,
        sumMax: Infinity,
        termMin: 12,
        termMax: 12,
        canDeposit: true
      },
      {
        bankName: "Ишбанк",
        investName: "Накопительный",
        currency: "RUB",
        incomeType: 6.25,
        sumMin: 100000,
        sumMax: Infinity,
        termMin: 12,
        termMax: 12,
        canDeposit: true
      },
      {
        bankName: "Примсоцбанк",
        investName: "Новогодний чулок (333 дня)",
        currency: "RUB",
        incomeType: 6.2,
        sumMin: 10000,
        sumMax: Infinity,
        termMin: 11,
        termMax: 11,
        canDeposit: true
      },
      {
        bankName: "Еврофинанс Моснарбанк",
        investName: "Пополняемый",
        currency: "RUB",
        incomeType: 6.75,
        sumMin: 1000000,
        sumMax: Infinity,
        termMin: 12,
        termMax: 24,
        canDeposit: true
      },
      {
        bankName: "Евроазиатский Инвестиционный Банк",
        investName: "VIP",
        currency: "RUB",
        incomeType: 6.35,
        sumMin: 1000000,
        sumMax: Infinity,
        termMin: 9,
        termMax: 12,
        canDeposit: true
      },
      {
        bankName: "Российская Финансовая Корпорация",
        investName: "Универсальный",
        currency: "RUB",
        incomeType: 6,
        sumMin: 5000,
        sumMax: Infinity,
        termMin: 3,
        termMax: 3,
        canDeposit: true
      },
      {
        bankName: "Московский Кредитный Банк",
        investName: "МЕГА Онлайн",
        currency: "RUB",
        incomeType: 5.8,
        sumMin: 1000,
        sumMax: Infinity,
        termMin: 3,
        termMax: 5,
        canDeposit: true
      },
      {
        bankName: "Александровский",
        investName: "Черника 19/20",
        currency: "RUB",
        incomeType: 5.6,
        sumMin: 20000,
        sumMax: Infinity,
        termMin: 3,
        termMax: 3,
        canDeposit: true
      },
      {
        bankName: "Финанс Бизнес Банк",
        investName: "Мандариновый!",
        currency: "RUB",
        incomeType: 5.6,
        sumMin: 50000,
        sumMax: Infinity,
        termMin: 3,
        termMax: 3,
        canDeposit: true
      },
      {
        bankName: "ЦентроКредит",
        investName: "Доход Плюс",
        currency: "USD",
        incomeType: 1.15,
        sumMin: 5000,
        sumMax: Infinity,
        termMin: 3,
        termMax: 3,
        canDeposit: true
      },
      {
        bankName: "Совкомбанк",
        investName: "Удобный (в долларах)",
        currency: "USD",
        incomeType: 1,
        sumMin: 500,
        sumMax: Infinity,
        termMin: 3,
        termMax: 6,
        canDeposit: true
      },
      {
        bankName: "Веста",
        investName: "Веста - Копилка",
        currency: "USD",
        incomeType: 1,
        sumMin: 10000,
        sumMax: Infinity,
        termMin: 3,
        termMax: 6,
        canDeposit: true
      },
      {
        bankName: "Славия",
        investName: "Славный Капитал",
        currency: "USD",
        incomeType: 0.85,
        sumMin: 5000,
        sumMax: Infinity,
        termMin: 3,
        termMax: 4,
        canDeposit: true
      },
      {
        bankName: "Роскосмосбанк",
        investName: "Комфортный",
        currency: "USD",
        incomeType: 0.8,
        sumMin: 500,
        sumMax: Infinity,
        termMin: 3,
        termMax: 6,
        canDeposit: true
      },
      {
        bankName: "ФорБанк",
        investName: "Срочный накопительный",
        currency: "USD",
        incomeType: 0.8,
        sumMin: 10000,
        sumMax: 500000,
        termMin: 3,
        termMax: 3,
        canDeposit: true
      },
      {
        bankName: "Московский Областной Банк",
        investName: "Гарантированный доллар",
        currency: "USD",
        incomeType: 0.75,
        sumMin: 50,
        sumMax: Infinity,
        termMin: 4,
        termMax: 4,
        canDeposit: true
      },
      {
        bankName: "Объединенный Резервный Банк",
        investName: "ОРБ-Накопительный (в конце срока)",
        currency: "USD",
        incomeType: 1.6,
        sumMin: 1000,
        sumMax: Infinity,
        termMin: 12,
        termMax: 12,
        canDeposit: true
      },
      {
        bankName: "Банк Агора",
        investName: "Срочный",
        currency: "USD",
        incomeType: 1.5,
        sumMin: 1000,
        sumMax: Infinity,
        termMin: 12,
        termMax: 12,
        canDeposit: true
      },
      {
        bankName: "Тинькофф Банк",
        investName: "СмартВклад (с повышенной ставкой)",
        currency: "USD",
        incomeType: 1.5,
        sumMin: 1000,
        sumMax: Infinity,
        termMin: 12,
        termMax: 12,
        canDeposit: true
      },
      {
        bankName: "Первый Инвестиционный Банк",
        investName: "Закон сохранения",
        currency: "USD",
        incomeType: 1.5,
        sumMin: 1000,
        sumMax: Infinity,
        termMin: 12,
        termMax: 12,
        canDeposit: true
      },
      {
        bankName: "Новый Век",
        investName: "Сберегательный",
        currency: "USD",
        incomeType: 1.5,
        sumMin: 5000,
        sumMax: 20000,
        termMin: 12,
        termMax: 12,
        canDeposit: true
      }
    ];
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