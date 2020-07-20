import { Serializer as service_usage_specSerializer } from
  '../mixins/regenerated/serializers/data-line-jhf12-service-usage-spec';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(service_usage_specSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
