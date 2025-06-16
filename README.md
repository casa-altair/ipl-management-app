# IPL Management App

## 1
- Created the project
- Clean the predefined

## 2
- Create Module:
    - ng g m core
    - ng g m shared
    - ng g m features/admin
    - ng g m features/user
    - Create a folder inside app/.env
- Create Services (Data kept here are basically 1 time use)
    - ng g s core/service/auth
    - ng g c core/components/login
    - ng g c core/components/register
    - ng g s core/guards/auth
    - ng g i core/models/user-model

## 3 Shared Module
- Components
    - We can add here that will be reused in entire application
    - ng g c shared/components/team-card
    - ng g c shared/components/player-card
    - ng g c shared/components/navbar
    - ng g c shared/components/team-form
    - ng g c shared/components/player-form
    - ng g c shared/components/search

- Create Shared module Services
    - ng g s shared/services/team
    - ng g s shared/services/player
    - ng g i shared/models/team-model
    - ng g i shared/models/player-model

## 4 Admin Module
- Components
    - ng g c features/admin/components/dashboard
    - ng g c features/admin/components/team-list
    - ng g c features/admin/components/player-list
    - ng g m features/admin/admin-routing --flat --module=app

## 5 User Module
- Components
    - ng g c features/user/components/dashboard
    - ng g c features/user/components/team-list
    - ng g c features/user/components/player-list
    - ng g m features/user/user-routing --flat --module=app

## 6 Backend
- npm init and install json server
    - create backend folder and make db.json and write the datas
    - npm init and enter
    - npm i json-server
    - "json-server": "^0.17.4" and "start": "json-server db.json" in package.json
    - npm start to run the json server