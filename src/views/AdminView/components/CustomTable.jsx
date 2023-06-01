import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper
  } from '@mui/material'
import Button from '@mui/material/Button';
import { deleteUser, blankUserPassword } from '../../../services/AdminService';
  
  export default function CustomTable  ({updateTableSwitch, setUpdateTableSwitch, headers, tableData}) {

    const handleDelete = (event) => {
      deleteUser(event.target.id);
      updateTable();
    }

    const handleBlankPassword = (event) => {
      blankUserPassword(event.target.id);
      updateTable();
    }

    const updateTable = () => {
      setUpdateTableSwitch(!updateTableSwitch);
    }

    return (
      <TableContainer sx={{ maxHeight: '400px' , maxWidth:'95%'}} component={Paper}>
        <Table stickyHeader aria-label='simple table'>
          <TableHead>
            <TableRow>
              {headers.map(header => <TableCell align='center'>{header}</TableCell>)
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index}>
                {Object.values(row).map((value, index) => (
                  <TableCell key={index}>{value}</TableCell>
                ))}
                
                <TableCell key="blnk">
                  <Button 
                    id={row.id} 
                    disabled={row.type === 'ADMIN'? true: false} 
                    variant="contained"
                    onClick={handleBlankPassword}
                  >Erase</Button>
                </TableCell>

                <TableCell key="del">
                  <Button 
                    id={row.id} 
                    disabled={row.type === 'ADMIN'? true: false} 
                    variant="contained"
                    onClick={handleDelete}
                  >X</Button>
                </TableCell>
              </TableRow>
            ))}
            
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
  
  