import React from "react";
import { useEffect } from "react";
import { Table, Skeleton } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { Tag } from "antd";
import { notification } from "antd";



const openNotification = () => {

   

    const key = 'updatable';
 
    notification.open({
        key,
        message: 'Đang tải dữ liệu',
        description: 'Vui lòng chờ...',
        icon: <i className="anticon anticon-loading" />,
        placement: 'topRight', // Hiển thị thông báo ở góc trên bên phải
        duration: 3, // Đặt duration là 0 để không tự động đóng ngay lập tức
      });
    
  };

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
            
           const result = await axios.get('https://demo-api-0jsh.onrender.com/api/get/films');
           setDataSource(result.data); 

        } catch (err) {
            console.error('Error fetch API', err);

        } finally {
            setLoading(false); // Đặt loading là false sau khi fetch xong
        
        }
    };

    // Gọi hàm fetchData khi component mount
    useEffect(() => {
        openNotification();
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