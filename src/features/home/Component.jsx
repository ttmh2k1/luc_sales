import React, { useEffect, useState } from 'react'
import './homeStyle.scss'
import Sidebar from '../../components/atoms/sidebar/Sidebar'
import Navbar from '../../components/atoms/navbar/Navbar'
import Widget from '../../components/atoms/widget/Widget'
import Featured from '../../components/atoms/featured/Featured'
import Chart from '../../components/atoms/chart/Chart'
import { statisticToday } from '../../apis/home'
import { FaBox, FaChartPie, FaReceipt, FaUser } from 'react-icons/fa'

const HomeComponent = () => {
  const [statistic, setStatistic] = useState()
  useEffect(() => {
    const handleGetStatisticToday = async () => {
      const resp = await statisticToday()
      const data = resp?.data?.data
      setStatistic(data)
    }
    handleGetStatisticToday()
  }, [])
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget
            title={'REVENUE'}
            data={statistic?.income ? statistic?.income : 0}
            icon={
              <FaChartPie
                className="icon"
                style={{ backgroundColor: 'darkslateblue', color: 'white' }}
              />
            }
            isMoney={true}
            link={'/'}
          />
          <Widget
            title={'NEW CUSTOMERS'}
            data={statistic?.newBuyer ? statistic?.newBuyer : 0}
            icon={
              <FaUser className="icon" style={{ backgroundColor: 'darkred', color: 'white' }} />
            }
            isMoney={false}
            link={'/customer'}
          />
          <Widget
            title={'NEW PRODUCTS'}
            data={statistic?.newProduct ? statistic?.newProduct : 0}
            icon={
              <FaReceipt
                className="icon"
                style={{ backgroundColor: 'darksalmon', color: 'white' }}
              />
            }
            isMoney={false}
            link={'/product'}
          />
          <Widget
            title={'NEW ORDERS'}
            data={statistic?.newOrder ? statistic?.newOrder : 0}
            icon={
              <FaBox className="icon" style={{ backgroundColor: 'darkcyan', color: 'white' }} />
            }
            isMoney={false}
            link={'/order'}
          />
        </div>
        <div className="charts">
          {/* <Featured /> */}
          <Chart />
        </div>
      </div>
    </div>
  )
}

export default HomeComponent
