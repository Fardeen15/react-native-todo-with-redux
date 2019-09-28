import React, { Component } from 'react';
import Dialog from "react-native-dialog";
import { View, Text } from 'react-native';
import { StyleSheet, } from 'react-native';



const styles = StyleSheet.create({
    Container: {
        display: "flex",
        height: 1000,
        width: "100%",
        // position : 'relative',
        // top : "50%",
        marginTop: "25%",
        alignItems: 'center'
    },
    Items: {
        // margin : "10px"
        // marginRight: 'auto',
        // marginLeft: 'auto',
        margin: 10,
        width: '70%',
    }
});
class ModalExample extends Component {
    constructor() {
        super()
        this.state = {
            fname: "",
            lname: "",
            age: "",
            Qualification: "",
            list: []
        }
    }
    onChange = (value, state) => {
        // console.warn(value)
        this.setState({
            [state]: value
        })
    }
    update = () => {
        var obj = {
            fname: this.state.fname,
            lname: this.state.lname,
            age: this.state.age,
            Qualification: this.state.Qualification,
        }
        var arr = this.props.user
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === this.props.value) {
                this.props.editfn(obj,i)
                this.props.closemodal()
            }
        }
    }
    componentWillMount() {
        if (this.props.value) {
            // console.warn('run')
            this.setState({
                fname: this.props.value.fname,
                lname: this.props.value.lname,
                age: this.props.value.age,
                Qualification: this.props.value.Qualification
            })
        }
    }
    render() {
        return (
            <View style={{ marginTop: 22 }}>
                <Dialog.Container visible={this.props.open}>
                    <Dialog.Title>Edit Form</Dialog.Title>
                    <Text>First Name</Text>

                    <Dialog.Input
                        value={this.state.fname}
                        onChangeText={(ev) => this.onChange(ev, "fname")}
                        style={{ height: 30, fontSize: 12 }}
                        placeholder="First Name" />
                    <Text>Last Name</Text>

                    <Dialog.Input
                        value={this.state.lname}
                        onChangeText={(ev) => this.onChange(ev, "lname")}
                        style={{ height: 30, fontSize: 12 }}
                        placeholder="Last Name" />
                    <Text>Age</Text>
                    <Dialog.Input
                        value={this.state.age}
                        onChangeText={(ev) => this.onChange(ev, "age")}
                        style={{ height: 30, fontSize: 12 }}
                        placeholder="Age" />
                    <Text>Qualification</Text>
                    <Dialog.Input
                        value={this.state.Qualification}
                        onChangeText={(ev) => this.onChange(ev, "Qualification")}
                        style={{ height: 30, fontSize: 12 }}
                        placeholder="Qualification" />

                    <Dialog.Button onPress={this.props.closemodal} label="Cancel" />
                    <Dialog.Button onPress={this.update} label="Update" />
                </Dialog.Container>
            </View>
        );
    }
}
// const mapStateToProps = (state) => {
//     // console.warn(state)
//     return {
//         users: state.users
//     }
// }
// const mapDispatchToProps = { edit }
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(ModalExample)
export default ModalExample