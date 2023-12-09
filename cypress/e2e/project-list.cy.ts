import { ProjectStatus } from "@api/projects.types";
// import { statusToDisplayText } from "./../../features/projects/components/project-card/project-card";
import mockProjects from "../fixtures/projects.json";

describe("Project List", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", (req) => {
      req.on("response", (res) => {
        res.setDelay(1000).send({
          fixture: "projects.json",
        });
      });
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");
    // should show a loader
    cy.get("img[alt=loading]").should("be.visible");
    // wait for request to resolve
    cy.wait("@getProjects");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
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
