Feature: Valida apresentacao unidade de negocio

    Scenario: Visualizar a unidade de negocio Vila Mariana
        Given acesso o site Fleury
        When clico a area de unidades
        And clico no combobox de filtro por facilidade
        And seleciono a opcao de acessibilidade
        And clico em ver detalhes
        Then devo visualizar o titulo vila mariana