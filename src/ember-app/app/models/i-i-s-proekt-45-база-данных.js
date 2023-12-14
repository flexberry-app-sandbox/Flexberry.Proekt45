import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as БазаДанныхMixin
} from '../mixins/regenerated/models/i-i-s-proekt-45-база-данных';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(БазаДанныхMixin, Validations, {
});

defineProjections(Model);

export default Model;
