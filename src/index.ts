import { User } from './models/User';

const user = User.buildUser({ id: 3, name: 'never name', age: 324 });

user.on('change', () => {
  console.log(user);
});

user.fetch();
