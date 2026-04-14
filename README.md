# Kingdom Software Website

The official website for Kingdom Software — a React 18 single-page application styled with Tailwind CSS, deployed to AWS S3 and served via CloudFront.

## Tech Stack

| Layer | Technology |
|---|---|
| UI framework | [React 18](https://react.dev/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) |
| Animations | [Framer Motion](https://www.framer.motion.com/) |
| Icons | [React Icons](https://react-icons.github.io/react-icons/) |
| Analytics | [React GA4](https://github.com/PriceRunner/react-ga4) (Google Analytics 4) |
| Build tooling | [Create React App](https://create-react-app.dev/) (react-scripts 5) |
| Container | Docker (Node 18 Alpine) |
| CI/CD | AWS CodeBuild (`buildspec.yml`) |
| Hosting | AWS S3 + CloudFront |

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- [npm](https://www.npmjs.com/) v8 or later (comes with Node.js)
- [Docker](https://www.docker.com/) (optional, for containerised development)

## Getting Started

### Local development

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads on file changes.

### Running with Docker

```bash
# Build and start the container (maps port 3000)
docker-compose up --build
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The `src/` directory is volume-mounted so changes are reflected without rebuilding the image.

## Available Scripts

| Command | Description |
|---|---|
| `npm start` | Start the development server at `http://localhost:3000` |
| `npm test` | Run the test suite in interactive watch mode |
| `npm run build` | Create an optimised production build in the `build/` folder |

## Project Structure

```
src/
├── components/
│   ├── AboutUs/
│   ├── ContactUs/
│   ├── Footer/
│   ├── Header/
│   ├── HeroSection/
│   ├── MissionVision/
│   ├── NavDesktop/
│   ├── NavMobile/
│   ├── Services/
│   ├── Testimonials/
│   ├── TopBar/
│   └── WelcomeMessage/
├── images/
├── App.js          # Root component with GA4 initialisation
├── index.js        # React DOM entry point
└── routes.js       # Application routes
```

## Deployment

The site is deployed automatically via **AWS CodeBuild** using `buildspec.yml`:

1. **Build** — `npm run build` produces a production bundle in `build/`.
2. **Sync to S3** — the `build/` directory is synced to the `kingdom-software-website` S3 bucket.
3. **Cache-bust index** — `index.html` is uploaded with `no-cache` headers to ensure users always receive the latest version.
4. **CloudFront invalidation** — an invalidation is created on the CloudFront distribution so the new `index.html` is served immediately.

To trigger a deployment, push to the branch that is connected to the CodeBuild project.
