import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СтатусEnum from '../enums/i-i-s-proekt-45-статус';

export default FlexberryEnum.extend({
  enum: СтатусEnum,
  sourceType: 'IIS.Proekt_45.Статус'
});
