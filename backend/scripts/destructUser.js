const destructUser = (obj) => {
  const {
    password,
    id,
    provider_id,
    lastLoginAt,
    email,
    ...user
  } = obj;
  return user;
};

module.exports = destructUser;
