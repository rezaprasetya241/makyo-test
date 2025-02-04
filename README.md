# Storybook Documentation

## 📖 Introduction

Storybook is an open-source tool for building UI components and pages in isolation. It helps developers create, test, and document components efficiently.

##

## 🛠 Project Structure

```
project-root/
│── .storybook/       # Storybook configuration
│── src/components/   # Your UI components
│── stories/          # Story files (e.g., Button.stories.tsx)
```

## ✍ Writing Stories

Create a `.stories.tsx` file next to your component:

```tsx
import React from "react";
import { Button } from "../components/Button";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Example/Button",
  component: Button,
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: "Primary Button" };
```

## 🧪 Testing with Storybook

Storybook supports testing via interaction and visual regression testing:

```sh
yarn test-storybook  # Run Storybook tests
```

## 📚 Addons & Customization

Enhance your Storybook with addons:

```sh
yarn add @storybook/addon-essentials
```

Modify `.storybook/main.js` to include addons:

```js
module.exports = {
  addons: ["@storybook/addon-essentials"],
};
```

## 📌 Deployment

To deploy Storybook:

```sh
yarn build-storybook
```

You can host the generated `storybook-static` folder using services like Netlify or Vercel.

## 🎯 Conclusion

Storybook is a powerful tool for building and documenting UI components in isolation. Use it to streamline your development workflow and improve component reusability.

Happy coding! 🚀

## Dropdown Component

    Props:

- label: string; // for label dropdown
- placeholder: string; // for placeholder
- isMultiple: boolean; // for choose dropdown can multipe or not
- withSearch: boolean; // for choose to disable search feature in dropdown
- options: { label: string; value: string }[]; // data in dropdown
- outlined: boolean; // for styling is outlined or not
- onChange?: (e: string | string[]) => void; // function to send data into a parents

![image](https://github.com/user-attachments/assets/164662aa-1bb0-460e-aec1-faf6d103f50a)
![image](https://github.com/user-attachments/assets/3bf1fed9-4fc9-452f-86da-4ade0e5911e9)
