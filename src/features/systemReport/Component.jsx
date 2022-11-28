import './systemReportStyle.scss'
import Navbar from '../../components/atoms/navbar/Navbar'
import Sidebar from '../../components/atoms/sidebar/Sidebar'
import { getStatistic } from '../../apis/statistic'
import { useState } from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const SystemReportComponent = () => {
  const [statistic, setStatistic] = useState()
  const [type, setType] = useState()
  const [year, setYear] = useState()
  const [unit, setUnit] = useState()

  const handleFilter = async () => {
    try {
      const resp = await getStatistic(unit, year, type)
      const data = resp?.data?.data
      setStatistic(data)
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
          <div className="title">System statistic</div>
          <div className="filter" style={{ display: 'flex', flexDirection: 'row' }}>
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
                <option value="QUATER">Quater</option>
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
              <div className="form">
                <div className="title">Month</div>
                <select
                  className="select"
                  id="unit"
                  onChange={(e) => {
                    setUnit(e.target.value)
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
            ) : (
              <div className="form">
                <div className="title">Quater</div>
                <select
                  className="select"
                  id="unit"
                  onChange={(e) => {
                    setUnit(Number(e.target.value))
                  }}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            )}

            <button onClick={() => handleFilter(unit, year, type)}>Filter</button>
          </div>
          <div className="chartSystem">
            <ResponsiveContainer width="100%" aspect={4}>
              <LineChart
                data={statistic}
                width={500}
                height={300}
                margin={{ top: 20, right: 200, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timeUnit" interval={'preserveStartEnd'} />
                <YAxis />
                <Legend />
                <Line dataKey="nbuyer" stroke="red" />
                <Line dataKey="nproduct" stroke="green" />
                <Line dataKey="norder" stroke="blue" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SystemReportComponent
