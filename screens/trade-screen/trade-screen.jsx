import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import Wallet from "../../components/wallet/wallet"
import SharesItem from "../../components/shares-item/shares-item"
import LinearGradient from 'react-native-linear-gradient';

class TradeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wallet: 164000,
            buyShares: 0,
            marketPrice: 70.5,
            investmentResult: 0,
            focused: 0,
            showSlider: false
        }
    }
    calculateInvestment = () => {
        if (!this.validateInputs()) {
            let result = 0;
            let wallet = 0;
            if (this.state.buyShares != 0 && this.state.buyShares != '') {
                result = this.state.buyShares * this.state.marketPrice;
                wallet = this.state.wallet - result;
                this.setState({ investmentResult: result })
                this.setState({ wallet });
            }
        }
    }
    validateInputs = () => {
        let valid = true;
        if (this.state.buyShares != '' && this.state.buyShares <= 23333 && this.state.buyShares != 0 && this.state.marketPrice != '' && this.state.marketPrice != 0) {
            valid = false
        }
        return valid;
    }
    resetStates = () => {
        this.setState({
            wallet: 164000,
            buyShares: 0,
            marketPrice: 70.5,
            investmentResult: 0,
        })
    }
    render() {
        return (
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Wallet wallet={this.state.wallet} />
                </View>
                <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
                    <SharesItem
                        title={"Buy Shares"}
                        inputLabel={"Number of shares"}
                        inputValue={this.state.buyShares}
                        onChangeText={(text) => this.setState({ buyShares: text != '' ? parseFloat(text) : text })}
                        onSubmitEditing={() => this.calculateInvestment()}
                        onPress={() => this.setState({ showSlider: !this.state.showSlider })}
                        expanded={"buyShares"}
                    />
                    <SharesItem
                        title={"At Market Price"}
                        inputLabel={"Price per share around"}
                        inputValue={this.state.marketPrice}
                        onChangeText={(text) => this.setState({ marketPrice: text != '' ? parseFloat(text) : text })}
                        onSubmitEditing={() => this.calculateInvestment()}
                        expanded={"marketPrice"}

                    />
                </View>
                <View style={styles.investment}>
                    <Text style={{ fontSize: 17 }}>Expected investment</Text>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>EGP {this.state.investmentResult.toString()}</Text>
                </View>
                <TouchableOpacity disabled={this.validateInputs()} onPress={() => this.resetStates()} style={[styles.submit_btn, { backgroundColor: this.validateInputs() ? "#EEEEEE" : '#03C9A9' }]}>
                    <Text style={[styles.btn_txt, { color: this.validateInputs() ? "#BBBBBB" : "#FFFFFF" }]} >Done</Text>
                </TouchableOpacity>

            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#F7F7F7'
    },
    header: {
        backgroundColor: '#FFFFFF',
        height: 60,
        display: 'flex',
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    investment: {
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    submit_btn: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 4
    },
    btn_txt: {
        textAlign: 'center',
        padding: 10,
        fontSize: 15,
    }
});
export default TradeScreen