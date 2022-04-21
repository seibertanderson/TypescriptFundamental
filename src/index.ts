let x: number = 5;

/** Inferencia x Annotation */
// não precisa colocar o tipo mas é automaticamente inferido como numero
let y = 12;
// Annotation quando é feita a tipagem dos dados
let z: number = 12;

// Tipos Básicos
let firstName: string = "asd";
let code: number = 12;
let active: boolean = true;

let array = [1, 2, 3];

let object = {
  detail: {
    id: 1,
    name: "dd",
  },
  isActive: false,
};

const user: { name: string; age: number } = {
  name: "Anderson",
  age: 10,
};

// Tuple
let tuple: [number, string, string[]];
tuple = [1, "asd", ["asd", "asd"]];

//any type, não é uma boa prática
let a: any = 0;
a = "teste";
a = 3;

// union type, unir tipos para criar um outro tipo mais complexo
let id: string | number = "10";
id = 200;

// type alias
type myIdType = number | string;
const userId: myIdType = 10;
const userId2: myIdType = "2";

// enum
enum Size {
  P = "Pequeno",
  M = "Médio",
  G = "Grande",
}

const camisa = {
  name: "Camisa Gola V",
  size: Size.G,
};

// literal types - determina um valor como o tipo, só aceita esse valor
let teste: "algum valor inalteravel" | null;

// Funções
function sum(a: number, b: number) {
  return a + b;
}

// função com tipo de retorno string
function SayHelloTo(name: string): string {
  return `Hello ${name}`;
}

// função que não retorna nada
function RetornaNada(msg: string): void {
  console.log(msg);
}

// função com parametro opcional
function Greeting(name: string, greet?: string): void {
  if (greet) {
    console.log(`Olá ${greet} ${name}`);
    return;
  } else {
    console.log(`Olá ${name}`);
  }
}

// interfaces
interface MathFunctionParams {
  n1: number;
  n2: number;
  name?: string;
}

function sumNumbers(nums: MathFunctionParams) {
  return nums.n1 + nums.n2;
}
sumNumbers({ n1: 2, n2: 3 });

// Narrowing
// Checagem de Tipos
function doSomething(info: number | boolean) {
  if (typeof info === "number") {
    console.log("o numero é " + info);
    return;
  }
  console.log("Nenhum numero foi passado");
}
doSomething(10);
doSomething(true);

// Generics
function showArrayItems<T>(arr: T[]) {
  arr.forEach((item) => {
    console.log("Items" + item);
  });
}
showArrayItems([1, 2, 3]);
showArrayItems(["a", "b"]);

// Classes
class User {
  name;
  role;
  isActive;

  constructor(name: string, role: string, isActive: boolean) {
    this.name = name;
    this.role = role;
    this.isActive = isActive;
  }

  showUserName() {
    console.log(`O nome do usuário é ${this.name}`);
  }

  showUserRole() {
    console.log(`O usuário ${this.name} é ${this.role}`);
  }
}
const Zeca = new User("Zeca", "Admin", true);
Zeca.showUserName();
Zeca.showUserRole();

// Interfaces em Classes
interface ICrud<T> {
  fazNada(): void;
  inserir(): T;
  alterar(): T;
  deletar(): T;
  listar(): T[];
}
class UserCrud implements ICrud<User> {
  fazNada(): void {
    console.log("Não faz absolutamente nada");
  }
  inserir(): User {
    // LOGICA
    return new User("Anderson", "Admin", true);
  }
  alterar(): User {
    // LOGICA
    return new User("Anderson", "Admin", true);
  }
  deletar(): User {
    // LOGICA
    return new User("Anderson", "Admin", true);
  }
  listar(): User[] {
    let lista: User[] = [
      new User("Anderson", "Admin", true),
      new User("Ronaldo", "Superadmin", true),
    ];
    return lista;
  }
}

// Herança - Usa a classe User criada lá em cima, vai herdar os atributos
class SuperUser extends User {
  salary;
  constructor(name: string, role: string, isActive: boolean, salary: number) {
    super(name, role, isActive);
    this.salary = salary;
  }
}
const superUser = new SuperUser("John", "SuperUser", true, 15000);

// Decorators - Para funcionar precisa
// descomentar no arquivo de configuração
// experimentalDecorators

// Contructor decorator
function BaseParameters() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      id = Math.random();
      createdAt = new Date();
    };
  };
}

@BaseParameters()
class Person {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const sam = new Person("Sam");
console.log(sam);
