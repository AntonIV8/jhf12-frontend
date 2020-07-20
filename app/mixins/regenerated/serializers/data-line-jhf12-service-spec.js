import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      catalog_key: { serialize: 'odata-id', deserialize: 'records' },
      cardinality: { serialize: 'odata-id', deserialize: 'records' },
      parent_id: { serialize: 'odata-id', deserialize: 'records' },
      parent_id: { serialize: 'odata-id', deserialize: 'records' },
      cardinality: { serialize: 'odata-id', deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
