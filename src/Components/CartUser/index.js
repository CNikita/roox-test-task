import { Link } from 'react-router-dom';

import './style.scss';

export default function CartUser({ item }) {
    const { id, name, address: { city }, company: { name: companyName } } = item;
    return (
        <div className="cart-user">
            <div className="cart-user__data">
                <div>ФИО: <span>{name}</span></div>
                <div>город: <span>{city}</span></div>
                <div>компания: <span>{companyName}</span></div>
            </div>
            <div className="cart-user__details">
                <Link to={`/${id}`}key={id}>
                    Подробнее
                </Link>
            </div>
        </div>
    )
};