# -*- coding: utf-8 -*-

from odoo import models, fields, api


class json_widget_demo(models.Model):
    """
    json widget demo
    """
    _name = 'json_widget_demo.json_widget_demo'
    _description = 'json_widget_demo.json_widget_demo'

    name = fields.Char()
    json_content = fields.Text(string="json content")
    json_display = fields.Char(string="json display")
    description = fields.Text()

    @api.onchange('json_content')
    def _onchange_json_content(self):
        if self.json_content:
            self.json_display = self.json_content
        else:
            self.json_display = False
