import Snackbar from '@mui/material/Snackbar';
import { Alert } from "@mui/material";
import { useLocation } from 'react-router-dom';
const Home = ({ success, handleClose }) => {
   const location = useLocation();
    return (
        <>
        <div className='details'>
            HOME
            userName:{location.state.userName}
            Password:{location.state.pwd}
        </div>
            
            <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
                    Logged in successfully!
                </Alert>
            </Snackbar>
        </>
    );
}

export default Home;