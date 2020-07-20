import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  resource_id: DS.attr('number'),
  parent_id: DS.attr('number'),
  cfs_id: DS.attr('number'),
  parent_service_id: DS.attr('number'),
  resource_shared_id: DS.attr('number'),
  contragent_id: DS.attr('number'),
  customer_id: DS.attr('number'),
  resource_spec_id: DS.attr('number'),
  name: DS.attr('string'),
  description: DS.attr('string'),
  external_id: DS.attr('string'),
  start_time: DS.attr('date'),
  end_time: DS.attr('date')
});

export let ValidationRules = {
  resource_id: {
    descriptionKey: 'models.data-line-jhf12-resource-log.validations.resource_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  parent_id: {
    descriptionKey: 'models.data-line-jhf12-resource-log.validations.parent_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  cfs_id: {
    descriptionKey: 'models.data-line-jhf12-resource-log.validations.cfs_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  parent_service_id: {
    descriptionKey: 'models.data-line-jhf12-resource-log.validations.parent_service_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  resource_shared_id: {
    descriptionKey: 'models.data-line-jhf12-resource-log.validations.resource_shared_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  contragent_id: {
    descriptionKey: 'models.data-line-jhf12-resource-log.validations.contragent_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  customer_id: {
    descriptionKey: 'models.data-line-jhf12-resource-log.validations.customer_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  resource_spec_id: {
    descriptionKey: 'models.data-line-jhf12-resource-log.validations.resource_spec_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  name: {
    descriptionKey: 'models.data-line-jhf12-resource-log.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  description: {
    descriptionKey: 'models.data-line-jhf12-resource-log.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  external_id: {
    descriptionKey: 'models.data-line-jhf12-resource-log.validations.external_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  start_time: {
    descriptionKey: 'models.data-line-jhf12-resource-log.validations.start_time.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  end_time: {
    descriptionKey: 'models.data-line-jhf12-resource-log.validations.end_time.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('resource_logE', 'data-line-jhf12-resource-log', {
    resource_id: attr('Resource_id', { index: 0 }),
    parent_id: attr('Parent_id', { index: 1 }),
    cfs_id: attr('Cfs_id', { index: 2 }),
    parent_service_id: attr('Parent_service_id', { index: 3 }),
    resource_shared_id: attr('Resource_shared_id', { index: 4 }),
    contragent_id: attr('Contragent_id', { index: 5 }),
    customer_id: attr('Customer_id', { index: 6 }),
    resource_spec_id: attr('Resource_spec_id', { index: 7 }),
    name: attr('Name', { index: 8 }),
    description: attr('Description', { index: 9 }),
    external_id: attr('External_id', { index: 10 }),
    start_time: attr('Start_time', { index: 11 }),
    end_time: attr('End_time', { index: 12 })
  });

  modelClass.defineProjection('resource_logL', 'data-line-jhf12-resource-log', {
    resource_id: attr('Resource_id', { index: 0 }),
    parent_id: attr('Parent_id', { index: 1 }),
    cfs_id: attr('Cfs_id', { index: 2 }),
    parent_service_id: attr('Parent_service_id', { index: 3 }),
    resource_shared_id: attr('Resource_shared_id', { index: 4 }),
    contragent_id: attr('Contragent_id', { index: 5 }),
    customer_id: attr('Customer_id', { index: 6 }),
    resource_spec_id: attr('Resource_spec_id', { index: 7 }),
    name: attr('Name', { index: 8 }),
    description: attr('Description', { index: 9 }),
    external_id: attr('External_id', { index: 10 }),
    start_time: attr('Start_time', { index: 11 }),
    end_time: attr('End_time', { index: 12 })
  });
};
