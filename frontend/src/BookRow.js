import PropTypes from 'prop-types'
import { TableRow, TableCell, Button, } from '@mui/material'
import { Link } from 'react-router-dom';

function BookRow({book, delBook, editBook }) {
  const  handleDelete = () =>  {
    delBook(book.id)
  }
  return (
    <TableRow
          key={book.id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {book.userId}
          </TableCell>
          <TableCell align="right">{book.id}</TableCell>
          <TableCell align="left">{book.title}</TableCell>
          <TableCell align="left">{book.date}</TableCell>
          <TableCell align="left">{book.author}</TableCell>
          <TableCell align="left">
            <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>&nbsp;
            <Button variant="contained" color="success" onClick={()=>{editBook(book)}}>Edit</Button>
            <Link to={{
                pathname: `/books/${book.id}`,
                state: { book: book }
              }}>
            <button className='btn btn-primary'>View Book</button>
            </Link>
          </TableCell>
        </TableRow>  )
}

BookRow.propTypes = {
    book: PropTypes.object,
    delBook: PropTypes.func,
    editBook: PropTypes.func
}

export default BookRow