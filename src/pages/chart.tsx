import * as React from 'react';

import { makeStyles, Theme } from '@material-ui/core/styles';
import PieChart from "../components/pieChart";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2)
    }
}));

const ChartPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <PieChart/>
        </div>
    );
};

export default ChartPage;
