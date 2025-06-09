
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import MainHeader from "./MainHeader"
export default function Home() {
  const navigate = useNavigate();
  function handleButtonClick(){
    navigate(`/campgrounds`);
  }
    return (<>
   <MainHeader/>
    <button onClick={handleButtonClick}>Click Me </button>
    </>);
}