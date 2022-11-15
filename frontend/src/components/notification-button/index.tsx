import icon from '../../assets/images/notification-icon.svg'
import '../notification-button/style.css'

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
        <img src={icon} alt="notificacao" />
      </div>
    )
  }
  
  export default NotificationButton