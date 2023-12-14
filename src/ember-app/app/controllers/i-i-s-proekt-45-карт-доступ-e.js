import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-proekt-45-карт-доступ-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-proekt-45-база-данных+справУч':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'фио ученика',
            required: true,
            relationName: 'справУч',
            projection: 'СправУчL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
