import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components/Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Button",
    secondary: false,
    animated: false,
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    secondary: true,
    animated: false,
  },
  parameters: {
    backgrounds: {
      default: "primaryColor",
      values: [{ name: "primaryColor", value: "#55c57a" }],
    },
  },
};

export const Animated: Story = {
  args: {
    label: "Button",
    secondary: false,
    animated: true,
  },
};

export const Large: Story = {
  args: {
    label: "Button",
    secondary: false,
    animated: false,
    size: "large",
  },
};

export const Small: Story = {
  args: {
    label: "Button",
    secondary: false,
    animated: false,
    size: "small",
  },
};
