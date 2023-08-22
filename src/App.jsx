import './App.css';
import Sidebar from './layout/Sidebar/Sidebar';
import UserList from './components/UserList/UserList';
import Login from './components/Login/Login';

function App() {
  return (
    <>
      <div className='app'>
        {/* <Sidebar />
        <UserList/> */}
        <Login/>

      </div>
    </>
  )
}

export default App
