import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <div>
            <h1>Steven Universe <small>Adventure</small></h1>
            <small>{this.props.compiler} and {this.props.framework}!</small>
        </div>;
    }
}
