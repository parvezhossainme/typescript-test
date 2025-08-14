"use client"
import { createContext, useEffect, useState } from "react";
import { Countries } from "./User";

export interface User {
    name : string;
    age : number;
    isMarried : boolean;
    country : Countries; // Control over some countries
}

interface UserContextType {
    users: User[] | null;
    addUser: (user: User) => void;
    deleteUser: (id: string) => void;
    updateUser: (id: string) => void;
}

const contextInitialValues = {
    users: null,
    addUser: () => null,
    deleteUser: () => null,
    updateUser: () => null
}

export const UserContext = createContext<UserContextType>(contextInitialValues);

interface Props {
    children: React.ReactNode;
}

export const UserProvider = (props: Props) => {

    const [users, setUsers] = useState<User[] | null>(null);

    useEffect( () => {
        setUsers( [{name: "John", age: 30, isMarried: false, country: Countries.Bangladesh}] );
    },[] );

    const addUser = (user: User) => null;
    const deleteUser = (id: string) => null;
    const updateUser = (id: string) => null;

    return (
        <UserContext.Provider value={{users, addUser, deleteUser, updateUser}}>
            {props.children}
        </UserContext.Provider>
    );
}