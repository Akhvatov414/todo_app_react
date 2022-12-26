import React from 'react';
import AppListItem from './appListItem';

const AppList = () => {
    return (
        <ul className='list'>
            <li className='list-item'>Пресс качать</li>
            <li className='list-item'>Бегить</li>
            <li className='list-item'> <AppListItem/> </li>
        </ul>
    );
};

export default AppList;