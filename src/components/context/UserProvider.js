import React,{ useState, useEffect } from 'react';

export const UserContext = React.createContext();

export function UserProvider(props){

    const [user, setUser] = useState({})

    useEffect(() => {
        const user = localStorage.getItem('user')
        setUser(JSON.parse(user))
        // console.log(user)
    }, [])

    return(
        <UserContext.Provider value={{
            user: user,
            setUser: (value)=> setUser(value)
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

 
