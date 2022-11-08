import "./logsStyle.scss"
import Navbar from '../../components/atoms/navbar/Navbar';
import Sidebar from '../../components/atoms/sidebar/Sidebar';

const LogSystemComponent = () => {
  return (
    <div className='logs'>
      <Sidebar />
      <div className="logsContainer">
        <Navbar />
        Logs component
      </div>
    </div>
  )
}

export default LogSystemComponent;