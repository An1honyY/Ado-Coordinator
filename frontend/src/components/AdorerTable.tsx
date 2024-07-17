import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  phone: string,
  hours: number,
  available: boolean,
  notes: string,
) {
  return { name, phone, hours, available, notes };
}

const rows = [
  createData('Frozen Stanley', '159 345 9876' , 6.0, false, 'On holiday 3rd to 10th' ),
  createData('Germain Scotchbeard', '237 324 0972', 3.0, true, 'available for cover tuesday evenings'),
  createData('Edaim Gool', '262 765 0983', 2.5, false, 'requires a sub for last 2 weeks in july' ),
  createData('Cupcake Curls', '305 987 2345', 1, true, 'wants to switch to a Monday morning'),
  createData('Ginger Bread', '356 098 2359', 1.5, true, ''),
];

export default function AdorerTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">Permanent Hours</StyledTableCell>
            <StyledTableCell align="right">Available for Cover</StyledTableCell>
            <StyledTableCell align="right">Notes</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.phone}</StyledTableCell>
              <StyledTableCell align="right">{row.hours}</StyledTableCell>
              <StyledTableCell align="right">{row.available.toString()}</StyledTableCell>
              <StyledTableCell align="right">{row.notes}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
