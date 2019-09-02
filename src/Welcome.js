import React from 'react';
import { View, Image, Text } from 'react-native';
import logo from './images/icon.png';

export default class WelcomeScreen extends React.Component {
    performTimeConsumingTask = async () => {
        return new Promise((resolve) =>
            setTimeout(() => { resolve('result') },
                2000
            )
        )
    }

    async componentDidMount() {
        const data = await this.performTimeConsumingTask();
        if (data !== null) {
            this.props.navigation.navigate('Login');
        }
    }
    render() {
        return (
            <View style={styles.viewStyles}>
                <Image source={logo} />
                <Text style={styles.textStyles}>WhatsApp Msg to Unsaved No.</Text>
            </View>
        );
    }
}

const styles = {
    viewStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#87CEEB',
    },
    textStyles: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 20,
    },
};
