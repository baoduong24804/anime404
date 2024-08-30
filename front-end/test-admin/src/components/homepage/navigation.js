import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { Menu } from "antd";
import { SettingOutlined, PlaySquareOutlined, HomeOutlined } from '@ant-design/icons';

const Navigation = () => {
    const items = [
        {
            label: <Link to="/home">Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to="/">Anime404</Link>,
            key: 'anime',
            icon: <PlaySquareOutlined />,
        },
        {
            label: <Link to="/admin">Admin</Link>,
            key: 'admin',
            icon: <SettingOutlined />,
        }
        
    ];
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };


    return <Menu style={{marginBottom:"5px"}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;


}




export default Navigation;