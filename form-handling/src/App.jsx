import React, { useState } from 'react'

function App() {

  // let [name, setName] = useState("");
  // let [email, setEmail] = useState("");
  // let [password, setPassword] = useState("");

  let [formData, setFormData] = useState({
    name:"",
    password:"",
    email: ""
  })


  const handleSubmit = (e)=>{
    e.preventDefault();
    const errors = validate()
    if(errors){
      alert(errors);
      return 
    }
    console.log('form submitting')
    alert(`form submitted with data : ${JSON.stringify(formData)}`);
  }

  // create an changeHandler, which gets called from onChange event of any input
  // it should correctly identify the target and it's value
  // and should update the right pair of key & value in the formData
  const handleChange = (e)=>{
    const {name, value} = e.target
    // console.log(`formData`, formData);
    // inside formDAta, keep everything intact, 
    // just change the key which is by the name which the variable 'name' holds
    // and change it to the value which variable 'value' holds
    let updatedForm = {
      ...formData,
      [name]: value
    }
    // console.log('updated formData', updatedForm)
    setFormData(updatedForm);
  }

  const validate = ()=>{
    if (formData.name == "" || formData.name?.length < 3){
      return 'Name should be alteast 3 letters long'
    }

    else if(formData.email == '' || !('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$').match(formData.email)){
      return 'Email not valid'
    }
  
    else if(formData.password == '' || !(`^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$`).match(formData.password)){
      return 'Password not valid'
    }

    return '';
  }

  return (
    <div >
      <form onSubmit={handleSubmit} action="" style={{width:"100vw", display: "flex", alignItems:"center", justifyContent:"center"}}>
        <input name='name' type="text" onChange={handleChange} placeholder='Name' /> <br />
        <input name='email' type="text" onChange={handleChange} placeholder='email' /> <br />
        <input name='password' type="password" onChange={handleChange} placeholder='Password' /> <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App