odoo.define('funenc_json_widget.json_widget', function (require) {
    "use strict";

    const AbstractField = require('web.AbstractField');
    const fieldRegistry = require('web.field_registry');
    const core = require('web.core');
    const QWeb = core.qweb;

    const JsonWidgetPro = AbstractField.extend({
        supportedFieldTypes: ['char', 'text'],

        init: function (parent, fieldName, record, widgetOptions) {
            return this._super.apply(this, arguments);
        },

        _render: function () {
            try {
                var value = JSON.parse(this.value);
                if (!value || !value.template) {
                    this.$el.html('');
                    return;
                }
                debugger
                $(QWeb.render(value.template, value)).appendTo(this.$el);
            } catch (e) {
                this.$el.html(e.message);
            }
        }
    });

    fieldRegistry.add('json_widget_pro', JsonWidgetPro);

    return JsonWidgetPro;
});
