import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

function ForecastChart({ forecast }) {

  const data = {
    labels: forecast.map(item => item.date),
    datasets: [
      {
        label: 'Forecast Sales',
        data: forecast.map(item => item.predicted_sales)
      }
    ]
  }

  return (
    <div className='bg-white p-4 rounded-xl shadow'>
      <Line data={data} />
    </div>
  )
}

export default ForecastChart