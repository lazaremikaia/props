
import './App.css';
import Notification from './Components/notificationprops';


function App() {
  return (
    <div className="App">
      <Notification  type="success" />
      <Notification  type= "error" />
      <Notification   type="warning"/>
      <Notification   type="info"/>
    </div>
  );
}

export default App;
