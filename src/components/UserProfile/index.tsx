import * as React from "react";
import SingleUser from "@components/SingleUser";

export interface userInfo {
  readonly id: number;
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string;
  readonly gender: string;
  readonly ip_address: string;
  readonly avatar: string;
}

interface Props {
  users: userInfo[];
  removeUser(id:number) : void;
}

class UserProfile extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  public render(): JSX.Element {
    const { users } = this.props;

    return (
      <div>
        {users.map((user: userInfo) => (<SingleUser key={user.id} user={user} removeUser={this.props.removeUser}/>))}
      </div>
    );
  }
}

export default UserProfile;
