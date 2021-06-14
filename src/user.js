import React, {useEffect, useState} from 'react'
import Loading from './loading'
import Axios from 'axios';
import "./users.css"

const Users = () => {
    const [users, setUsers] = useState([])
    
    
    const getUsers = async() => {
        try{
        const res = await Axios.get('https://reqres.in/api/users?page=1');
        
        setUsers(await res.data.data)
        } catch(error) {
            
            console.log("error is "+error);
        }
    }

    useEffect(()=>{
        getUsers();
    }, []);

   

    return (
        <div>
            
            

            <div className="container-fluid mt-5">
                <div className="row text-center">
                    {
                        users.map((curElem) => {
                            return(
                                <div className="col-10 col-md-4 mt-5" >
                                <div className="card p-2">
                                          <div className="d-flex align-items-center">
                                                  <div className="image"> <img src={curElem.avatar} className="rounded" width="155" /> </div>
                                              <div className="ml-3 w-100">
                                                      <h4 className="email mb-0 mt-0 text-left">{curElem.first_name} {curElem.last_name}</h4>
                                                      { <span className="text-left">{curElem.email}</span> }
                                                  {/* <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                          <div className="d-flex flex-column">
                                                              <span className="articles">{curElem.first_name}</span> <span className="number1"></span> </div>
                                                          <div className="d-flex flex-column">
                                                              <span className="followers">{curElem.last_name}</span> <span className="number2"></span> </div>
                                                          
                                                  </div> */}
                                                
                                              </div>
                                       </div>
                                    </div>
                              </div>

                            )
                        })
                        
                                
                        
                        
                    }
                        
                              
                        
                       

                
                    
                </div>
            </div>
        </div>
    )
}

export default Users