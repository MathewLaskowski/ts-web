import { User } from './models/User';

const user = new User({ id: 3, name: 'never name', age: 324 });

user.on('save', () => {
  console.log(user);
});

user.save();
