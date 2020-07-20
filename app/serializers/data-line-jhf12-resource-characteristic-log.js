import { Serializer as resource_characteristic_logSerializer } from
  '../mixins/regenerated/serializers/data-line-jhf12-resource-characteristic-log';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(resource_characteristic_logSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
