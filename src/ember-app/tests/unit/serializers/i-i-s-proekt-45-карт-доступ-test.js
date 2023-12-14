import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proekt-45-карт-доступ', 'Unit | Serializer | i-i-s-proekt-45-карт-доступ', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proekt-45-карт-доступ',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-proekt-45-статус',

    'model:i-i-s-proekt-45-база-данных',
    'model:i-i-s-proekt-45-карт-доступ',
    'model:i-i-s-proekt-45-класс-уч',
    'model:i-i-s-proekt-45-номер',
    'model:i-i-s-proekt-45-приход-уход',
    'model:i-i-s-proekt-45-просмотр',
    'model:i-i-s-proekt-45-расписание',
    'model:i-i-s-proekt-45-справ-долж',
    'model:i-i-s-proekt-45-справ-род',
    'model:i-i-s-proekt-45-справ-сотр',
    'model:i-i-s-proekt-45-справ-уч',
    'model:i-i-s-proekt-45-ученик',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
