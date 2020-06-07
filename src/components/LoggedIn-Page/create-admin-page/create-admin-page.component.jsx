import React, {useState} from "react";
import "./create-admin-page.style.css"

export const CreateAdminPage = () =>{

    
    const submitUser = async (event) =>{
        event.preventDefault();
        const data = {
            name: input.name,
            idNumber: input.idNumber,
            password: input.password
        }
        await fetch("https://online-grade-viewer-api.herokuapp.com/Admin",{
            method: "POST",
            mode: "cors",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)

        })
        .then(response => response.json())
        .then(receivedData => console.log(receivedData))
    }

    const [input,setInput] = useState({
        name: "",
        idNumber: "",
        password: ""
    })

    const onChangeFunc = (event,name) =>{
        let placeholder = {...input}
        placeholder[name] = event.target.value
        setInput(placeholder)
    }

    return(
        <div className="create-admin-page">
            <form onSubmit={submitUser}>
                <div className="create-admin-input-div">
                    <label htmlFor="">NAME</label>
                    <input type="text" name="name" value={input["name"]} onChange={(event)=>onChangeFunc(event,"name")}/>
                </div>
                <div className="create-admin-input-div">
                    <label htmlFor="idNumber">ID NUMBER</label>
                    <input type="text" name="idNumber" value={input.idNumber} onChange={(event)=>onChangeFunc(event,"idNumber")}/>
                </div>
                <div className="create-admin-input-div">
                    <label htmlFor="password">PASSWORD</label>
                    <input type="password" name="password" value={input.password} onChange={(event)=>onChangeFunc(event,"password")}/>
                </div>
                <button type="submit" >SUBMIT</button>
            </form>
        </div>
    )
}