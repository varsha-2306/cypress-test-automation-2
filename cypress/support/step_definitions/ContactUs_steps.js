import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ContactUs_PO from "../Page-objects/ContactUs_PO";

const contactUs = new ContactUs_PO();

When("I type a first name", () => {
  //cy.get('[name="first_name"]').type("Maragatha");
  contactUs.type_firstname("Maragatha");
});

When("I type a lastname name", () => {
 // cy.get('[name="last_name"]').type("Varshini");
 contactUs.type_lastname("Varshini");
});

When("I type the email address", () => {
//  cy.get('[name="email"]').type("varshasampath.s@gmail.com");
contactUs.type_emailaddress("varshasampath.s@gmail.com");
});

When("I type a comment", () => {
//  cy.get('textarea[name="message"]').type("Hello world");
contactUs.type_comment("Hello world");
});

When("click on the submit button", () => {
//  cy.get('[type="submit"]').click();
contactUs.clickon_submitbutton();
});

Then(
  "you should be presented with a successful contact us Submission message",
  () => {
   // cy.get("h1").should("have.text", "Thank You for your Message!");
   contactUs.validate_submission_header("Thank You for your Message!");
  }
);

Then(
  "you should be presented with a unsuccessful contact us Submission message",
  () => {
  //  cy.get("body").contains("Error: Invalid email address");
  contactUs.validate_submission_header("Error: Invalid email address");
  }
);

When("I type a specific first name {string}", (firstname) => {
//  cy.get('[name="first_name"]').type(firstname);
contactUs.type_firstname(firstname);
});

When("I type a specific last name {string}", (lastname) => {
//  cy.get('[name="last_name"]').type(lastname);
contactUs.type_lastname(lastname);
});

When("I type the specific  email address {string}", (email) => {
 // cy.get('[name="email"]').type(email);
 contactUs.type_emailaddress(email);
});

When("I type a comment {string} with the numbers {int} in the comment field",(word, number) => {
  //  cy.get('textarea[name="message"]').type(word + number);
  contactUs.type_comment(word + number);
  }
);

When(
  "I type a specific first name {word} and lastname {string}",
  (firstname, lastname) => {
    // cy.get('[name="first_name"]').type(firstname);
    // cy.get('[name="last_name"]').type(lastname);
    contactUs.type_firstname(firstname);
    contactUs.type_lastname(lastname);
  }
);

When("I type the specific {string} and  a comment {string}",
  (email, comment) => {
    // cy.get('[name="email"]').type(email);
    // cy.get('textarea[name="message"]').type(comment);
    contactUs.type_emailaddress(email);
    contactUs.type_comment(comment);
  }
);

Then(
  "you should be presented with a contact us Submission {string}",
  (Message) => {
    // cy.xpath("//h1 | //body").contains(Message);
    cy.wait(6000);
    contactUs.validate_submission_header(Message)
  }
);
