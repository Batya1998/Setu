
import React, { useState, useEffect } from 'react';
import { Form, Nav } from "react-bootstrap"
import setu from "../Image/setu.jpeg"
import alluser from "../Image/alluser.png"
import dashaboard from "../Image/dashboard.png"

  const Home = (props) => {

    const [dashboard, setDashboard] = useState(true);
    const dataList = [
      { "name": "Ajay kumar", "dist": "bhadrak", "gp": "palia", "block": "Tihidi", "village": "Palia" },
      { "name": "Bijay rout", "dist": "Jajpur", "gp": "palia", "block": "Jajpur", "village": "Palia" }
    ];


    const renderMember = () => {



      return (

        this.state.dataList.map((data) => {
          console.log("9999999");
          return (
            <div className="second-details">
              <div className="garment">{data.name} </div>
              <div className="member">{data.name} </div>
              <div className="districtnumber">{data.dist} </div>
              <div className="cpnumber">{data.gp} </div>
              <div className="blocknumber">{data.block} </div>
              <div className="vilagenumber">{data.village} </div>
              <div className="panchayatnumber">{data.gp} </div>
            </div>
          )
        })
      );


    }

    return (

      <div className="setuParent">
        <div className="chield">

          <img className="image" src={setu} alt="Logo" />
          <div className="dashBoardActive">
            <img className="imagelogo" src={dashaboard} alt="Logo" />
            <Nav.Link href="Dashaboard">Dashaboard </Nav.Link>
          </div>
          <div className="allUserActive">
            <img className="imagelogo" src={alluser} alt="Logo" />
            <Nav.Link href="All Users">All Users</Nav.Link>
          </div>




        </div>
        <div className="setuheader">

          <h1> All Users</h1>
          <div>

            <Nav.Link href="Dashaboard">Dashaboard</Nav.Link>><Nav.Link href="All Users">All Users</Nav.Link>
          </div>
          <div className="seachbar">
            <input type="text" placeholder="Search by family header.." className="search"></input>

            <Form.Label className="sortby">Sort By</Form.Label>
            <Form.Select className="dropdown">
              <option>All Users</option>
              <option>Dashaboard</option>

            </Form.Select>


            <form onfilter="console.log('You clicked filter.'); return false">
              <button type="filter" className="filter">Filter</button>
            </form>


          </div>
          <div className="filter-header-page">
            <h2>Filters</h2>

            <div className="filterpage">

              <Form.Label className="select1">DirectCode</Form.Label>

              <Form.Select className="district">
                <option  >Enter code or select</option>
              </Form.Select>


              <Form.Label className="select1" >CPCode</Form.Label>
              <Form.Select className="district">
                <option>Enter code or select</option>
              </Form.Select>
              <Form.Label className="select1" >BlockCode</Form.Label>
              <Form.Select className="district">
                <option>Enter code or select</option>
              </Form.Select>
              <Form.Label className="select1" >HeadProfession</Form.Label>
              <Form.Select className="district">
                <option>Enter code or select</option>
              </Form.Select>

            </div>
            <div className="users">24,929 Users Found.</div>
            <div className="parentdiv">

              <div className="details">

                <div className="ALL"> </div>



                <div className="amila">Name</div>

                <div className="district-code">District Code</div>
                <div className="cp-code"  >CP Code</div>
                <div className="block-code" >Block Code</div>
                <div className="vilage-code" >Village Code</div>
                <div className="panchayat-code">Panchayat Code</div>

              </div>


              <div >{dataList.map((data) => {
                console.log("9999999");
                return (

                  <div className="second-details">
                    <div className="AL">{data.name.substring(0, 2)}</div>
                    <div className="garment">{data.name} </div>
                    <div className="member">{data.name} </div>
                    <div className="districtnumber">{data.dist} </div>
                    <div className="cpnumber">{data.gp} </div>
                    <div className="blocknumber">{data.block} </div>
                    <div className="vilagenumber">{data.village} </div>
                    <div className="panchayatnumber">{data.gp} </div>
                  </div>
                )
              })}</div>







<button className="LoadeMore">Loade More</button>

</div>
        </div>

        
  

      </div>
    </div>
  );
}
export default Home;