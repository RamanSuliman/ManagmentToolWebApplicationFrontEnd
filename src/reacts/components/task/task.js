import {Menu} from './subMenu/menu';
import {MenuButton} from './subMenu/menuButton'

export const Task = ({title, descr, btn_text, type}) =>
{
    return (
        <div>
            <h2>{title}</h2>
            <p>{descr}</p>
            <p>{type}</p>
            <MenuButton buttonText={btn_text} menuComponent={<Menu/>} />
        </div>
    );
};