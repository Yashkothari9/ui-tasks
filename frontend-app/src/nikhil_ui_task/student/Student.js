import React ,{useState}from 'react';
import { Card ,Input ,Row ,Col ,Button} from 'antd';
import StudentTable from './StudentTable';
import { students } from '../data';
// import _filter from 'lodash/filter';

const {Search} = Input;

const Student = () => {
    const [StudentList,setStudentList]=useState(students);
    
    const onSearch = (value) => {
         setStudentList(value===""?students:students.filter(item =>
            item.name.includes(value)||
            item.rollno.includes(value)||
            item.email.includes(value)||
            item.phone.includes(value)
          ));
    };

    const onClickRefresh =()=>{
        new Promise((resolve,reject)=>setTimeout(()=>{setStudentList([...students])},1000));
    }

    return (
        <Card bordered= {true} className='card' hoverable={true}>
            <Row>
                <Col span={22}>
                    <h3 >{"Students List"}</h3>
                </Col>
                <Col span={2}>
                    <Button type="dashed" onClick={onClickRefresh}>Refresh</Button>
                </Col>
            </Row>
            <Row>
                <Col span={12}> 
                    <Search placeholder="input search text" onSearch ={onSearch} enterButton/>
                </Col>
            </Row>
            <StudentTable StudentList= {StudentList}/>
        </Card>
    );
};

export default Student;
