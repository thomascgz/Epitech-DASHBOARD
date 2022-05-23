#  Dashboard

___

## Authors
___
riyad.hamdaoui@epitech.eu   
thomas.cingoz@epitech.eu
## Description
___
This project is a **Dashboard** online with several services which contains widgets. A widget is a functionnality in connection with a service. When you enter in the site you can sign in or log in with your account and choose widgets you want. To see the list of services available and descriptions of widgets go to http://localhost/8080/about.json.
## Architecture
___
The app is divided in two sides : backend and frontend. The front side draw all components of the site and make API calls to the back to get informations it needs.
The back recover all front requests to make API calls to different services and give informations to the front.

For backend we used **NodeJS** with **ExpressJS**.

For frontend we used **ReactJS**.

For the database we used **Firebase** by **Google**.
## Services

| Service | Description |
| ------ | ----------- |
| RSS   | Get the last article for the topic of your choice. |
| Weather | Get the temperature or the weather description for a city. |
| Cinema    | Get the synopsis or the release date for a movie. |
| Steam    | Get number of online players of a game currently in use. |


## Production deployement
___
Our project is based on **Docker compose**.

To launch it locally :
- To build the project : ``` $> docker-compose build ```
- To run the project : ``` $> docker-compose up```

After that access to it with : http://localhost:3000/ (frontend main app)

The server is launched on : http://localhost:8080/
