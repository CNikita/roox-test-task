import './style.scss';

export default function InputComponent({ inputName, value, editStatus, handleChange, type }) {
    return (
        <div className='input-element'>
            <div>{inputName}</div>
            <input
                type={type}
                onChange={handleChange}
                disabled={!editStatus}
                name={inputName}
                value={value}
                required
            />
        </div>
    )
};