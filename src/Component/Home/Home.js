import React from "react";
import { Form, Nav } from "react-bootstrap"
import setu from "../Image/setu.jpeg"
import alluser from "../Image/alluser.png"
import dashboard from "../Image/dashboard.png"

const Home = (props) => {

  return (

    <div className="setuParent">
      <div className="chield">

        <img className="image" src={setu} alt="Logo" />
        <div>
        <img className="imagelogo" src={dashboard} alt="Logo" />
          <Nav.Link href="Dashaboard">Dashaboard</Nav.Link>
        </div>
        <div>
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
          <div className="parentdiv">
<div className="users">24,929 Users Found.</div>
<div className="details">

  <div className="AL">AL</div>



  <div className="amila">Amila luna</div>

  <div className="district-code">District Code</div>
  <div className="cp-code"  >CP Code</div>
  <div className="block-code" >Block Code</div>
  <div className="vilage-code" >Village Code</div>
  <div className="panchayat-code">Panchayat Code</div>

</div>


<div className="second-details">
  <div className="garment">Garment Employee</div>
  <div className="member">2 Member</div>
  <div className="districtnumber">525</div>
  <div className="cpnumber">2548</div>
  <div className="blocknumber">A201</div>
  <div className="vilagenumber">2,479</div>
  <div className="panchayatnumber">589</div>
</div>

<div className="details">

  <div className="AL">jS</div>



  <div className="amila">Jenna Side</div>

  <div className="district-code">District Code</div>
  <div className="cp-code"  >CP Code</div>
  <div className="block-code" >Block Code</div>
  <div className="vilage-code" >Village Code</div>
  <div className="panchayat-code">Panchayat Code</div>

</div>


<div className="second-details">
  <div className="garment">Self Employee</div>
  <div className="member">3 Member</div>
  <div className="districtnumber">489</div>
  <div className="cpnumber">9753</div>
  <div className="blocknumber">C479</div>
  <div className="vilagenumber">12,125</div>
  <div className="panchayatnumber">6,879</div>
</div>
<div className="details">

  <div className="AL">AL</div>



  <div className="amila">Anita Letterback</div>

  <div className="district-code">District Code</div>
  <div className="cp-code"  >CP Code</div>
  <div className="block-code" >Block Code</div>
  <div className="vilage-code" >Village Code</div>
  <div className="panchayat-code">Panchayat Code</div>

</div>


<div className="second-details">
  <div className="garment">Shap Owner</div>
  <div className="member">5 Member</div>
  <div className="districtnumber">679</div>
  <div className="cpnumber">899</div>
  <div className="blocknumber">A.25</div>
  <div className="vilagenumber">7,957</div>
  <div className="panchayatnumber">15,286</div>
</div>
<div className="details">

  <div className="AL">DD</div>



  <div className="amila">Dan Delion</div>

  <div className="district-code">District Code</div>
  <div className="cp-code"  >CP Code</div>
  <div className="block-code" >Block Code</div>
  <div className="vilage-code" >Village Code</div>
  <div className="panchayat-code">Panchayat Code</div>

</div>


<div className="second-details">
  <div className="garment">Frmer</div>
  <div className="member">6 Member</div>
  <div className="districtnumber">525</div>
  <div className="cpnumber">2548</div>
  <div className="blocknumber">A201</div>
  <div className="vilagenumber">2,479</div>
  <div className="panchayatnumber">589</div>
</div>
<div className="details">

  <div className="AL">AL</div>



  <div className="amila">Amila luna</div>

  <div className="district-code">District Code</div>
  <div className="cp-code"  >CP Code</div>
  <div className="block-code" >Block Code</div>
  <div className="vilage-code" >Village Code</div>
  <div className="panchayat-code">Panchayat Code</div>

</div>


<div className="second-details">
  <div className="garment">Garment Employee</div>
  <div className="member">2 Member</div>
  <div className="districtnumber">525</div>
  <div className="cpnumber">2548</div>
  <div className="blocknumber">A201</div>
  <div className="vilagenumber">2,479</div>
  <div className="panchayatnumber">589</div>
</div>

<button className="LoadeMore">Loade More</button>

</div>
        </div>

        
  

      </div>
    </div>
  );
}
export default Home;