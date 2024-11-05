import { createContext } from "react";

async function fetchData() {
    const res=await fetch("https://jsonplaceholder.typicode.com/users");
    const data= await res.json()
    const userData= data.map((usr) => {
        let usrDetails={
                id:usr.id,
                name:usr.name,
                email:usr.email,
                companyName:usr.company.name
        }
        return usrDetails;
  })
       
    return userData
}

let data= await fetchData()

const UserContext= createContext(data);
const ThemeContext= createContext("light")


export{
    UserContext,
    ThemeContext
}