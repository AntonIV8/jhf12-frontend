import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  value: DS.attr('string'),
  map: DS.attr('boolean'),
  unit: DS.attr('string'),
  type: DS.belongsTo('data-line-jhf12-characteristic-type', { inverse: null, async: false }),
  type: DS.belongsTo('data-line-jhf12-characteristic-type', { inverse: null, async: false }),
  resource_spec_id: DS.belongsTo('data-line-jhf12-resource-spec', { inverse: null, async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.data-line-jhf12-resource-usage-spec.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  value: {
    descriptionKey: 'models.data-line-jhf12-resource-usage-spec.validations.value.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  map: {
    descriptionKey: 'models.data-line-jhf12-resource-usage-spec.validations.map.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  unit: {
    descriptionKey: 'models.data-line-jhf12-resource-usage-spec.validations.unit.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  type: {
    descriptionKey: 'models.data-line-jhf12-resource-usage-spec.validations.type.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  resource_spec_id: {
    descriptionKey: 'models.data-line-jhf12-resource-usage-spec.validations.resource_spec_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('resource_usage_specE', 'data-line-jhf12-resource-usage-spec', {
    name: attr('Name', { index: 0 }),
    value: attr('Value', { index: 1 }),
    map: attr('Map', { index: 2 }),
    unit: attr('Unit', { index: 3 }),
    type: belongsTo('data-line-jhf12-characteristic-type', 'Type', {
      regex: attr('Regex', { index: 5 })
    }, { index: 4 }),
    resource_spec_id: belongsTo('data-line-jhf12-resource-spec', 'Resource_spec_id', {
      enum: attr('Enum', { index: 9 })
    }, { index: 8 })
  });

  modelClass.defineProjection('resource_usage_specL', 'data-line-jhf12-resource-usage-spec', {
    name: attr('Name', { index: 0 }),
    value: attr('Value', { index: 1 }),
    map: attr('Map', { index: 2 }),
    unit: attr('Unit', { index: 3 }),
    type: belongsTo('data-line-jhf12-characteristic-type', 'Regex', {
      regex: attr('Regex', { index: 4 })
    }, { index: -1, hidden: true }),
    resource_spec_id: belongsTo('data-line-jhf12-resource-spec', 'Enum', {
      enum: attr('Enum', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
