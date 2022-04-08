import React, { useEffect, useState } from 'react';
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";

const EditUser =() => {
        
            let history = useHistory();
            const {id} = useParams();
            
            const [user, setUser] = useState({
                name: "",
                username: "",
                email: "",
                phone: "",
                website: ""
            });

            const {name, username, email, phone, website} = user;

            const onInputChange = e => {

                setUser({...user, [e.target.name]: e.target.value})
            };

            useEffect(() => {
                loadUser()
            }, []);
            const onSubmit = async e => {
                e.preventDefault();
                await axios.put(`http://localhost:3303/users/${id}`, user);
                history.push("/");
            };

            const loadUser = async () => {
                const result = await axios.get(`http://localhost:3303/users/${id}`);
                setUser(result.data);
            }

            return(
                <div className="container py-5 shadow outline my-4">
                    <h3 className="text-center">Edit User</h3>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group mb-3">
                    <input className="form-control form-control-lg" type="text" 
                    placeholder="Enter name" 
                    aria-label=".form-control-lg example"
                    name="name" value={name}
                    onChange={e => onInputChange(e)}></input>
                    </div>
                    <div className="form-group mb-3">
                    <input className="form-control form-control-lg" type="text" 
                    placeholder="Enter username" 
                    name="username"
                    value={username}
                    onChange={e => onInputChange(e)}
                    aria-label=".form-control-lg example"></input>
                    </div>
                    <div className="form-group mb-3">
                    <input className="form-control form-control-lg" type="text" 
                    placeholder="Enter email address" 
                    name="email"
                    value={email}
                    onChange={e => onInputChange(e)}
                    aria-label=".form-control-lg example"></input>
                    </div>
                    <div className="form-group mb-3">
                    <input className="form-control form-control-lg" type="text" 
                    placeholder="Enter phone number" 
                    name="phone"
                    value={phone}
                    onChange={e => onInputChange(e)}
                    aria-label=".form-control-lg example"></input>
                    </div>
                    <div className="form-group mb-3">
                    <input className="form-control form-control-lg" type="text" 
                    placeholder="Enter website" 
                    name="website"
                    value={website}
                    onChange={e => onInputChange(e)}
                    aria-label=".form-control-lg example"></input>
                    </div>
                    <button className="btn btn-primary btn-block" >Edit</button>
                </form>
                </div>
            )
        }

    


export default EditUser;