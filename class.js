class Human {
  gender = 'male';

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = 'Emir';
  gender = 'female';

  printName = () => {
    console.log(this.name);
  };
}

export const person = new Person();
