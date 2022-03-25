import "./style.scss";
import Button from "../Button";

export default function SortBlock({ sortUsers }) {
    const btnsArr = ['по городу', 'по компании'];
    return (
        <div className="sort-block">
            <div>Сортировка</div>
            {btnsArr.map(item => <Button key={item} buttonName={item} handler={sortUsers} />)}
        </div>
    )
};
