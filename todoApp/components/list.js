import React from 'react'
import { connect } from 'react-redux'
import { Text, ActionSheet, View, Icon, Accordion, Content, Button } from 'native-base'
import { StyleSheet, } from 'react-native';
import { del } from '../action';
import TestModal from './test';
import { edit } from '../action';
const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        right: "5%",
        fontSize: 20
    },
    delbtn: {
        width: 40,
        height: 40,
        marginRight: "5%",
    },
    edtbtn: {
        width: 40,
        height: 40,
    },
    btnprnt: {
        fontSize: 15,
        display: "flex",
        flexDirection: 'row',
        marginTop: "5%",
    }
});
class List extends React.Component {
    constructor() {
        super()
        this.state = {
            list: [],
            del: false,
            edit: false,
            item: ""
        }
    }
    _renderHeader(item, expanded) {
        // console.warn(item)
        return (
            <View style={{
                flexDirection: "row",
                padding: 10,
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#b7daf8"
            }}>
                <Text style={{ fontWeight: "600" }}>
                    {item.fname}
                </Text>
                {expanded
                    ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
                    : <Icon style={{ fontSize: 18 }} name="add-circle" />}
            </View>
        );
    }
    _del(item) {
        // console.warn('run')
        var arr = this.props.users
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                this.props.del(i)
                this.setState({
                    del: !this.state.del
                })
            }
        }
    }
    edit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }
    _renderContent = (item) => {
        // console.warn(item)
        return (
            <View
                style={{
                    width: '100%',
                    backgroundColor: "#e3f1f1",
                    padding: 10,
                    fontStyle: "italic",
                    textAlign: 'center',
                    alignItems: "center"
                }}
            >
                <Text>First Name : {item.fname}</Text>
                <Text>Last Name : {item.lname}</Text>
                <Text>Age : {item.age}</Text>
                <Text>qualification : {item.Qualification}</Text>
                <View style={styles.btnprnt}>

                    <Button onPress={() => this._del(item)} style={styles.delbtn} rounded bordered danger transparent><Icon style={{ textAlign: 'center', width: "100%", fontSize: 18 }} name="trash" /></Button>
                    <Button onPress={() => {
                        this.edit()
                        this.setState({
                            item: item
                        })
                    }} style={styles.edtbtn} rounded bordered success transparent><Icon style={{ textAlign: 'center', width: "100%", fontSize: 18 }} type="FontAwesome5" name="user-edit" /></Button>
                </View>
            </View>
        );
    }

    componentWillMount() {
        this.setState({
            list: this.props.users
        })
    }
    render() {
        return (
            <View style={{
                padding: 10,
            }}>
                <Accordion
                    dataArray={this.props.users}
                    headerStyle={{ backgroundColor: "#b7daf8" }}
                    contentStyle={{ backgroundColor: "#ddecf8" }}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                />
                {this.state.edit ?
                    <TestModal user={this.props.users} editfn={this.props.edit} value={this.state.item} closemodal={this.edit} open={this.state.edit} />
                    : null}
            </View>
        )
    }
}


const mapDispatchToProps = { del, edit }

const mapStateToProps = (state) => {
    // console.warn(state)
    return {
        users: state.users
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)