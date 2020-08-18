import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

import { useAuth } from '../../contexts/auth';

const SignIn: React.FC = () => {

    const { signed, signIn, user } = useAuth();

    console.log(signed, user)

    function handleSignIn() {
        signIn();
    }

    return (
        <View style={styles.container}>
            <Button title="Sign in" onPress={handleSignIn} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});

export default SignIn;