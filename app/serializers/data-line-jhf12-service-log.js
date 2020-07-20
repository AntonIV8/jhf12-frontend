import { Serializer as service_logSerializer } from
  '../mixins/regenerated/serializers/data-line-jhf12-service-log';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(service_logSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
