import React from "react";
import { Menu } from 'antd';
import { AppstoreOutlined, SettingOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Table from './table-list';
import { Flex } from 'antd';

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
        },
        {
            key: 'grp',
            label: 'Group',
            type: 'group',
            children: [
                {
                    key: '13',
                    label: 'Option 13',
                },
                {
                    key: '14',
                    label: 'Option 14',
                },
            ],
        },
    ];

    const [selectedKey, setSelectedKey] = useState('1');
    const onClick = (e) => {
        console.log('click ', e);
        setSelectedKey(e.key);
    };
    return (
        <>
            <Flex vertical={false}>
                <Menu
                    onClick={onClick}
                    style={{
                        width: 256,
                    }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={items}
                />
                <Flex vertical={true} style={{ width: '100%' }}>
                    {selectedKey === '1' && (
                        <Table></Table>
                    )}
                    {selectedKey === '2' && (
                        <Table></Table>
                    )}
                    {selectedKey === '3' && (
                        <Table></Table>
                    )}
                </Flex>
            </Flex>


        </>
    )
}

export default MyMenu;