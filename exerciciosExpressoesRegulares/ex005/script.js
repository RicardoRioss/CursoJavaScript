const validarUsuario =/^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarUsuario.test("ricardo_123"));
console.log(validarUsuario.test("Ricardo_123"));