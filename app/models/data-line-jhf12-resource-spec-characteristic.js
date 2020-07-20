import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import OfflineModelMixin from 'ember-flexberry-data/mixins/offline-model';

import {
  defineProjections,
  ValidationRules,
  Model as resource_spec_characteristicMixin
} from '../mixins/regenerated/models/data-line-jhf12-resource-spec-characteristic';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(OfflineModelMixin, resource_spec_characteristicMixin, Validations, {
});

defineProjections(Model);

export default Model;
