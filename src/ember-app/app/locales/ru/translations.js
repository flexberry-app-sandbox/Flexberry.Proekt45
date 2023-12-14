import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProekt_45КартДоступLForm from './forms/i-i-s-proekt-45-карт-доступ-l';
import IISProekt_45КлассУчLForm from './forms/i-i-s-proekt-45-класс-уч-l';
import IISProekt_45НомерLForm from './forms/i-i-s-proekt-45-номер-l';
import IISProekt_45ПриходУходLForm from './forms/i-i-s-proekt-45-приход-уход-l';
import IISProekt_45ПросмотрLForm from './forms/i-i-s-proekt-45-просмотр-l';
import IISProekt_45РасписаниеLForm from './forms/i-i-s-proekt-45-расписание-l';
import IISProekt_45СправДолжLForm from './forms/i-i-s-proekt-45-справ-долж-l';
import IISProekt_45СправРодLForm from './forms/i-i-s-proekt-45-справ-род-l';
import IISProekt_45СправСотрLForm from './forms/i-i-s-proekt-45-справ-сотр-l';
import IISProekt_45СправУчLForm from './forms/i-i-s-proekt-45-справ-уч-l';
import IISProekt_45КартДоступEForm from './forms/i-i-s-proekt-45-карт-доступ-e';
import IISProekt_45КлассУчEForm from './forms/i-i-s-proekt-45-класс-уч-e';
import IISProekt_45НомерEForm from './forms/i-i-s-proekt-45-номер-e';
import IISProekt_45ПриходУходEForm from './forms/i-i-s-proekt-45-приход-уход-e';
import IISProekt_45ПросмотрEForm from './forms/i-i-s-proekt-45-просмотр-e';
import IISProekt_45РасписаниеEForm from './forms/i-i-s-proekt-45-расписание-e';
import IISProekt_45СправДолжEForm from './forms/i-i-s-proekt-45-справ-долж-e';
import IISProekt_45СправРодEForm from './forms/i-i-s-proekt-45-справ-род-e';
import IISProekt_45СправСотрEForm from './forms/i-i-s-proekt-45-справ-сотр-e';
import IISProekt_45СправУчEForm from './forms/i-i-s-proekt-45-справ-уч-e';
import IISProekt_45БазаДанныхModel from './models/i-i-s-proekt-45-база-данных';
import IISProekt_45КартДоступModel from './models/i-i-s-proekt-45-карт-доступ';
import IISProekt_45КлассУчModel from './models/i-i-s-proekt-45-класс-уч';
import IISProekt_45НомерModel from './models/i-i-s-proekt-45-номер';
import IISProekt_45ПриходУходModel from './models/i-i-s-proekt-45-приход-уход';
import IISProekt_45ПросмотрModel from './models/i-i-s-proekt-45-просмотр';
import IISProekt_45РасписаниеModel from './models/i-i-s-proekt-45-расписание';
import IISProekt_45СправДолжModel from './models/i-i-s-proekt-45-справ-долж';
import IISProekt_45СправРодModel from './models/i-i-s-proekt-45-справ-род';
import IISProekt_45СправСотрModel from './models/i-i-s-proekt-45-справ-сотр';
import IISProekt_45СправУчModel from './models/i-i-s-proekt-45-справ-уч';
import IISProekt_45УченикModel from './models/i-i-s-proekt-45-ученик';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proekt-45-база-данных': IISProekt_45БазаДанныхModel,
    'i-i-s-proekt-45-карт-доступ': IISProekt_45КартДоступModel,
    'i-i-s-proekt-45-класс-уч': IISProekt_45КлассУчModel,
    'i-i-s-proekt-45-номер': IISProekt_45НомерModel,
    'i-i-s-proekt-45-приход-уход': IISProekt_45ПриходУходModel,
    'i-i-s-proekt-45-просмотр': IISProekt_45ПросмотрModel,
    'i-i-s-proekt-45-расписание': IISProekt_45РасписаниеModel,
    'i-i-s-proekt-45-справ-долж': IISProekt_45СправДолжModel,
    'i-i-s-proekt-45-справ-род': IISProekt_45СправРодModel,
    'i-i-s-proekt-45-справ-сотр': IISProekt_45СправСотрModel,
    'i-i-s-proekt-45-справ-уч': IISProekt_45СправУчModel,
    'i-i-s-proekt-45-ученик': IISProekt_45УченикModel
  },

  'application-name': 'Proekt_45',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Proekt_45',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proekt_45',
          title: 'Proekt_45'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        администратор: {
          caption: 'Администратор',
          title: 'Администратор',
          'i-i-s-proekt-45-расписание-l': {
            caption: 'Расписание',
            title: ''
          },
          'i-i-s-proekt-45-карт-доступ-l': {
            caption: 'База данных',
            title: ''
          },
          'i-i-s-proekt-45-класс-уч-l': {
            caption: 'Класс ученика',
            title: ''
          },
          'i-i-s-proekt-45-справ-долж-l': {
            caption: 'Справочник должности',
            title: ''
          },
          'i-i-s-proekt-45-справ-уч-l': {
            caption: 'Справочник ученики',
            title: ''
          },
          'i-i-s-proekt-45-справ-род-l': {
            caption: 'Справочник родители',
            title: ''
          },
          'i-i-s-proekt-45-справ-сотр-l': {
            caption: 'Справочник сотрудники',
            title: ''
          },
          'i-i-s-proekt-45-номер-l': {
            caption: 'Номер карты',
            title: ''
          }
        },
        ученик: {
          caption: 'Ученик',
          title: 'Ученик',
          'i-i-s-proekt-45-приход-уход-l': {
            caption: 'Функция: регистрация прихода/ухода ученика',
            title: 'Приход уход'
          }
        },
        родители: {
          caption: 'Родители',
          title: 'Родители',
          'i-i-s-proekt-45-просмотр-l': {
            caption: 'Функция: контроль и просмотр прихода/ухода ученика',
            title: 'Просмотр'
          }
        },
        охрана: {
          caption: 'Охрана',
          title: 'Охрана',
          'i-i-s-proekt-45-приход-уход-l': {
            caption: 'Функция: регистрация прихода/ухода ученика',
            title: 'Приход уход'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-proekt-45-карт-доступ-l': IISProekt_45КартДоступLForm,
    'i-i-s-proekt-45-класс-уч-l': IISProekt_45КлассУчLForm,
    'i-i-s-proekt-45-номер-l': IISProekt_45НомерLForm,
    'i-i-s-proekt-45-приход-уход-l': IISProekt_45ПриходУходLForm,
    'i-i-s-proekt-45-просмотр-l': IISProekt_45ПросмотрLForm,
    'i-i-s-proekt-45-расписание-l': IISProekt_45РасписаниеLForm,
    'i-i-s-proekt-45-справ-долж-l': IISProekt_45СправДолжLForm,
    'i-i-s-proekt-45-справ-род-l': IISProekt_45СправРодLForm,
    'i-i-s-proekt-45-справ-сотр-l': IISProekt_45СправСотрLForm,
    'i-i-s-proekt-45-справ-уч-l': IISProekt_45СправУчLForm,
    'i-i-s-proekt-45-карт-доступ-e': IISProekt_45КартДоступEForm,
    'i-i-s-proekt-45-класс-уч-e': IISProekt_45КлассУчEForm,
    'i-i-s-proekt-45-номер-e': IISProekt_45НомерEForm,
    'i-i-s-proekt-45-приход-уход-e': IISProekt_45ПриходУходEForm,
    'i-i-s-proekt-45-просмотр-e': IISProekt_45ПросмотрEForm,
    'i-i-s-proekt-45-расписание-e': IISProekt_45РасписаниеEForm,
    'i-i-s-proekt-45-справ-долж-e': IISProekt_45СправДолжEForm,
    'i-i-s-proekt-45-справ-род-e': IISProekt_45СправРодEForm,
    'i-i-s-proekt-45-справ-сотр-e': IISProekt_45СправСотрEForm,
    'i-i-s-proekt-45-справ-уч-e': IISProekt_45СправУчEForm
  },

});

export default translations;
