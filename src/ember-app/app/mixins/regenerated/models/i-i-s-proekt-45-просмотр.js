import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('date'),
  справРод: DS.belongsTo('i-i-s-proekt-45-справ-род', { inverse: null, async: false }),
  ученик: DS.hasMany('i-i-s-proekt-45-ученик', { inverse: 'просмотр', async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-proekt-45-просмотр.validations.время.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  справРод: {
    descriptionKey: 'models.i-i-s-proekt-45-просмотр.validations.справРод.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  ученик: {
    descriptionKey: 'models.i-i-s-proekt-45-просмотр.validations.ученик.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПросмотрE', 'i-i-s-proekt-45-просмотр', {
    время: attr('Время', { index: 0 }),
    справРод: belongsTo('i-i-s-proekt-45-справ-род', 'Фио родителя', {
      фио: attr('Фио родителя', { index: 2 })
    }, { index: 1, displayMemberPath: 'фио родителя' }),
    ученик: hasMany('i-i-s-proekt-45-ученик', 'Ученик', {
      приходУход: belongsTo('i-i-s-proekt-45-приход-уход', 'Приход и уход ученика', {
        справУч: belongsTo('i-i-s-proekt-45-справ-уч', '', {
          фио: attr('Фио ученика', { index: 1 }),
          классУч: belongsTo('i-i-s-proekt-45-класс-уч', '', {
            назв: attr('Класс ученика', { index: 2 })
          }, { index: -1, hidden: true })
        }, { index: -1, hidden: true }),
        расписание: belongsTo('i-i-s-proekt-45-расписание', '', {
          урок: attr('Номер урока', { index: 3 }),
          периодОт: attr('Период От', { index: 4 }),
          периодДо: attr('Период До', { index: 5 })
        }, { index: -1, hidden: true }),
        статус: attr('Статус Прихода/Ухода', { index: 6 }),
        врПриУх: attr('Время Прихода/Ухода', { index: 7 })
      }, { index: 0, displayMemberPath: 'фио ученика' })
    })
  });

  modelClass.defineProjection('ПросмотрL', 'i-i-s-proekt-45-просмотр', {
    время: attr('Время', { index: 0 }),
    справРод: belongsTo('i-i-s-proekt-45-справ-род', 'Фио ученика', {
      фио: attr('Фио ученика', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
