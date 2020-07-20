import { Serializer as resource_spec_characteristicSerializer } from
  '../mixins/regenerated/serializers/data-line-jhf12-resource-spec-characteristic';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(resource_spec_characteristicSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
