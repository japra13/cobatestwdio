Feature: Halaman Login

    Halaman ini User diperlihatkan form untuk diisi email dan password

    # Scenario: User melakukan salah input password
    #     When 01_User memasukkan password kurang dari 8 karakter
    #     Then 01_User mendapat pesan error



    Scenario Outline: Login
        When 01_User menuju halaman Login page
        Then 01_User masuk ke halaman Login page dan melihat kolom email dan password
        When 02_User memasukkan <email> dan <password>
        When 03_User klik tombol LOGIN
        Then 03_User dapat pop up Success
        When 04_User mengklik button OK
        Then 04_Pop Up hilang
        Examples:
            | email            | password   |
            | qwerty@gmail.com | qwertyuiop |

# Scenario Outline: Login
#     When 01_User menuju halaman Login page
#     Then 01_User masuk ke halaman Login page dan melihat kolom <email> dan <password>
#     Examples:
#         | email            | password   |
#         | qwerty@gmail.com | qwertyuiop |


# .       Examples:
# | pesanError |
# |Please|

