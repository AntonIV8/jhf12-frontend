import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  action: DS.attr('string'),
  dt_action: DS.attr('date'),
  user_id: DS.belongsTo('data-line-jhf12-usr', { inverse: null, async: false }),
  service_order_id: DS.belongsTo('data-line-jhf12-service-order', { inverse: null, async: false })
});

export let ValidationRules = {
  action: {
    descriptionKey: 'models.data-line-jhf12-user-service-order.validations.action.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  dt_action: {
    descriptionKey: 'models.data-line-jhf12-user-service-order.validations.dt_action.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  user_id: {
    descriptionKey: 'models.data-line-jhf12-user-service-order.validations.user_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  service_order_id: {
    descriptionKey: 'models.data-line-jhf12-user-service-order.validations.service_order_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('user_service_orderE', 'data-line-jhf12-user-service-order', {
    action: attr('Action', { index: 0 }),
    dt_action: attr('Dt_action', { index: 1 }),
    user_id: belongsTo('data-line-jhf12-usr', 'User_id', {
      login: attr('Login', { index: 3 })
    }, { index: 2 }),
    service_order_id: belongsTo('data-line-jhf12-service-order', 'Service_order_id', {
      description: attr('Description', { index: 5 })
    }, { index: 4 })
  });

  modelClass.defineProjection('user_service_orderL', 'data-line-jhf12-user-service-order', {
    action: attr('Action', { index: 0 }),
    dt_action: attr('Dt_action', { index: 1 }),
    user_id: belongsTo('data-line-jhf12-usr', 'Login', {
      login: attr('Login', { index: 2 })
    }, { index: -1, hidden: true }),
    service_order_id: belongsTo('data-line-jhf12-service-order', 'Description', {
      description: attr('Description', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
