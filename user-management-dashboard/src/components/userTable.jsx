import { useEffect, useState } from 'react'

const UserTable = () => {

    const [userData, setUserData] = useState([])
    useEffect(() => {
      
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          const userData= data.map((usr) => {
                let usrDetails={
                        id:usr.id,
                        name:usr.name,
                        email:usr.email,
                        companyName:usr.company.name
                }
                return usrDetails;
          })

          setUserData(userData);
          
        })
    }, [])
    console.log("user Data",userData)
    
   return (
    <table className="table-auto">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Company Name</th>
    </tr>
  </thead>
  <tbody>
    {
        userData.map((usr) => {
          return  <tr key={usr.id}>
                    <td>{usr.id}</td>
                    <td>{usr.name}</td>
                    <td>{usr.email}</td>
                    <td>{usr.companyName}</td>
                 </tr>
        })
    }
    
    
  </tbody>
</table>
    
   )
 
}

export default UserTable