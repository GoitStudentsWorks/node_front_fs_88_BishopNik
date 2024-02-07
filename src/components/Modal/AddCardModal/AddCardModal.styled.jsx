import styled from 'styled-components';

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #FFFFFF;
    svg {
        width: 18px;
        height: 18px;
        fill: #FFFFFF;
    }
`;

export const ModalContainer = styled.div`
    position: relative;
    background: #151515;
    color: #bedbb0;
    padding: 20px;
    border-radius: 10px;
    max-width: 335px;  
    margin: 0 auto;
`;

export const Label = styled.label`
    margin-bottom: 5px;
    display: block;
`;

export const Input = styled.input`
    width: 315px;
    height: 49px;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #bedbb0;
    border-radius: 5px;
    background-color: transparent;
`;

export const TextArea = styled.textarea`
    width: 315px;
    height: 154px;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #bedbb0;
    border-radius: 5px;
    background-color: transparent;
`;

export const RadioButton = styled.input`
    margin-bottom: 20px;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #000;
    outline: none;
    cursor: pointer;
    background-color: ${props => {
        switch (props.value) {
            case "color1":
                return "#8FA1D0";
            case "color2":
                return "#E09CB5";
            case "color3":
                return "#BEDBB0";
            case "color4":
                return "rgba(255, 255, 255, 0.3)";
            default:
                return "rgba(255, 255, 255, 0.3)";    
        }
    }};

    &:focus {
        border: 2px solid #151515;
    }

    &:checked {
        border: 2px solid transparent;
    }
`;

export const AddButton = styled.button`
    background-color: #bedbb0;
    color: #151515;
    padding: 8px 15px;
    border: none;
    width: 332px;
    height: 49px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;

    &::before {
        content: "+";
        display: block;
        width: 28px;
        height: 28px;
        background-color: #151515;
        border-radius: 8px;
        color: #bedbb0;
        font-size: 20px;
        text-align: center;
        line-height: 28px;
        margin-right: 10px;
    }
`;