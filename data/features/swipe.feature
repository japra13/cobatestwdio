Feature: Halaman Swipe

    Meng-swipe ke samping kanan dan kiri serta atas dan bawah

    Scenario: Swipe
        When 01_User menuju halaman Swipe page
        Then 01_User masuk ke halaman Swipe
        When 02_User meng - swipe secara horizontal ke kiri
        Then 02_User melihat content ketika swipe ke kiri
        When 03_User meng - swipe secara horizontal ke kanan
        Then 03_User melihat content ketika swipe ke kanan
        When 04_User meng - swipe secara vertikal ke bawah
        Then 04_User melihat content ketika swipe ke bawah
        When 05_User meng - swipe secara vertikal ke atas
        Then 05_User melihat content ketika swipe ke atas