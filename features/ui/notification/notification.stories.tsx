import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Notification, TNotification } from "./notification";

export default {
  title: "UI/Notification",
  component: Notification,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof Notification>;

const Template: StoryFn<typeof Notification> = (props) => (
  <div
    style={{
      maxWidth: 500,
      width: "100%",
      boxSizing: "border-box",
      padding: 10,
    }}
  >
    <Notification {...props} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  iconSrc: "/icons/alert-circle.svg",
  type: TNotification.error,
  text: "there has been an error.",
};
Default.parameters = {
  viewMode: "docs",
};
