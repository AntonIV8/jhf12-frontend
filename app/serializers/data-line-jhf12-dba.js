import { Serializer as dbaSerializer } from
  '../mixins/regenerated/serializers/data-line-jhf12-dba';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(dbaSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
