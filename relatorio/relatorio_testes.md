# Relatório de Execução dos Testes Automatizados

---

## 1. Resumo Geral

| Métrica | Resultado |
| --- | --- |
| **Suíte de Testes** | `tests/Garage.test.ts` |
| **Framework de Testes** | Jest + `ts-jest` |
| **Total de Testes** | 16 |
| **Testes Aprovados (Passed)** | 16 |
| **Testes Falhados (Failed)** | 0 |
| **Padrão de Arquitetura** | AAA (Arrange, Act, Assert) |

---

## 2. Detalhamento dos Casos de Teste Executados

### Módulo: Entidade `Car`

* **`1. Criar um carro`**
* **Objetivo:** Verificar a instanciação e atributos iniciais da classe `car`.
* **Resultado:** **PASSED**
* **Validação:** Garantiu que `brand`, `model` e `year` foram gravados corretamente.


* **`2. Verificar o estado inicial de stored`**
* **Objetivo:** Confirmar o encapsulamento e o valor padrão do atributo `stored`.
* **Resultado:** **PASSED**
* **Validação:** Método `isStored()` retornou `false` após a criação.


* **`3. Alterar stored para true`**
* **Objetivo:** Testar o setter `setStored()`.
* **Resultado:** **PASSED**
* **Validação:** `isStored()` alterado com sucesso para `true`.


* **`4. Alterar stored para false`**
* **Objetivo:** Testar a alternância de estado de `stored`.
* **Resultado:** **PASSED**
* **Validação:** Estado alterado para `true` e posteriormente revertido para `false`.



---

### Módulo: Gestão da Garagem (`Garage`)

* **`5. Adicionar um carro`**
* **Objetivo:** Testar inclusão unitária na garagem.
* **Resultado:** **PASSED**
* **Validação:** `getCarCount()` passou de 0 para 1.


* **`6. Verificar stored após adicionar`**
* **Objetivo:** Garantir atualização automática do estado de armazenamento ao adicionar.
* **Resultado:** **PASSED**
* **Validação:** O método `addCar()` atualizou o atributo `stored` para `true`.


* **`7. Adicionar vários carros`**
* **Objetivo:** Verificar comportamento com coleções de dados.
* **Resultado:** **PASSED**
* **Validação:** Inclusão de 3 carros distintos resultou em `getCarCount() === 3`.


* **`8. Remover um carro`**
* **Objetivo:** Testar a exclusão de um veículo da garagem.
* **Resultado:** **PASSED**
* **Validação:** Contagem de carros retornou a 0 após `removeCar()`.


* **`9. Verificar stored após remover`**
* **Objetivo:** Garantir atualização do estado ao retirar do armazenamento.
* **Resultado:** **PASSED**
* **Validação:** O atributo `stored` do veículo voltou a ser `false`.



---

### Módulo: Busca e Validações

* **`10. Procurar um carro existente`**
* **Objetivo:** Testar a funcionalidade de busca por modelo.
* **Resultado:** **PASSED**
* **Validação:** `findCarByModel()` retornou a referência correta da instância buscada.


* **`11. Procurar um carro inexistente`**
* **Objetivo:** Testar busca sem correspondência.
* **Resultado:** **PASSED**
* **Validação:** O retorno obtido foi `undefined`.


* **`12. Não permitir carros duplicados`**
* **Objetivo:** Testar a regra de negócio que impede cadastro duplicado (`brand` + `model` + `year`).
* **Resultado:** **PASSED**
* **Validação:** Tentativa de adicionar o mesmo veículo capturada com sucesso por `toThrow()`.


* **`13. Verificar a marca do carro encontrado`**
* **Objetivo:** Validar a integridade dos dados retornados pela busca.
* **Resultado:** **PASSED**
* **Validação:** `getBrand()` retornou a marca exata do carro buscado.


* **`14. Verificar o ano do carro encontrado`**
* **Objetivo:** Validar o atributo de ano após a recuperação da instância.
* **Resultado:** **PASSED**
* **Validação:** `getYear()` retornou o ano exato informado no cadastro.



---

### Módulo: Operações Compostas

* **`15. Remover um carro entre vários`**
* **Objetivo:** Testar a remoção seletiva sem afetar os demais elementos.
* **Resultado:** **PASSED**
* **Validação:** Remoção de 1 entre 3 carros manteve exatamente 2 no inventário.


* **`16. Verificar os estados após remover um carro`**
* **Objetivo:** Validar os estados de `stored` individuais após remoções parciais.
* **Resultado:** **PASSED**
* **Validação:** Apenas o carro removido ficou com `stored = false`, enquanto os mantidos permaneceram com `stored = true`.



---

## 3. Conclusão

Todos os **16 casos de teste** foram executados com sucesso. O sistema atende integralmente a todas as regras de negócio de orientação a objetos, encapsulamento e validação de duplicidade impostas pela especificação.