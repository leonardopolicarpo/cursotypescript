// structural typing
// tipagem estruturada

/*
  Isso significa que para o TS a identidade do tipo não importa muito,
  somentes as restrições que estão naquele tipo
*/

type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'Leo', password: '123456' };
// poderia ter outras propriedades no objeto, já que o que importa
// é conter os dados iguais para comparação nesse caso
const sentUser = { username: 'Leo', password: '123456', permissions: '' };
const loggedIn = verifyUser(bdUser, sentUser);

console.log(loggedIn);

/*
  Ou seja, isso é uma structural typing, a funcção nesse caso precisa de
  um tipo User que contenha username e password, mas o User não precisa
  ser especificamente desse tipo, desde que cumpra as regras estabelecidas
  no caso, as propriedades
*/
