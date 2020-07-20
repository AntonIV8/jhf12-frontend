import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  regex: DS.attr('string'),
  description: DS.attr('string')
});

export let ValidationRules = {
  regex: {
    descriptionKey: 'models.data-line-jhf12-characteristic-type.validations.regex.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  description: {
    descriptionKey: 'models.data-line-jhf12-characteristic-type.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('characteristic_typeE', 'data-line-jhf12-characteristic-type', {
    regex: attr('Regex', { index: 0 }),
    description: attr('Description', { index: 1 })
  });

  modelClass.defineProjection('characteristic_typeL', 'data-line-jhf12-characteristic-type', {
    regex: attr('Regex', { index: 0 }),
    description: attr('Description', { index: 1 })
  });
};
