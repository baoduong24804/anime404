import React from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { AppstoreOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Table from './table-list';
import { Flex } from 'antd';
import { Col, Row } from 'antd';

function MyMenu() {

    const items = [
        {
            key: 'sub1',
            label: 'Quản lý phim',
            icon: <PlayCircleOutlined />,
            children: [
                {
                    key: 'g1',
                    label: 'Danh sách',
                    type: 'group',
                    children: [
                        {
                            key: '1',
                            label: 'Danh sách phim',
                        }
                    ],
                },
                {
                    key: 'g2',
                    label: 'Thao tác',
                    type: 'group',
                    children: [
                        {
                            key: '2',
                            label: 'Thêm phim mới',
                        },
                        {
                            key: '3',
                            label: 'Chỉnh sửa phim',
                        },
                    ],
                },
            ],
        },
        {
            key: 'sub2',
            label: 'Navigation Two',
            icon: <AppstoreOutlined />,
            children: [
                {
                    key: '5',
                    label: 'Option 5',
                },
                {
                    key: '6',
                    label: 'Option 6',
                },
                {
                    key: 'sub3',
                    label: 'Submenu',
                    children: [
                        {
                            key: '7',
                            label: 'Option 7',
                        },
                        {
                            key: '8',
                            label: 'Option 8',
                        },
                    ],
                },
            ],
        },
        {
            type: 'divider',
        }
    ];

    const [selectedKey, setSelectedKey] = useState('1');
    // const [collapsed, setCollapsed] = useState(false);
    // const toggleCollapsed = () => {
    //     setCollapsed(!collapsed);
    // };
    const onClick = (e) => {
        console.log('click ', e);
        setSelectedKey(e.key);
    };
    return (

        <Row gutter={6}>
            <Col xs={24} sm={8} md={6} lg={4} xl={4}>
                <Menu
                    onClick={onClick}
                    selectedKeys={[selectedKey]}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={items}
                />
            </Col>
            <Col xs={24} sm={16} md={18} lg={20} xl={20}>
                {selectedKey === '1' && <Table />}
                {selectedKey === '2' && <Table />}
                {selectedKey === '3' && <Table />}
            </Col>
        </Row>

    )
}

export default MyMenu;