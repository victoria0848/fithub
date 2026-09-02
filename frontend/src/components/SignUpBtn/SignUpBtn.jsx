import React from 'react';
import style from './SignUpBtn.module.scss';

export function SignUpBtn({ onClick, text = "Sign up" }) {
    return (
        <button onClick={onClick} className={style.signUpBtn}>
            {text}
        </button>
    );
}