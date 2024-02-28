import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Offcanvas } from "react-bootstrap";
function Rightsidebar({ Rcontent,closeSidebar,show}) {

  return (
    <>
      <Container className="p-4" >
      
        <Offcanvas
          placement="end"
          show={show}
          onHide={closeSidebar}
          style={{
            backgroundColor: "#fff",
            maxWidth: "320px",
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            marginTop:'4rem'
          }}
        >
       
          <Offcanvas.Body style={{ justifyContent: "center", display: "flex" }}>
            {Rcontent}
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </>
  );
}
export default Rightsidebar;
Rightsidebar.defaultProps={
    Rcontent:<div>Rcontent</div>
    

}
