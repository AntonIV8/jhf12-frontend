export default {
  projections: {
    customer_aclE: {
      a_create: {
        __caption__: 'A_create'
      },
      a_read: {
        __caption__: 'A_read'
      },
      a_update: {
        __caption__: 'A_update'
      },
      a_delete: {
        __caption__: 'A_delete'
      },
      customer_id: {
        __caption__: 'Customer_id',
        customer: {
          __caption__: 'Customer'
        }
      },
      group_id: {
        __caption__: 'Group_id',
        name: {
          __caption__: 'Name'
        }
      }
    },
    customer_aclL: {
      a_create: {
        __caption__: 'A_create'
      },
      a_read: {
        __caption__: 'A_read'
      },
      a_update: {
        __caption__: 'A_update'
      },
      a_delete: {
        __caption__: 'A_delete'
      },
      customer_id: {
        __caption__: 'Customer',
        customer: {
          __caption__: 'Customer'
        }
      },
      group_id: {
        __caption__: 'Name',
        name: {
          __caption__: 'Name'
        }
      }
    }
  },
  validations: {
    a_create: {
      __caption__: 'A_create'
    },
    a_read: {
      __caption__: 'A_read'
    },
    a_update: {
      __caption__: 'A_update'
    },
    a_delete: {
      __caption__: 'A_delete'
    },
    customer_id: {
      __caption__: 'Customer_id'
    },
    group_id: {
      __caption__: 'Group_id'
    }
  }
};
