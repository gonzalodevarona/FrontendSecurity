import Swal from 'sweetalert2'
import { changePassword } from '../../../services/UserService'

export default async function ChangePassword(userId) {
    const { value: password } = await Swal.fire({
        title: 'Enter your new password',
        input: 'password',
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return 'You need to write something!'
          }
        }
      })
      
      if (password) {
        changePassword(userId, password)
        Swal.fire({title:`Your new password is ${password}`, timer: 2500})
      }

      return password
}

