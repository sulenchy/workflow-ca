// friendly-login.cy.js

describe("Login", () => {
  beforeEach(() => {
    cy.clearLocalStorage(); // Clear localStorage before each test
  });

  it("should log in successfully", () => {
    cy.visit("/"); // Adjust the URL as needed

    // Fill in the email and password fields with valid credentials
    cy.get("#email").type("friendlye2etest@stud.noroff.no");
    cy.get("#Password").type("friendlye2etest");

    // Click the login button
    cy.get("form#log-in").submit();

    // Check if a token is present in localStorage
    cy.window().its("localStorage.token").should("exist");

    // After successful login, navigate to the profile page
    cy.visit("/profile/index.html"); // Adjust the URL as needed

    // Add assertions to check if the profile page is accessible
    cy.url().should("include", "/profile");
  });
});

describe("Login Form Validation", () => {
  beforeEach(() => {
    cy.clearLocalStorage(); // Clear localStorage before each test
  });

  it("should display an error message for invalid credentials", () => {
    cy.visit("/"); // Visit the login page

    // Enter invalid credentials
    cy.get("#email").type("invalid@example.com");
    cy.get("#Password").type("invalidpassword");

    // Attempt to submit the form
    cy.get("form#log-in").submit();

    // Assert that the login form should not proceed and an error message is displayed
    cy.get(".login-msg").should("be.visible").and("contain", "Wrong username or password");
  });
});
