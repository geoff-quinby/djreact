describe("DJREACT: Django REST / React quickstart app", () => {
  const lead = {
    first_name: "Android",
    last_name: "17",
    email: "park_ranger_17@teamfourstar.com",
    message: "I never did get that boat."
  };

  before(() => {
    cy.exec("npm run dev");
    cy.exec("npm run flush");
  });

  it("should be able to fill a web form", () => {
    cy.visit("/");

    cy
      .get('input[name="first_name"]')
      .type(lead.first_name)
      .should("have.value", lead.first_name);

    cy
      .get('input[name="last_name"]')
      .type(lead.last_name)
      .should("have.value", lead.last_name);

    cy
      .get('input[name="email"]')
      .type(lead.email)
      .should("have.value", lead.email);

    cy
      .get('input[name="message"]')
      .type(lead.message)
      .should("have.value", lead.message);

    cy.get("form").submit();
  });

  it("should be able to see the table", () => {
    cy.visit("/");
    cy.get("tr").contains(`${ lead.first_name }${ lead.last_name }${ lead.email }${ lead.message }`);
  });

});