import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  code: DS.attr('string'),
  svc: DS.attr('string'),
  svc_type: DS.attr('string'),
  data_version: DS.attr('string'),
  dt_sync: DS.attr('date'),
  descr: DS.attr('string'),
  vat: DS.attr('string'),
  is_actual: DS.attr('boolean'),
  dt_creation: DS.attr('date'),
  parent_key: DS.attr('guid'),
  measure: DS.attr('string'),
  measure_key: DS.attr('guid'),
  status: DS.attr('string'),
  formula_key: DS.attr('guid'),
  billing_object_type_guid: DS.attr('guid')
});

export let ValidationRules = {
  code: {
    descriptionKey: 'models.data-line-jhf12-catalog.validations.code.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  svc: {
    descriptionKey: 'models.data-line-jhf12-catalog.validations.svc.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  svc_type: {
    descriptionKey: 'models.data-line-jhf12-catalog.validations.svc_type.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  data_version: {
    descriptionKey: 'models.data-line-jhf12-catalog.validations.data_version.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  dt_sync: {
    descriptionKey: 'models.data-line-jhf12-catalog.validations.dt_sync.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  descr: {
    descriptionKey: 'models.data-line-jhf12-catalog.validations.descr.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  vat: {
    descriptionKey: 'models.data-line-jhf12-catalog.validations.vat.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  is_actual: {
    descriptionKey: 'models.data-line-jhf12-catalog.validations.is_actual.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  dt_creation: {
    descriptionKey: 'models.data-line-jhf12-catalog.validations.dt_creation.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  parent_key: {
    descriptionKey: 'models.data-line-jhf12-catalog.validations.parent_key.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  measure: {
    descriptionKey: 'models.data-line-jhf12-catalog.validations.measure.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  measure_key: {
    descriptionKey: 'models.data-line-jhf12-catalog.validations.measure_key.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  status: {
    descriptionKey: 'models.data-line-jhf12-catalog.validations.status.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  formula_key: {
    descriptionKey: 'models.data-line-jhf12-catalog.validations.formula_key.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  billing_object_type_guid: {
    descriptionKey: 'models.data-line-jhf12-catalog.validations.billing_object_type_guid.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('catalogE', 'data-line-jhf12-catalog', {
    code: attr('Code', { index: 0 }),
    svc: attr('Svc', { index: 1 }),
    svc_type: attr('Svc_type', { index: 2 }),
    data_version: attr('Data_version', { index: 3 }),
    dt_sync: attr('Dt_sync', { index: 4 }),
    descr: attr('Descr', { index: 5 }),
    vat: attr('Vat', { index: 6 }),
    is_actual: attr('Is_actual', { index: 7 }),
    dt_creation: attr('Dt_creation', { index: 8 }),
    parent_key: attr('Parent_key', { index: 9 }),
    measure: attr('Measure', { index: 10 }),
    measure_key: attr('Measure_key', { index: 11 }),
    status: attr('Status', { index: 12 }),
    formula_key: attr('Formula_key', { index: 13 }),
    billing_object_type_guid: attr('Billing_object_type_guid', { index: 14 })
  });

  modelClass.defineProjection('catalogL', 'data-line-jhf12-catalog', {
    code: attr('Code', { index: 0 }),
    svc: attr('Svc', { index: 1 }),
    svc_type: attr('Svc_type', { index: 2 }),
    data_version: attr('Data_version', { index: 3 }),
    dt_sync: attr('Dt_sync', { index: 4 }),
    descr: attr('Descr', { index: 5 }),
    vat: attr('Vat', { index: 6 }),
    is_actual: attr('Is_actual', { index: 7 }),
    dt_creation: attr('Dt_creation', { index: 8 }),
    parent_key: attr('Parent_key', { index: 9 }),
    measure: attr('Measure', { index: 10 }),
    measure_key: attr('Measure_key', { index: 11 }),
    status: attr('Status', { index: 12 }),
    formula_key: attr('Formula_key', { index: 13 }),
    billing_object_type_guid: attr('Billing_object_type_guid', { index: 14 })
  });
};
