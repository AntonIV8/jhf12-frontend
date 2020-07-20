import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  action: DS.attr('string'),
  dt_action: DS.attr('date'),
  resource_spec_id: DS.belongsTo('data-line-jhf12-resource-spec', { inverse: null, async: false }),
  user_id: DS.belongsTo('data-line-jhf12-usr', { inverse: null, async: false })
});

export let ValidationRules = {
  action: {
    descriptionKey: 'models.data-line-jhf12-user-resource-spec.validations.action.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  dt_action: {
    descriptionKey: 'models.data-line-jhf12-user-resource-spec.validations.dt_action.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  resource_spec_id: {
    descriptionKey: 'models.data-line-jhf12-user-resource-spec.validations.resource_spec_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  user_id: {
    descriptionKey: 'models.data-line-jhf12-user-resource-spec.validations.user_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('user_resource_specE', 'data-line-jhf12-user-resource-spec', {
    action: attr('Action', { index: 0 }),
    dt_action: attr('Dt_action', { index: 1 }),
    resource_spec_id: belongsTo('data-line-jhf12-resource-spec', 'Resource_spec_id', {
      enum: attr('Enum', { index: 3 })
    }, { index: 2 }),
    user_id: belongsTo('data-line-jhf12-usr', 'User_id', {
      login: attr('Login', { index: 5 })
    }, { index: 4 })
  });

  modelClass.defineProjection('user_resource_specL', 'data-line-jhf12-user-resource-spec', {
    action: attr('Action', { index: 0 }),
    dt_action: attr('Dt_action', { index: 1 }),
    resource_spec_id: belongsTo('data-line-jhf12-resource-spec', 'Enum', {
      enum: attr('Enum', { index: 2 })
    }, { index: -1, hidden: true }),
    user_id: belongsTo('data-line-jhf12-usr', 'Login', {
      login: attr('Login', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
