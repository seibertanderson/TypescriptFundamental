"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 5;
/** Inferencia x Annotation */
// não precisa colocar o tipo mas é automaticamente inferido como numero
let y = 12;
// Annotation quando é feita a tipagem dos dados
let z = 12;
// Tipos Básicos
let firstName = "asd";
let code = 12;
let active = true;
let array = [1, 2, 3];
let object = {
    detail: {
        id: 1,
        name: "dd",
    },
    isActive: false,
};
const user = {
    name: "Anderson",
    age: 10,
};
// Tuple
let tuple;
tuple = [1, "asd", ["asd", "asd"]];
//any type, não é uma boa prática
let a = 0;
a = "teste";
a = 3;
// union type, unir tipos para criar um outro tipo mais complexo
let id = "10";
id = 200;
const userId = 10;
const userId2 = "2";
// enum
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa Gola V",
    size: Size.G,
};
// literal types - determina um valor como o tipo, só aceita esse valor
let teste;
// Funções
function sum(a, b) {
    return a + b;
}
// função com tipo de retorno string
function SayHelloTo(name) {
    return `Hello ${name}`;
}
// função que não retorna nada
function RetornaNada(msg) {
    console.log(msg);
}
// função com parametro opcional
function Greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    else {
        console.log(`Olá ${name}`);
    }
}
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
sumNumbers({ n1: 2, n2: 3 });
// Narrowing
// Checagem de Tipos
function doSomething(info) {
    if (typeof info === "number") {
        console.log("o numero é " + info);
        return;
    }
    console.log("Nenhum numero foi passado");
}
doSomething(10);
doSomething(true);
// Generics
function showArrayItems(arr) {
    arr.forEach((item) => {
        console.log("Items" + item);
    });
}
showArrayItems([1, 2, 3]);
showArrayItems(["a", "b"]);
// Classes
class User {
    constructor(name, role, isActive) {
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
class UserCrud {
    fazNada() {
        console.log("Não faz absolutamente nada");
    }
    inserir() {
        // LOGICA
        return new User("Anderson", "Admin", true);
    }
    alterar() {
        // LOGICA
        return new User("Anderson", "Admin", true);
    }
    deletar() {
        // LOGICA
        return new User("Anderson", "Admin", true);
    }
    listar() {
        let lista = [
            new User("Anderson", "Admin", true),
            new User("Ronaldo", "Superadmin", true),
        ];
        return lista;
    }
}
// Herança - Usa a classe User criada lá em cima, vai herdar os atributos
class SuperUser extends User {
    constructor(name, role, isActive, salary) {
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
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const sam = new Person("Sam");
console.log(sam);
