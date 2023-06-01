import { useContext } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ChangePassword from './components/ChangePassword';
import { UserContext } from '../../UserContext';

function UserView() {

  const { user } = useContext(UserContext);

  const handleChangePassword = async() => {
    await ChangePassword(user.id)
  }

  return (
    <Box sx={{display:'flex', flexDirection:'column', gap:3}}>
        <Box>Hello {user.username}</Box>
        <Box>Last login date: {user.lastLogin? user.lastLogin: '-' }</Box>
        <Button onClick={handleChangePassword} variant="contained">Change Password</Button>
    </Box>
  )
}

export default UserView