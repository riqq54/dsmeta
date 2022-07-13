import icon from '../../assets/img/notification-icon.svg';

import './styles.css';

function NotificationButton() {
    return (
            <div className="botao-notificar">
                <img src={icon} alt="Notificar"/>
            </div>
    )
}

export default NotificationButton;
