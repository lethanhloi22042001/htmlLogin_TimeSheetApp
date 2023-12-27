import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom'
import "../../public/css/main_TimeSheet/Main_TimeSheet.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup, faClock, faUser, faArrowUp, faFile, faFlag, faEllipsisVertical, faCalendarDay, faCalendarXmark } from "@fortawesome/free-solid-svg-icons";
// New
import 'materialize-css/dist/css/materialize.min.css';
import TabPane_cpn from "../TabPane_cpn";
//ant desgine
import { ArrowLeftOutlined, ArrowRightOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons'; //Icon
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio, DatePicker, Tabs, Modal } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { Select, Space } from 'antd';
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../redux/storage";

import { GetAllTimeSheetRedux } from "./sliceCard1";
interface date {
    date1: string,
    date2: string,
}

interface Itime {
    projectName: string,
    taskName: string,
    customerName: string,
    projectCode: string,
    dateAt: string | Date | any,
    workingTime: number,
    status: number,
    note: string,
    typeOfWork: number,
    workType: string,
}
interface ImainTimeSheet {
    arrTimeSheetRedux: Itime[];
}

const Card1: React.FC = () => {
    const dispatch = useDispatch();
    //UseState
    const [arrTimeSheetRedux, SetArrTimeSheetRedux] = useState([]);
    const [dayToday, setDayToday] = useState('');

    // const operations = <Button>Extra Action</Button>; // t2-cn
    const TabPane = Tabs.TabPane;

    //Modal 
    const [size, setSize] = useState<SizeType>('large');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => { setIsModalOpen(true); };
    const handleOk = () => { setIsModalOpen(false); };
    const handleCancel = () => { setIsModalOpen(false); };


    useEffect(() => {
        const fetchData = async () => {
            const dates = {
                date1: "2023-12-18",
                date2: "2023-12-24",
            };
            try {
                const res = await dispatch(GetAllTimeSheetRedux(dates) as any);
                const data = res.payload.result;
                SetArrTimeSheetRedux(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    function convertToDayOfWeek(dateString: string): string | null {
        const dateObject = new Date(dateString);
        if (isNaN(dateObject.getTime())) {
            console.error('Invalid date string');
            return null;
        }
        const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',];
        const dayOfWeek = daysOfWeek[dateObject.getUTCDay()];

        return dayOfWeek;
    }
    function convertMinutesToTime(minutes: number) {
        if (isNaN(minutes)) {
            console.error('Invalid input. Please provide a valid number of minutes.');
            return null;
        }
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(remainingMinutes).padStart(2, '0');
        return `${formattedHours}:${formattedMinutes}`;
    }
    function extractDateFromDateTime(dateTimeString: string) {
        const parts = dateTimeString.split('T');
        return parts[0];
    }
    // Count Total time in Week
    const totalTimeinWeek = arrTimeSheetRedux.reduce((totalTime, day: Itime) => totalTime + day.workingTime, 0);
    const handleTabClick = (day: Itime) => {
        setDayToday(day.dateAt);
        console.log('day',day);
        
    }
    return (
        <>

            <div className="top_cardbody">
                <div className="top_cardbodyTOP">
                    <h5>{extractDateFromDateTime(dayToday)}</h5>
                </div>
                <div className="top_cardbodyBOT">
                    <div className="btnB btn_Refesh">
                        <Button className="" type="primary">Refresh</Button>
                    </div>
                    <div className="btnB btn_Today">
                        <Button className="" type="primary">Today</Button>
                    </div>
                    <div className="btnB btns_next" >
                        <div className="btns_nextChung  ">
                            <Flex className="btns_nextLeft" align="flex-start" gap="small" vertical>
                                <Button className="custom-btn" type="primary"><ArrowLeftOutlined style={{ fontSize: '16px', color: '#08c' }} /></Button>
                            </Flex>
                        </div>
                        <div className="btns_nextChung  ">
                            <Flex className="btns_nextMid" align="flex-start" gap="small" vertical>
                                <Button className="custom-btn" type="primary">{extractDateFromDateTime(dayToday)}</Button>
                            </Flex>
                        </div>
                        <div className="btns_nextChung   ">
                            <Flex className="btns_nextRight" align="flex-start" gap="small" vertical>
                                <Button className="custom-btn" type="primary"><ArrowRightOutlined style={{ fontSize: '16px', color: '#08c' }} /></Button>
                            </Flex>
                        </div>
                    </div>
                    <div className="btnB">
                        <DatePicker />
                    </div>
                    <div className="btnB ">
                        <div className="btn_btn">
                            <Button className="btnB_day" type="primary">Day</Button>
                            <Button className="btnB_week" type="primary">Week</Button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="bot_cardbody">
                <div className="mat-tab-header">
                    <Tabs  >
                        {arrTimeSheetRedux.map((day: Itime, index) => (
                            <TabPane tab={<div onClick={() => handleTabClick(day)}>{convertToDayOfWeek(day.dateAt)} <br />{convertMinutesToTime(day.workingTime)}</div>} key={index} >
                                <TabPane_cpn itemDay={day} />
                            </TabPane>
                        ))}
                        <TabPane tab={<div>Total<br />{convertMinutesToTime(totalTimeinWeek)}</div>} key="8"></TabPane>
                    </Tabs>
                </div> {/*mat-tab-header*/}
            </div>{/*bot_cardbody*/}
        </>
    );
};

export default Card1;