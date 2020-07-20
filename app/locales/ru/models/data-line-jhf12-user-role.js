export default {
  projections: {
    user_roleE: {
      role_id: {
        __caption__: 'Role_id',
        name: {
          __caption__: 'Name'
        }
      },
      user_id: {
        __caption__: 'User_id',
        login: {
          __caption__: 'Login'
        }
      }
    },
    user_roleL: {
      role_id: {
        __caption__: 'Name',
        name: {
          __caption__: 'Name'
        }
      },
      user_id: {
        __caption__: 'Login',
        login: {
          __caption__: 'Login'
        }
      }
    }
  },
  validations: {
    role_id: {
      __caption__: 'Role_id'
    },
    user_id: {
      __caption__: 'User_id'
    }
  }
};
