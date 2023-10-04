import React from "react";
import CustomButton from "../authScreen/SignUpScreen";

export default function SocialSignInButtons() {
    const onSignInFacebook = () => {
        console.warn('Entrar com Facebook')
    };
    const onSignInGoogle = () => {
        console.warn('Entrar com Google')
    };
    const onSignInApple = () => {
        console.warn('Entrar com Apple')
    };
    return(
        <>
            <CustomButton text='Entrar com Facebook'
                onPress={onSignInFacebook}
                bgColor='#E7EAF4'
                fgColor='#4765a9'
                />
                <CustomButton text='Entrar com Google'
                onPress={onSignInGoogle}
                bgColor="#fae9ea"
                fgColor="#dd4d44"
                />
                <CustomButton text='Entrar com Apple'
                onPress={onSignInApple}
                bgColor="#e3e3e3"
                fgColor="#363636"
                />
        </>
    );
};

