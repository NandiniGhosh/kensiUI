import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {gql, useQuery} from "@apollo/client";

interface Column {
    id: 'name' | 'code' | 'flag' | 'native' | 'currency' | 'languages' | 'continent';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const ALL_COUNTRIES_DATA = gql`
  query {
    countries {
      name
      code
      native
      emoji
      currency
      languages {
        name  
      }
      continent {
        name
      }
    }
  }
`;

const columns: Column[] = [
    { id: 'name', label: 'Country Name', minWidth: 170 },
    { id: 'code', label: 'Country Code', minWidth: 100 },
    { id: 'flag', label: 'Flag', minWidth: 100 },
    { id: 'native', label: 'Native', minWidth: 100 },
    { id: 'currency', label: 'Currency', minWidth: 100 },
    { id: 'languages', label: 'Languages', minWidth: 100 },
    { id: 'continent', label: 'Continent', minWidth: 100 },
];

interface Data {
    name: string;
    code: string;
    flag: string;
    native: string;
    currency: string;
    languages: string;
    continent: string;
}

function createData(name: string, code: string, flag: string, native: string,
                    currency: string, languages: string, continent:string): Data {
    return { name, code, flag, native, currency, languages, continent };
}
function createRows(data: Array<any>) {
    var crows = [];
    if (typeof data !== "undefined") {
        for(let i=0; i<data.length; i++){
            var country = data[i]?.name;
            var code = data[i]?.code;
            var flag = data[i]?.emoji;
            var native = data[i]?.native;
            var currency = data[i]?.currency;
            var continent = data[i]?.continent?.name;
            var langs = data[i]?.languages.map((item: { name: any; }) => item.name).join(',');
            var tRow = createData(country, code, flag, native, currency, langs, continent);
            crows.push(tRow);
        }
    }
    return crows;
}

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 900,
    },
});

export default function CountryTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const { loading, error, data } = useQuery(ALL_COUNTRIES_DATA);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const rows = createRows(data?.countries);
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
