import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "../components/dropdown/dropdown";
import "./Dropdown.stories.css";

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: "Dropdown",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    label: "label",
    placeholder: "select your choice",
    withSearch: false,
    isMultiple: false,
    outlined: true,
    options: [
      {
        label: "Option 1",
        value: "Option 1",
      },
      {
        label: "Option with icon",
        value: "Option with icon",
      },
      {
        label: "Long Long Option 3",
        value: "Long Long Option 3",
      },
      {
        label: "Long Long Long Option 4",
        value: "Long Long Long Option 4",
      },
      {
        label: "Long Long Long Long Option 5",
        value: "Long Long Long Long Option 5",
      },
      {
        label: "Long Long Long Long Long Option 6",
        value: "Long Long Long Long Long Option 6",
      },
    ],
  },
};
