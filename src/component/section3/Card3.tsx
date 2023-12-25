
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
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 100,
      fixed: 'left',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'John',
          value: 'John',
        },
      ],
    //   onFilter: (value: string, record) => record.name.indexOf(value) === 0,
    },
    {
      title: 'Other',
      children: [
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          width: 150,
          sorter: (a, b) => a.age - b.age,
        },
        {
          title: 'Address',
          children: [
            {
              title: 'Street',
              dataIndex: 'street',
              key: 'street',
              width: 150,
            },
            {
              title: 'Block',
              children: [
                {
                  title: 'Building',
                  dataIndex: 'building',
                  key: 'building',
                  width: 100,
                },
                {
                  title: 'Door No.',
                  dataIndex: 'number',
                  key: 'number',
                  width: 100,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Company',
      children: [
        {
          title: 'Company Address',
          dataIndex: 'companyAddress',
          key: 'companyAddress',
          width: 200,
        },
        {
          title: 'Company Name',
          dataIndex: 'companyName',
          key: 'companyName',
        },
      ],
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      width: 80,
      fixed: 'right',
    },
  ];
  
  const data: DataType[] = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: 'John Brown',
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
                size="middle"
                scroll={{ x: 'calc(700px + 50%)', y: 240 }}
            />
        </div>
     </>
    );
  };
  
  export default Card3;