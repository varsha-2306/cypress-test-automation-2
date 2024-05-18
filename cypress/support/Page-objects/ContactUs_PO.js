/// <reference types="cypress"/>

class ContactUs_PO {
  elements = {
    comment_Textfield: () => cy.get('textarea[name="message"]'),
    submit_button: () => cy.get('[type="submit"]'),
    submission_header_text:() => cy.xpath("//h1 | //body")
  };

  type_firstname(firstname) {
    cy.get('[name="first_name"]').type(firstname);
  }

  type_lastname(lastname) {
    cy.get('[name="last_name"]').type(lastname);
  }

  type_emailaddress(email) {
    cy.get('[name="email"]').type(email);
  }

  type_comment(comment) {
    this.elements.comment_Textfield().type(comment);
  }

  clickon_submitbutton() {
    this.elements.submit_button().click();
  }

  validate_submission_header(Message){
    this.elements.submission_header_text().contains(Message);
    this.elements.submission_header_text().invoke('text').should('include',Message)
   }
}

export default ContactUs_PO;
