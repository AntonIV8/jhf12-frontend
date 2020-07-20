import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  external_id: DS.attr('string'),
  existent: DS.attr('boolean'),
  name: DS.attr('string'),
  description: DS.attr('string'),
  category: DS.attr('string'),
  type: DS.attr('string'),
  dt_created: DS.attr('date'),
  dt_modified: DS.attr('date'),
  customer_id: DS.belongsTo('data-line-jhf12-customer', { inverse: null, async: false })
});

export let ValidationRules = {
  external_id: {
    descriptionKey: 'models.data-line-jhf12-resource-shared.validations.external_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  existent: {
    descriptionKey: 'models.data-line-jhf12-resource-shared.validations.existent.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  name: {
    descriptionKey: 'models.data-line-jhf12-resource-shared.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  description: {
    descriptionKey: 'models.data-line-jhf12-resource-shared.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  category: {
    descriptionKey: 'models.data-line-jhf12-resource-shared.validations.category.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  type: {
    descriptionKey: 'models.data-line-jhf12-resource-shared.validations.type.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  dt_created: {
    descriptionKey: 'models.data-line-jhf12-resource-shared.validations.dt_created.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  dt_modified: {
    descriptionKey: 'models.data-line-jhf12-resource-shared.validations.dt_modified.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  customer_id: {
    descriptionKey: 'models.data-line-jhf12-resource-shared.validations.customer_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('resource_sharedE', 'data-line-jhf12-resource-shared', {
    external_id: attr('External_id', { index: 0 }),
    existent: attr('Existent', { index: 1 }),
    name: attr('Name', { index: 2 }),
    description: attr('Description', { index: 3 }),
    category: attr('Category', { index: 4 }),
    type: attr('Type', { index: 5 }),
    dt_created: attr('Dt_created', { index: 6 }),
    dt_modified: attr('Dt_modified', { index: 7 }),
    customer_id: belongsTo('data-line-jhf12-customer', 'Customer_id', {
      customer: attr('Customer', { index: 9 })
    }, { index: 8 })
  });

  modelClass.defineProjection('resource_sharedL', 'data-line-jhf12-resource-shared', {
    external_id: attr('External_id', { index: 0 }),
    existent: attr('Existent', { index: 1 }),
    name: attr('Name', { index: 2 }),
    description: attr('Description', { index: 3 }),
    category: attr('Category', { index: 4 }),
    type: attr('Type', { index: 5 }),
    dt_created: attr('Dt_created', { index: 6 }),
    dt_modified: attr('Dt_modified', { index: 7 }),
    customer_id: belongsTo('data-line-jhf12-customer', 'Customer', {
      customer: attr('Customer', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
