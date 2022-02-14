import React from "react";
import '../../App.css';
import 'antd/dist/antd.css';
import { useState } from "react";
import { data } from "../Data";
import {columns} from "../Columns";
import { Table,Row,Col,Card,Button } from "antd";
import { Input} from 'antd';
const {Search} = Input;


export default function Student(){

    const [studentData,setStudentData]= useState(data);
    const [columnsHeader,setColumnsHeaders]= useState(columns);

    const onSearch= value => setStudentData(
        value===""?data:data.filter(entry =>
        entry.name.includes(value)||
        entry.passoutYear.includes(value)||
        entry.percent.includes(value)||
        entry.city.includes(value)||
        entry.id.includes(value)
      ));

    const onRefresh=()=>{
        setTimeout(() => {setStudentData(data)}, 3000);
    }  
    return(
        <div>
            <Card className="boxStyle">
                <Row className="RowOp">
                    <Col span={6} >
                        <h1><b>Student Data</b></h1>
                    </Col>
                    <Row span={6} className="nextToNext">
                     <Col>   
                        <Button type="primary" ghost  onClick={onRefresh}>
                            Refresh
                        </Button> 
                     </Col>
                     <Col>     
                        <Search
                            style={{marginLeft:10}}
                            placeholder="Search "
                            allowClear
                            onSearch={onSearch}
                        />
                     </Col>
                    </Row>
                </Row>
                <Row>
                    <Col span={24}>
                    <Table columns={columnsHeader} 
                           dataSource={studentData} 
                           className="TableDesign"
                           pagination={{ defaultPageSize: 3,
                                         pageSizeOptions: ['4', '5'], 
                                         showSizeChanger: true}} />
                    </Col>
                </Row>
            </Card>
        </div>
    )

}
