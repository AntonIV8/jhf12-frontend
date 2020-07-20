import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      clone_service_id: { serialize: 'odata-id', deserialize: 'records' },
      service_order_id: { serialize: 'odata-id', deserialize: 'records' },
      service_id: { serialize: 'odata-id', deserialize: 'records' },
      creator_id: { serialize: 'odata-id', deserialize: 'records' },
      service_id: { serialize: 'odata-id', deserialize: 'records' },
      state: { serialize: 'odata-id', deserialize: 'records' },
      clone_service_id: { serialize: 'odata-id', deserialize: 'records' },
      creator_id: { serialize: 'odata-id', deserialize: 'records' },
      modifier_id: { serialize: 'odata-id', deserialize: 'records' },
      parent_id: { serialize: 'odata-id', deserialize: 'records' },
      state: { serialize: 'odata-id', deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
