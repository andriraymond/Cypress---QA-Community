describe("01. login-saucedome", () => {
  // const saucedemo_baseURL = "https://www.saucedemo.com";
  const saucedemo_baseURL = "https://www.saucedemo.com/v1";
  it("passes to login", () => {
    // cy.visit("https://www.saucedemo.com/v1/"); // redirect to URL saucedemo.com
    cy.visit(saucedemo_baseURL); // redirect to URL saucedemo.com

    const username = "standard_user"; // valid username
    const password = "secret_sauce"; // valid password

    cy.wait(2000); // wait for 2 seconds
    cy.get('[data-test="username"]').type(username); // to get the username field and input the username
    cy.get('[data-test="password"]').type(password); // to get the password field and input the password

    cy.get("#login-button").click(); // to get the login button and click
    cy.wait(2000); // wait for 2 seconds
    // cy.get('//*[@id="header_container"]/div[2]/span').should("exist"); // to verify the product label exists
    cy.get(".product_label").should("exist"); // to verify the product label exists v1
  });

  it("failed to login - wrong username & password ", () => {
    cy.visit(saucedemo_baseURL); // redirect to URL saucedemo.com

    cy.wait(2000); // wait for 2 seconds
    cy.get('[data-test="username"]').type("wrong_user"); // to get the username field and input the username
    cy.get('[data-test="password"]').type("wrong_password"); // to get the password field and input the password

    cy.wait(2000); // wait for 2 seconds
    cy.get("#login-button").click(); // to get the login button and click
    cy.get('[data-test="error"]').should("exist"); // to verify the error message exists
  });

  it("failed to login - username & password are blank ", () => {
    cy.visit(saucedemo_baseURL); // redirect to URL saucedemo.com

    cy.wait(2000); // wait for 2 seconds

    cy.wait(2000); // wait for 2 seconds
    cy.get("#login-button").click(); // to get the login button and click
    cy.get('[data-test="error"]').should("exist"); // to verify the error message exists
  });
});
