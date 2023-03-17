# -*- coding: utf-8 -*-
{
    'name': "akl_multi_tab_plugin",

    'summary': """
        akl multi tab plugin for odoo
    """,

    'description': """
        akl multi tab plugin
        multi tab,
        multi tab theme,
        odoo theme
    """,

    'author': "funenc",
    'website': "https://www.openerpnext.com",
    'live_test_url': "https://www.openerpnext.com/",

    'category': 'Backend/Theme',
    'version': '14.0.0.5',
    'license': 'OPL-1',
    'images': ['static/description/banner.png',
               'static/description/akl_screenshot.png'],

    'depends': ['base'],

    "application": False,
    "installable": True,
    "auto_install": False,

    'price': 169,
    'currency': 'USD',
    
    'data': [
        'views/assets.xml'
    ],

    'qweb': [
        'static/xml/*.xml',
    ]
}
