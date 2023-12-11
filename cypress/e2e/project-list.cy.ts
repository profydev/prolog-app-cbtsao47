import { ProjectStatus } from "@api/projects.types";
// import { statusToDisplayText } from "./../../features/projects/components/project-card/project-card";
import mockProjects from "../fixtures/projects.json";

describe("Project List", () => {
  it("should show a loading indicator", () => {
    cy.visit("http://localhost:3000/dashboard");
    // should show a loader
    cy.get("img[alt='loading']").should("be.visible");
  });

  it("should show error notification when request fails and refetch when button is clicked", () => {
    // setup request mock
    cy.intercept(
      { url: "https://prolog-api.profy.dev/project", times: 4 },
      {
        statusCode: 500,
      },
    );

    cy.visit("http://localhost:3000/dashboard");
    cy.get("[data-testid='error-message']", { timeout: 15000 }).should(
      "be.visible",
    );
    cy.get("[data-testid='retry-button']", { timeout: 15000 })
      .should("be.visible")
      .click();
    cy.get("[data-testid='error-message']", { timeout: 15000 }).should(
      "not.exist",
    );
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.intercept("GET", "https://prolog-api.profy.dev/project", {
        fixture: "projects.json",
      });

      cy.viewport(1025, 900);

      cy.visit("http://localhost:3000/dashboard");
    });

    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];
      const statusToDisplayText = {
        [ProjectStatus.info]: "Stable",
        [ProjectStatus.error]: "Critical",
        [ProjectStatus.warning]: "Warning",
      };

      // get all project cards
      cy.get("main")
        .find("li")
        .each(($el, index) => {
          // check that project data is rendered
          cy.wrap($el).contains(mockProjects[index].name);
          cy.wrap($el).contains(languageNames[index]);
          cy.wrap($el).contains(mockProjects[index].numIssues);
          cy.wrap($el).contains(mockProjects[index].numEvents24h);
          cy.wrap($el).contains(
            statusToDisplayText[mockProjects[index].status as ProjectStatus],
          );
          cy.wrap($el)
            .find("a")
            .should("have.attr", "href", "/dashboard/issues");
        });
    });
  });
});
