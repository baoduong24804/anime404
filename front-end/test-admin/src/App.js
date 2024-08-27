
import './App.css';
import { AppstoreOutlined, SettingOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Table } from 'antd';
import { Flex } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Collapse } from 'antd';

const { Panel } = Collapse;


function App() {
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
              label: 'Xem danh sách phim',
            }
          ],
        },
        {
          key: 'g2',
          label: 'Thao tác',
          type: 'group',
          children: [
            {
              key: '3',
              label: 'Thêm phim mới',
            },
            {
              key: '4',
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
      key: 'sub4',
      label: 'Navigation Three',
      icon: <SettingOutlined />,
      children: [
        {
          key: '9',
          label: 'Option 9',
        },
        {
          key: '10',
          label: 'Option 10',
        },
        {
          key: '11',
          label: 'Option 11',
        },
        {
          key: '12',
          label: 'Option 12',
        },
      ],
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

  const onClick = (e) => {
    console.log('click ', e);
  };

  // layout
  const [value, setValue] = useState('horizontal');

  // table
  const [dataSource, setDataSource] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });



// Thiết lập dữ liệu mẫu
const setSampleData = () => {
  const data = [
    { id: '1', nameFlim: 'John', originalName: 'ten goc', newEpisode: 2, status: true, details: 'Chi tiết về phim John' },
    { id: '2', nameFlim: 'Jim', originalName: 'ten goc 2', newEpisode: 3, status: false, details: 'Chi tiết về phim John' },
  ];
  setDataSource(data);

  // Chọn hàng đầu tiên mặc định nếu có dữ liệu
  if (data.length > 0) {
    setSelectedRowKeys([data[0].id]);
  }
};


  
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Tên phim', dataIndex: 'nameFlim', key: 'nameFlim' },
    { title: 'Tên gốc', dataIndex: 'originalName', key: 'originalName' },
    { title: 'Tập mới nhất', dataIndex: 'newEpisode', key: 'newEpisode' },
    { title: 'Trạng thái', dataIndex: 'status', key: 'status',render: (status) => (status ? 'Có' : 'Không') },
  ];

  //radio
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  // Gọi hàm setSampleData khi component mount
useEffect(() => {
  setSampleData();

}, []);

const expandable = {
  expandedRowRender: (record) => (
    <Collapse defaultActiveKey={['1']} expandIconPosition="right">
      <Panel header="Chi tiết phim" key="1">
        {record.details}
      </Panel>
    </Collapse>
  ),
  rowExpandable: (record) => !!record.details, // Chỉ cho phép mở rộng hàng có chi tiết
};

/// fetch api
// Hàm để lấy dữ liệu từ server
const fetchData = async (page, pageSize) => {
  try {
    const response = await axios.get('https://api.example.com/data', {
      params: {
        page,
        pageSize,
      },
    });

    setDataSource(response.data.items); // Cập nhật dữ liệu từ API
    setPagination({
      current: page,
      pageSize: pageSize,
      total: response.data.total, // Tổng số hàng từ server
    });
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
};

  const rowSelection = {
    type: 'radio', // Sử dụng chế độ radio
    selectedRowKeys,
    onChange: (selectedRowKeys) => {
      setSelectedRowKeys(selectedRowKeys);
    },
  };

  return (
    <div className="App">
    <Flex gap="middle" vertical>
    <Flex vertical={value === 'vertical'}>

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
     
 
      <Table style={{ width: '100%' }}
        columns={columns}
        dataSource={dataSource}
        rowSelection={rowSelection}
        rowKey="id" // Đảm bảo có key duy nhất cho mỗi hàng
        expandable={expandable}
        onRow={(record) => ({
          onClick: () => {
            setSelectedRowKeys([record.id]); 
          },
        })}
      />
      </Flex>
      
    </Flex>
    </div>
  );
}

export default App;
