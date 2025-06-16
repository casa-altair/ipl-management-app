Page 1:
    IPL Team Management System (Title)
    Get Started (Button)

Page 2 (Login Page):
    Username (input)
    Password (input)
    Login Button, register button

Page 3 (Register Page):
    Name, username, password, confirm password

Page 4 (Home page):
    Nav: Home, Teams, Players, Signout
    Body: Team Cards: Name, No of players, location, details

Page 5 (Team Info)
Nav: Same as above
body:
h1: Team name
players card: Player name, player photo

Page 6 (Players clicked on nav bar)
nav: Same as above
body:
h1: Player name


Page 7 (Admin page role specific):
left bar:
Manage team
--add team
--view team

Mange Player
-- Add player
-- View player




1. Create project: ng new ipl-management-app --no-standalone
2. cd ipl-management-app
3. code .
4. ng s -o
5. Clean the pre-difned codes: app.html, style.css
6. Module structure:
    - Core
        -- Service: auth.service.ts
        -- Components
    - Shared
        -- Product

    - Admin
    - Users