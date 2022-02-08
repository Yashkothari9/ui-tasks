import React from 'react';
import '../App.css';
import {Col ,Row, Typography} from 'antd';
import Student from './student/Student';
import Teacher from './teacher/Teacher';

const {Title} =Typography;

export default function ScreenUi()
{
    return (
        <div>
      <Title className={'title'} level={2}>Byju's University Data</Title>
      <Row>
        <Col span={18} offset={3}>
          <Student/>
        </Col>
      </Row>
      <Row>
        <Col span={18} offset={3}>
          <Teacher/>
        </Col>
      </Row>
    </div>
      );
}