/// <reference types="cypress" />
import { Given, When, Before } from "@badeball/cypress-cucumber-preprocessor";
import Homepage_PO from "../Page-objects/Homepage_PO"

//const url = "http://www.webdriveruniversity.com/";

const homePage = new Homepage_PO();

Before(() => {
    cy.log("Executing commands inside Homepage Steps");
})

Given(`I navigate to the webdriveruniversity homepage`, () => {
    //cy.visit(url);
   //basePage.navigate();
   homePage.navigate("");
})

When(`I click on the contact us button`, () => {
    //cy.get("#contact-us").invoke("removeAttr", "target").click();
   //cy.clickAndOpenLink_InSameTab("#contact-us");
   homePage.clickOnContactUs();
})

When(`I click on the login portal button`, () => {
    //cy.get("#login-portal").invoke("removeAttr", "target").click();
    //cy.clickAndOpenLink_InSameTab("#login-portal");
    homePage.clickOnLoginportal();
})