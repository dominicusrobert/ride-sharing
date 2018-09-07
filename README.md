# Ride Sharing Server (Restful API) 


## Pre-requirement (should already installed)
1. NodeJs
2. PostgreSQL
3. Sequelize CLI


## Setup project

1. Clone form git repository

2. install dependency (type in the terminal)
  ```
  npm install
  ```

3. Setup database environment (type in the terminal)
  ```
  a. Go to Pg-Admin, and create new Database
  b. type in the terminal 'sequelize db:migrate'
  ```

4. Change Configuration Database on Config file

  ```
  a. Open file config.json (file path : /config/config.json)
  b. change value of "username", "password", "database" in accordance with postgresql username, password and database server name that already set.

  ```


5. Seed DB (type in the terminal)
  ```
  sequelize db:seed --seed 20180906020510-StatusCategory
  sequelize db:seed --seed 20180906020516-Status
  sequelize db:seed --seed 20180906020610-VehicleType
  sequelize db:seed --seed 20180906033433-ExampleUser
  sequelize db:seed --seed 20180906033440-ExampleVehicle
  ```
  Note: sometimes failed using command sequelize db:seed:all

9. run project (type in the terminal)
  ```
  npm start
  ```



## Other Link

| Name | link |
| ---- |:----:|
| Flowchart | https://drive.google.com/open?id=1sSGfVdd_Q7mjBkD97kcJbCbtJtMkJfWp |
| ERD | https://drive.google.com/open?id=1k9t_nAq9BB2hFpT9PPBA_YbdfcRpWYDh |
| Postman Collection | https://drive.google.com/open?id=1cy7idYGSrnlymH5VAhwc80MU_iHoury8 |
| Postman Environment | https://drive.google.com/open?id=1nHlAAuDEq-hT99AQwy1h3ATJTfsRFJYb |

