import SheetForm from "../components/SheetForm";
import { useSelector } from 'react-redux';
import Sheet from '../components/Sheet';
import { isEmpty } from '../components/Utils';
import User from "../components/User";
import Leftbar from "../components/Leftbar";
import Rightbar from "../components/Rightbar";
import './HomePage.css';

function HomePage() {

  const sheets = useSelector((state) => state.sheetReducer);
  console.log(sheets)

  return (
    <div className="home-page">
      <h1>Hello from the HomePage</h1>
      <div className="home-page-rendering">
      <Leftbar />
      <div className="feed">
     
      <hr />
      <SheetForm />
      <hr />
      
      <div className="Home-content">
        {!isEmpty(sheets) && sheets.map((sheet, index) => <Sheet sheet={sheet} key={index} /> )}

      </div>

      <hr/>
        <User />
      <hr/>
      </div>

      <Rightbar />
      </div>
    </div>
  );
}

export default HomePage;
