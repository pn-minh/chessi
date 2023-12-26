import './TrangChu.css';
import { Link } from 'react-router-dom';
import { AuthContext } from "../contexts/auth"
import { useContext } from "react"

export default function verticalmenuUser(){

    let { useLogout } = useContext(AuthContext);

    let handleLogout = async () => {
        let { status, msg } = await useLogout();
    
        (status === "ok") ? message.success(msg) : message.error(msg);
      }

    const leftbar = {display:"inline", float:"left", width: "14.1vw", height: "45vw", marginTop: "0px",
    borderRight: "2px solid #2C2B4D"}

    return(
        <>
        <div id="leftbar" style={leftbar}>
            <ul className="single-vertical-menu">
                <li>
                    <img src="choi.png" alt=""/>
                    <Link to ="/">Chơi</Link>
                </li> 
                <li>
                    <img src="friend.png" alt=""/>
                    <Link to ="/friendlist">Bạn bè</Link>
                </li>
                <li>
                    <img src="history.png" alt=""/>
                    <Link to ="/history">Lịch sử đấu</Link>
                </li>
                <li>
                    <img src="diendan.png" alt=""/>
                    <Link to ="/new">Diễn đàn</Link>
                </li>
                <li>
                    <img src="ranking.png" alt=""/>
                    <Link to ="/ranking">Bảng xếp hạng</Link>
                </li>	
            </ul>	
            <div className="logoutButton">
                <img src="logout-button.png" alt="" style={{float: "left", marginLeft: "15%", marginTop : "0.75vw", width: "1.6vw"}}/>
                <span onClick={handleLogout} style={{color:"#FFFFFF", float: "left", marginLeft: "10%", marginTop : "0.85vw", fontSize: "1.1vw"}}>Log out</span>
            </div>	
        </div>
        </>
    )
}

