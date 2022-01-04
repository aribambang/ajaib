import { notification } from 'antd';

function AlertMessage(type, title, description) {
  return notification[type]({
    message: title,
    description: description,
  });
}

export default AlertMessage;
