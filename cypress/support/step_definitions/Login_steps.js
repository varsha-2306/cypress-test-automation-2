/// <reference types="cypress" />
import { Given, When, Before } from "@badeball/cypress-cucumber-preprocessor";
import Loginpage_PO from "../Page-objects/Loginpage_PO";

//const url = "https://webdriveruniversity.com/Login-Portal/index.html?";

let stub;
const login = new Loginpage_PO();

Given('I navigate to the webdriveruniversity Login page',()=>{
 
  //  cy.visit(url);
  login.navigateToLoginpage("");  

})

When('I type a {} username',(username)=>{

    //cy.get('#text').type(username);
    login.type_Username(username);
})

When('I type a {} password',(password)=>{

    // cy.get('#password').type(password);
    login.type_Password(password);
})

When('click on the login button',()=>{

    stub=cy.stub();
    cy.on('window:alert', stub);
    login.clickloginbutton();
})

When('I should be presented with a alert box which contains text {string}',(expectedalert)=>{

    expect(stub).to.have.been.calledWith(expectedalert);
    
})