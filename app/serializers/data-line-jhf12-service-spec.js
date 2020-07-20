import { Serializer as service_specSerializer } from
  '../mixins/regenerated/serializers/data-line-jhf12-service-spec';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(service_specSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
