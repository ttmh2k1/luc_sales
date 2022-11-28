import './systemReportStyle.scss'
import Navbar from '../../components/atoms/navbar/Navbar'
import Sidebar from '../../components/atoms/sidebar/Sidebar'
import { getStatisticMonth, getStatisticQuarter } from '../../apis/statistic'
import { useState } from 'react'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const SystemReportComponent = () => {
  const [statistic, setStatistic] = useState()
  const [income, setIncome] = useState()
  const [type, setType] = useState()
  const [year, setYear] = useState()
  const [month, setMonth] = useState()
  const [quarter, setQuarter] = useState()
  const [incomeType, setIncomeType] = useState()
  const [incomYear, setIncomeYear] = useState()
  const [incomeMonth, setIncomeMonth] = useState()
  const [incomeQuarter, setIncomeQuarter] = useState()

  const handleFilterMonth = async () => {
    try {
      const resp = await getStatisticMonth(month, year, type)
      const data = resp?.data?.data
      setStatistic(data)
    } catch (error) {
      return error
    }
  }

  const handleFilterQuarter = async () => {
    try {
      const resp = await getStatisticQuarter(quarter, year, type)
      const data = resp?.data?.data
      setStatistic(data)
    } catch (error) {
      return error
    }
  }

  const handleIncomeMonth = async () => {
    try {
      const resp = await getStatisticMonth(incomeMonth, incomYear, incomeType)
      const data = resp?.data?.data
      setIncome(data)
    } catch (error) {
      return error
    }
  }

  const handleIncomeQuarter = async () => {
    try {
      const resp = await getStatisticQuarter(incomeQuarter, incomYear, incomeType)
      const data = resp?.data?.data
      setIncome(data)
    } catch (error) {
      return error
    }
  }

  return (
    <div className="systemReport">
      <Sidebar />
      <div className="systemReportContainer">
        <Navbar />
        <div className="systemStatistic">
          <div className="header">System statistic</div>
          <div className="filter">
            <div className="form">
              <div className="title">Type</div>
              <select
                className="select"
                id="type"
                onChange={(e) => {
                  setType(e.target.value)
                }}
              >
                <option value="MONTH">Month</option>
                <option value="QUARTER">Quarter</option>
              </select>
            </div>

            <div className="form">
              <div className="title">Year</div>
              <select
                className="select"
                id="year"
                onChange={(e) => {
                  setYear(e.target.value)
                }}
              >
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </div>

            {type && type === 'MONTH' ? (
              <>
                <div className="form">
                  <div className="title">Month</div>
                  <select
                    className="select"
                    id="month"
                    onChange={(e) => {
                      setMonth(e.target.value)
                    }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </div>

                <button
                  className="filterButton"
                  onClick={() => handleFilterMonth(month, year, type)}
                >
                  Filter
                </button>
              </>
            ) : (
              <>
                <div className="form">
                  <div className="title">Quarter</div>
                  <select
                    className="select"
                    id="quarter"
                    onChange={(e) => {
                      setQuarter(e.target.value)
                    }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <button
                  className="filterButton"
                  onClick={() => handleFilterQuarter(quarter, year, type)}
                >
                  Filter
                </button>
              </>
            )}
          </div>
          <div className="chartSystem">
            <ResponsiveContainer width="100%" aspect={3}>
              <LineChart
                data={statistic}
                width={500}
                height={300}
                margin={{ top: 20, right: 100, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timeUnit" interval={'preserveStartEnd'} />
                <YAxis />
                <Tooltip
                  contentStyle={{ backgroundColor: 'antiquewhite', borderRadius: '0.4rem' }}
                />
                <Legend />
                <Line type="monotone" dataKey="nbuyer" stroke="red" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="nproduct" stroke="green" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="norder" stroke="blue" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="revenueStatistics">
          <div className="header">Revenue system</div>
          <div className="filter">
            <div className="form">
              <div className="title">Type</div>
              <select
                className="select"
                id="type"
                onChange={(e) => {
                  setIncomeType(e.target.value)
                }}
              >
                <option value="MONTH">Month</option>
                <option value="QUARTER">Quarter</option>
              </select>
            </div>

            <div className="form">
              <div className="title">Year</div>
              <select
                className="select"
                id="year"
                onChange={(e) => {
                  setIncomeYear(e.target.value)
                }}
              >
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </div>

            {incomeType && incomeType === 'MONTH' ? (
              <>
                <div className="form">
                  <div className="title">Month</div>
                  <select
                    className="select"
                    id="incomeMonth"
                    onChange={(e) => {
                      setIncomeMonth(e.target.value)
                    }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </div>

                <button
                  className="filterButton"
                  onClick={() => handleIncomeMonth(incomeMonth, incomYear, incomeType)}
                >
                  Filter
                </button>
              </>
            ) : (
              <>
                <div className="form">
                  <div className="title">Quarter</div>
                  <select
                    className="select"
                    id="incomeQuarter"
                    onChange={(e) => {
                      setIncomeQuarter(e.target.value)
                    }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <button
                  className="filterButton"
                  onClick={() => handleIncomeQuarter(incomeQuarter, incomYear, incomeType)}
                >
                  Filter
                </button>
              </>
            )}
          </div>
          <div className="chartSystem">
            <ResponsiveContainer width="100%" aspect={3}>
              <LineChart
                data={income}
                width={500}
                height={300}
                margin={{ top: 20, right: 100, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timeUnit" interval={'preserveStartEnd'} />
                <YAxis />
                <Tooltip
                  contentStyle={{ backgroundColor: 'antiquewhite', borderRadius: '0.4rem' }}
                />
                <Legend />
                <Line type="monotone" dataKey="income" stroke="orange" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SystemReportComponent
