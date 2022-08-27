import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Login } from "./Auth/Login";
import { Sign } from "./Auth/Sign";
import Footer from "./component/Footer/Footer";
import Pricing from "./pages/Price/Pricing";
import Reviews from "./pages/Reviews/Reviews";
import Dashboard from "./component/AppBonsai/Dashboard/Dashboard";
import RequireAuth from "./Auth/RequiresAuth";
import Dash from "./pages/Dashboard/Dash";
import Layout from "./component/AppBonsai/Layout/Layout";


function App() {

  const location =  useLocation()


if(location.pathname==="/dash"){
  return <Dash />
}
else if(location.pathname==="/login"){
  return <Login />
}

  return (
    <div className="App">
      <Navbar />
      <Dashboard/>
      <Layout type='Proposal' tableHeadings={['Title','Client','Sent','Accepted']}/>
      <Layout type='Contract' tableHeadings={['TItle','Client','Project','Created','Sent']}/>
      <Layout type='Project' tableHeadings={['Title','Client','Start Date','Due','Paid']}/>


        <Routes>
          <Route path={"/"} element={  <Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/sign"} element={<Sign />} />
          <Route path={"/pricing"} element={<Pricing />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path='/dash' element={ <Dash /> } />
          <Route path='/dashboard' element={ <Dashboard /> } />
        </Routes>
        <br />
        <br />
        <br />
        <br />
        <Footer />
      
      
    </div>
  );
}
export default App