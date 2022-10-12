import React, { useState } from 'react';
import { MdErrorOutline } from 'react-icons/md';
import styled from 'styled-components';

function FormInput (props) {
    const [focused, setFocused] = useState(false);

    const handleFocus = (e) => {
        setFocused(true);
    }

    return (
        <Wrapper>
            <label htmlFor={props.name}>{props.label}</label>
            <input type={props.type}    
                    name={props.name}
                    id={props.name}
                    pattern={props.pattern}
                    inputmode={props.inputmode}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                    aria-required="true"
                    required
                    />
            <span>
                <MdErrorOutline/>
                {props.errorMessage}
            </span>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin: 0.4rem 0;
    input {
        border: 1px solid rgb(193,192,192);
        padding: 0.2rem 1rem;
        font-size: 1.4rem;
        width: 100%;
        outline: none;
        line-height: 3rem;
        font-size: 1.2rem;
    }
    span {
        color: rgb(237,65,52);
        font-size: 0.8rem;  
        display: none;
    }
    input:invalid[focused="true"] {
            border: 1px solid rgb(237,65,52);
    }
    input:invalid[focused="true"] ~ span {
            display: flex;
            gap: 0.2rem;
            padding: 0.2rem;
    }
`;

export default FormInput;