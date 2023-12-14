import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  справУч: DS.belongsTo('i-i-s-proekt-45-справ-уч', { inverse: null, async: false }),
  картДоступ: DS.belongsTo('i-i-s-proekt-45-карт-доступ', { inverse: 'базаДанных', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-proekt-45-база-данных.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  справУч: {
    descriptionKey: 'models.i-i-s-proekt-45-база-данных.validations.справУч.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  картДоступ: {
    descriptionKey: 'models.i-i-s-proekt-45-база-данных.validations.картДоступ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('БазаДанныхE', 'i-i-s-proekt-45-база-данных', {
    справУч: belongsTo('i-i-s-proekt-45-справ-уч', 'Фио ученика', {
      фио: attr('Фио ученика', { index: 1 }),
      классУч: belongsTo('i-i-s-proekt-45-класс-уч', '', {
        назв: attr('Класс', { index: 2 })
      }, { index: -1, hidden: true }),
      справРод: belongsTo('i-i-s-proekt-45-справ-род', '', {
        фио: attr('Фио родителя', { index: 3 })
      }, { index: -1, hidden: true }),
      номер: belongsTo('i-i-s-proekt-45-номер', '', {
        наименование: attr('Номер карты', { index: 4 })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'фио ученика' })
  });
};
