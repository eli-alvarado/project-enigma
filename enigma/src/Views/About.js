import React, { Component } from 'react'

// I converted this to a class, hope thats  alright lmao

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: ""
        }

    }

    getMessage = () => {
        fetch("http://localhost:3001/message")
            .then(res => res.json())
            .then(res => this.setState({
                apiResponse: res.message,
                showImage: true
            }))

    }

    render() {
        return (
            <div className="min-h-screen">
                <h1 className="text-white font-bold text-2xl">this is the about page</h1>
                <p className="text-white">
                    This is the about page content so a paragraph.
                </p>

                <button 
                    onClick={this.getMessage}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
                >
                    Click for backend message
                </button>
                <p className="text-white">{this.state.apiResponse}</p>
                {this.state.showImage 
                ?  
                    <img  src="/giphy.gif" alt="image">
                    </img> 
                : null }

            </div>
        )
    }

}
