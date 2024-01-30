This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


# Getting Started with the App

Welcome to the application! Follow these steps to get the app up and running on your local machine.

## Prerequisites

Before you begin, ensure that you have the backend folder installed and that it's running on port: 8000.

## Testing the API

A Postman collection JSON file is provided for your convenience. Import this file into Postman to test the API endpoints.

## Installing Dependencies

Navigate to the root directory of the project and run yarn install to install all required dependencies. make sure you are using node v20 or higher.

P.D.: I installed Formik and yep to make easy build a Form with satinaze and validations, and lodash to use a deep check is state was equal to prevent re-renders

## Launching the App

Once the setup is complete, you can access the app by going to http://localhost/ in your web browser, which will direct you to the Login page.

## Creating and Using an Account

To create a new user, you can either:
Use Postman to send a request to the /register API endpoint.
Use the provided login credentials to access the app.

##  Exploring the App

After logging in, you'll be presented with a list of the first 20 characters.
Feel free to add characters to your favorites or remove them as you see fit.

##  Character Details

For more information about a character, simply click on their name. This will take you to a page containing detailed information about the chosen character.

Enjoy exploring the app!



