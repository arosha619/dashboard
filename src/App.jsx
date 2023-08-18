import './App.css';
import Sidebar from './layout/Sidebar/Sidebar';
import Content from './layout/Content/Content';
import UserList from './components/UserList/UserList';

function App() {
  return (
    <>
      <div className='app'>
        <Sidebar />
        <UserList/>

        {/* <Content /> */}
      </div>
    </>
  )
}

export default App
