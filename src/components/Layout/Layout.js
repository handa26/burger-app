import React, {Component} from 'react';
import classes from './Layout.module.css';
import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    sideDrawerClosed = () => {
        this.setState({showSideDrawer: false})
    }

    render() {
        return(
            <Aux>
                <Toolbar />
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosed} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;