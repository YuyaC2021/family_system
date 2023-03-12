import { Fragment } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  NavDropdown,
  Breadcrumb 
} from "react-bootstrap";

import "./indexLayout.scss";


// 仮
const device_breakdown = "sm";

const path_name = {
  "" : "ホーム",
  "calendar" : "カレンダー",
  "album" : "アルバム",
  "diary" : "日記",
};

const IndexLayout = () => {
  console.log("index layout");

  const {pathname} = useLocation();
  const path_in_array = pathname.split("/");

  const logout = () => {
    console.log("logout");
  }

  return (
    <>
      <Navbar fixed="top" bg="secondary" variant="dark"  expand={device_breakdown}>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>React-Bootstrap</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="">
            <Nav className="ms-auto justify-content-end">
              <LinkContainer to="/">
                <Nav.Link>ホーム</Nav.Link>
              </LinkContainer>
              <NavDropdown title="予定" id="basic-nav-dropdown">
                <LinkContainer to="/calendar">
                  <NavDropdown.Item className="text-light">カレンダー</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to="/album">              
                <Nav.Link>アルバム</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/diary">              
                <Nav.Link>日記</Nav.Link>
              </LinkContainer>
              <Navbar.Text onClick = {logout}>
                ログアウト
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main className="d-flex flex index_layout_main">
        <Container fluid>
          <Row style={{position:"relative"}}>
            <Col sm={3} style={{position:"sticky", top:"50px", left:"0px", height:"calc(100vh - 50px)"}} className={`d-none d-${device_breakdown}-block w-25 p-0 bg-secondary`}>
                <div>
                  <Breadcrumb className="p-0 m-0 breadcrumb">
                    <Breadcrumb.Item href="/">ホーム</Breadcrumb.Item>
                    {
                      path_in_array?.map((path, idx, arr) => {
                        if(path == ""){
                          return;
                        }
                        let crrent_path = ``; //path
                        let path_title = path_name[path]; //title
                        // Set path for href
                        for(let i = 0; i < idx + 1; i++){
                          crrent_path += `/${path}`;
                        }
                        if(idx === arr.length - 1){
                          return <Fragment key={idx}>
                            <>&#xa0;/&#xa0;</>
                          <small>
                            <Breadcrumb.Item key={idx} active href={crrent_path} className="text-dark">{path_title}</Breadcrumb.Item>
                          </small>
                          </Fragment>
                        }else{
                          return <Fragment key={idx}>
                            <>&#xa0; /</>
                            <small>
                              <Breadcrumb.Item key={idx} href={crrent_path}>{path_title}</Breadcrumb.Item>
                            </small>
                          </Fragment>
                        }
                      })
                    }
                  </Breadcrumb>
                </div>
                <ul className="index_layout_sidebar_ul">
                  <li>
                    <Link to="/">ホーム</Link>
                  </li>
                  <li className="has_children flex-column">
                    <span className="p-2">予定</span>
                    <ul>
                      <li>
                        <Link to="/calendar" className="ps-4 pb-2 pt-2">カレンダー</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/album">アルバム</Link>
                  </li>
                  <li>
                    <Link to="/diary">日記</Link>
                  </li>
                </ul>
            </Col>
            <Col sm={9}>
              <Outlet/>
            </Col>
          </Row >
        </Container>
      </main>
    </>
  )
}

export default IndexLayout;