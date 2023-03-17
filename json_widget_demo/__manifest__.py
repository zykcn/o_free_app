# -*- coding: utf-8 -*-
{
    'name': "json_widget_demo",

    'summary': """
        demo for funenc_json_widget
    """,

    'description': """
        demo for funenc_json_widget
    """,

    'author': "Funenc Crax",
    'website': "http://odoo.funenc.com",

    'category': 'Apps/json',
    'version': '14.0.0.1',
    'price': 0,
    'license': 'OPL-1',

    'depends': ['base', 'funenc_json_widget'],

    'data': [
        'security/ir.model.access.csv',
        'demo/demo.xml',
        'views/views.xml',
    ],

    'qweb': [
        'static/xml/*.xml'
    ]
}
