import axios from "axios"

test('Não deve aceitar um pedido com cpf inválido', async () =>{
  const input = {
    cpf:"406.302.170-27"
  }
  const response = axios.post('http://localhost:3000', input);
  const output = (await response).data;
  expect(output.message).toBe("Invalid cpf");

})