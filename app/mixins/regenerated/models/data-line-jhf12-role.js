import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  description: DS.attr('string')
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.data-line-jhf12-role.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  description: {
    descriptionKey: 'models.data-line-jhf12-role.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('roleE', 'data-line-jhf12-role', {
    name: attr('Name', { index: 0 }),
    description: attr('Description', { index: 1 })
  });

  modelClass.defineProjection('roleL', 'data-line-jhf12-role', {
    name: attr('Name', { index: 0 }),
    description: attr('Description', { index: 1 })
  });
};
