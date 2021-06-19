import * as React from 'react';

import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import CountrySelect from '../components/countrySelect';


const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2)
    }
}));

const ExamplePage = () => {
    const classes = useStyles();
    const [ country, setCountry ]: [ string, React.Dispatch<string> ] = React.useState('None');

    const handleCountrySelect = (code: string) => {
        setCountry(code);
    };

    return (
        <div className={classes.root}>
            <Typography>Selected Country: {country}</Typography>
            <CountrySelect onCountrySelect={handleCountrySelect}/>
        </div>
    );
};

export default ExamplePage;
