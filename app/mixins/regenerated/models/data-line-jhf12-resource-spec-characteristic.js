import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  value: DS.attr('string'),
  can_be_overridden: DS.attr('boolean'),
  label: DS.attr('string'),
  list: DS.attr('number'),
  type: DS.belongsTo('data-line-jhf12-characteristic-type', { inverse: null, async: false }),
  resource_spec_id: DS.belongsTo('data-line-jhf12-resource-spec', { inverse: null, async: false }),
  resource_spec_id: DS.belongsTo('data-line-jhf12-resource-spec', { inverse: null, async: false }),
  dictionary_id: DS.belongsTo('data-line-jhf12-dictionary', { inverse: null, async: false }),
  dictionary_id: DS.belongsTo('data-line-jhf12-dictionary', { inverse: null, async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.data-line-jhf12-resource-spec-characteristic.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  value: {
    descriptionKey: 'models.data-line-jhf12-resource-spec-characteristic.validations.value.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  can_be_overridden: {
    descriptionKey: 'models.data-line-jhf12-resource-spec-characteristic.validations.can_be_overridden.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  label: {
    descriptionKey: 'models.data-line-jhf12-resource-spec-characteristic.validations.label.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  list: {
    descriptionKey: 'models.data-line-jhf12-resource-spec-characteristic.validations.list.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  type: {
    descriptionKey: 'models.data-line-jhf12-resource-spec-characteristic.validations.type.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  resource_spec_id: {
    descriptionKey: 'models.data-line-jhf12-resource-spec-characteristic.validations.resource_spec_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  dictionary_id: {
    descriptionKey: 'models.data-line-jhf12-resource-spec-characteristic.validations.dictionary_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('resource_spec_characteristicE', 'data-line-jhf12-resource-spec-characteristic', {
    name: attr('Name', { index: 0 }),
    value: attr('Value', { index: 1 }),
    can_be_overridden: attr('Can_be_overridden', { index: 2 }),
    label: attr('Label', { index: 3 }),
    list: attr('List', { index: 4 }),
    type: belongsTo('data-line-jhf12-characteristic-type', 'Type', {
      regex: attr('Regex', { index: 6 })
    }, { index: 5 }),
    resource_spec_id: belongsTo('data-line-jhf12-resource-spec', 'Resource_spec_id', {
      enum: attr('Enum', { index: 8 })
    }, { index: 7 }),
    dictionary_id: belongsTo('data-line-jhf12-dictionary', 'Dictionary_id', {
      name: attr('Name', { index: 12 })
    }, { index: 11 })
  });

  modelClass.defineProjection('resource_spec_characteristicL', 'data-line-jhf12-resource-spec-characteristic', {
    name: attr('Name', { index: 0 }),
    value: attr('Value', { index: 1 }),
    can_be_overridden: attr('Can_be_overridden', { index: 2 }),
    label: attr('Label', { index: 3 }),
    list: attr('List', { index: 4 }),
    type: belongsTo('data-line-jhf12-characteristic-type', 'Regex', {
      regex: attr('Regex', { index: 5 })
    }, { index: -1, hidden: true }),
    resource_spec_id: belongsTo('data-line-jhf12-resource-spec', 'Enum', {
      enum: attr('Enum', { index: 6 })
    }, { index: -1, hidden: true }),
    dictionary_id: belongsTo('data-line-jhf12-dictionary', 'Name', {
      name: attr('Name', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
