import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  description: DS.attr('string'),
  external_id: DS.attr('string'),
  resource_spec_id: DS.belongsTo('data-line-jhf12-resource-spec', { inverse: null, async: false }),
  cfs_id: DS.belongsTo('data-line-jhf12-service', { inverse: null, async: false }),
  parent_service_id: DS.belongsTo('data-line-jhf12-service', { inverse: null, async: false }),
  resource_shared_id: DS.belongsTo('data-line-jhf12-resource-shared', { inverse: null, async: false }),
  resource_spec_id: DS.belongsTo('data-line-jhf12-resource-spec', { inverse: null, async: false }),
  customer_id: DS.belongsTo('data-line-jhf12-customer', { inverse: null, async: false }),
  resource_shared_id: DS.belongsTo('data-line-jhf12-resource-shared', { inverse: null, async: false }),
  contragent_id: DS.belongsTo('data-line-jhf12-contragent', { inverse: null, async: false }),
  cfs_id: DS.belongsTo('data-line-jhf12-service', { inverse: null, async: false }),
  parent_id: DS.belongsTo('data-line-jhf12-resource', { inverse: null, async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.data-line-jhf12-resource.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  description: {
    descriptionKey: 'models.data-line-jhf12-resource.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  external_id: {
    descriptionKey: 'models.data-line-jhf12-resource.validations.external_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  resource_spec_id: {
    descriptionKey: 'models.data-line-jhf12-resource.validations.resource_spec_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  cfs_id: {
    descriptionKey: 'models.data-line-jhf12-resource.validations.cfs_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  parent_service_id: {
    descriptionKey: 'models.data-line-jhf12-resource.validations.parent_service_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  resource_shared_id: {
    descriptionKey: 'models.data-line-jhf12-resource.validations.resource_shared_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  customer_id: {
    descriptionKey: 'models.data-line-jhf12-resource.validations.customer_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  contragent_id: {
    descriptionKey: 'models.data-line-jhf12-resource.validations.contragent_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  parent_id: {
    descriptionKey: 'models.data-line-jhf12-resource.validations.parent_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('resourceE', 'data-line-jhf12-resource', {
    name: attr('Name', { index: 0 }),
    description: attr('Description', { index: 1 }),
    external_id: attr('External_id', { index: 2 }),
    resource_spec_id: belongsTo('data-line-jhf12-resource-spec', 'Resource_spec_id', {
      enum: attr('Enum', { index: 4 })
    }, { index: 3 }),
    cfs_id: belongsTo('data-line-jhf12-service', 'Cfs_id', {
      name: attr('Name', { index: 6 })
    }, { index: 5 }),
    parent_service_id: belongsTo('data-line-jhf12-service', 'Parent_service_id', {
      name: attr('Name', { index: 8 })
    }, { index: 7 }),
    resource_shared_id: belongsTo('data-line-jhf12-resource-shared', 'Resource_shared_id', {
      external_id: attr('External_id', { index: 10 })
    }, { index: 9 }),
    customer_id: belongsTo('data-line-jhf12-customer', 'Customer_id', {
      customer: attr('Customer', { index: 14 })
    }, { index: 13 }),
    contragent_id: belongsTo('data-line-jhf12-contragent', 'Contragent_id', {
      contragent: attr('Contragent', { index: 18 })
    }, { index: 17 }),
    parent_id: belongsTo('data-line-jhf12-resource', 'Parent_id', {
      name: attr('Name', { index: 22 })
    }, { index: 21 })
  });

  modelClass.defineProjection('resourceL', 'data-line-jhf12-resource', {
    name: attr('Name', { index: 0 }),
    description: attr('Description', { index: 1 }),
    external_id: attr('External_id', { index: 2 }),
    resource_spec_id: belongsTo('data-line-jhf12-resource-spec', 'Enum', {

    }, { index: 3, hidden: true }),
    cfs_id: belongsTo('data-line-jhf12-service', 'Name', {

    }, { index: 4, hidden: true }),
    parent_service_id: belongsTo('data-line-jhf12-service', 'Name', {

    }, { index: 5, hidden: true }),
    resource_shared_id: belongsTo('data-line-jhf12-resource-shared', 'External_id', {

    }, { index: 6, hidden: true }),
    customer_id: belongsTo('data-line-jhf12-customer', 'Customer', {

    }, { index: 8, hidden: true }),
    contragent_id: belongsTo('data-line-jhf12-contragent', 'Contragent', {

    }, { index: 10, hidden: true }),
    parent_id: belongsTo('data-line-jhf12-resource', 'Name', {

    }, { index: 12, hidden: true })
  });
};
