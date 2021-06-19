import * as React from 'react';
import { withRouter, RouteComponentProps, Route, Switch, Redirect } from 'react-router-dom';
import * as _ from 'lodash';

import ExamplePage from './pages/example';
import AppBar from './components/appbar';
import TablePage from "./pages/table";
import ChartPage from "./pages/chart";
import GridPage from "./pages/grid";


interface IProps extends RouteComponentProps<any> {}
interface IState {
    error: Error | null;
}

class Routes extends React.Component<IProps, IState> {

    public constructor(props: IProps) {
        super(props);
        this.state = {
            error: null
        };
    }

    public componentDidCatch(error: Error, info: object) {
        this.setState({ error });
    }

    public render(): JSX.Element {
        if (!_.isNil(this.state.error)) {
            return (
                <div>{this.state.error}</div>
            );
        }
        return (
            <>
                <Route component={AppBar}/>
                <Switch>
                    <Redirect exact={true} from='/' to='/example'/>
                    <Route exact={true} path='/example' component={ExamplePage}/>
                    <Route exact={true} path='/grid' component={GridPage}/>
                    <Route exact={true} path='/chart' component={ChartPage}/>
                    <Route exact={true} path='/table' component={TablePage}/>
                    <Route render={() => <div>Page Not Found</div>}/>
                </Switch>
            </>
        );
    }
}

export default withRouter(Routes);
