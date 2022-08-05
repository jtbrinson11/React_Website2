import {useState, useEffect} from "react";
import './App.css';

function App() {

  const vals = {fullName: "", email: "", phone: "", password: ""};
  const [values, setValues] = useState(vals);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit)
    {
        alert("Welcome aboard")
    }
    // eslint-disable-next-line
  }, [errors]);

  const validate = (values) => {
    const errors = {};
    const regName = /^([\w]{3,})+\s+([\w\s]{3,})+$/i;
    const regEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    // eslint-disable-next-line
    const regPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    if (!values.fullName)
    {
      errors.fullName = "Full name is required";
    }
    else if (!regName.test(values.fullName))
    {
      errors.fullName = "Full name is invalid";
    }
    else if (!values.email)
    {
      errors.email = "E-mail Address is required";
    }
    else if (!regEmail.test(values.email))
    {
      errors.enail = "E-mail Address is invalid";
    }
    else if (!values.phone)
    {
      errors.phone = "Phone number is required";
    }
    else if (!regPhone.test(values.phone))
    {
      errors.phone = "Phone number is invalid";
    }
    else if (!values.password)
    {
      errors.password = "Password is required";
    }
    else if (values.password.length < 4 || values.password.length > 10)
    {
      errors.password = "Password must be greater than 4 characters and less than 10";
    }
    return errors;
  }

  return (
    <div className="Main">
      <header className="Header">
        <p>Form Verification</p>
      </header>
      <div className="Form">
        <form onSubmit={handleSubmit}>
          <label for="fullName">
            Full name: 
            <input type="text" name="fullName" value={values.fullName} onChange={handleChange}/>
          </label><br/>
          <p className="Error">{errors.fullName}</p>
          <label for="email">
            E-mail Address: 
            <input type="text" name="email" value={values.email} onChange={handleChange}/>
          </label><br/>
          <p className="Error">{errors.email}</p>
          <label for="phone">
            Phone number: 
            <input type="text" name="phone" value={values.phone} onChange={handleChange}/>
          </label><br/>
          <p className="Error">{errors.phone}</p>
          <label for="password">
            Password: 
            <input type="text" name="password" value={values.password} onChange={handleChange}/>
          </label><br/>
          <p className="Error">{errors.password}</p>
          <button>Confirm</button>
        </form>
      </div>
    </div>
  );
}

export default App;