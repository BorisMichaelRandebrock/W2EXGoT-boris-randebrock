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

const Geoffrey = new GofThroneCharacter("Geoffrey", "Lannister", 14, true);

const Jaime = new GofThroneCharacter("Jaime", "Lannister", 35, true);
// console.log(caprese.base);
// console.log(caprese);
const lannisterFatherAndSon = () => Geoffrey + Jaime;
lannisterFatherAndSon();
