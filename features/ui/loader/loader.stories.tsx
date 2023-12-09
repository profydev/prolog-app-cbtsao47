import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Loader } from "./loader";
import { ProjectLanguage, ProjectStatus } from "@api/projects.types";

export default {
  title: "UI/Loader",
  component: Loader,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof Loader>;

const Template: StoryFn<typeof Loader> = () => (
  <div
    style={{
      maxWidth: 500,
      width: "100%",
      boxSizing: "border-box",
      padding: 10,
    }}
  >
    <Loader />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  project: {
    id: "xzy",
    name: "Frontend - Web",
    language: ProjectLanguage.react,
    numIssues: 420,
    numEvents24h: 721,
    status: ProjectStatus.error,
  },
};
Default.parameters = {
  viewMode: "docs",
};
