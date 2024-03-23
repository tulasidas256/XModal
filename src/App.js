import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {

  const [status, setStatus] = useState(false);
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: ""
  });
  const ref = useRef('');

  /* --- For opening form tab --- */
  const openForm = () => {
    setStatus(true);
  }

  /* --- For opening form tab --- */
  const closeForm = () => {
    setStatus(false);
  }

  /* --- Handle click inside/outside --- */
  const handleClick = (e) => {
    if (!ref.current.contains(e.target)) {
      console.log("Outside click => ", e.target);
      closeForm();
    }
  }

  /* --- For add data form form --- */
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  /*----- For submit the form data ----*/
  const handleSubmit = (e) => {

    // check for valid number
    if (data.phone.length < 10) {
      e.preventDefault();
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    }
    // check for valid DOB
    let date = new Date();
    let dob = new Date(data.dob);
    if (dob > date) {
      e.preventDefault();
      alert("Invalid date of birth. Date of birth cannot be in the future.")
    }

  }


  useEffect(() => {
  }, [])



  return (
    <div className="App">

      <h1>User Details Modal</h1>
      <button onClick={openForm}>Open Form</button>

      {status ? (

        <div className="modal" onClick={handleClick}>

          <div className="modal-content">

            <form onSubmit={handleSubmit} ref={ref}>
              <h1>Fill Details</h1>
              <label htmlFor="username">Username:</label>
              <br />
              <input type="text" name="username" id="username" onChange={handleChange} required />
              <br />
              <label htmlFor="email">Email Address:</label>
              <br />
              <input type="email" name="email" id="email" onChange={handleChange} required />
              <br />
              <label htmlFor="phone">Phone Number:</label>
              <br />
              <input type="number" name="phone" id="phone" onChange={handleChange} required />
              <br />
              <label htmlFor="dob">Date of Birth:</label>
              <br />
              <input type="date" name="dob" id="dob" onChange={handleChange} required />
              <br />
              <button type='submit' className='submit-button'>Submit</button>
            </form>

          </div>

        </div>
      ) : (<></>)
      }

    </div>
  );
}

export default App;
