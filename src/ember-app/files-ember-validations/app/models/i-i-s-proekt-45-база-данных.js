import {
  defineNamespace,
  defineProjections,
  Model as БазаДанныхMixin
} from '../mixins/regenerated/models/i-i-s-proekt-45-база-данных';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(БазаДанныхMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
