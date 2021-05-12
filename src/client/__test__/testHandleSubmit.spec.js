// to solve ReferenceError: regeneratorRuntime is not defined
import 'babel-polyfill'
import { handleSubmit } from "../../client/js/formHandler"
describe('Test, the function "handleSubmit()" should exist' , () => {
test("handleSubmit function exists", async () => {
    expect(handleSubmit).toBeDefined();
});
});
