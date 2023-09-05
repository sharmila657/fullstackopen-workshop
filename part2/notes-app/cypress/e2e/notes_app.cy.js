describe("Note app", function () {
  beforeEach(function () {
    cy.visit("http://localhost:5173");
  });
  it("front page can be opened", function () {
    cy.contains("Notes");
    cy.contains("a new note");
  });
  it("login form can be opened", function () {
    cy.contains("login").click();
    cy.get('#username').type('mluukkai')
    cy.get('#password').type('salainen')
    
  });
});
