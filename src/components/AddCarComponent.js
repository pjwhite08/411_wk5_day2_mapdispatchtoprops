import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core'

class AddCar extends Component {
    //why doesn't this have super with props?
    //why is this so different from the video?
    //I don't understand the differences, therefore I can't really code along
    state = {
        open: false,
        name: '',
        mpg: '',
        cylinders: '',
        horsepower: '',
    }

    toggleDialog = () => this.setState({ open: !this.state.open })

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }
    //How to do this with functional programming?
    handleSubmit = (e) => {
        // console.log("props in handleSubmit: ", props)
        e.preventDefault()
        const payload = { ...this.state }
        payload.id = this.props.carTotal + 1
        delete payload.open
        console.log("THE CAR", payload)
        console.log("this.props in handleSubmit: ", this.props)
         // add this.props.addCar function here
        // also add this.setState to close the dialog
        this.props.addCar(payload)
        this.setState({ open: false })
       
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                name: '',
                mpg: '',
                cylinders: '',
                horsepower: ''
            })
        }
    }
    //would it be worthwhile to utilize code snippets?
    render() {
        return (
            <Fragment>
                <div style={{ textAlign: 'center' }}>
                    <h1>Add Car:</h1>
                    <Button
                        variant="contained"
                        className="add-car"
                        onClick={this.toggleDialog}
                    >
                        Add Car
                    </Button>
                </div>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle>Add New Car</DialogTitle>
                        <DialogContent>
                            <form 
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                <TextField 
                                    id="name" 
                                    placeholder="Name" 
                                    value={this.state.name} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="mpg" 
                                    placeholder="Miles per gallon" 
                                    value={this.state.mpg} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="cylinders" 
                                    placeholder="Cylinders" 
                                    value={this.state.cylinders} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="horsepower" 
                                    placeholder="Horsepower" 
                                    value={this.state.horsepower} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <br />
                                <Button variant="contained" color="primary" type="submit">Submit</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </Fragment>
        )
    }
}

export default AddCar