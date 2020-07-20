import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  spec_id: DS.attr('number'),
  name: DS.attr('string'),
  description: DS.attr('string'),
  version: DS.attr('number')
});

export let ValidationRules = {
  spec_id: {
    descriptionKey: 'models.data-line-jhf12-product-catalog.validations.spec_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  name: {
    descriptionKey: 'models.data-line-jhf12-product-catalog.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  description: {
    descriptionKey: 'models.data-line-jhf12-product-catalog.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  version: {
    descriptionKey: 'models.data-line-jhf12-product-catalog.validations.version.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('product_catalogE', 'data-line-jhf12-product-catalog', {
    spec_id: attr('Spec_id', { index: 0 }),
    name: attr('Name', { index: 1 }),
    description: attr('Description', { index: 2 }),
    version: attr('Version', { index: 3 })
  });

  modelClass.defineProjection('product_catalogL', 'data-line-jhf12-product-catalog', {
    spec_id: attr('Spec_id', { index: 0 }),
    name: attr('Name', { index: 1 }),
    description: attr('Description', { index: 2 }),
    version: attr('Version', { index: 3 })
  });
};
