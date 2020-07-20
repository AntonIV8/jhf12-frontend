import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  customer: DS.attr('string'),
  descr: DS.attr('string'),
  service_manager_id: DS.attr('number'),
  creator_id: DS.attr('number'),
  modifier_id: DS.attr('number'),
  dt_created: DS.attr('date'),
  dt_modified: DS.attr('date'),
  archive: DS.attr('boolean'),
  dt_archive: DS.attr('date'),
  archiver_id: DS.attr('number'),
  archive_reason_id: DS.attr('number'),
  internal: DS.attr('boolean'),
  telco: DS.attr('boolean'),
  office: DS.attr('boolean'),
  barrier: DS.attr('boolean'),
  pci_dss: DS.attr('boolean'),
  federal_low_152: DS.attr('boolean'),
  account_manager_id: DS.attr('number')
});

export let ValidationRules = {
  customer: {
    descriptionKey: 'models.data-line-jhf12-customer.validations.customer.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  descr: {
    descriptionKey: 'models.data-line-jhf12-customer.validations.descr.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  service_manager_id: {
    descriptionKey: 'models.data-line-jhf12-customer.validations.service_manager_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  creator_id: {
    descriptionKey: 'models.data-line-jhf12-customer.validations.creator_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  modifier_id: {
    descriptionKey: 'models.data-line-jhf12-customer.validations.modifier_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  dt_created: {
    descriptionKey: 'models.data-line-jhf12-customer.validations.dt_created.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  dt_modified: {
    descriptionKey: 'models.data-line-jhf12-customer.validations.dt_modified.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  archive: {
    descriptionKey: 'models.data-line-jhf12-customer.validations.archive.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  dt_archive: {
    descriptionKey: 'models.data-line-jhf12-customer.validations.dt_archive.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  archiver_id: {
    descriptionKey: 'models.data-line-jhf12-customer.validations.archiver_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  archive_reason_id: {
    descriptionKey: 'models.data-line-jhf12-customer.validations.archive_reason_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  internal: {
    descriptionKey: 'models.data-line-jhf12-customer.validations.internal.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  telco: {
    descriptionKey: 'models.data-line-jhf12-customer.validations.telco.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  office: {
    descriptionKey: 'models.data-line-jhf12-customer.validations.office.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  barrier: {
    descriptionKey: 'models.data-line-jhf12-customer.validations.barrier.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  pci_dss: {
    descriptionKey: 'models.data-line-jhf12-customer.validations.pci_dss.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  federal_low_152: {
    descriptionKey: 'models.data-line-jhf12-customer.validations.federal_low_152.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  account_manager_id: {
    descriptionKey: 'models.data-line-jhf12-customer.validations.account_manager_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('customerE', 'data-line-jhf12-customer', {
    customer: attr('Customer', { index: 0 }),
    descr: attr('Descr', { index: 1 }),
    service_manager_id: attr('Service_manager_id', { index: 2 }),
    creator_id: attr('Creator_id', { index: 3 }),
    modifier_id: attr('Modifier_id', { index: 4 }),
    dt_created: attr('Dt_created', { index: 5 }),
    dt_modified: attr('Dt_modified', { index: 6 }),
    archive: attr('Archive', { index: 7 }),
    dt_archive: attr('Dt_archive', { index: 8 }),
    archiver_id: attr('Archiver_id', { index: 9 }),
    archive_reason_id: attr('Archive_reason_id', { index: 10 }),
    internal: attr('Internal', { index: 11 }),
    telco: attr('Telco', { index: 12 }),
    office: attr('Office', { index: 13 }),
    barrier: attr('Barrier', { index: 14 }),
    pci_dss: attr('Pci_dss', { index: 15 }),
    federal_low_152: attr('Federal_low_152', { index: 16 }),
    account_manager_id: attr('Account_manager_id', { index: 17 })
  });

  modelClass.defineProjection('customerL', 'data-line-jhf12-customer', {
    customer: attr('Customer', { index: 0 }),
    descr: attr('Descr', { index: 1 }),
    service_manager_id: attr('Service_manager_id', { index: 2 }),
    creator_id: attr('Creator_id', { index: 3 }),
    modifier_id: attr('Modifier_id', { index: 4 }),
    dt_created: attr('Dt_created', { index: 5 }),
    dt_modified: attr('Dt_modified', { index: 6 }),
    archive: attr('Archive', { index: 7 }),
    dt_archive: attr('Dt_archive', { index: 8 }),
    archiver_id: attr('Archiver_id', { index: 9 }),
    archive_reason_id: attr('Archive_reason_id', { index: 10 }),
    internal: attr('Internal', { index: 11 }),
    telco: attr('Telco', { index: 12 }),
    office: attr('Office', { index: 13 }),
    barrier: attr('Barrier', { index: 14 }),
    pci_dss: attr('Pci_dss', { index: 15 }),
    federal_low_152: attr('Federal_low_152', { index: 16 }),
    account_manager_id: attr('Account_manager_id', { index: 17 })
  });
};
