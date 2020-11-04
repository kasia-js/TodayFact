# TodayFacts

TodayFacts is a web app created to provide information about events around the world on a given date.
When a user opens the site, the facts of today are displayed. The user can then search for any other date or select the most popular date from the cloud tag provided. 

## Website
Please see the deployed website for more functionality:
https://today-facts.herokuapp.com/#

## Screenshots

<p align="center">
  <img src="/img/Screenshot.png" />
</p>

## Getting started

1. Clone this repo and enter!

  ```bash
  git clone https://github.com/kasia-js/TodayFacts.git
  ```

2. Install dependencies.

  ```bash
  npm i # in the main folder
  cd client && npm i 
  ```
3. Build application

  ```bash
  cd client && npm run build
  ```

4. Start the app.
  ```bash
  cd Server && sudo systemctl start mongod # start mongoDB in Server folder
  cd .. && npm run start # start application in main folder
  ```
  Then in the browser go to [http://localhost:3001](localhost:3001)


## Built with
<p align="center">
  <img src="/img/Architecture.png" />
</p>

- [React](https://reactjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/en/)
- [Bootstrap](https://getbootstrap.com/)
- [HTML](https://html.com/)
- [CSS](http://css.com/)
- And MORE! check package.json ;)

## Developers:
- Katarzyna Kolny - [GitHub](https://github.com/kasia-js) - [LinkedIn](https://www.linkedin.com/in/katarzyna-kolny-8b3384b9/)
