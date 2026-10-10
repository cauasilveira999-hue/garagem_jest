import { car } from "../src/Car";
import { garage } from "../src/Garage";

describe("Testes da Classe car e garage", () => {
  // Teste 1 — Criar um carro
  test("1. Deve criar corretamente um objeto da classe car", () => {
    // Arrange: prepara os dados pra entrada
    const brand = "Toyota";
    const model = "Corolla";
    const year = 2025;

    // Act: cria a instancia do carro
    const myCar = new car(brand, model, year);

    // Assert: verifica se tudo ta funcionando legal
    expect(myCar.getBrand()).toBe("Toyota");
    expect(myCar.getModel()).toBe("Corolla");
    expect(myCar.getYear()).toBe(2025);
  });

  // Teste 2 — Verificar o estado inicial de stored
  test("2. Deve inicializar o atributo stored como false", () => {
    // Arrange & Act: cria um carro novo
    const myCar = new car("Honda", "Civic", 2024);

    // Assert: verifica se o stored ta começando como falso
    expect(myCar.isStored()).toBe(false);
  });

  // Teste 3 — alterar stored para true
  test("3. Deve alterar o atributo stored para true", () => {
    // Arrange: Cria o carro
    const myCar = new car("Ford", "Focus", 2023);

    // Act: altera stored para true
    myCar.setStored(true);

    // Assert: verifica se o valor mudou para true
    expect(myCar.isStored()).toBe(true);
  });

  // Teste 4 — Alterar stored para false
  test("4. Deve alterar stored para true e depois para false", () => {
    // Arrange: cria o carro e define como true
    const myCar = new car("Chevrolet", "Onix", 2022);
    myCar.setStored(true);

    // Act: altera denovo para false
    myCar.setStored(false);

    // Assert: verifica se voltou a ser false
    expect(myCar.isStored()).toBe(false);
  });

  // Teste 5 — adicionar um carro
  test("5. Deve adicionar um carro à garagem e ter a quantidade 1", () => {
    // Arrange: prepara a garagem e o carro
    const myGarage = new garage();
    const myCar = new car("Hyundai", "HB20", 2024);

    // Act: adiciona o carro
    myGarage.addCar(myCar);

    // Assert: verifica se tem 1 carro cadastrado
    expect(myGarage.getCarCount()).toBe(1);
  });

  // Teste 6 — verificar stored após adicionar
  test("6. Deve alterar stored para true ao adicionar o carro à garagem", () => {
    // Arrange: cria garagem e carro
    const myGarage = new garage();
    const myCar = new car("Volkswagen", "Polo", 2025);

    // Act: adiciona à garagem
    myGarage.addCar(myCar);

    // Assert: o método addCar tem q marcar o carro como stored = true
    expect(myCar.isStored()).toBe(true);
  });

  // Teste 7 — adicionar vários carros
  test("7. Deve adicionar três carros e retornar a quantidade 3", () => {
    // Arrange: instancia a garagem e 3 carros
    const myGarage = new garage();
    const car1 = new car("Fiat", "Argo", 2023);
    const car2 = new car("Renault", "Kwid", 2024);
    const car3 = new car("Nissan", "Kicks", 2025);

    // Act: adiciona os 3 carros
    myGarage.addCar(car1);
    myGarage.addCar(car2);
    myGarage.addCar(car3);

    // Assert: confirma a contagem de 3 carros
    expect(myGarage.getCarCount()).toBe(3);
  });

  // Teste 8 — remover um carro
  test("8. Deve remover um carro e deixar a garagem vazia", () => {
    // Arrange: garagem com 1 carro
    const myGarage = new garage();
    const myCar = new car("Jeep", "Compass", 2024);
    myGarage.addCar(myCar);

    // Act: remove o carro
    myGarage.removeCar(myCar);

    // Assert: garagem deve ficar com 0 carros
    expect(myGarage.getCarCount()).toBe(0);
  });

  // Teste 9 — verificar stored após remover
  test("9. Deve alterar stored para false ao remover o carro da garagem", () => {
    // Arrange: adiciona um carro na garagem (stored fica true)
    const myGarage = new garage();
    const myCar = new car("BYD", "Dolphin", 2025);
    myGarage.addCar(myCar);

    // Act: remove o carro
    myGarage.removeCar(myCar);

    // Assert: o status de stored deve voltar a ser false
    expect(myCar.isStored()).toBe(false);
  });

  // Teste 10 — procurar um carro existente
  test("10. Deve encontrar um carro existente pelo modelo com findCarByModel()", () => {
    // Arrange: Cadastra dois carros na garagem
    const myGarage = new garage();
    const car1 = new car("BMW", "320i", 2024);
    const car2 = new car("Audi", "A4", 2023);
    myGarage.addCar(car1);
    myGarage.addCar(car2);

    // Act: procura o modelo "320i"
    const foundCar = myGarage.findCarByModel("320i");

    // Assert: o retorno deve ser exatamente o objeto do car1
    expect(foundCar).toBe(car1);
  });

  // Teste 11 — Procurar um carro inexistente
  test("11. Deve retornar undefined ao procurar por um modelo inexistente", () => {
    // Arrange: Garagem com um carro
    const myGarage = new garage();
    myGarage.addCar(new car("Volvo", "XC60", 2024));

    // Act: busca por um modelo não cadastrado
    const foundCar = myGarage.findCarByModel("Mustang");

    // Assert: O resultado deve ser undefined
    expect(foundCar).toBeUndefined();
  });

  // Teste 12 — não permitir carros duplicados
  test("12. Deve lançar um erro ao tentar adicionar dois carros com a mesma marca, modelo e ano", () => {
    // Arrange: garagem e dois carros idênticos
    const myGarage = new garage();
    const car1 = new car("Toyota", "Corolla", 2025);
    const car2 = new car("Toyota", "Corolla", 2025);

    myGarage.addCar(car1);

    // Act & Assert: verifica se a tentativa de adicionar o car2 lança uma exceção
    expect(() => {
      myGarage.addCar(car2);
    }).toThrow();
  });

  // Teste 13 — verificar a marca do carro encontrado
  test("13. Deve encontrar o carro pelo modelo e verificar se a marca está correta", () => {
    // Arrange
    const myGarage = new garage();
    myGarage.addCar(new car("Porsche", "911", 2025));

    // Act
    const foundCar = myGarage.findCarByModel("911");

    // Assert: garante que o objeto foi encontrado e confirma a marca
    expect(foundCar).toBeDefined();
    expect(foundCar?.getBrand()).toBe("Porsche");
  });

  // Teste 14 — verificar o ano do carro encontrado
  test("14. Deve encontrar o carro pelo modelo e verificar se o ano está correto", () => {
    // Arrange
    const myGarage = new garage();
    myGarage.addCar(new car("Peugeot", "208", 2022));

    // Act
    const foundCar = myGarage.findCarByModel("208");

    // Assert: garante que o objeto foi encontrado e confirma o ano
    expect(foundCar).toBeDefined();
    expect(foundCar?.getYear()).toBe(2022);
  });

  // Teste 15 — remover um carro entre vários
  test("15. Deve remover apenas um carro entre três e manter os outros dois na garagem", () => {
    // Arrange: Garagem com 3 carros
    const myGarage = new garage();
    const car1 = new car("Fiat", "Uno", 2010);
    const car2 = new car("Volkswagen", "Gol", 2015);
    const car3 = new car("Chevrolet", "Corsa", 2012);

    myGarage.addCar(car1);
    myGarage.addCar(car2);
    myGarage.addCar(car3);

    // Act: Remove apenas o car2
    myGarage.removeCar(car2);

    // Assert: a quantidade total deve ser 2 e o car2 não deve mais ser encontrado
    expect(myGarage.getCarCount()).toBe(2);
    expect(myGarage.findCarByModel("Gol")).toBeUndefined();
    expect(myGarage.findCarByModel("Uno")).toBeDefined();
    expect(myGarage.findCarByModel("Corsa")).toBeDefined();
  });

  // Teste 16 — verificar os estados após remover um carro
  test("16. Deve atualizar stored para false no carro removido e manter true nos restantes", () => {
    // Arrange: garagem com 3 carros adicionados (todos com stored = true)
    const myGarage = new garage();
    const car1 = new car("Honda", "HR-V", 2023);
    const car2 = new car("Toyota", "RAV4", 2024);
    const car3 = new car("Hyundai", "Creta", 2025);

    myGarage.addCar(car1);
    myGarage.addCar(car2);
    myGarage.addCar(car3);

    // Act: Remove apenas o car1
    myGarage.removeCar(car1);

    // Assert: O car1 deve estar com stored = false; car2 e car3 devem continuar com true
    expect(car1.isStored()).toBe(false);
    expect(car2.isStored()).toBe(true);
    expect(car3.isStored()).toBe(true);
  });
});