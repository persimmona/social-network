import { Outlet } from 'react-router-dom';
import { Menu } from './Menu';
import styles from './Layout.module.css';

export const Layout = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <Menu />
                <div id='details'>
                    <Outlet />
                </div>
            </div>
        </>
    );
};
