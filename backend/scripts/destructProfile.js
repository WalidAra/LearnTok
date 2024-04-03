const destructProfile = (obj) => {
  const { password, id, lastLoginAt, ...user } = obj;
  return user;
};

module.exports = destructProfile;
