import * as React from 'react';

import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import ContinentSelect from "../components/continentSelect";
import CountryGrid from "../components/countryGrid";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2)
    }
}));

const GridPage = () => {
    const classes = useStyles();
    const [ continent, setContinent ]: [ string, React.Dispatch<string> ] = React.useState('None');

    const handleContinentSelect = (code: string) => {
        setContinent(code);
    };

    return (
        <div className={classes.root}>
            <Typography>Selected Continent: {continent}</Typography>
            <ContinentSelect onContinentSelect={handleContinentSelect}/>
            <div className = "card-body">
                <CountryGrid continent={continent}/>
            </div>
        </div>


    );
};

export default GridPage;
