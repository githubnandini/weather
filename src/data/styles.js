import { makeStyles } from '@material-ui/core/styles';
import Image from './background1.jpg';

const useStyles = makeStyles((theme) => ({
bgImage : {
    backgroundImage: `url(${Image})`,
    height : 600,
    width : 400,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '12px'
},
container : {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    fontSize: '30px',
    textAlign : 'center'
},
searchForm : {
    display : 'flex',
    margin : '2em 0'
},
inputSearch : {
    background: 'transparent',
    border : 'none',
    color:' #fff',
    padding: '0px 10px',
    fontSize: '20px',
    maxWidth: '190px',
    borderBottom: '1px solid #ccc',
    '&:focus': {
        outline : 'none',
     }
},
searchButton : {
    cursor : 'pointer',
    marginLeft: '10px',
    border: 'none',
    color: '#fff',
    background: '#131e168f',
    padding: '7px 15px',
    borderRadius: '2px',
    letterSpacing: '1px',
    fontSize:'15px'
},
textDate : {
    fontSize : '35px',
    margin : '15px 0 35px 0'
},
textTime : {
    fontSize : '20px',
    margin : '10px 0'
},
textTemperature : {
    fontSize : '30px',
    margin : '10px 0'
}
 
}))
export default useStyles;
