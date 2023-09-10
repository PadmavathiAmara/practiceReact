import { Alert, Snackbar } from "@mui/material";

const Login = ({validate, setUserName, setPwd, handleClose, success, userName, password, clr, msg}) =>{

    return(
        <>
        <div className='child'>
        UserName:<input onChange={(e) => setUserName(e.target.value)} value={userName} /> 
        Password:<input  onChange= {(e) => setPwd(e.target.value)} value={password} />
        <button onClick={() => validate()}>Submit</button>
      </div>
      <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={clr} sx={{ width: '100%' }}>
              {msg}
            </Alert>
          </Snackbar>
        </>
    )
}
export default Login;