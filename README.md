This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Setup ENV vars as recommended below
Sample `.env` file

```
NEXT_PUBLIC_SENTRY_DSN=https://1234...
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Project setup checklist

### FE
* ~App runs with yarn dev~
* ~Sentry (for bugs and logging) setup~
* ~NextAuth Setup~
* ~DB setup with NextAuth~
* ~DB dump setup in FE for BE testing~
* ~Local storage setup.~ *Not used in this project yet.*
* Connectivity to BE with SSL
* Analytics setup

### BE
* ~GRPC server setup~
* ~Local SSL support~
* ~DB testing support~
* ~Sentry (for bugs and logging) setup~
* Remote SSL support
