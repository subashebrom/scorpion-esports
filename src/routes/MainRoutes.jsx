import { createBrowserRouter } from "react-router";
import MainLayOut from "../layout/MainLayOut";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Game from "../pages/Game";
import MyMatches from "../pages/MyMatches";
import Results from "../pages/Results";
import Profile from "../pages/Profile";
import BrMatches from "../pages/BrMatches";
import CsMatches from "../pages/CsMatches";
import LwMatches from "../pages/LwMatches";
import Cs1Cs2Matches from "../pages/Cs1Cs2Matches";
import FreeMatches from "../pages/FreeMatches";
import CustomChallange from "../pages/CustomChallange";
import ADbr1 from "../pages/ADbr1";
import ADcs1 from "../pages/ADcs1";
import ADcs11v2 from "../pages/ADcs11v2";
import ADlw1 from "../pages/ADlw1";
import ADfree1 from "../pages/ADfree1";
import ADcc1 from "../pages/ADcc1";
import ADbr2 from "../pages/ADbr2";
import ADcs2 from "../pages/ADcs2";
import ADcs21v2 from "../pages/ADcs21v2";
import ADlw2 from "../pages/ADlw2";
import ADfree2 from "../pages/ADfree2";
import ADcc2 from "../pages/ADcc2";
import Deposit from "../pages/Deposit";
import DBI from "../pages/DBI";
import MyProfile from "../pages/MyProfile";
import TopPlayer from "../pages/TopPlayer";
import Withdraw from "../pages/withdraw";

const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element:<MainLayOut/>,
        children:[
            {
                path:'/top-navbar',
                element:<Header/>
            },
            {
                path:'/footer',
                element:<Footer/>
            },
            {
                path:'/',
                element:<Game/>
            },
            {
                path:'/my-matches',
                element:<MyMatches/>
            },
            {
                path:'/results',
                element:<Results/>
            },
            {
                path:'/profile',
                element:<Profile/>
            },
            {
                path:'/br-matches',
                element:<BrMatches/>
            },
            {
                path:'/cs-matches',
                element:<CsMatches/>
            },
            {
                path:'/lone-wolf',
                element:<LwMatches/>
            },
            {
                path:'/cs-1v1-2v2',
                element:<Cs1Cs2Matches/>
            },
            {
                path:'/free-matches',
                element:<FreeMatches/>
            },
            {
                path:'/custom-matchs',
                element:<CustomChallange/>
            },
            {
                path:'/ad1br-match',
                element:<ADbr1/>
            },
            {
                path:'/ad1-cs-match',
                element:<ADcs1/>
            },
            {
                path:'/ad1-cs1v2-match',
                element:<ADcs11v2/>
            },
            {
                path:'/ad1-lw-match',
                element:<ADlw1/>
            },
            {
                path:'/ad1-free-match',
                element:<ADfree1/>
            },
            {
                path:'/ad1-custom',
                element:<ADcc1/>
            },
            {
                path:'/ad2-br-matches',
                element:<ADbr2/>
            },
            {
                path:'/ad2-cs-matches',
                element:<ADcs2/>
            },
            {
                path:'/ad2-cs1v1-2v2',
                element:<ADcs21v2/>
            },
            {
                path:'/ad2-lw-match',
                element:<ADlw2/>
            },
            {
                path:'/ad2-free-match',
                element:<ADfree2/>
            },
            {
                path:'/ad2-custom',
                element:<ADcc2/>
            },
            {
                path:'/deposit',
                element:<Deposit/>
            },
            {
                path:'/withdraw',
                element:<Withdraw/>
            },
            {
                path:'/deposit-byincome',
                element:<DBI/>
            },
            {
                path:'/my-profile',
                element:<MyProfile/>
            },
            {
                path:'/top-players',
                element:<TopPlayer/>
            },
        ]
    }
]);
export default MainRoutes;