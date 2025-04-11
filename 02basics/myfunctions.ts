function addTwo(num: number): number {
    return num + 2;
}

function getUpper(val: string): string {
    return val.toUpperCase();
}

function signUpUser(name: string = 'iamdefault', email: string, password: string = 'iampassowr'): boolean {
    // some db stuff
    return true;
}

let loginUser = (name: string, email: string, password: string = 'default'): boolean => {
    return true;
}

let number = addTwo(5);
console.log(number);

getUpper("hello");
signUpUser('stan', 'stanley@mail.com', 'password123');

const heros = ['thor', 'ironman', 'spiderman'];

heros.map((hero: string) => {
    return `hero is ${hero}`;
});

function consoleError(err: string): void {
    console.log(err);
}

// Some functions never return a value
// For example, a function that throws an error or a function that runs an infinite loop
function handleError(err: string): never {
    throw new Error(err);
}

export {};