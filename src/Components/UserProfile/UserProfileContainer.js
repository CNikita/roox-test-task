import { useParams } from "react-router-dom"
import { useState } from "react"
import UserProfileComponent from "./UserProfileComponent"
import InputContainer from "../Input/InputContainer"

export default function UserProfileContainer({ users }) {
    const [editStatus, setEditStatus] = useState(false);

    let params = useParams();
    let user = users.find(user => user.id === +params.userId);
    const { name, username, email, phone, website, address: { street, city, zipcode } } = user;
    const userData = [{ name }, { username }, { email }, { phone }, { website }, { street }, { city }, { zipcode }];

    const inputElements = userData.map(data =>
        <InputContainer
            key={Object.keys(data)[0]}
            inputName={Object.keys(data)[0]}
            value={Object.values(data)[0]}
            editStatus={editStatus} />
    );

    function changeEditStatus() {
        setEditStatus(!editStatus);
    };

    function sendData(e) {
        e.preventDefault();
        const element = e.target.elements
        const jsonElement = JSON.stringify({
                "id": params.userId,
                "name": element.name.value,
                "username": element.username.value,
                "email": element.email.value,
                "address": {
                    "street": element.street.value,
                    "city": element.city.value,
                    "zipcode": element.zipcode.value,
                },
                "phone": element.phone.value,
                "website": element.website.value,
                "comment": element.comment.value
            }, null, '\t')
        console.log(jsonElement)
    };

    return (
        <UserProfileComponent
            sendData={sendData}
            editStatus={editStatus}
            changeEditStatus={changeEditStatus}
            inputElements={inputElements}
        />
    )
};