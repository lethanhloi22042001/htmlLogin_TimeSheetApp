import React, { useEffect, useState } from "react";
import {Navigate,useNavigate} from 'react-router-dom'
import "../../public/css/main_TimeSheet/Main_TimeSheet.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPeopleGroup,faClock, faUser,faArrowUp,faFile,faFlag,faEllipsisVertical,faCalendarDay,faCalendarXmark } from "@fortawesome/free-solid-svg-icons";
// New
import 'materialize-css/dist/css/materialize.min.css';

//ant desgine
import {  ArrowLeftOutlined ,ArrowRightOutlined,PlusOutlined,DeleteOutlined} from '@ant-design/icons'; //Icon
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio,DatePicker,Tabs, Modal } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import type { MenuProps } from 'antd';
import {  Dropdown   } from 'antd';
import { Select, Space } from 'antd';
//Component
import TabPane_cpn from "../../component/TabPane_cpn";
import Card1 from "../../component/section1/Card1";
import Card2 from "../../component/section2/Card2";
import Card3 from "../../component/section3/Card3";
const Timesheet = require('../../public/picture/Timesheet.png');
const avaT = require('../../public/picture/avaT.jpeg');

const Main_TimeSheet: React.FC = () => {
    //ant desgine
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
    //Select
    const handleChange_select_left_top_cardbody2_Section2 = (value: string) => {
        console.log(`selected handleChange_select_left_top_cardbody2_Section2 ${value}`);
      };
  return (
    <>
       <div className="main">
            {/*TOP  */}
            <div className="top_main">
                    <div className="top_logo">
                        <img src={Timesheet} alt="Timesheet Image" className="logo_img" />
                        <a>TimeSheet </a>
                       
                    </div>
                    <div className="top_material">
                        <div className="material material1"><FontAwesomeIcon icon={faArrowUp} /></div>
                        <div className="material material2"><FontAwesomeIcon icon={faFile} /></div>
                        <div className="material material3"><FontAwesomeIcon icon={faFlag} />EngLish</div>
                        <div className="material material4"><FontAwesomeIcon icon={faEllipsisVertical} /></div>
                    </div>
                 
            </div> {/* top_main */}
            {/* BOT */}
            <div className="bot_main">
                {/* Bên Trái */}
                <div className="bot_left">
                    <div className="use_inf">
                        <div className="img">
                            <img src={avaT} alt="" />
                        </div>
                        <div className="inf">
                            <a className="inf_a">
                                <div className="inf_name">Lợi Lê Thanh</div>
                                <div className="inf_email">loi.lethanh@ncc.asia</div>
                            </a>
                        </div>
                    </div>
                    <div className="bot_left_contain">
                        <ul>
                            <li>
                                 <a className="iicon">
                                    <i><FontAwesomeIcon icon={faUser} /></i>
                                    <span>My profile</span>
                                 </a>
                            </li>
                            <li>
                                 <a className="iicon">
                                    <i><FontAwesomeIcon icon={faClock} /></i>
                                    <span>My timesheets</span>
                                 </a>
                            </li>
                            <li>
                                 <a className="iicon">
                                    <i><FontAwesomeIcon icon={faCalendarXmark} /></i>
                                    <span>My request off/remote/onsite</span>
                                 </a>
                            </li>
                            <li>
                                 <a className="iicon">
                                    <i><FontAwesomeIcon icon={faCalendarDay} /></i>
                                    <span>My working time</span>
                                 </a>
                            </li>
                            <li>
                                 <a className="iicon">
                                    <i><FontAwesomeIcon icon={faPeopleGroup} /></i>
                                    <span>Team working calendar</span>
                                 </a>
                            </li>
                        </ul>
                    </div>
                    <div className="bot_footer">
                                <div className="copyright">© 2023 <b style={ {color: 'red'} }>Timesheet</b>.</div>
                                <div className="version"> <b>Version</b> 4.3.0.0 [20231512]</div>
                    </div>
                </div>
                {/* Bên Phải */}
                <div className="contain_bot_right">
                  <div className="all_caleander">
                    {/* ================== Card1 ================== */}
                    <div className="card"> 
                      <div className="cardbody">
                         <Card1/>
                      </div> 
                    </div> 
                    {/* ================== Card2 ================== */}
                    <div className="card">
                        <div className="cardbody">
                            <Card2/>
                        </div>
                    </div>
                    {/* ================== Card3 ================== */}
                    <div className="card" >
                        <div className="cardbody" style={{padding:'12px'}}>
                            <Card3/>
                        </div>
                    </div>
                  </div>{/* top_main */}
                </div>  {/* contain_bot_right */}
            </div> {/*bot_main*/}
       </div>{/* main */}
       
    </>
  );
};
export default Main_TimeSheet;
