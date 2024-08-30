Feature: Halaman Drag & Drop

    Pada halaman ini User dapat melakukan drag & drop dengan contoh puzzle yang terdiri dari 9 kotak

    Scenario Outline: Drag & Drop
    When 01_User menuju halaman Drag
    Then 01_User masuk di halaman Drag
    When 02_User melakukan drag L1 lalu drop pada kotak L1
    Then 02_Terjadi perpindahan kotak L1 ke kotak L1
    When 03_User melakukan drag R1 lalu drop pada kotak R1
    Then 03_Terjadi perpindahan kotak R1 ke kotak R1
    When 04_User melakukan drag C1 lalu drop pada kotak C1
    Then 04_Terjadi perpindahan kotak C1 ke kotak C1
    When 05_User melakukan drag L2 lalu drop pada kotak L2
    Then 05_Terjadi perpindahan kotak L2 ke kotak L2
    When 06_User melakukan drag R2 lalu drop pada kotak R2
    Then 06_Terjadi perpindahan kotak R2 ke kotak R2
    When 07_User melakukan drag C2 lalu drop pada kotak C2
    Then 07_Terjadi perpindahan kotak C2 ke kotak C2
    When 08_User melakukan drag L3 lalu drop pada kotak L3
    Then 08_Terjadi perpindahan kotak L3 ke kotak L3
    When 09_User melakukan drag R3 lalu drop pada kotak R3
    Then 09_Terjadi perpindahan kotak R3 ke kotak R3
    When 10_User melakukan drag C3 lalu drop pada kotak C3
    Then 10_Terjadi perpindahan kotak C3 ke kotak C3
    Then 10_Kotak terpenuhi dan pindah Page
    When 11_User menekan tombol Retry
    Then 11_Kembali ke page Drag yang awal