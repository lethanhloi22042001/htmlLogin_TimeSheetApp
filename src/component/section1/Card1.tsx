import React, { useEffect, useState } from "react";
import {Navigate,useNavigate} from 'react-router-dom'
import "../../public/css/main_TimeSheet/Main_TimeSheet.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPeopleGroup,faClock, faUser,faArrowUp,faFile,faFlag,faEllipsisVertical,faCalendarDay,faCalendarXmark } from "@fortawesome/free-solid-svg-icons";
// New
import 'materialize-css/dist/css/materialize.min.css';
import TabPane_cpn from "../TabPane_cpn";
//ant desgine
import {  ArrowLeftOutlined ,ArrowRightOutlined,PlusOutlined,DeleteOutlined} from '@ant-design/icons'; //Icon
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio,DatePicker,Tabs, Modal } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import type { MenuProps } from 'antd';
import {  Dropdown   } from 'antd';
import { Select, Space } from 'antd';

const Card1: React.FC = () => {
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
    
    return (
      <>
 <div className="top_cardbody">
                                                    {/* Phía trên bên trái H3 =>2023-12-21 */}
                                                    <div className="top_cardbodyTOP">
                                                        <h5>2023-12-18</h5>
                                                    </div>
                                                    {/* 5 nút =>Refresh - Today -2023-12-21 */}
                                                    <div className="top_cardbodyBOT">
                                                        <div className="btnB btn_Refesh">
                                                            <Button className="" type="primary">Refresh</Button>
                                                        </div>
                                                        <div className="btnB btn_Today">
                                                            <Button className="" type="primary">Today</Button>
                                                        </div>
                                                        <div className="btnB btns_next" >
                                                            <div className="btns_nextChung  ">
                                                                <Flex className="btns_nextLeft"  align="flex-start" gap="small" vertical>
                                                                    <Button className="custom-btn"  type="primary"><ArrowLeftOutlined style={{ fontSize: '16px', color: '#08c' }} /></Button>
                                                                </Flex>
                                                            </div>
                                                            <div className="btns_nextChung  ">
                                                                <Flex className="btns_nextMid"  align="flex-start" gap="small" vertical>
                                                                    <Button className="custom-btn" type="primary">2023-12-25</Button>
                                                                </Flex>
                                                            </div>
                                                            <div className="btns_nextChung   ">
                                                                <Flex className="btns_nextRight" align="flex-start" gap="small" vertical>
                                                                    <Button className="custom-btn" type="primary"><ArrowRightOutlined  style={{ fontSize: '16px', color: '#08c' }}/></Button>
                                                                </Flex>
                                                            </div>
                                                        </div>
                                                        <div className="btnB">
                                                            <DatePicker/>
                                                        </div>
                                                        <div className="btnB ">
                                                            <div className="btn_btn">
                                                                <Button className="btnB_day" type="primary">Day</Button>
                                                                <Button className="btnB_week" type="primary">Week</Button>
                                                            </div>
                                                        </div>
                                                    </div>
                        </div>
                        {/*top_cardbody*/}
                        <div className="bot_cardbody">
                            <div className="mat-tab-header">
                                {/* Nội dung phần Mon-tue-> chủ nhật */}
                                <Tabs  >
                                    <TabPane tab={<div>Monday<br />08:00</div>}  key="1">   <TabPane_cpn/>  </TabPane>
                                    <TabPane tab={<div>Tuesday<br />08:00</div>} key="2">   <TabPane_cpn/> </TabPane>
                                    <TabPane tab={<div>Wednesday<br />08:00</div>} key="3"> <TabPane_cpn/>  </TabPane>
                                    <TabPane tab={<div>Thursday<br />08:00</div>} key="4">  <TabPane_cpn/> </TabPane>
                                    <TabPane tab={<div>Friday<br />08:00</div>} key="5">     <TabPane_cpn/> </TabPane>
                                    <TabPane tab={<div>Saturday<br />08:00</div>} key="6">   <TabPane_cpn/>  </TabPane>
                                    <TabPane tab={<div>Sunday<br />08:00</div>} key="7">    <TabPane_cpn/>   </TabPane>
                                    <TabPane tab={<div>Total<br />44:00</div>} key="8"></TabPane>
                                </Tabs>
                            </div> {/*mat-tab-header*/}
                        </div>{/*bot_cardbody*/}
     </>
    );
  };
  
  export default Card1;