// const atTheOldToad = {
//   potions: [],

//   addPotion(name) {
//     if (this.positions.includes(name)) {
//       console.log(`${name} exists`);
//       return;
//     }

//     this.potions.push(name);
//     console.log(this.potions);
//   },

//   updatePotion(name, newName) {
//     const nameIndex = this.potions.indexOf(name);
//     if (nameIndex < 0) {
//       console.log(`${name} does not exist`);
//       return;
//     }

//     newName !== null
//       ? this.potions.splice(nameIndex, 1, newName)
//       : this.potions.splice(nameIndex, 1);

//     console.log(this.potions);
//   },

//   removePotion(name) {
//     updateCourse(name, null);
//   },
// };

// addPotion("Express");
// addPotion("HTML");
// removePotion("React");
// updatePotion("Express", "NestJS");

// const atTheOldToad = {
//   potions: [],
//   getItems() {
//     return this.potions;
//   },

//   add(product) {
//     for (const potion of this.potions) {
//       if (potion.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }
//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     this.potions.push(newProduct);
//   },

//   remove(productName) {
//     const { potions } = this;

//     for (let i = 0; i < potions.length; i += 1) {
//       const potion = potions[i];

//       if (productName === potion.name) {
//         console.log("нашли такой продукт ", productName);
//         console.log("индекс: ", i);

//         potions.splice(i, 1);
//       }
//     }
//   },

//   update(productName, newName) {
//     const { potions } = this;

//     for (let i = 0; i < potions.length; i += 1) {
//       const potion = potions[i];

//       if (productName === potion.name) {
//         console.log("нашли такой продукт ", productName);
//         console.log("индекс: ", i);

//         potions.splice(i, 1, newName);
//       }
//       potions.splice(i, 1);
//     }
//   },

//   // update(productName, newName) {
//   //   const { potions } = this;
//   //   const productNameIndex = potions.name.indexOf(productName);
//   //   console.log(productNameIndex);
//   //   if (productNameIndex < 0) {
//   //     console.log(`${productName} does not exist`);
//   //     return;
//   //   }
//   //   newName !== null
//   //     ? potions.splice(productNameIndex, 1, newName)
//   //     : potions.splice(productNameIndex, 1);

//   //   console.log(potions);
//   // },
// };

// console.log(atTheOldToad.getItems());

// atTheOldToad.add({ name: "1", price: 50 });
// atTheOldToad.add({ name: "2", price: 60 });
// atTheOldToad.add({ name: "3", price: 60 });
// atTheOldToad.add({ name: "4", price: 60 });
// atTheOldToad.add({ name: "5", price: 110 });

// atTheOldToad.update("2", "3");
// console.log(atTheOldToad.update);

// --------------------------------------------------
// Anatoliy Beychuk

// то что закомментировано то ваш код

// обновляю продукт если он есть, если нету то не создаю новый,
//   вроде для этого есть метод add()

// update(productName, newName) {
//         const { potions } = this;

//         for (let potion of potions) {
//             if (potion.name === productName) potion.name = newName;
//         }
//     }

// Вот метод поиска, если нашел объект по имени, то возвращает сам объект,
//   несли не на то возвращает null.Ну а там можно подправить в
// зависимости от задачи

// find(productName) {
//         const { potions } = this;

//         for (const potion of potions) {
//             if (potion.name === productName) return potion;
//         }
//         return null;
//     }
// -------------------------------------------------------------
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     this.potions.push(potionName);

//     // Change code below this line
//     // Change code above this line
//   },
// };
// atTheOldToad.addPotion("Invisibility");
// console.log(atTheOldToad.potions);

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const { potions } = this;

//     for (let i = 0; i < potions.length; i += 1) {
//       const nameIndex = potions.indexOf(potionName);
//       console.log(nameIndex);
//       if (nameIndex < 0) {
//         return;
//       }
//       potions.splice(nameIndex, 1);
//       console.log(potions);
//     }
//     // Change code above this line
//   },
// };
// atTheOldToad.removePotion("Speed potion");
// --------------------------------------------------------

// Дополни метод updatePotionName(oldName, newName) так, чтобы он
// обновлял название зелья с oldName на newName, в массиве зелий
// в свойстве potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const { potions } = this;

//     const nameIndex = potions.indexOf(oldName);
//     console.log(nameIndex);
//     if (nameIndex < 0) {
//       console.log(`${oldName} does not exist`);
//       return;
//     }

//     newName !== null
//       ? potions.splice(nameIndex, 1, newName)
//       : potions.splice(nameIndex, 1);

//     console.log(potions);

//     // Change code above this line
//   },
// };
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");

// -----------------------------------------------------

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },

  addPotion(potionName) {
    for (const potion of this.potions) {
      // console.log(potion);
      if (potion.name === potionName.name) {
        // potion.quantity += 1;
        // return;
      }
    }
    const newProduct = {
      ...potionName,
      // quantity: 1,
    };
    // console.table(newProduct);

    this.potions.push(newProduct);
    // console.table(this.potions);
  },

  removePotion(potionName) {
    const { potions } = this;

    for (let i = 0; i < potions.length; i += 1) {
      const potion = potions[i];
      // console.log(potion);

      if (potionName === potion.name) {
        console.log("нашли такой продукт ", potionName);
        console.log("индекс: ", i);

        potions.splice(i, 1);
      }
    }
    // console.table(potions);
  },

  updatePotionName(oldName, newName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      const potion = potions[i];
      console.log(potion);

      if (oldName === potion.name) {
        console.log("нашли такой продукт ", oldName);
        console.log("индекс: ", i);
        potion.name = newName;

        // potions.splice(i, 1, newName);
      }
    }
    console.table(potions);
  },
  // Change code above this line
};
// atTheOldToad.getPotions();
// console.log(atTheOldToad.getPotions());

// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// console.log(atTheOldToad.getPotions());

// console.table(atTheOldToad.removePotion("Speed potion"));
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
console.table(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));

// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.
// Тесты
// Объявлена переменная atTheOldToad
// Значение переменной atTheOldToad это объект
// Значение свойства atTheOldToad.getPotions это метод объекта
// Вызов метода atTheOldToad.getPotions() для исходного объекта возвращает [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
// Значение свойства atTheOldToad.addPotion это метод объекта.
// Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: "Invisibility", price: 620 }), в массиве potions последним элементом будет этот объект
// Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: "Power potion", price: 270 }), в массиве potions последним элементом будет этот объект
// Значение свойства atTheOldToad.removePotion это метод объекта
// Для исходного объекта после вызова метода atTheOldToad.removePotion("Dragon breath"), в свойстве potions будет массив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// Для исходного объекта после вызова метода atTheOldToad.removePotion("Speed potion"), в свойстве potions будет массив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
// Значение свойства atTheOldToad.updatePotionName это метод объекта
// Для исходного объекта после вызова метода atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// Для исходного объекта после вызова метода atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"), в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]
