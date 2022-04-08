import axios from "axios";
import React, {useState} from "react";
import {useHistory} from "react-router-dom";

const AddUser = () => {
    let history = useHistory();
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

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3303/users", user);
        history.push("/");
    };

    return(
        <div className="container py-5 shadow outline my-4">
            <h3 className="text-center">Add User</h3>
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
            <button className="btn btn-primary btn-block" >Add User</button>
        </form>
        </div>
    )
}

export default AddUser;