import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Footer } from "./footer";
import { Routes } from "@config/routes";

export default {
  title: "UI/Footer",
  component: Footer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = () => (
  <Footer
    links={[
      { text: "Docs" },
      { text: "API" },
      { text: "Help" },
      { text: "Community" },
    ]}
    logoSrc="/icons/logo-small.svg"
    version="14.5.1"
  />
);

export const Default = Template.bind({});
Default.parameters = {
  route: Routes.issues,
};
