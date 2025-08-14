// import Person from '@/Components/Person'
import { UserContext, UserProvider } from "@/Components/UserContextProvider";
// import React, { useContext } from "react";
import User, { Countries } from "@/Components/User";

const HomePage = () => {
    // const { users, updateUser, deleteUser, addUser } = useContext(UserContext);
    return (
        <UserProvider>
            <div className="p-10 ">
                <User name="Parvez" age={30} isMarried={true} country={Countries.Bangladesh} />
            </div>
        </UserProvider>
    );
};

export default HomePage;
