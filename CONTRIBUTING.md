# Contributing to Magistrala SaaS

This guide will help you get started with customizing, editing, and contributing to the Magistrala product Website.
This project adheres to the [Contributor Covenant 1.2](http://contributor-covenant.org/version/1/2/0).
By participating, you are expected to uphold this code. Please report unacceptable behavior to
[abuse@abstractmachines.fr](mailto:abuse@abstractmachines.fr).

## Table of Contents

1. [Overview](#overview)
2. [Project Structure](#project-structure)
3. [Editing Content](#editing-content)
4. [Testing Your Changes Locally](#testing-your-changes-locally)
5. [Submitting Contributions](#submitting-contributions)
6. [Custom Deployments](#custom-deployments)
7. [Code Style Guidelines](#code-style-guidelines)

## Overview

Magistrala Webpage is designed to be modular and user-friendly. With minimal effort, you can:

- Update the page’s content (text, images, and links) by editing centralized constants.
- Adjust the design using a single global stylesheet.
- Extend functionality by editing individual components or creating new ones.

## Project Structure

### Key Files and Folders

- **`constants.ts`**: All static text, titles, and other hardcoded content are stored in this [constants.ts file](/src/lib/constants.ts). Editing this file is the easiest way to update wording across the site without modifying individual components.
- [**`global.css`**](/src/app/globals.css): Contains the global styles for the entire project. You can modify this file to adjust typography, colors, and overall design.
- **`app/`**: Contains all the page and component files. Each component references `constants.ts` for its content.
- **`public/`**: Stores static assets like images and icons.

## Editing Content

1. **Update Text**:
   - Open [constants.ts file](/src/lib/constants.ts) located in the `src/lib/` directory.
   - Modify the text fields under relevant sections, such as `heroData`, `featuresSectionData`, or `footerData`.
   - Save your changes. The site will reflect updates immediately if running locally.

2. **Change Styles**:
   - Open `global.css` in the `src/app/` directory.
   - Update styles such as colors, font sizes, or layout properties.

3. **Replace Images**:
   - Add your new image to the `public/` directory.
   - Update the relevant `imageUrl` field in `constants.ts` to point to the new image.

## Testing Your Changes Locally

### Steps to Run Locally

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Start the Development Server**:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser. Changes to `constants.ts` or `global.css` will auto-refresh the page.

## Submitting Contributions

### Reporting Issues

Reporting issues is a great way to contribute to the project. We are grateful for detailed and well-written bug reports. Before raising a new issue, check our [issue list](https://github.com/absmach/magistrala-website/issues) to determine if it already contains the problem you are facing.

A good bug report should include:

- **What were you trying to achieve?**
- **What are the expected results?**
- **What are the received results?**
- **What are the steps to reproduce the issue?**
- **In what environment did you encounter the issue?**

### Submitting Pull Requests

Good pull requests (e.g., patches, improvements, new features) are a fantastic help. They should remain focused in scope and avoid unrelated commits.

#### Fork the Repository

Click the "Fork" button on the project’s GitHub page to create your copy.

#### Create a Branch

Use a descriptive name for your branch, such as ``MG-[issue-number]`:

```bash
git checkout -b MG-[issue-number]
```

### Make Changes and Commit

Commit your changes in logical chunks. When you are ready to commit, make sure
to write a Good Commit Message™. Consult the [Erlang's contributing guide](https://github.com/erlang/otp/wiki/Writing-good-commit-messages)
if you're unsure of what constitutes a Good Commit Message™. Use [interactive rebase](https://help.github.com/articles/about-git-rebase)
to group your commits into logical units of work before making it public.

Note that every commit you make must be signed. By signing off your work you indicate that you
are accepting the [Developer Certificate of Origin](https://developercertificate.org/).

Use your real name (sorry, no pseudonyms or anonymous contributions). If you set your `user.name`
and `user.email` git configs, you can sign your commit automatically with `git commit -s`.

Locally merge (or rebase) the upstream development branch into your topic branch:

```bash
git pull --rebase upstream main
```

Push your topic branch up to your fork:

```bash
git push origin MG-[issue-number]
```

[Open a Pull Request](https://help.github.com/articles/using-pull-requests/) with a clear title
and detailed description.

---

## Custom Deployments

If you’d like to deploy your customized version of Magistrala, follow these steps:

1. **Modify the Homepage URL**:
   - Open `package.json`.
   - Update the `homepage` field with your desired URL:

     ```json
     "homepage": "https://your-username.github.io/your-repo-name"
     ```

2. **Build the Project**:

   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages**:

   ```bash
   npm run deploy
   ```

Your custom website will now be live at the URL specified in the `homepage` field.

## Code Style Guidelines

To maintain code consistency and quality, follow these guidelines:

1. **Run Linters**:
   - Check code quality using:

     ```bash
     npm run lint
     ```

   - Automatically fix issues:

     ```bash
     npm run lint:fix
     ```

2. **Format Code**:
   - Use the formatting script to ensure consistency:

     ```bash
     npm run format
     ```

3. **Check TypeScript Types**:
   - Verify type correctness:

     ```bash
     npm run typecheck
     ```

---

Thank you for contributing to the Magistrala Website! Your efforts help make the platform better for everyone. If you have any questions, feel free to reach out to [info@abstractmachines.fr](mailto:info@abstractmachines.fr).
