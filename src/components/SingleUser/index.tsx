import * as React from "react";
import { userInfo } from "@components/UserProfile";
import Avatar from "@components/Avatar";
import { Link } from "react-router-dom";

interface Props {
  user: userInfo | any;
   removeUser(id: number) : void
}

class SingleUser extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  public render(): JSX.Element {
    const { user, removeUser } = this.props;

    return (
      <div
        style={{
          display: "flex",
          padding: "15px 0",
          borderBottom: "1px solid #606060"
        }}
      >
        <Link to={`user/${user.id}`}>
          <Avatar user={user} />
        </Link>
        <div>
          <h2>
            {`${user.first_name} ${user.last_name}`}
            <button onClick={() => removeUser(user.id)}>Remove</button>
          </h2>
          <h3>{user.email}</h3>
          <small>Gender: {user.gender}</small>
          <br />
          <small>IP Address: {user.ip_address}</small>
        </div>
      </div>
    );
  }
}

export default SingleUser;
