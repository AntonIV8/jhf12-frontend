import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  external_id: DS.attr('string'),
  name: DS.attr('string'),
  description: DS.attr('string'),
  category: DS.attr('string'),
  type: DS.attr('string'),
  dt_created: DS.attr('date'),
  dt_modified: DS.attr('date')
});

export let ValidationRules = {
  external_id: {
    descriptionKey: 'models.data-line-jhf12-resource-common.validations.external_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name: {
    descriptionKey: 'models.data-line-jhf12-resource-common.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  description: {
    descriptionKey: 'models.data-line-jhf12-resource-common.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  category: {
    descriptionKey: 'models.data-line-jhf12-resource-common.validations.category.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  type: {
    descriptionKey: 'models.data-line-jhf12-resource-common.validations.type.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  dt_created: {
    descriptionKey: 'models.data-line-jhf12-resource-common.validations.dt_created.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  dt_modified: {
    descriptionKey: 'models.data-line-jhf12-resource-common.validations.dt_modified.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('resource_commonE', 'data-line-jhf12-resource-common', {
    external_id: attr('External_id', { index: 0 }),
    name: attr('Name', { index: 1 }),
    description: attr('Description', { index: 2 }),
    category: attr('Category', { index: 3 }),
    type: attr('Type', { index: 4 }),
    dt_created: attr('Dt_created', { index: 5 }),
    dt_modified: attr('Dt_modified', { index: 6 })
  });

  modelClass.defineProjection('resource_commonL', 'data-line-jhf12-resource-common', {
    external_id: attr('External_id', { index: 0 }),
    name: attr('Name', { index: 1 }),
    description: attr('Description', { index: 2 }),
    category: attr('Category', { index: 3 }),
    type: attr('Type', { index: 4 }),
    dt_created: attr('Dt_created', { index: 5 }),
    dt_modified: attr('Dt_modified', { index: 6 })
  });
};
