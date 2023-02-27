import {Menu} from './subMenu/menu';
import {MenuButton} from './subMenu/menuButton'

export const Task = () => {
    return (
        <div>
            <MenuButton buttonText="Show menu" menuComponent={<Menu/>} />
        </div>
    );
};