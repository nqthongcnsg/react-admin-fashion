import './App.css';
import Header from './Components/header/header';
import Login from './Components/login/login';
import Main from './Components/main/main';
import Menu from './Components/menu/menu';
import DieuHuong from './Components/router/dieuhuong';

function App() {
  let a=sessionStorage.getItem('email');
  if(a === 'quantri')
  {
    return (
      <>
    <div className="container-scroller">
       
       
       <Header/>
      <div className="container-fluid page-body-wrapper">
        <Menu/>
        <DieuHuong/>
      </div>
    </div>
      </>
    );
  }
  else{
    return(
      <>
      <Login/>
      </>

    )
  }
 
}

export default App;
