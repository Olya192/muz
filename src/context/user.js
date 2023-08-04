import React, { useContext } from "react";


export const UserContext = React.createContext(null);

export const useUser = () => {

    const { user } = useContext(UserContext);
    return user;
}

export const useSetUser = () => {

    const { setUser } = useContext(UserContext);

    return setUser;

}