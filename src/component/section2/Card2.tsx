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
import '../../public/css/main_TimeSheet/Card2.scss'

const Card2: React.FC = () => { 

  const handleChange_select_left_top_cardbody2_Section2 = (value: string) => {
    console.log(`selected handleChange_select_left_top_cardbody2_Section2 ${value}`);
  };
  //today
  interface timeWorking{
    time_Worked: number;
    time_Checkin:number|string;
    time_Checkout:number|string;
    status: string | number;
  }

  interface  DataType2{
    key:React.Key ;
    time_Opentalk:number ;
    total:number;

    statusWork: timeWorking[];

  }
  //Render div change_Color
  const renderStatusColumn = (statusWork: timeWorking[]) => (
    <span>
      {statusWork.map((status, index) => (
        <>
          <div key={index} style={{ 
          backgroundColor:  status.time_Worked < 4 ? '#fc7878' : '#fcef78',
          borderColor: '#ebebeb',
          borderStyle: 'solid',
          borderWidth: '1px',
          display: 'table-cell',
          fontSize: '11px',
          lineHeight: '20px',
          padding: '1px 9px',
          textAlign: 'center',}}>
            <div className="topCol">
              <div> {status.time_Worked}</div>
              <div> {status.status}</div>
            </div>
            <br />
            <div className="botCol">
              <div> {status.time_Checkin}</div>
              <div> {status.time_Checkout}</div>
            </div>
          </div>
        </>
      ))}
    </span>
  );
  const columns: ColumnsType<DataType2> = [
    {title:'Total',width: 70,dataIndex: 'total',key: 'total', fixed:'left'},
    {title:'Open Talk',width:70,dataIndex: 'time_Opentalk',key: 'time_Opentalk',fixed:'left'},
    { title: (<>1<br />Sun</>), dataIndex: 'statusWork', key: '1' ,width:70, render: renderStatusColumn},
    { title: (<>2<br />Mon</>), dataIndex: 'statusWork', key: '2' ,width:70,render: renderStatusColumn},
    { title: (<>3<br />Tue</>), dataIndex: ' ', key: '3' ,width:70},
    { title: (<>4<br />Sat</>), dataIndex: ' ', key: '4' ,width:70},
    { title: (<>5<br />Sun</>), dataIndex: ' ', key: '5' ,width:70},
    { title: (<>6<br />Fri</>), dataIndex: ' ', key: '6' ,width:70},
    { title: (<>7<br />Sun</>), dataIndex: ' ', key: '7' ,width:70},
    { title: (<>8<br />Sun</>), dataIndex: ' ', key: '8' ,width:70},
    { title: (<>9<br />Sun</>), dataIndex: ' ', key: '9' ,width:70},
    { title: (<>10<br />Sun</>), dataIndex: ' ', key: '10' ,width:70},
    { title: (<>11<br />Sun</>), dataIndex: ' ', key: '11' ,width:70},
    { title: (<>12<br />Sun</>), dataIndex: ' ', key: '12' ,width:70},
    { title: (<>13<br />Sun</>), dataIndex: ' ', key: '13' ,width:70},
    { title: (<>14<br />Sun</>), dataIndex: ' ', key: '14' ,width:70},
    { title: (<>15<br />Sun</>), dataIndex: ' ', key: '15' },
    { title: (<>16<br />Sun</>), dataIndex: 'address', key: '16' },
  ];
  
  const data: DataType2[] = [
    {key: '1',total: 20,time_Opentalk: 32,statusWork:[{ time_Worked: 2, time_Checkin: '8:00', time_Checkout: '17:00' ,status:'O-FD'}]},
    // {key: '2',name: 'Jim Green',age: 40,address: 'London Park',},
    // { key: '1', name: 'John Brown', age: 32, address: 'New York Park', col3: 'Tue Value' },
  ];
 
    return (
      <>
        <div className="top_cardbody2">
            <div className="left_top_cardbody2">
                <div className="c2div select_left_top_cardbody2">Summary</div>
                <div className="select_left_top_cardbody2 seYear">
                  <label htmlFor="">Year</label>
                  <Select
                      defaultValue="2023"
                      style={{ width: 80 }}
                      onChange={handleChange_select_left_top_cardbody2_Section2}
                      options={[
                          { value: '2021', label: '2021' },
                          { value: '2022', label: '2022' },
                          { value: '2023', label: '2023' },
 
                      ]}
                  />

                </div>
                <div className="select_left_top_cardbody2 seMonth">
                  <label htmlFor="">Month</label>
                    <Select
                        defaultValue="9"
                        style={{ width: 80 }}
                        onChange={handleChange_select_left_top_cardbody2_Section2}
                        options={[
                          { value: '1', label: '1' },
                          { value: '2', label: '2' },
                          { value: '3', label: '3' },
                          { value: '4', label: '4' },
                          { value: '5', label: '5' },
                          { value: '9', label: '9' },
                        ]}
                  />
                </div>
                <div className="select_left_top_cardbody2 seStatus">
                    <label htmlFor="">Month</label>
                        <Select
                            defaultValue="All"
                            style={{ width: 120 }}
                            onChange={handleChange_select_left_top_cardbody2_Section2}
                            options={[
                                { value: 'All', label: 'All' },
                                { value: 'New', label: 'New' },
                                { value: 'Pending or Approved', label: 'Pending or Approved' },
                                { value: 'Rejected', label: 'Rejected'}
                            ]}
                      />
                </div>
           </div>

            <div className="right_top_cardbody2">
                       BUTTON....
            </div>
        </div>
        <div className="bot_cardbody2">
            <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
        </div>
     </>
    );
  };
  
  export default Card2;