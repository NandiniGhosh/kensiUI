import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import LinkButton from './linkButton';


// Used to generate navigation buttons
type NavItem = {
    path: string;
    text: string;
};
const navItems: NavItem[] = [
    { path: '/example', text: 'Example' },
    { path: '/grid', text: 'Grid' },
    { path: '/chart', text: 'Chart' },
    { path: '/table', text: 'Table' }
];


const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
    },
    button: {
        marginLeft: theme.spacing(1)
    }
}));

const MainAppBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position='static' color='default'>
                <Toolbar>
                    <Typography variant='h6' color='inherit'>
                        Kentoso
                    </Typography>
                    {navItems.map((item: NavItem) => (
                        <LinkButton
                            key={item.path}
                            color={window.location.pathname.startsWith(item.path) ? 'primary' : 'secondary'}
                            to={item.path}
                        >
                            {item.text}
                        </LinkButton>
                    ))}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default MainAppBar;