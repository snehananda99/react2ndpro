import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form'
import { NavDropdown } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Menu from '../../Menu-json-api/Menu.json';
import Company from '../../Company/Company.json';
import Registration from './Registration/Registration';

// function Subhead() {
//   return (
//     <div>subhead</div>
//   )
// }
function Mainmenu({demo})
{
return (
  <>
  <Link to={demo.link}  className={demo.isButton ? "btn btn-primary":"nav-link"}>{demo.label}</Link>
  </>
)
}
function DropdownMenu({demo})
{
  return(
    <NavDropdown title={demo.label} id="basic-nav-dropdown">
              {
                demo.dropdownMenu.map((data,index)=>{
                  return <Mainmenu demo={data}key={index}/>
                })
               
              }
    </NavDropdown>
  )
}

function Header() {
  // console.log(Menu);
  // console.log(Company);
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary fw-bold px-5">
      <Container fluid>

        <Link to="/"className='navbar-brand'><Image src={Company.logo} width={50} alt="logo" className='me-2' /> &nbsp;
        {Company.name}
        </Link>

        <Form className="d-flex ">
              <Form.Control type="search"placeholder="Search"className="me-2 rounded-4 shadow"aria-label="Search" />
            {/* <Button variant="outline-success">Search</Button> */}
        </Form>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 px-5 justify-content-between"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Link  to="/" className="nav-link">HLearn</Link>
            <Link to="/reference" className="nav-link">Reference</Link>
            <Link to="/community" className="nav-link">Community</Link> */}
            {
              Menu.map((item,index)=>{
                // console.log(item,index);
                if(item.isDropDown){
                  return<DropdownMenu demo={item} key={index} />
                }
                return  <Mainmenu demo={item} key={index}/>
              })
            }
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <Subhead /> */}
    </>
  )
}

export default Header