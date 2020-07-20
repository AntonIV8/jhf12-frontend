import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  service_id: DS.attr('number'),
  cfs_id: DS.attr('number'),
  parent_id: DS.attr('number'),
  contragent_id: DS.attr('number'),
  customer_id: DS.attr('number'),
  service_spec_id: DS.attr('number'),
  state: DS.attr('string'),
  name: DS.attr('string'),
  description: DS.attr('string'),
  dt_created: DS.attr('date'),
  dt_started: DS.attr('date'),
  dt_ended: DS.attr('date'),
  start_time: DS.attr('date'),
  end_time: DS.attr('date')
});

export let ValidationRules = {
  service_id: {
    descriptionKey: 'models.data-line-jhf12-service-log.validations.service_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  cfs_id: {
    descriptionKey: 'models.data-line-jhf12-service-log.validations.cfs_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  parent_id: {
    descriptionKey: 'models.data-line-jhf12-service-log.validations.parent_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  contragent_id: {
    descriptionKey: 'models.data-line-jhf12-service-log.validations.contragent_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  customer_id: {
    descriptionKey: 'models.data-line-jhf12-service-log.validations.customer_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  service_spec_id: {
    descriptionKey: 'models.data-line-jhf12-service-log.validations.service_spec_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  state: {
    descriptionKey: 'models.data-line-jhf12-service-log.validations.state.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name: {
    descriptionKey: 'models.data-line-jhf12-service-log.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  description: {
    descriptionKey: 'models.data-line-jhf12-service-log.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  dt_created: {
    descriptionKey: 'models.data-line-jhf12-service-log.validations.dt_created.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  dt_started: {
    descriptionKey: 'models.data-line-jhf12-service-log.validations.dt_started.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  dt_ended: {
    descriptionKey: 'models.data-line-jhf12-service-log.validations.dt_ended.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  start_time: {
    descriptionKey: 'models.data-line-jhf12-service-log.validations.start_time.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  end_time: {
    descriptionKey: 'models.data-line-jhf12-service-log.validations.end_time.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('service_logE', 'data-line-jhf12-service-log', {
    service_id: attr('Service_id', { index: 0 }),
    cfs_id: attr('Cfs_id', { index: 1 }),
    parent_id: attr('Parent_id', { index: 2 }),
    contragent_id: attr('Contragent_id', { index: 3 }),
    customer_id: attr('Customer_id', { index: 4 }),
    service_spec_id: attr('Service_spec_id', { index: 5 }),
    state: attr('State', { index: 6 }),
    name: attr('Name', { index: 7 }),
    description: attr('Description', { index: 8 }),
    dt_created: attr('Dt_created', { index: 9 }),
    dt_started: attr('Dt_started', { index: 10 }),
    dt_ended: attr('Dt_ended', { index: 11 }),
    start_time: attr('Start_time', { index: 12 }),
    end_time: attr('End_time', { index: 13 })
  });

  modelClass.defineProjection('service_logL', 'data-line-jhf12-service-log', {
    service_id: attr('Service_id', { index: 0 }),
    cfs_id: attr('Cfs_id', { index: 1 }),
    parent_id: attr('Parent_id', { index: 2 }),
    contragent_id: attr('Contragent_id', { index: 3 }),
    customer_id: attr('Customer_id', { index: 4 }),
    service_spec_id: attr('Service_spec_id', { index: 5 }),
    state: attr('State', { index: 6 }),
    name: attr('Name', { index: 7 }),
    description: attr('Description', { index: 8 }),
    dt_created: attr('Dt_created', { index: 9 }),
    dt_started: attr('Dt_started', { index: 10 }),
    dt_ended: attr('Dt_ended', { index: 11 }),
    start_time: attr('Start_time', { index: 12 }),
    end_time: attr('End_time', { index: 13 })
  });
};
