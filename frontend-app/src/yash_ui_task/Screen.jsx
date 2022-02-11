import '../App.css';
import React from 'react';
import 'antd/dist/antd.css';
import {Divider, Typography} from "antd";
import Student from './Components/student'; 
import Teacher from './Components/teacher';
import Layout from 'antd/lib/layout/layout';
import { Header } from 'antd/lib/layout/layout';

export default function ScreenUi()
{
    return (
        <div>
        <Layout>
          <Header><Typography.Title><h1 style={{color:"yellow", alignItems:"center"}}>Record</h1></Typography.Title></Header>
        <div className='Middle'>
          <div>
            <Student />
          </div>
          <Divider />
          <div>
            <Teacher />
          </div>
        </div>
        </Layout>  
        </div>
      );
}