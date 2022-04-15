// eslint-disable-next-line max-classes-per-file
class GofThroneCharacter {
  state = "alive";

  constructor(name, family, age) {
    this.name = name;
    this.family = family;
    this.age = age;
  }

  // eslint-disable-next-line class-methods-use-this
  // lannisterFatherAndSon() { return Geoffrey + Jaime;}
}

class King extends GofThroneCharacter {
  super(name,family,age)

constructor(years_of_reign) {
  threatening() {
return "your´e all going to die!!!!!!!!!"
  }
  warning() {
    return " you killed my father....., Prepare to die!!!"
  }
}
}

const geoffrey = new King("Geoffrey", "Lannister", 14, true);

const jaime = new King("Jaime", "Lannister", 35, true);
// console.log(caprese.base);
// console.log(caprese);
const lannisterFatherAndSon = () => Geoffrey + Jaime;
lannisterFatherAndSon();
