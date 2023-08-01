function cov_22b9wzr3k0() {
  var path = "/Users/phamquang/Documents/GitHub/intern/cypress/e2e/2-advanced-examples/aliasing.cy.js";
  var hash = "d3f5fe2e9fb1d9eba9f526e61be3deddface6ba7";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/phamquang/Documents/GitHub/intern/cypress/e2e/2-advanced-examples/aliasing.cy.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 39,
          column: 2
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 6,
          column: 4
        }
      },
      "2": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 5,
          column: 60
        }
      },
      "3": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 26,
          column: 4
        }
      },
      "4": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 17,
          column: 36
        }
      },
      "5": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 31
        }
      },
      "6": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 25,
          column: 32
        }
      },
      "7": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 38,
          column: 4
        }
      },
      "8": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 57
        }
      },
      "9": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 34,
          column: 34
        }
      },
      "10": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 37,
          column: 71
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 20
          },
          end: {
            line: 3,
            column: 21
          }
        },
        loc: {
          start: {
            line: 3,
            column: 26
          },
          end: {
            line: 39,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 4,
            column: 13
          },
          end: {
            line: 4,
            column: 14
          }
        },
        loc: {
          start: {
            line: 4,
            column: 19
          },
          end: {
            line: 6,
            column: 3
          }
        },
        line: 4
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 8,
            column: 50
          },
          end: {
            line: 8,
            column: 51
          }
        },
        loc: {
          start: {
            line: 8,
            column: 56
          },
          end: {
            line: 26,
            column: 3
          }
        },
        line: 8
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 28,
            column: 44
          },
          end: {
            line: 28,
            column: 45
          }
        },
        loc: {
          start: {
            line: 28,
            column: 50
          },
          end: {
            line: 38,
            column: 3
          }
        },
        line: 28
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d3f5fe2e9fb1d9eba9f526e61be3deddface6ba7"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_22b9wzr3k0 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_22b9wzr3k0();
cov_22b9wzr3k0().s[0]++;
/// <reference types="cypress" />

