import "./style.scss";

export default function ListUsersComponent({userItems}) {
    return (
        <div className="list-users">
            <h1>Список пользователей</h1>
            {userItems}
        </div>
    )
};