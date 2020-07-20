import { Serializer as resource_usage_specSerializer } from
  '../mixins/regenerated/serializers/data-line-jhf12-resource-usage-spec';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(resource_usage_specSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
