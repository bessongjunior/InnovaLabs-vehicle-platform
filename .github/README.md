# Innova labs Inc Project on Car Sale and Rental Platform

## Getting Started



This repo contains a frontend react based project powered with Node.js and React.js, a backend app powered with Python and Flask mainly our constructed customized API and mobile based powered with Dart and Flutter. To get started, clone this repo in your terminal at the project root and follow the instructions below.



## Required Technology

The application make use of the following libraries:

### Frontend -> React

- React.js, Vite and Typescript

- Redux and React-redux, Recoil

- clsx and prop-types

- node-sass, scss-loader, typings-for-scss-modules-loader

- yup, formik, lodash, moment

- React-content-loader, React-icons

- react-bootstrap, react-chartjs-2, @mui/material, styled-components

- axios, rxjs, react-rxjs

  

### Backend -> Flask

- Flask, Flask[async] and Flask-Restx

- Flask-Cors, Flask-Bcrypt and Flask-JWT-Extended

- Flask-Mail, Flask-SQLAlchemy, Flask-MongoEngine and Flask-Uploads

- Oauth2, Oauth2Client and Flask-Dance

- Flask-Migrate and Gunicorn

- Pytest and Pylint

  

###  Mobile -> Flutter

- Rxdart, http, image_picker and path
- Dio, provider, BLoC / shared_preferences / redux and  flutter_svg
- url_launcher, scrollable_positioned_list and carousel_slider
- font_awesome_flutter, charts_flutter and flutter_launch_icons
- integration_test and flutter_test
- google_maps_flutter, flutter_polyline_points, geolocator and path_providing



### Steps to first release

Follow the Software Architecture and the CI|CD Pipeline especially.

- Follow the SRS for each individual module
- Build a well structured and customized Database for both the API and the Persistence needed to in mobile. Migrate the database when necessary
- Leverage strong Security and Privacy principles so as to Secure the platform
- Apply DevSecOps using Owasp for Security testing
- Ensure Type checks and Linting to maximize and optimize code
- App logging and feedback well structured.

## Running the app

### Running the backend

```
$ cd backend
$ make env
$ make install
$ make pylint
$ make run
-- using docker 
$ xxx
```

### Running the frontend

```
$ cd frontend
$ yarn install
$ yarn dev
$ yarn build
-- using docker
$ xxxx
```

### Running mobile

```
$ cd mobile
$ flutter pub get
$ flutter doctor
$ flutter run
-- running and profiling using android studio
$ xxx
```

