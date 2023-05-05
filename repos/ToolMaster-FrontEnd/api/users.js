import client from './client';

const endpoint = '/users';

const getAllUsers = () => {
  return client.get(endpoint);
};

const updatePermission = (user) => {
  const updatedUser = {
    name: user.name,
    email: user.email,
    phone: user.phone,
    password: user.password,
  };

  if (user.isAdmin) {
    updatedUser.isAdmin = false;
  } else {
    updatedUser.isAdmin = true;
  }

  return client.put(endpoint + '/' + user._id, updatedUser);
};

export default {
  getAllUsers,
  updatePermission,
};
