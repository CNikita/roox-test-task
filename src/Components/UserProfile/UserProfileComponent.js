import Button from '../Button';

import './style.scss';

export default function UserProfileComponent({ sendData, editStatus, changeEditStatus, inputElements }) {
    return (
        <div className="user-profile">
            <div className='user-profile__header'>
                <h1>Профиль пользователя</h1>
                <Button buttonName={'Редактировать'} handler={changeEditStatus} />
            </div>
            <div className='user-profile__main'>
                <form id='sendData' onSubmit={sendData}>
                    <div className='user-profile__data'>
                        {inputElements}
                        <div className='input-element'>
                            <div>Comment</div>
                            <textarea disabled={!editStatus} name='comment'></textarea>
                        </div>
                    </div>
                    <button disabled={!editStatus} type="submit">Отправить</button>
                </form>
            </div>


        </div>
    )
};