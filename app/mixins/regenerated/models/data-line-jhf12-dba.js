import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  dt_upgrade: DS.attr('date'),
  description: DS.attr('string'),
  script: DS.attr('string'),
  prev_version: DS.belongsTo('data-line-jhf12-dba', { inverse: null, async: false })
});

export let ValidationRules = {
  dt_upgrade: {
    descriptionKey: 'models.data-line-jhf12-dba.validations.dt_upgrade.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  description: {
    descriptionKey: 'models.data-line-jhf12-dba.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  script: {
    descriptionKey: 'models.data-line-jhf12-dba.validations.script.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  prev_version: {
    descriptionKey: 'models.data-line-jhf12-dba.validations.prev_version.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('dbaE', 'data-line-jhf12-dba', {
    dt_upgrade: attr('Dt_upgrade', { index: 0 }),
    description: attr('Description', { index: 1 }),
    script: attr('Script', { index: 2 }),
    prev_version: belongsTo('data-line-jhf12-dba', 'Prev_version', {
      description: attr('Description', { index: 4 })
    }, { index: 3 })
  });

  modelClass.defineProjection('dbaL', 'data-line-jhf12-dba', {
    dt_upgrade: attr('Dt_upgrade', { index: 0 }),
    description: attr('Description', { index: 1 }),
    script: attr('Script', { index: 2 }),
    prev_version: belongsTo('data-line-jhf12-dba', 'Description', {

    }, { index: 3, hidden: true })
  });
};
