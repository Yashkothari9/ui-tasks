import React ,{useState} from 'react';
import {Card ,Input ,Row, Col, Button} from 'antd';
import TeacherTable from './TeacherTable';
import { teachers } from '../data';

const {Search} = Input;

const Teacher = () => {
    let [TeacherList,setTeacherList]=useState([...teachers]);

    const onSearch = (value) => {
      setTeacherList(value===""?teachers:teachers.filter(item =>
         item.name.includes(value)||
         item.subject.includes(value)||
         item.email.includes(value)||
         item.phone.includes(value)||
         item.school.includes(value)
       ));
 };

    const onClickRefresh =()=>{
      new Promise((resolve,reject)=>setTimeout(()=>{setTeacherList([...teachers])},1000));
    }

  return (
    <Card bordered= {true} className='card' hoverable={true}>
         <Row>
            <Col span={22}>
                <h3 >{"Teachers List"}</h3>
            </Col>
            <Col span={2}>
                <Button type="dashed" onClick={onClickRefresh}>Refresh</Button>
            </Col>
          </Row>
          <Row>
              <Col span={12}>
                <Search placeholder="input search text" onSearch={onSearch} enterButton />
              </Col>
          </Row>
        <TeacherTable TeacherList= {TeacherList} setTeacherList={setTeacherList}/>
    </Card>
  );
};

export default Teacher;
