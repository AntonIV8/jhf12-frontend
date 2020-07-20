import { Serializer as catalogSerializer } from
  '../mixins/regenerated/serializers/data-line-jhf12-catalog';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(catalogSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
