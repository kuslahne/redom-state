let id = Date.now();

export default () => {
  return {
    route: (state, path) => {
      const [ section ] = path;

      return {
        ...state,
        section
      };
    },
    section: (state, section) => {
      const hash = window.location.hash.slice(1).split('/');

      hash[0] = section;

      window.location.hash = hash.join('/');
    },
    'toggle-debug': (state) => {
      const debug = !state.debug;

      return {
        ...state,
        debug
      };
    },
    'toggle-logo': (state) => {
      const logo = !state.logo;

      return {
        ...state,
        logo
      };
    },
    'add-text': (state, { type, text }) => {
      const { editable } = state;

      return {
        ...state,
        editable: editable.concat(
          {
            id: id++,
            type,
            text
          }
        )
      };
    },
    'remove-text': (state, id) => {
      const { editable } = state;

      return {
        ...state,
        editable: editable.filter(item => {
          return item.id !== id;
        })
      };
    }
  };
};
