import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  contragent: DS.attr('string'),
  descr: DS.attr('string'),
  official_name: DS.attr('string'),
  creator_id: DS.attr('number'),
  modifier_id: DS.attr('number'),
  dt_created: DS.attr('date'),
  dt_modified: DS.attr('date'),
  iNN: DS.attr('string'),
  guid1c: DS.attr('guid'),
  archive: DS.attr('boolean'),
  dt_archive: DS.attr('date'),
  archiver_id: DS.attr('number'),
  archive_reason_id: DS.attr('number'),
  customer_id: DS.belongsTo('data-line-jhf12-customer', { inverse: null, async: false })
});

export let ValidationRules = {
  contragent: {
    descriptionKey: 'models.data-line-jhf12-contragent.validations.contragent.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  descr: {
    descriptionKey: 'models.data-line-jhf12-contragent.validations.descr.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  official_name: {
    descriptionKey: 'models.data-line-jhf12-contragent.validations.official_name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  creator_id: {
    descriptionKey: 'models.data-line-jhf12-contragent.validations.creator_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  modifier_id: {
    descriptionKey: 'models.data-line-jhf12-contragent.validations.modifier_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  dt_created: {
    descriptionKey: 'models.data-line-jhf12-contragent.validations.dt_created.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  dt_modified: {
    descriptionKey: 'models.data-line-jhf12-contragent.validations.dt_modified.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  iNN: {
    descriptionKey: 'models.data-line-jhf12-contragent.validations.iNN.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  guid1c: {
    descriptionKey: 'models.data-line-jhf12-contragent.validations.guid1c.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  archive: {
    descriptionKey: 'models.data-line-jhf12-contragent.validations.archive.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  dt_archive: {
    descriptionKey: 'models.data-line-jhf12-contragent.validations.dt_archive.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  archiver_id: {
    descriptionKey: 'models.data-line-jhf12-contragent.validations.archiver_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  archive_reason_id: {
    descriptionKey: 'models.data-line-jhf12-contragent.validations.archive_reason_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  customer_id: {
    descriptionKey: 'models.data-line-jhf12-contragent.validations.customer_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('contragentE', 'data-line-jhf12-contragent', {
    contragent: attr('Contragent', { index: 0 }),
    descr: attr('Descr', { index: 1 }),
    official_name: attr('Official_name', { index: 2 }),
    creator_id: attr('Creator_id', { index: 3 }),
    modifier_id: attr('Modifier_id', { index: 4 }),
    dt_created: attr('Dt_created', { index: 5 }),
    dt_modified: attr('Dt_modified', { index: 6 }),
    iNN: attr('INN', { index: 7 }),
    guid1c: attr('Guid1c', { index: 8 }),
    archive: attr('Archive', { index: 9 }),
    dt_archive: attr('Dt_archive', { index: 10 }),
    archiver_id: attr('Archiver_id', { index: 11 }),
    archive_reason_id: attr('Archive_reason_id', { index: 12 }),
    customer_id: belongsTo('data-line-jhf12-customer', 'Customer_id', {
      customer: attr('Customer', { index: 14 })
    }, { index: 13 })
  });

  modelClass.defineProjection('contragentL', 'data-line-jhf12-contragent', {
    contragent: attr('Contragent', { index: 0 }),
    descr: attr('Descr', { index: 1 }),
    official_name: attr('Official_name', { index: 2 }),
    creator_id: attr('Creator_id', { index: 3 }),
    modifier_id: attr('Modifier_id', { index: 4 }),
    dt_created: attr('Dt_created', { index: 5 }),
    dt_modified: attr('Dt_modified', { index: 6 }),
    iNN: attr('INN', { index: 7 }),
    guid1c: attr('Guid1c', { index: 8 }),
    archive: attr('Archive', { index: 9 }),
    dt_archive: attr('Dt_archive', { index: 10 }),
    archiver_id: attr('Archiver_id', { index: 11 }),
    archive_reason_id: attr('Archive_reason_id', { index: 12 }),
    customer_id: belongsTo('data-line-jhf12-customer', 'Customer', {
      customer: attr('Customer', { index: 13 })
    }, { index: -1, hidden: true })
  });
};
