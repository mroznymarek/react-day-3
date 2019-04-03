import React from 'react'


class Lifecycle extends React.Component {
    constructor() {
        super()

        this.state = {
            time: (new Date()).toLocaleString(),
            number: 0,
        }

        console.log('constructor')
    }

    //  deprecated!
    componentWillMount() {
        console.log('componentWillMount')
    }

    componentDidMount() {
        setInterval (
            () => this.setState({time: (new Date ()).toLocaleString()}),
        )
        console.log('componentDidMount')
        console.log('--- ---- --- --- --- ---')
    }

    //  deprecated!
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')

        console.log('Current props ', this.props)
        console.log('Next props ', nextProps)
        console.log('Current state ', this.state)
        console.log('Next state ', nextState)

        return true
    }

    //  deprecated!
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }


    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        console.log('render')

        return (
            <div>
                Lifecycle
        <button
                    onClick={() => this.setState({ number: this.state.number + 1 })}
                >
                    Change state!
        </button>
            </div>
        )
    }
}
export default Lifecycle