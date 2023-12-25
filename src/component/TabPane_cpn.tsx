import React, { useEffect, useState } from "react";
// New
import 'materialize-css/dist/css/materialize.min.css';
//ant desgine
import {  ArrowLeftOutlined ,ArrowRightOutlined,PlusOutlined,DeleteOutlined} from '@ant-design/icons'; //Icon
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio,DatePicker,Tabs, Modal } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import type { MenuProps } from 'antd';
import {  Dropdown   } from 'antd';
//Material today

import { Select, Space } from 'antd';

const TabPane_cpn: React.FC = () => {
    const [size, setSize] = useState<SizeType>('large');

    // const operations = <Button>Extra Action</Button>; // t2-cn
    const TabPane = Tabs.TabPane;

    //Modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    //Material today
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };
      
  
    return (
      <>
      <div className="ConTain_mat-tab-header">
          <div className="contain_TOP_mat-tab-header">
                                                <tr className="ng-star-inserted" >
                                                    <td style={{ width: '756px' , padding:'0px'}} className="ng-star-inserted1"> 
                                                        <span>
                                                          <b>[nca] [Company Activities]</b> (NCC Back Office) Open Talk - 
                                                        </span >
                                                        <span className="ng-star-inserted_Official">Official</span>
                                                        <span>
                                                            <textarea  title="á" className="mat-input-element " >Tham gia opentalk offline tại vp QN</textarea>
                                                        </span>
                                                    </td>
                                                    <td style={{ width: '25px',textAlign:'center',borderWidth: "1px 0px 0px",height:'77px' }}>4:00</td>
                                                    <td style={{ width: '25px' }}>
                                                        <span className="label bg-teal ng-star-inserted" style={{  backgroundColor:'#009688',marginTop: "-10px", padding: "6px 15px", minWidth: "90px", borderRadius: "10px", float: "right",fontWeight:'700',color:'white' }}>Pending</span>
                                                    </td>
                                                    <td style={{ width: '1px'  }}></td>
                                                    <td style={{ width: '115px' ,display:'flex'  }}>
                                                        <Button style={{ marginRight:'8px'}} type="primary" className="">Edit</Button>
                                                        <Button  type="primary" className="btn_delete_ng-star-inserted"><DeleteOutlined /></Button>
                                                    </td>
                                                </tr>
          </div>
          <div className="contain_BOT_mat-tab-header">
                <div className="mat-tab-headerButton btnLeft_mat-tab-header ">
                   <Button className="btnbtn_mat-tab-header" type="primary" onClick={showModal} >
                                                        <PlusOutlined />
                   </Button>
                  
                   <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                            <div className="titleM">
                               <div>New TimeSheet</div>
                               <div>2023-12-18</div>
                           </div>
                           {/* Space */}
                           <div className="typeProject">
                                <Select
                                    defaultValue="lucy"
                                    style={{ width: 120 }}
                                    onChange={handleChange}
                                    options={[
                                        { value: 'jack', label: 'Jack' },
                                        { value: 'lucy', label: 'Lucy' },
                                        { value: 'Yiminghe', label: 'yiminghe' },
                                        { value: 'disabled', label: 'Disabled', disabled: true },
                                    ]}
                                />
                           </div>
                           {/* Space */}
                           <div className="taskM">
                                    <div className="taskM_left">
                                        <span>Task</span>
                                        <div className="taskM_left_Select">
                                            <Select
                                                defaultValue="lucy"
                                                style={{ width: 120 }}
                                                onChange={handleChange}
                                                options={[
                                                    { value: 'jack', label: 'Jack' },
                                                    { value: 'lucy', label: 'Lucy' },
                                                    { value: 'Yiminghe', label: 'yiminghe' },
                                                    { value: 'disabled', label: 'Disabled', disabled: true },
                                                ]}
                                            />
                                        </div>
                                    </div>
                                    <div className="taskM_right">
                                            <input
                                                type="checkbox"
                                                id="myCheckbox"
                                                name="myCheckbox"
                                                style={{fontSize:'16px' , backgroundColor:'black'}}
                                            />
                                            <label htmlFor="myCheckbox"  style={{fontSize:'16px' , backgroundColor:'black' ,cursor: 'pointer',width: '30px',
    height: '30px',}}>
                                                Check me:
                                            </label>
                                    </div>
                           </div>
                           {/* Space */}
                           <div className="noteM"></div>
                           {/* Space */}
                           <div className="worktimeM"></div>
                           {/* Space */}
                           <div className="typeM"></div>
                   </Modal>
                </div>
                <div className="mat-tab-headerButton btnRight_mat-tab-header ">
                    <Button className="btnbtn_mat-tab-header" type="primary" >
                        Submit Week for Approval 
                   </Button>
                </div>
          </div>
      </div>
      </>
    );
  };
  
  export default TabPane_cpn;