import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='w-64 h-screen bg-gray-900 text-white p-4'>

      <h2 className='text-2xl font-bold mb-6'>Menu</h2>

      <div className='flex flex-col gap-4'>

        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/upload'>Upload</Link>
        <Link to='/forecast'>Forecast</Link>
        <Link to='/analytics'>Analytics</Link>
        <Link to='/reports'>Reports</Link>
        <Link to='/notifications'>Notifications</Link>
        <Link to='/admin'>Admin</Link>

      </div>
    </div>
  )
}

export default Sidebar
