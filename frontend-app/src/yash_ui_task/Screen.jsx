import '../App.css';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {Divider,PageHeader, Typography} from "antd";
import Student from './Components/student'; 
import Teacher from './Components/teacher';
import Layout from 'antd/lib/layout/layout';
import { Header } from 'antd/lib/layout/layout';

export default function ScreenUi()
{
    return (
        <div>
        <Layout>
          <Header><Typography>Record</Typography></Header>
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