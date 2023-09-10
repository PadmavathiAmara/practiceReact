import { useState } from 'react';
import './App.css';
// import Child from './Login';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home';
import { users } from './users';
import Login from './Login';

function App() {
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState("");
  const [clr, setClr] = useState("");

  const validate = () => {
    users.find((user) => {
      if (user.username === userName) {
        if (user.password === pwd) {
          // console.log(user);
          setSuccess(true);
          navigate('/home', {state: {userName,pwd}});
          // return true;
        }
        else {
          // return false;  
          navigate('/');
          setClr("warning");
          setMsg("Invalid password!");
          setSuccess(true);
        }
        return user;
      }
      else {
        navigate('/');
        setClr("error");
        setMsg("User not found!");
        setSuccess(true);
          //  return false;
      }
    });
    // setUserData(data);
  }
  //  console.log(msg);

  //  useEffect(()=>{
  //   console.log(msg);
  //  },[msg])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSuccess(false);
  };

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login msg={msg} clr={clr}
        success={success} handleClose={handleClose}
        validate={validate} setUserName={setUserName} setPwd={setPwd} userName={userName} password={pwd} />} />
        <Route path='/home' element={<Home success={success} handleClose={handleClose} />} />
      </Routes>
      
      {/* <header className='App-header'>
      <Child validate={validate} setUserName={setUserName} setPwd={setPwd}/>
      </header>
      <h1>{result}</h1> */}
    </div>
  );
}

export default App;
