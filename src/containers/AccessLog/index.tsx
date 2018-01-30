import * as React from "react";
import {connect} from 'react-redux'
import {RootState} from "../../store/state";


export interface LogEntry {
    id: number,
    app_name: string,
    mac_address: string,
    ip_address: string,
    date: string
}

interface Props {
    logs: LogEntry[]
}


class AccessLog extends React.Component<Props> {

    public render(): JSX.Element {
        return (
            <div>
                <table>
                    <thead style={{background:'grey', color:'red'}}>
                    <td>ID</td>
                    <td>App</td>
                    <td>MAC</td>
                    <td>IP</td>
                    <td>Date</td>
                    </thead>
                    <tbody>
                {this.props.logs.map(log => (
                    <tr>
                        <td>{log.id}</td>
                        <td>{log.app_name}</td>
                        <td>{log.mac_address}</td>
                        <td>{log.ip_address}</td>
                        <td>{log.date}</td>
                    </tr>
                    )
                ) }
                    </tbody>
                </table>
            </div>
        )
    }

}

function mapStateToProps(state: RootState, props: Props){
    return {
        ...props,
        logs: state.logs.items
    }
}

export default connect(mapStateToProps, null)(AccessLog)