context('Aliasing', () => {
  cov_22b9wzr3k0().f[0]++;
  cov_22b9wzr3k0().s[1]++;
  beforeEach(() => {
    cov_22b9wzr3k0().f[1]++;
    cov_22b9wzr3k0().s[2]++;
    cy.visit('https://example.cypress.io/commands/aliasing');
  });
  cov_22b9wzr3k0().s[3]++;
  it('.as() - alias a DOM element for later use', () => {
    cov_22b9wzr3k0().f[2]++;
    cov_22b9wzr3k0().s[4]++;
    // https://on.cypress.io/as

    // Alias a DOM element for use later
    // We don't have to traverse to the element
    // later in our code, we reference it with @

    cy.get('.as-table').find('tbody>tr').first().find('td').first().find('button').as('firstBtn');

    // when we reference the alias, we place an
    // @ in front of its name
    cov_22b9wzr3k0().s[5]++;
    cy.get('@firstBtn').click();
    cov_22b9wzr3k0().s[6]++;
    cy.get('@firstBtn').should('have.class', 'btn-success').and('contain', 'Changed');
  });
  cov_22b9wzr3k0().s[7]++;
  it('.as() - alias a route for later use', () => {
    cov_22b9wzr3k0().f[3]++;
    cov_22b9wzr3k0().s[8]++;
    // Alias the route to wait for its response
    cy.intercept('GET', '**/comments/*').as('getComment');

    // we have code that gets a comment when
    // the button is clicked in scripts.js
    cov_22b9wzr3k0().s[9]++;
    cy.get('.network-btn').click();

    // https://on.cypress.io/wait
    cov_22b9wzr3k0().s[10]++;
    cy.wait('@getComment').its('response.statusCode').should('eq', 200);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMjJiOXd6cjNrMCIsImFjdHVhbENvdmVyYWdlIiwicyIsImNvbnRleHQiLCJmIiwiYmVmb3JlRWFjaCIsImN5IiwidmlzaXQiLCJpdCIsImdldCIsImZpbmQiLCJmaXJzdCIsImFzIiwiY2xpY2siLCJzaG91bGQiLCJhbmQiLCJpbnRlcmNlcHQiLCJ3YWl0IiwiaXRzIl0sInNvdXJjZXMiOlsiYWxpYXNpbmcuY3kuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJjeXByZXNzXCIgLz5cblxuY29udGV4dCgnQWxpYXNpbmcnLCAoKSA9PiB7XG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIGN5LnZpc2l0KCdodHRwczovL2V4YW1wbGUuY3lwcmVzcy5pby9jb21tYW5kcy9hbGlhc2luZycpXG4gIH0pXG5cbiAgaXQoJy5hcygpIC0gYWxpYXMgYSBET00gZWxlbWVudCBmb3IgbGF0ZXIgdXNlJywgKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9hc1xuXG4gICAgLy8gQWxpYXMgYSBET00gZWxlbWVudCBmb3IgdXNlIGxhdGVyXG4gICAgLy8gV2UgZG9uJ3QgaGF2ZSB0byB0cmF2ZXJzZSB0byB0aGUgZWxlbWVudFxuICAgIC8vIGxhdGVyIGluIG91ciBjb2RlLCB3ZSByZWZlcmVuY2UgaXQgd2l0aCBAXG5cbiAgICBjeS5nZXQoJy5hcy10YWJsZScpLmZpbmQoJ3Rib2R5PnRyJylcbiAgICAgIC5maXJzdCgpLmZpbmQoJ3RkJykuZmlyc3QoKVxuICAgICAgLmZpbmQoJ2J1dHRvbicpLmFzKCdmaXJzdEJ0bicpXG5cbiAgICAvLyB3aGVuIHdlIHJlZmVyZW5jZSB0aGUgYWxpYXMsIHdlIHBsYWNlIGFuXG4gICAgLy8gQCBpbiBmcm9udCBvZiBpdHMgbmFtZVxuICAgIGN5LmdldCgnQGZpcnN0QnRuJykuY2xpY2soKVxuXG4gICAgY3kuZ2V0KCdAZmlyc3RCdG4nKVxuICAgICAgLnNob3VsZCgnaGF2ZS5jbGFzcycsICdidG4tc3VjY2VzcycpXG4gICAgICAuYW5kKCdjb250YWluJywgJ0NoYW5nZWQnKVxuICB9KVxuXG4gIGl0KCcuYXMoKSAtIGFsaWFzIGEgcm91dGUgZm9yIGxhdGVyIHVzZScsICgpID0+IHtcbiAgICAvLyBBbGlhcyB0aGUgcm91dGUgdG8gd2FpdCBmb3IgaXRzIHJlc3BvbnNlXG4gICAgY3kuaW50ZXJjZXB0KCdHRVQnLCAnKiovY29tbWVudHMvKicpLmFzKCdnZXRDb21tZW50JylcblxuICAgIC8vIHdlIGhhdmUgY29kZSB0aGF0IGdldHMgYSBjb21tZW50IHdoZW5cbiAgICAvLyB0aGUgYnV0dG9uIGlzIGNsaWNrZWQgaW4gc2NyaXB0cy5qc1xuICAgIGN5LmdldCgnLm5ldHdvcmstYnRuJykuY2xpY2soKVxuXG4gICAgLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL3dhaXRcbiAgICBjeS53YWl0KCdAZ2V0Q29tbWVudCcpLml0cygncmVzcG9uc2Uuc3RhdHVzQ29kZScpLnNob3VsZCgnZXEnLCAyMDApXG4gIH0pXG59KVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsY0FBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsY0FBQTtBQUFBQSxjQUFBLEdBQUFFLENBQUE7QUFmWjs7QUFFQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxNQUFNO0VBQUFILGNBQUEsR0FBQUksQ0FBQTtFQUFBSixjQUFBLEdBQUFFLENBQUE7RUFDeEJHLFVBQVUsQ0FBQyxNQUFNO0lBQUFMLGNBQUEsR0FBQUksQ0FBQTtJQUFBSixjQUFBLEdBQUFFLENBQUE7SUFDZkksRUFBRSxDQUFDQyxLQUFLLENBQUMsOENBQThDLENBQUM7RUFDMUQsQ0FBQyxDQUFDO0VBQUFQLGNBQUEsR0FBQUUsQ0FBQTtFQUVGTSxFQUFFLENBQUMsMkNBQTJDLEVBQUUsTUFBTTtJQUFBUixjQUFBLEdBQUFJLENBQUE7SUFBQUosY0FBQSxHQUFBRSxDQUFBO0lBQ3BEOztJQUVBO0lBQ0E7SUFDQTs7SUFFQUksRUFBRSxDQUFDRyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUNDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FDakNDLEtBQUssQ0FBQyxDQUFDLENBQUNELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FDMUJELElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQ0UsRUFBRSxDQUFDLFVBQVUsQ0FBQzs7SUFFaEM7SUFDQTtJQUFBWixjQUFBLEdBQUFFLENBQUE7SUFDQUksRUFBRSxDQUFDRyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUNJLEtBQUssQ0FBQyxDQUFDO0lBQUFiLGNBQUEsR0FBQUUsQ0FBQTtJQUUzQkksRUFBRSxDQUFDRyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQ2hCSyxNQUFNLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUNuQ0MsR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUM7RUFDOUIsQ0FBQyxDQUFDO0VBQUFmLGNBQUEsR0FBQUUsQ0FBQTtFQUVGTSxFQUFFLENBQUMscUNBQXFDLEVBQUUsTUFBTTtJQUFBUixjQUFBLEdBQUFJLENBQUE7SUFBQUosY0FBQSxHQUFBRSxDQUFBO0lBQzlDO0lBQ0FJLEVBQUUsQ0FBQ1UsU0FBUyxDQUFDLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQ0osRUFBRSxDQUFDLFlBQVksQ0FBQzs7SUFFckQ7SUFDQTtJQUFBWixjQUFBLEdBQUFFLENBQUE7SUFDQUksRUFBRSxDQUFDRyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUNJLEtBQUssQ0FBQyxDQUFDOztJQUU5QjtJQUFBYixjQUFBLEdBQUFFLENBQUE7SUFDQUksRUFBRSxDQUFDVyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUNDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDSixNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztFQUNyRSxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMifQ==