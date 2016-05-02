'use strict';
/*
 *  Middlewares: define all global middlewares for your api
 */
import express    from 'express';
import bodyParser from 'body-parser';

export default () => {
  const middlewares = express.Router();

  /*
   TODO: Add your middlewares here
   ```
     middlewares.use(cors());
   ```
  */
  middlewares.use(bodyParser.json());                       // for parsing application/json
  middlewares.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

  middlewares.use((req, res, next) => {
    req.user = {
      id: 'auth0|ramasilveyra1@gmail.com'
    };

    return next();
  });

  return middlewares;
};
