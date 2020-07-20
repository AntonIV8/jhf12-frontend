import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  value: DS.attr('string'),
  resource_id: DS.belongsTo('data-line-jhf12-resource', { inverse: null, async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.data-line-jhf12-resource-characteristic.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  value: {
    descriptionKey: 'models.data-line-jhf12-resource-characteristic.validations.value.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  resource_id: {
    descriptionKey: 'models.data-line-jhf12-resource-characteristic.validations.resource_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('resource_characteristicE', 'data-line-jhf12-resource-characteristic', {
    name: attr('Name', { index: 0 }),
    value: attr('Value', { index: 1 }),
    resource_id: belongsTo('data-line-jhf12-resource', 'Resource_id', {
      name: attr('Name', { index: 3 })
    }, { index: 2 })
  });

  modelClass.defineProjection('resource_characteristicL', 'data-line-jhf12-resource-characteristic', {
    name: attr('Name', { index: 0 }),
    value: attr('Value', { index: 1 }),
    resource_id: belongsTo('data-line-jhf12-resource', 'Name', {
      name: attr('Name', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
