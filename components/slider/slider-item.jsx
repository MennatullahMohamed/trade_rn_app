import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import Slider from '@react-native-community/slider';

class SliderItem extends Component {
    render() {
        return (
            <View>
                <Slider
                    style={{ width: '100%', height: 40, alignSelf: 'center' }}
                    minimumValue={0}
                    maximumValue={23333}
                    minimumTrackTintColor="#03C9A9"
                    maximumTrackTintColor="#000000"
                    thumbTintColor="#03C9A9"
                    value={this.props.value != '' ? this.props.value : 0}
                    onValueChange={(value) => this.props.onChangeValue(value)}
                />
                <Text style={{ textAlign: 'right' }}>{"Max shares you can buy \n 23333"}</Text>
            </View>
        );
    }
}

export default SliderItem;