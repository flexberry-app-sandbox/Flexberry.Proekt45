import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  справСотр: DS.belongsTo('i-i-s-proekt-45-справ-сотр', { inverse: null, async: false }),
  базаДанных: DS.hasMany('i-i-s-proekt-45-база-данных', { inverse: 'картДоступ', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-proekt-45-карт-доступ.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  справСотр: {
    descriptionKey: 'models.i-i-s-proekt-45-карт-доступ.validations.справСотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  базаДанных: {
    descriptionKey: 'models.i-i-s-proekt-45-карт-доступ.validations.базаДанных.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КартДоступE', 'i-i-s-proekt-45-карт-доступ', {
    справСотр: belongsTo('i-i-s-proekt-45-справ-сотр', 'Фио сотрудника', {
      фио: attr('Фио сотрудника', { index: 1 }),
      справДолж: belongsTo('i-i-s-proekt-45-справ-долж', '', {
        должность: attr('Должность', { index: 2 })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'фио сотрудника' }),
    базаДанных: hasMany('i-i-s-proekt-45-база-данных', 'База Данных', {
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
    })
  });

  modelClass.defineProjection('КартДоступL', 'i-i-s-proekt-45-карт-доступ', {
    справСотр: belongsTo('i-i-s-proekt-45-справ-сотр', 'Фио сотрудника', {
      фио: attr('Фио сотрудника', { index: 0 }),
      справДолж: belongsTo('i-i-s-proekt-45-справ-долж', '', {
        должность: attr('Должность', { index: 1 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
