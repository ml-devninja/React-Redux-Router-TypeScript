import * as React from "react";
import UserProfile from "@components/UserProfile";

import {connect} from 'react-redux'

import {userInfo} from '@components/UserProfile'
import {RootState} from "../../store/state";
import {removeUser} from '../../store/users'
import {bindActionCreators, Dispatch} from "redux";


interface Props{
  users: userInfo[] | any,
    removeUser(id: number): void
}

interface Actions  {
    removeUser(id: number): void;
}

class App extends React.Component<Props> {


  public removeUser = (id: number) => {
      console.log(id);
      this.props.removeUser(id)
  }

  public render(): JSX.Element {
    return (
      <div className="App">
        <UserProfile users={this.props.users} removeUser={this.removeUser}/>
      </div>
    );
  }
}

function mapStateToProps(state: RootState, props: Props): Props {
  return{
      ...props,
    users: state.users.items
  }
}

function mapDispatchToProps(dispatch: Dispatch<any>) : Actions{
  return bindActionCreators({
      removeUser,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
