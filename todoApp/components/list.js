import React from 'react'
import { connect } from 'react-redux'
import { Text, Container, View, Icon, Accordion, Content } from 'native-base'
const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

class List extends React.Component {
    constructor(){
        super()
        this.state = {
            list : []
        }
    }
    _renderHeader(item, expanded) {
        console.warn(item)
        return (
            <View style={{
                flexDirection: "row",
                padding: 10,
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#A9DAD6"
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
    _renderContent(item) {
        return (
            <View
                style={{
                    backgroundColor: "#e3f1f1",
                    padding: 10,
                    fontStyle: "italic",
                }}
            >
                <Text>First Name : {item.fname}</Text>
                <Text>Last Name : {item.lname}</Text>
                <Text>Age : {item.age}</Text>
                <Text>qualification : {item.Qualification}</Text>
            </View>
        );
    }
    componentWillMount(){
        console.warn(this.props)
        this.setState({
            list : this.props.users
        })
    }
    render() {
        return (
            <View style={{
                padding: 10,
            }}>
                <Accordion
                    dataArray={this.state.list}
                    headerStyle={{ backgroundColor: "#b7daf8" }}
                    contentStyle={{ backgroundColor: "#ddecf8" }}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                />
            </View>
        )
    }
}



const mapStateToProps = (state) => {
    // console.warn(state)
    return {
        users: state.users
    }
}
export default connect(
    mapStateToProps ,
)(List)