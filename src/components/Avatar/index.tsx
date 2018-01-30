import * as React from "react";
import { userInfo } from "@components/UserProfile";

interface Props {
  user: userInfo | any;
}

class Avatar extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  public render(): JSX.Element {
    const { user } = this.props;

    return (
      <div>
        <img src={user.avatar} alt="" />
      </div>
    );
  }
}

export default Avatar;
