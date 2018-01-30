// import { userInfo } from "@components/UserProfile";
// import users from "../../mocks/users";
// import SingleUser from "@components/SingleUser";
// import { Link } from "react-router-dom";
// import * as React from "react";
//
// interface Props {
//   user: userInfo;
//   match?: any;
//   removeUser(id: number) ?: void ;
// }
//
// interface State {
//   user?: userInfo;
// }
//
// class SingleUserView extends React.Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.state = {};
//   }
//
//   public componentDidMount() {
//     const userID: string = this.props.match.params.id;
//     const user : userInfo[] = users.items.filter((item :userInfo) => item.id === parseInt(userID, 10));
//     this.setState({
//       ...this.state,
//       user: user[0]
//     });
//   }
//
//   public render(): JSX.Element {
//     return (
//       <div>
//         {!!this.state.user && <SingleUser user={this.state.user} />}
//         <Link to={"/"}>Go back</Link>
//       </div>
//     );
//   }
// }
//
// export default SingleUserView;
