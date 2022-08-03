describe("empty spec", () => {
  const typeOptions = { delay: 150 };

  it("passes", () => {
    cy.visit("http://localhost:3000/");

    cy.get(".name").type("Digital House", typeOptions);
    cy.get(".email").type("digitalhouse@hotmail.com", typeOptions);

    cy.get(".button-line-new").click();

    cy.get(".info0").type("Escola de programação", typeOptions);

    cy.get(".button-line-new").click();

    cy.get(".info1").type("Iremos apagar esse novo input", typeOptions);

    cy.get(".button-delete1").click();
  });
});
