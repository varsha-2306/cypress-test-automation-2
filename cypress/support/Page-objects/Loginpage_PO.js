/// <reference types="cypress"/>

import Base_PO from "./Base_PO";

let stub;

class Loginpage_PO extends Base_PO {
  navigateToLoginpage() {
    super.navigate("/Login-Portal/index.html");
  }

  type_Username(username) {
    cy.get("#text").type(username);
  }

  type_Password(password) {
    cy.get("#password").type(password);
  }

  clickloginbutton() {
    // stub = cy.stub();
    // cy.on("window:alert", stub);
    cy.get("#login-button").click();
  }

  alert(expectedalert) {
    expect(stub).to.have.been.calledWith(expectedalert);
  }
}

export default Loginpage_PO;
