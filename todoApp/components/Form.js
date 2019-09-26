import React from 'react'
import { Container, Icon, Content, Item, Input, Button, Text } from 'native-base'
import { connect } from 'react-redux'
import { StyleSheet, } from 'react-native';
import { add } from '../action';
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
class FormComponent extends React.Component {
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
    submit = () => {
        // var arr = this.state.list
        var obj = {
            fname: this.state.fname,
            lname: this.state.lname,
            age: this.state.age,
            Qualification: this.state.Qualification,
        }
        this.props.add(obj)
        this.setState({
            // list: arr,
            fname: "",
            lname: "",
            age: "",
            Qualification: ""
        },()=>{
            console.warn(this.props.users)
        })
    }
    render() {
        return (
            <Container style={styles.Container}>
                <Item style={styles.Items} floatingLabel>

                    <Input
                        value={this.state.fname}
                        onChangeText={(ev) => this.onChange(ev, "fname")}
                        style={{ height: 30, fontSize: 12 }}
                        placeholder="First Name" />
                </Item>
                <Item style={styles.Items} floatingLabel>

                    <Input
                        value={this.state.lname}
                        onChangeText={(ev) => this.onChange(ev, "lname")}
                        style={{ height: 30, fontSize: 12 }}
                        placeholder="Last Name" />
                </Item>
                <Item style={styles.Items} floatingLabel>

                    <Input
                        value={this.state.age}
                        onChangeText={(ev) => this.onChange(ev, "age")}
                        style={{ height: 30, fontSize: 12 }}
                        placeholder="Age" />
                </Item>
                <Item style={styles.Items} floatingLabel>

                    <Input
                        value={this.state.Qualification}
                        onChangeText={(ev) => this.onChange(ev, "Qualification")}
                        style={{ height: 30, fontSize: 12 }}
                        placeholder="Qualification" />
                </Item>
                <Button onPress={this.submit} style={{height : 30 , textAlign : 'center'}} rounded>
                    <Text >submit</Text>
                </Button>
            </Container>
        )
    }
}
const mapStateToProps  = (state) => {
    // console.warn(state)
    return {
        users: state.users
    }
}
const mapDispatchToProps = { add }
export default connect(
    mapStateToProps ,
    mapDispatchToProps
)(FormComponent)