
import React, { useEffect, useState } from "react";
import {  ArrowLeftOutlined ,ArrowRightOutlined,PlusOutlined,DeleteOutlined} from '@ant-design/icons'; //Icon
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio,DatePicker,Tabs, Modal } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import type { MenuProps } from 'antd';
import {  Dropdown   } from 'antd';
import { Select, Space } from 'antd';
//tabel
import { Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import '../../public/css/main_TimeSheet/Card3.scss'

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    street: string;
    building: string;
    number: number;
    companyAddress: string;
    companyName: string;
    gender: string;
  }

const Card3: React.FC = () => {
    const handleChange_selectCard3 = (value: string) => {
        console.log(`selected handleChange_select_left_top_cardbody2_Section2 ${value}`);
      };
      //tabel


  
  const columns: ColumnsType<DataType> = [
    {
      title: 'Date',
      dataIndex: 'name',
      key: 'name',
      width: 25,
    },
    {
      title: 'Registration Hours',
      width:20,
      children: [
        {
          title: 'Check in',
          dataIndex: 'building',
          key: 'building',
          width: 20,
        },
        {
          title: 'Check out',
          dataIndex: 'number',
          key: 'number',
          width: 20,
        },
      ],
    },
    {
      title: 'Checking time',
      width:20,
      children: [
        {
          title: 'Check in',
          dataIndex: 'building',
          key: 'building',
          width:20,
        },
        {
          title: 'Check out',
          dataIndex: 'number',
          key: 'number',
          width:20,
        },
      ],
    },
    {
      title: 'Tracker Time',
      dataIndex: 'name',
      key: 'name',
      width: 25,
    },
    {
      title: 'Result',
      width:20,
      children: [
        {
          title: 'Check in late',
          dataIndex: 'building',
          key: 'building',
          width: 20,
        },
        {
          title: 'Check out early',
          dataIndex: 'number',
          key: 'number',
          width: 20,
        },
      ],
    },
    {
      title: 'Edited by',
      dataIndex: 'name',
      key: 'name',
      width: 25,
    },
    {
      title: 'Punishment Money',
      dataIndex: 'name',
      key: 'name',
      width: 25,
    },
    {
      title: 'Complain',
      dataIndex: 'name',
      key: 'name',
      width: 25,
    },
    {
      title: 'Complain Reply',
      dataIndex: 'name',
      key: 'name',
      width: 25,
    },
    {
      title: 'Action',
      dataIndex: 'name',
      key: 'name',
      width: 25,
    },
  ];
  
  const data: DataType[] = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: '23/12/2023',
      age: i + 1,
      street: 'Lake Park',
      building: 'C',
      number: 2035,
      companyAddress: 'Lake Street 42',
      companyName: 'SoftLake Co',
      gender: 'M',
    });
  }
    return (
        
      <>
         <div className="top_cardbody3">

                <div className="textH2">Check in <br /> punishments</div>
                <div className="button_left_top_cardbody3">
                    <div className="Chungbutton_left_top_cardbody3"> 
                        <label htmlFor="">Year</label>
                        <Select
                            defaultValue="2023"
                            style={{ width: 80 }}
                            onChange={handleChange_selectCard3}
                            options={[
                                { value: '2021', label: '2021' },
                                { value: '2022', label: '2022' },
                                { value: '2023', label: '2023' },
        
                            ]}
                        />
                    </div>
                    <div className="Chungbutton_left_top_cardbody3">
                        <label htmlFor="">Month</label>
                        <Select
                            defaultValue="2023"
                            style={{ width: 80 }}
                            onChange={handleChange_selectCard3}
                            options={[
                                { value: '10', label: '10' },
                                { value: '11', label: '11' },
                                { value: '12', label: '12' },
        
                            ]}
                        />
                    </div>
                    <div className="Chungbutton_left_top_cardbody3 cardbody3Total" >Total Punished: <br />0</div>
                </div>
                <div className="right_left_top_cardbody3">
                        <div className="left_right_left_top_cardbody3">Click vào button Complain và nhập nội dung khiếu nại nếu bạn thấy không đúng.</div>
                        <div className="right_right_left_top_cardbody3">BUTTON</div>
                </div>
        </div>
        <div className="bot_cardbody3">
            <Table
                columns={columns}
                dataSource={data}
                bordered
                size="small"
                // scroll={{ x: 'calc(700px + 50%)', y: 240 }}
                scroll={{ x: 1300 }}
            />
        </div>
     </>
    );
  };
  
  export default Card3;