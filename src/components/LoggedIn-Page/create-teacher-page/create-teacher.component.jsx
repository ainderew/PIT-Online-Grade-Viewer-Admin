import React, {useState} from "react"
import "./create-teachere.style.css";

export const CreateTeacherPage = () =>{
    const [formData, setFormData] = useState({
        name: "",
        idNumber:"",
        password: ""
    })

    const onChangeForm = (e,key) =>{
        setFormData({
            ...formData,
            [`${key}`]: e.target.value
        })
    }

    const submit = async (e) =>{
        e.preventDefault()
       const dataObj = {
            name: formData.name,
            idNumber: formData.idNumber,
            password: formData.password
        }
        await fetch("https://online-grade-viewer-api.herokuapp.com/Admin/CreateTeacherAccount",{
            method:"POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataObj)
        })
        .then( response => response.json())
        .then( data => console.log(data))
    }

    return(

        <div className="create-teacher-page-div">
            <form className="create-teacher-form">
                <div className="create-teacher-form-row">
                    <div className="create-teacher-input-div">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name"  className="create-teacher-input" autoCorrect={false} autoSave={false} value={formData.name} onChange={(e)=>onChangeForm(e,"name")} />
                    </div>
                </div>
                <div className="create-teacher-form-row">
                    <div className="create-teacher-input-div">
                        <label htmlFor="name">Id Number</label>
                        <input type="text" name="idNumber" className="create-teacher-input" autoCorrect={false} autoSave={false} autoComplete={false} value={formData.idNumber} onChange={(e)=>onChangeForm(e,"idNumber")}/>
                    </div>
                </div>
                <div className="create-teacher-form-row">
                    <div className="create-teacher-input-div">
                        <label htmlFor="name">Password</label>
                        <input type="password" name="password"  className="create-teacher-input" autoComplete={false} autoSave={false} value={formData.password} onChange={(e)=>onChangeForm(e,"password")}/>
                    </div>
                </div>

                <button type="submit" onClick={submit}>Submit</button>
            </form>
        </div>
    )
}