import Product from "../../../domain/product/entity/product";
import FindProductUseCase from "./find.product.usecase";

const product = new Product("123", "product 1", 100)

const MockRepository = () => {
    return {
        create: jest.fn(),
        find: jest.fn().mockReturnValue(Promise.resolve(product)),
        update: jest.fn(),
        findAll: jest.fn(),
    };
};


describe("Unit Test find product use case", () => {
    it("should find a product", async () => {
        const productRepository = MockRepository();
    const usecase = new FindProductUseCase(productRepository);

    const input = {
      id: "123",
    };

    const output = {
      id: "123",
      name: "product 1",
      price: 100
    };

    const result = await usecase.execute(input);

    expect(result).toEqual(output);
    })
})