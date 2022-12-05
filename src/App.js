import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await res.json()
      setUsers(data)

    }
    fetchData()
  }, [])

  return (
    <div className="App w-full md:w-1/2 mx-auto mt-20">
      <h1 className='my-5 text-2xl font font-bold'>JSON PlaceHolder User MUI Table</h1>

      <TableContainer component={Paper}  >
        <Table sx={{ minWidth: 380 }} aria-label="simple table" >
          <TableHead>
            <TableRow>
              {/* <TableCell></TableCell> */}
              <TableCell>Name</TableCell>
              <TableCell >Company</TableCell>
              <TableCell >Address</TableCell>


            </TableRow>
          </TableHead>
          <TableBody>
            {users && users?.map((user, i) => (
              <TableRow
                key={user.id}

              >
                {/* <TableCell component="th" scope="row">
                  {i + 1}
                </TableCell> */}
                <TableCell component="th" scope="row"> {user.username}</TableCell>
                <TableCell >{user.address.city}</TableCell>
                <TableCell >{user.company.name}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className='my-20' id='Q/N-3'>
        <h1 className='my-5 text-2xl font font-bold'>Question No 3</h1>
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <div className="collapse-title text-xl font-medium">
            How do you pass the redux store to the react app?
          </div>
          <div className="collapse-content">
            <p>
              At First, I should install redux with  the command,
              "npm install react-redux".
              Next, i should import a function called connect from this package by typing the following line at the top of our react file where our component is located.

              " import {"{connect}"} from "react-redux";"
              That's how I can pass the redux store to the react app
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
