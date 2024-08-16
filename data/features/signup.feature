Feature: Halaman SignUp

    # Halaman ini User diperlihatkan form register

    Scenario Outline: SignUp
        When 01_User kearah halaman Login page
        Then 01_User masuk ke halaman Login page dan melihat Form
        When 02_User klik button Sign Up
        Then 02_User masuk ke halaman SignUp page dan melihat Form
        When 03_User mengisi <email>, <password>, dan <confirm password> dengan data yang valid
        When 04_User mengklik button SignUp
        Then 04_User melihat popup SignedUp!
        When 05_User menekan button OK
        Then 05_Pop Up menghilang
        Examples:
            | email            | password   | confirm password |
            | qwerty@gmail.com | qwertyuiop | qwertyuiop       |