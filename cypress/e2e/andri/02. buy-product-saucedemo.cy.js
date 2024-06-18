describe("01. buy-product-saucedemo", () => {
  it("passes", () => {
    cy.visit("https://www.saucedemo.com/v1/"); // redirect to URL saucedemo.com

    const username = "standard_user"; // valid username
    const password = "secret_sauce"; // valid password

    cy.wait(2000); // wait for 2 seconds
    cy.get('[data-test="username"]').type(username); // to get the username field and input the username
    cy.get('[data-test="password"]').type(password); // to get the password field and input the password

    cy.get("#login-button").click(); // to get the login button and click
    cy.wait(2000); // wait for 2 seconds
    cy.get(".product_label").should("exist"); // to verify the product label exists

    cy.get(":nth-child(1) > .pricebar > .btn_primary").click(); // click the product to add the product
    cy.get(":nth-child(2) > .pricebar > .btn_primary").click(); // click the product to add the product
    cy.get(":nth-child(3) > .pricebar > .btn_primary").click();
    cy.get(":nth-child(4) > .pricebar > .btn_primary").click();
    cy.get(":nth-child(5) > .pricebar > .btn_primary").click();
    cy.get(":nth-child(6) > .pricebar > .btn_primary").click();

    cy.get("#shopping_cart_container").click(); // click on shopping cart

    // cy.get("#btn_action").scrollIntoView({
    //   easing: "linear",
    //   duration: 2000,
    // });

    cy.get(".btn_action").click(); // click on action

    cy.get('[data-test="firstName"]').type("Abraham");
    cy.get('[data-test="lastName"]').type("Lincoln");
    cy.get('[data-test="postalCode"]').type("12345");

    // cy.get(".cart_cancel_link");
    cy.get(".btn_primary").click();

    cy.get(".cart_cancel_link");

    cy.get(".btn_action").click();

    cy.get(".complete-header").should("exist");
  });
});
