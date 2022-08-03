describe("Submit", () => {
  const typeOptions = { delay: 35 };

  it("Submit", () => {
    cy.visit("http://localhost:3000/");

    cy.get(".name").type("Digital House", typeOptions);
    cy.get(".email").type("digitalhouse@hotmail.com", typeOptions);

    cy.get(".submit").click();
  });
});
