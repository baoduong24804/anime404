import React from "react";
import { useEffect } from "react";
import { Table, Skeleton } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { Tag } from "antd";



function MyTable() {
    // table
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(true);
    //radio
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const rowSelection = {
        type: 'radio', // Sử dụng chế độ radio
        selectedRowKeys,
        onChange: (selectedRowKeys) => {


            setSelectedRowKeys(selectedRowKeys);

        },

    };

    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'Tên phim', dataIndex: 'nameFlim', key: 'nameFlim' },
        { title: 'Tên gốc', dataIndex: 'originalName', key: 'originalName' },
        { title: 'Tập mới nhất', dataIndex: 'newEpisode', key: 'newEpisode' },
        { title: 'Trạng thái', dataIndex: 'status', key: 'status', render: (status) => (
            <Tag color={status ? 'green' : 'red'} style={{fontWeight: 'bold'}}>
              {status ? 'Online' : 'Offline'}
            </Tag>
          ) },
    ];

    // Hàm để lấy dữ liệu từ server
    const fetchData = async () => {
        try {
            const result = await axios.get('http://localhost:9000/api/get/films');
            setDataSource(result.data); // Cập nhật dataSource
        } catch (err) {
            console.error('Error fetch API', err);
        } finally {
            setLoading(false); // Đặt loading là false sau khi fetch xong
        }
    };

    // Gọi hàm fetchData khi component mount
    useEffect(() => {
        fetchData();
    }, []);

    // Theo dõi sự thay đổi của dataSource
    useEffect(() => {
        if (!loading) { // Đảm bảo rằng loading đã hoàn tất
            if (dataSource.length > 0) {
                setSelectedRowKeys([dataSource[0].id]);
            }
        }
    }, [loading]); // Theo dõi dataSource và loading


    return (
        <>
            {loading ? (

                <Skeleton paragraph={{ rows: 5 }} active />

            ) : (
                <Table
                    columns={columns}
                    dataSource={dataSource}
                    rowSelection={rowSelection}
                    rowKey="id" // Đảm bảo có key duy nhất cho mỗi hàng
                    onRow={(record) => ({
                        onClick: () => {
                            setSelectedRowKeys([record.id]);
                        },
                    })}
                />
            )}

        </>
    )
}


export default MyTable;