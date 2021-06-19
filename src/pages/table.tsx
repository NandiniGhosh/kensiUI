import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CountryTable from "../components/countryTable";


const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2)
    }
}));

const TablePage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CountryTable/>
        </div>
    );
};

export default TablePage;
