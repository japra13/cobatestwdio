Feature: Halaman Forms

    Halaman ini User diperlihatkan dengan halaman yang berisi form untuk diisi

    Scenario Outline: Forms
        # When 01_User menuju halaman Forms
        # Then 01_User dapat melihat form yang berisi field untuk diisi
        # When 02_User memasukkan <input> kedalam field Input Field
        # Then 02_User dapat melihat hasil perubahan pada field You have typed                                                                                             peri pada field You have typed
        # When 03_User menekan tombol Click to turn the switch
        # Then 03_User dapat melihat hasil perubahan tulisan ON & OFF
        # When 04_User mengklik button dropdown dan memilih salah satu diantara 3 pilihan
        # Then 04_User dapat melihat 3 pilihan
        # When 05_User menekan button wdio
        # Then 05_User melihat dropdown berubah isinya
        # When 06_User menekan button Appium
        # Then 06_User melihat dropdown berubah isinya sesuai pilihan
        # When 07_User menekan button This App
        # Then 07_User melihat dropdown berubah isinya sesuai pilihan yang di mau
        When 08_User mengklik tombol buttons Active
        Then 08_User melihat popup yang berisi 3 pilihan
        # When 09_User memilih pilihan ASK ME LATER
        # Then 09_User melihat popup tertutup
        # When 10_User menekan kembali tombol buttons Active
        # Then 10_User melihat kembali popup yang berisi 3 pilihan
        # When 11_User memilih pilihan CANCEL
        # Then 11_User melihat popup akan tertutup
        # When 12_User menekan kembali buttons Active
        # Then 12_User melihat kembali popup yang isinya 3 pilihan
        # When 13_User memilih pilihan OK
        # Then 13_User melihat popup tertutup setelah menekan

        Examples:
            | input  |
            | 123qwe |


