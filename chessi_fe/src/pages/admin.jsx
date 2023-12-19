import {Link} from "react-router-dom";
// reactstrap components
import { Table } from "reactstrap";
import "./view.css"
export default function Admin() {
    return (
        <>
        <div className="content">
            
            <div className="title">
                <h1 style={{textAlign:"center"}}>Bảng xếp hạng</h1>
            </div>
            <div className="ranking-table" >

                {/*<Input placeholder="SEARCH" type="text" className="sreachbox"/>*/}
                <Table className="tablesorter">
                    <thead className="text-primary">
                    <tr style={{paddingTop:"0",paddingLeft:"5%", background:"#2D2C45",color:"white", height:"30px"}}>
                        <th className="Stt2">Hạng</th>
                        <th style={{width:"50%"}}>Họ và tên</th>
                        <th>Thắng</th>
                        <th>Thua</th>
                        <th>Hòa</th>
                        <th>Điểm</th>


                    </tr>
                    </thead>

                    <tbody>

                    <tr>
                        <td className="Stt">1</td>
                        <td>
                            <Link to={"/admin/History"} style={{ display: "flex", alignItems: "center" }}>
                                <img style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                                     src='https://png.pngtree.com/element_origin_min_pic/17/09/17/f3b45173e323d174be4fd3ce92053df0.jpg' />
                                <p style={{ marginLeft: "5px" }}>Dat 09</p>
                            </Link>
                        </td>
                         <td>100</td>
                        <td>0</td>
                        <td>120</td>
                        <td>199</td>
                    </tr>
                    <tr>
                        <td className="Stt">2</td>
                        <td>
                            <Link to={"/admin/History"} style={{ display: "flex", alignItems: "center" }}>
                                <img style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                                     src='https://png.pngtree.com/element_origin_min_pic/17/09/17/f3b45173e323d174be4fd3ce92053df0.jpg' />
                                <p style={{ marginLeft: "5px" }}>Dat 09</p>
                            </Link>
                        </td>
                         <td>100</td>
                        <td>0</td>
                        <td>120</td>
                        <td>199</td>
                        
                    </tr>
                    <tr>
                        <td className="Stt">3</td>
                        <td>
                            <Link to={"/admin/History"} style={{ display: "flex", alignItems: "center" }}>
                                <img style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                                     src='https://png.pngtree.com/element_origin_min_pic/17/09/17/f3b45173e323d174be4fd3ce92053df0.jpg' />
                                <p style={{ marginLeft: "5px" }}>Dat 09</p>
                            </Link>
                        </td>
                         <td>100</td>
                        <td>0</td>
                        <td>120</td>
                        <td>199</td>
                        

                    </tr>
                    <tr>
                        <td className="Stt">4</td>
                        <td>
                            <Link to={"/admin/History"} style={{ display: "flex", alignItems: "center" }}>
                                <img style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                                     src='https://png.pngtree.com/element_origin_min_pic/17/09/17/f3b45173e323d174be4fd3ce92053df0.jpg' />
                                <p style={{ marginLeft: "5px" }}>Dat 09</p>
                            </Link>
                        </td>
                         <td>100</td>
                        <td>0</td>
                        <td>120</td>
                        <td>199</td>
                        
                    </tr>
                    <tr>
                        <td className="Stt">5</td>
                        <td>
                            <Link to={"/admin/History"} style={{ display: "flex", alignItems: "center" }}>
                                <img style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                                     src='https://png.pngtree.com/element_origin_min_pic/17/09/17/f3b45173e323d174be4fd3ce92053df0.jpg' />
                                <p style={{ marginLeft: "5px" }}>Dat 09</p>
                            </Link>
                        </td>
                         <td>100</td>
                        <td>0</td>
                        <td>120</td>
                        <td>199</td>
                        

                    </tr>
                    <tr>
                        <td className="Stt">6</td>
                        <td>
                            <Link to={"/admin/History"} style={{ display: "flex", alignItems: "center" }}>
                                <img style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                                     src='https://png.pngtree.com/element_origin_min_pic/17/09/17/f3b45173e323d174be4fd3ce92053df0.jpg' />
                                <p style={{ marginLeft: "5px" }}>Dat 09</p>
                            </Link>
                        </td>
                         <td>100</td>
                        <td>0</td>
                        <td>120</td>
                        <td>199</td>
                        

                    </tr>


                    </tbody>
                </Table>

            </div>


        </div>
        </>
    );
}