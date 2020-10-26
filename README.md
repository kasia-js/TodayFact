# TodayFacts

<p align="center">
  <img src="/client/src/assets/images/TodayFactsLogo.png" />   
</p>

TodayFacts is a web app created to provide information about events around the world on a given date. 
When a user opens the site, the facts of today are displayed. The user can then search for any other date or select the most popular date from the cloud tag provided.

## Screenshots

<p align="center">
  <img src="/client/src/assets/images/Screenshot.png" />
</p>

## Getting started

1. Clone this repo and enter!

   ```bash
   git clone https://github.com/kasia-js/TodayFacts.git
   ```

2. Install dependencies.

   ```bash
   cd client && npm i
   cd ../server && npm i
   ```

3. Start the app.
- on the server folder, start data base (commands for linux)
  ```bash
  sudo systemctl start mongod
  mongo
  ```
- on the server folder
  ```bash
  nodemon index.js
  ```
- on the client folder
  ```bash
  npm start
  ```

## Built with
<p align="center">
  <img src="/client/src/assets/images/Architecture.png" />
</p>

- [React](https://reactjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/en/)
- [HTML](https://html.com/)
- [CSS](http://css.com/)
- And MORE! check package.json ;)

## Developers:
- Katarzyna Kolny - [GitHub](https://github.com/kasia-js) - [LinkedIn](https://www.linkedin.com/in/katarzyna-kolny-8b3384b9/)
