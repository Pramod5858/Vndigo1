import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Route.css";
import Parent from "./Component/parent";
import Carousal from "./Component/CarouselComponent";
import Home from "./Component/Home";
import Userlogin from "./Component/Userlogin";
import Adminlogin from "./Component/Adminlogin";
import Login from "./Component/Login";
import Signupnow from "./Component/Signupnow";
import Feedbackform from "./Component/Feedbackform";
import Addnewproduct from "./Component/Addnewproduct";
import Verifyotp from "./Component/Verifyotp";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Checkin from "./Component/Checkin";

function Router() {
    return (
        <BrowserRouter className="main">
            <Navbar className="navbar1"/>
            <Routes className="content1">
                <Route exact path="/" element={<Home />} />
                <Route path="/parent" element={<Parent />} />
                <Route path="/carousal" element={<Carousal />} />
                <Route path="/userlogin" element={<Userlogin />} />
                <Route path="/adminlogin" element={<Adminlogin />} />
                <Route path="/checkin" element={<Checkin />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signupnow" element={<Signupnow />} />
                <Route path="/verifyotp" element={<Verifyotp />} />
                <Route path="/feedbackform" element={<Feedbackform />} />
                <Route path="/addnewproduct" element={<Addnewproduct />} />
            </Routes>
            <Footer className="footer1"/>
        </BrowserRouter>
    )
}
export default Router;