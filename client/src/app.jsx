import React from 'react';
import ReactDom from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory, Router, BrowserRouter } from 'react-router';
import routes from './routes.js';

injectTapEventPlugin();

//ReactDom.render(<h1>hello from React</h1>, document.getElementById('react-app'));

ReactDom.render(
    (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router history={browserHistory} routes={routes} />
    </MuiThemeProvider>
    ), 
    document.getElementById('react-app')
);

