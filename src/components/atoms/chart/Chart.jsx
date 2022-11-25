import './chart.scss'
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts'
import { getStatistic } from '../../../apis/statistic'
import { useEffect, useState } from 'react'

const Chart = () => {
  const [statistic, setStatistic] = useState()
  useEffect(() => {
    const handleGetStatisticByDate = async () => {
      const resp = await getStatistic()
      const data = resp?.data?.data
      setStatistic(data)
    }
    handleGetStatisticByDate()
  }, [])

  return (
    <div className="chart">
      <div className="title">Revenue in month</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          width={730}
          height={150}
          data={statistic}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#aa7c5e" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#aa7c5e" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="timeUnit" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="nproduct"
            stroke="#aa7c5e"
            fillOpacity={1}
            fill="url(#total)"
          />
          <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
