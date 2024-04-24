const destructUser = (obj) => {
  const {
    password,
    provider_id,
    lastLoginAt,
    email,
    ...user
  } = obj;
  return user;
};

module.exports = destructUser;
