import { Serializer as service_characteristicSerializer } from
  '../mixins/regenerated/serializers/data-line-jhf12-service-characteristic';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(service_characteristicSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
