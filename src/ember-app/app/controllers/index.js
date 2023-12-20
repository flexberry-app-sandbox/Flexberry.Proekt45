import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.администратор.caption'),
          title: i18n.t('forms.application.sitemap.администратор.title'),
          children: [{
            link: 'i-i-s-proekt-45-расписание-l',
            caption: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-45-расписание-l.caption'),
            title: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-45-расписание-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-proekt-45-карт-доступ-l',
            caption: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-45-карт-доступ-l.caption'),
            title: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-45-карт-доступ-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-proekt-45-класс-уч-l',
            caption: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-45-класс-уч-l.caption'),
            title: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-45-класс-уч-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-proekt-45-справ-долж-l',
            caption: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-45-справ-долж-l.caption'),
            title: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-45-справ-долж-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-proekt-45-справ-уч-l',
            caption: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-45-справ-уч-l.caption'),
            title: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-45-справ-уч-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-proekt-45-справ-род-l',
            caption: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-45-справ-род-l.caption'),
            title: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-45-справ-род-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-proekt-45-справ-сотр-l',
            caption: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-45-справ-сотр-l.caption'),
            title: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-45-справ-сотр-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-proekt-45-номер-l',
            caption: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-45-номер-l.caption'),
            title: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-45-номер-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.ученик.caption'),
          title: i18n.t('forms.application.sitemap.ученик.title'),
          children: [{
            link: 'i-i-s-proekt-45-приход-уход-l',
            caption: i18n.t('forms.application.sitemap.ученик.i-i-s-proekt-45-приход-уход-l.caption'),
            title: i18n.t('forms.application.sitemap.ученик.i-i-s-proekt-45-приход-уход-l.title'),
            icon: 'address card',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.родители.caption'),
          title: i18n.t('forms.application.sitemap.родители.title'),
          children: [{
            link: 'i-i-s-proekt-45-просмотр-l',
            caption: i18n.t('forms.application.sitemap.родители.i-i-s-proekt-45-просмотр-l.caption'),
            title: i18n.t('forms.application.sitemap.родители.i-i-s-proekt-45-просмотр-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})