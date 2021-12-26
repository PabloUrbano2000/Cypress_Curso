Feature: Demo de Cucumber

    Esto es un demo de como utilizar cucumber

    # Scenario: Demo de Cucumber Uno
    #     Given Abrir el navegador principal
    #     When Cargando el nombre "Pablo"
    #     When Cargando el email "pablo@gmail.com"
    #     And Cargando la dirección "Dirección uno calle 355"
    #     And Cargando la dirección permanente "Dirección perro pe"
    #     And Click en Button
    #     Then Validar el nombre de la Página


    # Scenario: Demo de Cucumber Dos
    #     Given Abrir el navegador principal
    #     When Cargando el nombre "Miguel"
    #     When Cargando el email "miguelo@mailinator.com"
    #     And Cargando la dirección "Jiron Carlos 999"
    #     And Cargando la dirección permanente "Mi casa peee"
    #     And Click en Button
    #     Then Validar el nombre de la Página

    Scenario Outline: Scenario Outline name: Demo de Cucumber
        Given Abrir el navegador principal
        When Cargando el nombre <username>
        When Cargando el email <email>
        And Cargando la dirección <dir1>
        And Cargando la dirección permanente <dir2>
        And Click en Button
        Then Validar el nombre de la Página

        Examples:
            | username  | email                  | dir1         | dir2            |
            | 'Rodrigo' | 'rodrigo@mail.com'     | 'LOs Olivos' | 'Perro salvaje' |
            | 'Pablo'   | 'pablo@mailinator.com' | 'Las Flores' | 'Chango Aguayo' |
