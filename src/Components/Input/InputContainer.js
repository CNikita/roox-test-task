import { useState } from "react";
import InputComponent from "./InputComponent";

export default function InputContainer({ inputName, value, editStatus }) {
    const [data, setData] = useState(value);
    let type
    switch (inputName) {
        case 'email': type = 'email'
            break;
        case 'phone': type = 'tel'
            break;
        default: type = 'text'
            break;
    };

    function handleChange(event) {
        const { value } = event.target;
        setData(value);
    }
    return (
        <InputComponent
            type={type}
            inputName={inputName}
            value={data}
            editStatus={editStatus}
            handleChange={handleChange}
        />
    )
};