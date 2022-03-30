# PHONE CATALOG

This is a Monorepo with pnpm for the interview test, this contains the Backend REST API, some commontypes and posible tools and finally the Front End part of the app.

The app and server are hosted in render.com

Available in: [catalog.leito.dev](https://catalog.leito.dev/)

## Using in a local development enviroment.

You should have been provided with a .env file that just for good practices hasn't been uploaded to the repository.

Running the comands should be fairly easy.

1. Make sure you already have nodejs and npm installed.

2. if you don't have pnpm installed that is the first thing you should do.

```
npm i -g pnpm
```

3. Clone the repository

```
git clone https://github.com/lescuer97/phone_catalog.git
```

4. in the root of the project install the dependencies.
   Because its a mono repo just this command will install all dependencies

```
pnpm i
```

5. Add the .env file to the apps/react-front folder

6. run the the command to run de apps

```
pnpm run dev
```

7. You can check out the test writen for the Front End. I didn't bother with testing the backend just because I didn't have the time to make
   the CRUD functionality so is just a server with a GET request.

```
pnpm run test --filter react-front
```

## NOTES

I took the opportunity of the test by experimenting with some new tools like the pnpm Workspaces and Vitest. Vitests actually simplified the unit testing a lot because you don't have to do the tipical conversion with Babel that need to be done when testing with things like Jest
