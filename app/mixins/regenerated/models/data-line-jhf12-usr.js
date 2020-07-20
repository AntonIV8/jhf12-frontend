import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  login: DS.attr('string'),
  password: DS.attr('string'),
  locked: DS.attr('boolean'),
  email: DS.attr('string'),
  domain: DS.attr('string'),
  last_name: DS.attr('string'),
  first_name: DS.attr('string'),
  middle_name: DS.attr('string'),
  phone: DS.attr('string'),
  phone_work: DS.attr('string'),
  phone_mobile: DS.attr('string'),
  position: DS.attr('string'),
  department: DS.attr('string'),
  photo: DS.attr('string'),
  thumbnail: DS.attr('string'),
  dt_created: DS.attr('date'),
  dt_locked: DS.attr('date'),
  dt_modified: DS.attr('date'),
  dt_lastlogin: DS.attr('date'),
  full_name: DS.attr('string'),
  short_name: DS.attr('string')
});

export let ValidationRules = {
  login: {
    descriptionKey: 'models.data-line-jhf12-usr.validations.login.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  password: {
    descriptionKey: 'models.data-line-jhf12-usr.validations.password.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  locked: {
    descriptionKey: 'models.data-line-jhf12-usr.validations.locked.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  email: {
    descriptionKey: 'models.data-line-jhf12-usr.validations.email.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  domain: {
    descriptionKey: 'models.data-line-jhf12-usr.validations.domain.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  last_name: {
    descriptionKey: 'models.data-line-jhf12-usr.validations.last_name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  first_name: {
    descriptionKey: 'models.data-line-jhf12-usr.validations.first_name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  middle_name: {
    descriptionKey: 'models.data-line-jhf12-usr.validations.middle_name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  phone: {
    descriptionKey: 'models.data-line-jhf12-usr.validations.phone.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  phone_work: {
    descriptionKey: 'models.data-line-jhf12-usr.validations.phone_work.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  phone_mobile: {
    descriptionKey: 'models.data-line-jhf12-usr.validations.phone_mobile.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  position: {
    descriptionKey: 'models.data-line-jhf12-usr.validations.position.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  department: {
    descriptionKey: 'models.data-line-jhf12-usr.validations.department.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  photo: {
    descriptionKey: 'models.data-line-jhf12-usr.validations.photo.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  thumbnail: {
    descriptionKey: 'models.data-line-jhf12-usr.validations.thumbnail.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  dt_created: {
    descriptionKey: 'models.data-line-jhf12-usr.validations.dt_created.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  dt_locked: {
    descriptionKey: 'models.data-line-jhf12-usr.validations.dt_locked.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  dt_modified: {
    descriptionKey: 'models.data-line-jhf12-usr.validations.dt_modified.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  dt_lastlogin: {
    descriptionKey: 'models.data-line-jhf12-usr.validations.dt_lastlogin.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  full_name: {
    descriptionKey: 'models.data-line-jhf12-usr.validations.full_name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  short_name: {
    descriptionKey: 'models.data-line-jhf12-usr.validations.short_name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('usrE', 'data-line-jhf12-usr', {
    login: attr('Login', { index: 0 }),
    password: attr('Password', { index: 1 }),
    locked: attr('Locked', { index: 2 }),
    email: attr('Email', { index: 3 }),
    domain: attr('Domain', { index: 4 }),
    last_name: attr('Last_name', { index: 5 }),
    first_name: attr('First_name', { index: 6 }),
    middle_name: attr('Middle_name', { index: 7 }),
    phone: attr('Phone', { index: 8 }),
    phone_work: attr('Phone_work', { index: 9 }),
    phone_mobile: attr('Phone_mobile', { index: 10 }),
    position: attr('Position', { index: 11 }),
    department: attr('Department', { index: 12 }),
    photo: attr('Photo', { index: 13 }),
    thumbnail: attr('Thumbnail', { index: 14 }),
    dt_created: attr('Dt_created', { index: 15 }),
    dt_locked: attr('Dt_locked', { index: 16 }),
    dt_modified: attr('Dt_modified', { index: 17 }),
    dt_lastlogin: attr('Dt_lastlogin', { index: 18 }),
    full_name: attr('Full_name', { index: 19 }),
    short_name: attr('Short_name', { index: 20 })
  });

  modelClass.defineProjection('usrL', 'data-line-jhf12-usr', {
    login: attr('Login', { index: 0 }),
    password: attr('Password', { index: 1 }),
    locked: attr('Locked', { index: 2 }),
    email: attr('Email', { index: 3 }),
    domain: attr('Domain', { index: 4 }),
    last_name: attr('Last_name', { index: 5 }),
    first_name: attr('First_name', { index: 6 }),
    middle_name: attr('Middle_name', { index: 7 }),
    phone: attr('Phone', { index: 8 }),
    phone_work: attr('Phone_work', { index: 9 }),
    phone_mobile: attr('Phone_mobile', { index: 10 }),
    position: attr('Position', { index: 11 }),
    department: attr('Department', { index: 12 }),
    photo: attr('Photo', { index: 13 }),
    thumbnail: attr('Thumbnail', { index: 14 }),
    dt_created: attr('Dt_created', { index: 15 }),
    dt_locked: attr('Dt_locked', { index: 16 }),
    dt_modified: attr('Dt_modified', { index: 17 }),
    dt_lastlogin: attr('Dt_lastlogin', { index: 18 }),
    full_name: attr('Full_name', { index: 19 }),
    short_name: attr('Short_name', { index: 20 })
  });
};
