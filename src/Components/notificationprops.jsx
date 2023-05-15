import "./notification.css"
import Successicon from "./icon/icon1.png"
import Erroricon from "./icon/icon.2.png"
import Warningicon from "./icon/icon3.png"
import Infoicon from "./icon/icon4.png"

const notificationData = {
    success : {
        class : "n-green",
        image : Successicon,
        text : "Success"
    },
    error : {
        class : "n-red",
        image : Erroricon,
        text : "Error"
    },
    warning : {
        class : "n-yellow",
        image : Warningicon,
        text : "Warning"
    },
    info : {
        class : "n-blue",
        image : Infoicon,
        text : "Info"
    },

};






function Notification(props) {
  const item = notificationData[props.type]
    return(
        <div className={`notification ${item.class}`}>
         <div className="icon-wrapper">
            <img src={item.image} alt="" />
         </div>
        <div >
            <p className="title">{item.text}</p>
            <p className="description">Order Placed Successfully. You can check order delivery status.</p>
        </div>
       </div>
    )
}

export default Notification