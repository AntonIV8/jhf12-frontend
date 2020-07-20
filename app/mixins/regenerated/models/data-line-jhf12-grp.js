import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  description: DS.attr('string'),
  imported: DS.attr('boolean')
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.data-line-jhf12-grp.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  description: {
    descriptionKey: 'models.data-line-jhf12-grp.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  imported: {
    descriptionKey: 'models.data-line-jhf12-grp.validations.imported.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('grpE', 'data-line-jhf12-grp', {
    name: attr('Name', { index: 0 }),
    description: attr('Description', { index: 1 }),
    imported: attr('Imported', { index: 2 })
  });

  modelClass.defineProjection('grpL', 'data-line-jhf12-grp', {
    name: attr('Name', { index: 0 }),
    description: attr('Description', { index: 1 }),
    imported: attr('Imported', { index: 2 })
  });
};
