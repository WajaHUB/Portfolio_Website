test = {   'name': 'q5_3',
    'points': 1,
    'suites': [   {   'cases': [   {   'code': '>>> assert len(bins) == 51;\n>>> assert max(bins) == 1000;\n>>> assert (boston_post_demand_binned.column("price") == bins).all()\n',
                                       'hidden': False,
                                       'locked': False},
                                   {   'code': '>>> assert boston_post_demand_binned.num_columns == 3;\n'
                                               '>>> assert all([l in boston_post_demand_binned.labels for l in ["price", "quantity", "quantity_demanded"]]);\n'
                                               '>>> assert boston_post_demand_binned.num_rows == 51;\n'
                                               '>>> assert max(boston_post_demand_binned.column("quantity_demanded")) == 6067;\n'
                                               '>>> assert min(boston_post_demand_binned.column("quantity_demanded")) == 0;\n'
                                               '>>> assert len(np.unique(boston_post_demand_binned.column("quantity_demanded"))) == 48;\n'
                                               '>>> assert (np.diff(boston_post_demand_binned.column("quantity_demanded")) <= 0).all()\n',
                                       'hidden': False,
                                       'locked': False}],
                      'scored': True,
                      'setup': '',
                      'teardown': '',
                      'type': 'doctest'}]}
