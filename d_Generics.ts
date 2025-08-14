// Generics => powerful feature that allows to write flexible reusable functions 
// that can be used with different types ensuring type safety during working with various data types

class StorageContainer <T> {

    private contents: T[];

    constructor() {
        this.contents = [];
    }

    addItem(item: T){
        this.contents.push(item);
    }

    getItem(idx: number) : T | undefined {
        return this.contents[idx];
    }
}

// T as a string
const userName = new StorageContainer<string>();
userName.addItem("Parvez Hossain");
userName.addItem("Adnan Hossain")
console.log(userName.getItem(0));

// T as numbner
const userId = new StorageContainer<number>();
userId.addItem(1);
userId.addItem(2);
console.log(userId.getItem(0));