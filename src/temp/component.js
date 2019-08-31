import React from 'react';
class App extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            count: 1,
        };
    }
    render() {
        return React.createElement("div", null, "Hello world");
    }
    componentDidMount() {
        // this.state.count = 2 // error
    }
}
class Component {
}
const pageA = ({ location }) => {
    const context = location;
    return React.createElement("div", null, "hello");
};
//# sourceMappingURL=component.js.map