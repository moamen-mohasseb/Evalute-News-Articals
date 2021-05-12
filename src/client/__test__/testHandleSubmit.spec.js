import 'babel-polyfill'
import { handleSubmit } from "../../client/js/formHandler"
describe('Test handleSubmit definition' , () => {
test("handel submit status", async () => {
    expect(handleSubmit).toBeDefined();
});
});
