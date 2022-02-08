import React from 'react';
import {Table} from 'antd';

const TeacherTable = (props) => {

const {TeacherList} =props;

const columns = [
    {
        title : "Full Name",
        dataIndex : "name",
        key : "name",
        fixed : "left"
    },
    {
        title : "Subject",
        dataIndex : "subject",
        key : "name",
    },
    {
        title : "Email",
        dataIndex : "email",
        key : "name",
    },
    {
        title : "Contact Number",
        dataIndex : "phone",
        key : "name"
    },
    {
        title : "School",
        dataIndex : "school",
        key : "name"
    },
]
  return (
    <Table 
    columns={columns} 
    dataSource={TeacherList} 
    className='innerCard'
    scroll={{ x: 1300 }}
    pagination={{
        showSizeChanger:true,
        pageSizeOptions: ['3', '5'], 
    }} 
    />
  );
};

export default TeacherTable;
