test = {   'name': 'q4',
    'points': 1,
    'suites': [   {   'cases': [   {'code': '>>> assert type(Q) == sympy.Symbol;\n>>> assert str(Q) == "Q"\n', 'hidden': False, 'locked': False},
                                   {   'code': '>>> assert len(demand.as_coefficients_dict()) == 2 # check that it is a line;\n'
                                               '>>> assert Q in demand.as_coefficients_dict() # check that the line has Q as its variable;\n'
                                               '>>> assert 1 in demand.as_coefficients_dict() # check that the line has an intercept\n',
                                       'hidden': False,
                                       'locked': False}],
                      'scored': True,
                      'setup': '',
                      'teardown': '',
                      'type': 'doctest'}]}
