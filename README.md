# Magistrala SaaS Platform

Magistrala is a modern SaaS solution designed to simplify multi-protocol messaging and empower scalable systems. Built on cutting-edge technologies, Magistrala bridges the gap between devices, applications, and systems, enabling seamless communication and streamlined operations.

## Key Features

- **Multi-Protocol Messaging**: Supports MQTT, HTTP, CoAP, and more, ensuring flexibility in data exchange.
- **Customizable Dashboards**: Visualize your data in real-time with tailored dashboards, complete with charts, gauges, and global mapping.
- **Robust Security**: Protect your ecosystem with advanced encryption, access tokens, and policy management integrated with Google Zanzibar.
- **Pluggable Storage and Brokers**: Choose from various databases and message brokers like TimescaleDB, RabbitMQ, and Mosquitto.
- **Extensible Protocol Adapters**: Leverage or build protocol adapters for seamless device communication.

---

## Getting Started

Follow these steps to download, build, and serve the project locally:

### Prerequisites

[Node.js](https://nodejs.org/en) (Version 16 or higher)

[npm](https://docs.npmjs.com/) (comes with Node.js) or your preferred package manager (yarn, pnpm, bun)

### Clone the Repository

```bash
git clone https://github.com/absmach/magistrala-website.git
cd magistrala-website
```

### Install the Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page auto-updates as you edit the file.

## Building and Running Locally

For a production-like experience, follow these steps:

Build the project:

```bash
npm run build
```

Serve the output locally:

```bash
npx serve@latest out
```

Open the served website in your browser at the provided local URL.

## Deployment

This project is preconfigured for deployment on GitHub Pages. Deploying is straightforward and follows these steps:

### Automatic Deployment

Once a pull request (PR) is merged into the `main` branch, the deployment process will automatically trigger. The website will be accessible at the URL specified in the `homepage` field of the `package.json`:

```json
"homepage": "https://absmach.github.io/magistrala-website"
```

### Manual Deployment

Build the project:

```bash
npm run build
```

Deploy to GitHub Pages:

```bash
npm run deploy
```

To deploy on your own unique URL, modify the `homepage` field in the `package.json` file to reflect your desired URL. For example:

```json
"homepage": "https://your-username.github.io/your-repo-name"
```

## Contributing

Magistrala is designed to be easy to customize and contribute to. See the [CONTRIBUTING.md](./CONTRIBUTING.md) guide for detailed instructions on how to edit, test, and deploy changes. Here's a summary:

- Most styles are located in `global.css`, making it simple to adjust the overall appearance.

- All constants and hardcoded content (such as text) are defined in `constants.ts`. Modify this file to change the wording across the page while retaining the structure.

- Each component utilizes `constants.ts`, making updates modular and easy to manage.

## Professional Support

Need help deploying Magistrala or integrating it into your system? Reach out to **[Abstract Machines](https://abstractmachines.fr/)** for professional support and guidance.
