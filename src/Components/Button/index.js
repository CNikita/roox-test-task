import "./style.scss";

export default function Button({ buttonName, handler }) {
    return (
        <button type="button" onClick={() => handler(buttonName)}>{buttonName}</button>
    )
};

