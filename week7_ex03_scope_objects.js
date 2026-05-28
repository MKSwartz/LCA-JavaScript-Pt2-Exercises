// TODO: Create a global variable called globalCount.

let globalCount;

// TODO: Create a function that demonstrates local scope.

const localScope = () => {
  let localCount;
};

// TODO: Create a function that tries to modify both variables.

const varModify = (newGlobalVar, newLocalVar) => {
  globalCount = newGlobalVar;
  localScope() = newLocalVar; //doesn't work. don't know how to do it.
}

// TODO: Create a Student constructor function.

class Student {
  constructor(first, last, age, grade) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.grade = grade;
  }
}
// my code editor made this change based on current standards for JavaScript
// my orgininal code:
function Student(first, last, age, grade) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.grade = grade;
}

// TODO: Create several student instances.

const student1 = new Student("Jorja", "Smith", 15 , 9)
const student2 = new Student("Henry", "Danger", 14, 8)
const student3 = new Student("Mercutio", "Guertio", 17, 11)

// TODO: Create an object literal with nested properties.

const teacher = {
  name: "Bruce",
  surname: "Banner",
  subjects: {
    primarySubject: "Mathematics",
    secondarySubject: "Mechanics and Robotics",
    tertiarySubject: "Physical Science"
  }
};
