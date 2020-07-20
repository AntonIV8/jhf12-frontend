import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  resource_characteristic_id: DS.attr('number'),
  name: DS.attr('string'),
  value: DS.attr('string'),
  resource_id: DS.attr('number'),
  start_time: DS.attr('date'),
  end_time: DS.attr('date')
});

export let ValidationRules = {
  resource_characteristic_id: {
    descriptionKey: 'models.data-line-jhf12-resource-characteristic-log.validations.resource_characteristic_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  name: {
    descriptionKey: 'models.data-line-jhf12-resource-characteristic-log.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  value: {
    descriptionKey: 'models.data-line-jhf12-resource-characteristic-log.validations.value.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  resource_id: {
    descriptionKey: 'models.data-line-jhf12-resource-characteristic-log.validations.resource_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  start_time: {
    descriptionKey: 'models.data-line-jhf12-resource-characteristic-log.validations.start_time.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  end_time: {
    descriptionKey: 'models.data-line-jhf12-resource-characteristic-log.validations.end_time.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('resource_characteristic_logE', 'data-line-jhf12-resource-characteristic-log', {
    resource_characteristic_id: attr('Resource_characteristic_id', { index: 0 }),
    name: attr('Name', { index: 1 }),
    value: attr('Value', { index: 2 }),
    resource_id: attr('Resource_id', { index: 3 }),
    start_time: attr('Start_time', { index: 4 }),
    end_time: attr('End_time', { index: 5 })
  });

  modelClass.defineProjection('resource_characteristic_logL', 'data-line-jhf12-resource-characteristic-log', {
    resource_characteristic_id: attr('Resource_characteristic_id', { index: 0 }),
    name: attr('Name', { index: 1 }),
    value: attr('Value', { index: 2 }),
    resource_id: attr('Resource_id', { index: 3 }),
    start_time: attr('Start_time', { index: 4 }),
    end_time: attr('End_time', { index: 5 })
  });
};
