import React from 'react';
import {Table} from 'antd';

const StudentTable = (props) => {

const {StudentList} =props;

const columns = [
    {
        title : "Full Name",
        dataIndex : "name",
        key : "rollno",
        fixed : "left",
    },
    {
        title : "Roll Number",
        dataIndex : "rollno",
        key : "rollno",
    },
    {
        title : "Class",
        dataIndex : "xclass",
        key : "rollno"
    },
    {
        title : "Email",
        dataIndex : "email",
        key : "rollno",
    },
    {
        title : "Contact Number",
        dataIndex : "phone",
        key : "rollno"
    },
    {
        title : "Percentage",
        dataIndex : "percentage",
        key : "rollno"
    },
]
  return (
    <Table 
    columns={columns} 
    dataSource={StudentList} 
    scroll={{ x: 1300 }}
    className='innerCard'
    pagination={{
        showSizeChanger:true,
        pageSizeOptions: ['3', '5'], 
    }} 
    />
  );
};

export default StudentTable;
