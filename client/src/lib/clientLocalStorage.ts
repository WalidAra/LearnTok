const clientLocalStorage = {
  getItem: (key: string) => {
    return localStorage.getItem(key);
  },

  setItem: (key: string, value: string) => {
    localStorage.setItem(key, value);
  },

  removeItem: (key: string) => {
    localStorage.removeItem(key);
  },

  clear: () => {
    localStorage.clear();
  },
};

export default clientLocalStorage;
