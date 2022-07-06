import React, { Component } from 'react'

export class UncontrolledForm extends Component {
    constructor(props) {
        super(props)
        this.inputName = React.createRef();
        this.category = React.createRef();
        this.comments = React.createRef();

    }
    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h2>Please fill out the form below:</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='id-name'>Your name: </label>
                        <input
                            id="id-name"
                            name="name"
                            type="text"
                            ref={this.inputName}
                        />
                    </div>
                    <div>
                        <label htmlFor='id-category'>Query category: </label>
                        <select
                            id='id-category'
                            name='category'
                            ref={this.category}>
                            <option value='website'>Website issue</option>
                            <option value='order'>Order issue</option>
                            <option value='general'>General inquiry</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='id-comments'>Comments:</label>
                        <textarea
                            id='id-comments'
                            name='comments'
                            ref={this.comments} />
                    </div>
                    <input
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        )
    }
}

export default UncontrolledForm