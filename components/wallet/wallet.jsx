import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';
import { abbreviateNumber } from "../../actions/actions"
class Wallet extends Component {

    render() {
        return (
            <View style={styles.walletView}>
                <Icon style={styles.walletIcon} size={20} name={'wallet'} />
                <Text style={styles.walletText}>
                    {abbreviateNumber(this.props.wallet)}
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    walletView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: 97.8,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        paddingVertical: 2,
        borderWidth: 1,
        borderColor: "#03C9A9",
        borderRadius: 5,
        alignSelf: 'flex-end'
    },
    walletText: {
        fontFamily: 'Montserrat',
        fontSize: 13,
        fontWeight: "bold",
    },
    walletIcon: {
        color: "#03C9A9",
        marginRight: 5,
    }
});
export default Wallet