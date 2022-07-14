// Task 1.
// Написать функцию, которая найдет и выведет в консоль юзеров, зарегистрированных 09.10.2021 и 10.10.2021)


const users = [
    {
        firstName: 'John',
        lastName: 'Caper',
        phone: '7436676737634',
        registrationDate: '12.10.2021'
    },
    {
        firstName: 'Clark',
        lastName: 'Kent',
        phone: '4346676737634',
        registrationDate: '16.09.2021'
    },
    {
        firstName: 'Tony',
        lastName: 'Stark',
        phone: '7436698337634',
        registrationDate: '11.10.2021'
    },
    {
        firstName: 'Bruce',
        lastName: 'Wayne',
        phone: '1111176737634',
        registrationDate: '09.10.2021'
    },
    {
        firstName: 'Star',
        lastName: 'Lord',
        phone: '7439374737634',
        registrationDate: '10.10.2021'
    },
    {
        firstName: 'Kate',
        lastName: 'Bishop',
        phone: '7436693647634',
        registrationDate: '11.10.2021'
    },
    {
        firstName: 'Jerry',
        lastName: 'James',
        phone: '7409048737634',
        registrationDate: '10.10.2021'
    },
    {
        firstName: 'Jeremy',
        lastName: 'Clarkson',
        phone: '743667600289334',
        registrationDate: '16.10.2020'
    },
    {
        firstName: 'Robert',
        lastName: 'Patrik',
        phone: '7436676730093',
        registrationDate: '10.10.2020'
    },
    {
        firstName: 'Jonny',
        lastName: 'Sins',
        phone: '74923982737634',
        registrationDate: '01.01.2021'
    },
    {
        firstName: 'Andrew',
        lastName: 'Garfield',
        phone: '743667988344',
        registrationDate: '09.10.2019'
    },
    {
        firstName: 'Jane',
        lastName: 'Foster',
        phone: '74368783427634',
        registrationDate: '09.10.2019'
    },
    {
        firstName: 'Rick',
        lastName: 'Smith',
        phone: '700000037634',
        registrationDate: '12.10.2021'
    },
];

const usersUnique = users.filter(el => (el.registrationDate == '09.10.2021' || el.registrationDate == '10.10.2021'))
console.log(usersUnique)


// Task 2*** Откройте в VSCode task2.json файл. Скопируйте из него JSONку, вставьте в свой код (присвоив в переменную).
// Дан массив объектов. Каждый объект является идентификационной карточкой человека. 
// Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции,
//  описанной в задании

const fs = require("fs");
let user = JSON.parse(fs.readFileSync("task2.json"))

function uniqueFunc1() {
    let unique1 = [];
    user.forEach(el => {
        if(!unique1.includes(JSON.stringify(el))) unique1.push(JSON.stringify(el))
    })
    return unique1.map(el => JSON.parse(el))
}
console.log(uniqueFunc1())


// Task 2*
// Нам нужно хранить только уникальные значения в этом массиве.
// Реализуйте функцию, которая будет выполнять эту работу.

let unique = Array.from(new Set(user.map((item) => JSON.stringify(item)))).map((item) => JSON.parse(item));
console.log(unique);

// Task 3**
// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников.
//  Для предприятия посчитать сумму всех сотрудников во всех отделах.

const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]

  const employeesCountHelper = function (number) {
   lastNumber = number.toString().split('').pop();
   if (lastNumber && number) {
      if(lastNumber == 1) return `${number} сотрудник`;
      else if (lastNumber > 1 && lastNumber < 5) return `${number} сотрудника`
      else return `${number} сотрудников`;
    } else return "нет сотрудников";
   };

   const getStructure = function(company) {
       company.forEach((comp) => {
        let depts = [];
        let count = 0;
        depts.push(comp.name);
        if(comp.departments) {
            comp.departments.forEach((dept) => {
               count += dept.employees_count;
               depts.push(` - ${dept.name} ${employeesCountHelper(dept.employees_count)}`);
            })
            depts[0] += `(${employeesCountHelper(count)})`;
        }
        console.log(depts.join(`\n `));
     });
 };
 getStructure(enterprises)
