import ListUsersComponent from "./ListUsersComponent";
import CartUser from "../CartUser";

export default function ListUsersContainer({ users }) {
    const userItems = users.map(item => <CartUser key={item.id} item={item} />);
    return (
        <ListUsersComponent userItems={userItems} />
    )
};