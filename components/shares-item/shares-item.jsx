import React, { Component } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    TextInput,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SliderItem from "../slider/slider-item"
class SharesItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: 0,
            expanded: false
        }
    }
    render() {
        return (
            <View style={styles.root}>
                <Text style={styles.title} >{this.props.title}</Text>
                <LinearGradient colors={['#03C9A9', '#03C9A9', '#BBBBBB', '#BBBBBB']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    style={styles.linear_gradient}>
                </LinearGradient>
                <TouchableOpacity onPress={() => this.setState({ expanded: this.props.expanded })} style={styles.input_area} >
                    <Text style={{ fontSize: 15 }}>{this.props.inputLabel}</Text>
                    <TextInput
                        value={this.props.inputValue.toString()}
                        onChangeText={(text) => this.props.onChangeText(text)}
                        onSubmitEditing={() => this.props.onSubmitEditing()}
                        onFocus={() => this.setState({ focused: 1 })}
                        onBlur={() => this.setState({ focused: 0 })}
                        keyboardType="numeric"
                        style={[styles.input_field, { borderBottomWidth: this.state.focused, }]} />
                </TouchableOpacity>
                {
                    this.props.inputValue > 23333 ?
                        <View>
                            <Text style={{ color: 'red', textAlign: 'center' }}>You do not have enough funds to buy this many stocks</Text>
                            <TouchableOpacity
                                style={styles.submit_btn}
                                onPress={() => this.props.onChangeText('0')}
                            >
                                <Text style={styles.btn_txt} >Reset to Maximum value 23333</Text>
                            </TouchableOpacity>
                        </View> :
                        this.state.expanded == "buyShares" && <SliderItem value={this.props.inputValue} onChangeValue={(value) => this.props.onChangeText(value)} />
                }

            </View>
        )
    }
}
const styles = StyleSheet.create({
    root: {
        borderBottomColor: '#EEEEEE',
        borderBottomWidth: 1,
        marginTop: 15,
        paddingBottom: 50
    },
    title: {
        padding: 10,
        fontSize: 15,
        color: '#03C9A9'
    },
    linear_gradient: {
        height: 2, width: '100%', alignSelf: 'center'
    },
    input_area: {
        paddingHorizontal: 10,
        borderBottomColor: '#EEEEEE',
        borderBottomWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    input_field: {
        fontSize: 15,
        width: 100,
        borderBottomColor: '#03C9A9',
        textAlign: 'right'
    },
    submit_btn: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#03C9A9',
        alignSelf: 'center',
        borderRadius: 4
    },
    btn_txt: {
        textAlign: 'center',
        padding: 10,
        fontSize: 15,
        color: '#fff'
    }
});
export default SharesItem