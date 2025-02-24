import {BrowserRouter,Routes,Route} from "react-router";
import './App.css'
import Home from './Pages/Home';
import AddForm from './Pages/AddForm';
import AddFormVolunteer from "./Pages/AddFormVolunteer"
import ShowData from './Pages/ShowData';
import ProfileVolunteer from "./Pages/ProfileVolunteer";
import Layout from './Layouts/Layout';
import Error404 from "./Pages/Error404";
import './index.css'

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}></Route>
      <Route path='/AddForm' element={<AddForm/>}></Route>
      <Route path='/AddFormVolunteer' element={<AddFormVolunteer/>}></Route>
      <Route path='/ShowData' element={<ShowData/>}></Route>
      <Route path='/volunteer/:idVolunteer' element={<ProfileVolunteer/>}></Route>
      <Route path="/*" element={<Error404></Error404>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  
}

export default App
