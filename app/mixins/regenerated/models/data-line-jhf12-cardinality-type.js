import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  description: DS.attr('string')
});

export let ValidationRules = {
  description: {
    descriptionKey: 'models.data-line-jhf12-cardinality-type.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('cardinality_typeE', 'data-line-jhf12-cardinality-type', {
    description: attr('Description', { index: 0 })
  });

  modelClass.defineProjection('cardinality_typeL', 'data-line-jhf12-cardinality-type', {
    description: attr('Description', { index: 0 })
  });
};
