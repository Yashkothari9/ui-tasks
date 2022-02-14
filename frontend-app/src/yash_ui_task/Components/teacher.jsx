import { useState } from "react";
import "../../App.css";
import { data } from "../teacherData";
import {columns} from "../teacherColumn";
import 'antd/dist/antd.css';
import { Table,Row,Col,Card, Button } from "antd";
import { Input} from 'antd';
const {Search} = Input;

export default function Teacher(){
    const [teacherData,setTeacherData]= useState(data);
    const [columnsHeader,setColumnsHeaders]= useState(columns);

    const onSearch= value => setTeacherData(
        data.filter(entry =>
        entry.name.includes(value)||
        entry.joinedYear.includes(value)||
        entry.yop.includes(value)||
        entry.subExpertise.includes(value)||
        entry.id.includes(value)
      )
      );
    
      const onRefresh=()=>{
        setTimeout(() => {setTeacherData(data)}, 3000);
    } 

      return(
        <div>
            <Card className="boxStyle">
                <Row className="RowOp">
                    <Col span={6} >
                        <h1><b>Teacher Data</b></h1>
                    </Col>

                    <Row span={6} className="nextToNext">
                     <Col>   
                        <Button type="primary" ghost onClick={onRefresh}>
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
                           bordered = {true}   
                           dataSource={teacherData} 
                           className="TableDesign"
                           pagination={{ defaultPageSize: 3,
                                         pageSizeOptions: ['4', '5'], 
                                        showSizeChanger: true}}/>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}
