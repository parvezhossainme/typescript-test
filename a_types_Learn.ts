// types 
let id : number = 5;
let company : string = "Traversy Media";
let isPublished : boolean = true;

let ids: number[] = [1,2,3,4,5];
let arr: any[] = [1, true, "Hello"];
let x : any = "Hello";


// function = ( params inc types ) : return type => {}
const concateValues = ( a: string, b: string ) : string => {
    return a + b;
}

console.log(concateValues("Hello", " World"));
console.log(concateValues("5","20"));


// Custom Types via interface
interface UserType {
     id: number;
     name: string;
     age: number;
     alive?: boolean // optional : Types => Undefined | number 

     greet( msg: string ): void
}

const User: UserType = {
    id: 1,
    name: "John Doe",
    age: 30,

    greet(msg: string) {
        console.log(msg);
    }
}

// here alive is optional and type = undefined
if( !User.alive ) {
    console.log("User is dead");
} else {
    console.log("User is alive");
}

// Calling interface function
User.greet("Hello");