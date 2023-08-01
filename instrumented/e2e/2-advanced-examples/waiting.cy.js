function cov_g9qcsxue4() {
  var path = "/Users/phamquang/Documents/GitHub/intern/cypress/e2e/2-advanced-examples/waiting.cy.js";
  var hash = "d91f8a6dec3293400eb7aa09644185a313d014a3";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/phamquang/Documents/GitHub/intern/cypress/e2e/2-advanced-examples/waiting.cy.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 31,
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
          column: 59
        }
      },
      "3": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 18,
          column: 4
        }
      },
      "4": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 59
        }
      },
      "5": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 17
        }
      },
      "6": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 59
        }
      },
      "7": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 17
        }
      },
      "8": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 59
        }
      },
      "9": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 17
        }
      },
      "10": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 30,
          column: 4
        }
      },
      "11": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 57
        }
      },
      "12": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 34
        }
      },
      "13": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 84
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 19
          },
          end: {
            line: 3,
            column: 20
          }
        },
        loc: {
          start: {
            line: 3,
            column: 25
          },
          end: {
            line: 31,
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
            line: 11,
            column: 55
          },
          end: {
            line: 11,
            column: 56
          }
        },
        loc: {
          start: {
            line: 11,
            column: 61
          },
          end: {
            line: 18,
            column: 3
          }
        },
        line: 11
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 20,
            column: 46
          },
          end: {
            line: 20,
            column: 47
          }
        },
        loc: {
          start: {
            line: 20,
            column: 52
          },
          end: {
            line: 30,
            column: 3
          }
        },
        line: 20
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
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d91f8a6dec3293400eb7aa09644185a313d014a3"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_g9qcsxue4 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_g9qcsxue4();
cov_g9qcsxue4().s[0]++;
/// <reference types="cypress" />

context('Waiting', () => {
  cov_g9qcsxue4().f[0]++;
  cov_g9qcsxue4().s[1]++;
  beforeEach(() => {
    cov_g9qcsxue4().f[1]++;
    cov_g9qcsxue4().s[2]++;
    cy.visit('https://example.cypress.io/commands/waiting');
  });
  // BE CAREFUL of adding unnecessary wait times.
  // https://on.cypress.io/best-practices#Unnecessary-Waiting

  // https://on.cypress.io/wait
  cov_g9qcsxue4().s[3]++;
  it('cy.wait() - wait for a specific amount of time', () => {
    cov_g9qcsxue4().f[2]++;
    cov_g9qcsxue4().s[4]++;
    cy.get('.wait-input1').type('Wait 1000ms after typing');
    cov_g9qcsxue4().s[5]++;
    cy.wait(1000);
    cov_g9qcsxue4().s[6]++;
    cy.get('.wait-input2').type('Wait 1000ms after typing');
    cov_g9qcsxue4().s[7]++;
    cy.wait(1000);
    cov_g9qcsxue4().s[8]++;
    cy.get('.wait-input3').type('Wait 1000ms after typing');
    cov_g9qcsxue4().s[9]++;
    cy.wait(1000);
  });
  cov_g9qcsxue4().s[10]++;
  it('cy.wait() - wait for a specific route', () => {
    cov_g9qcsxue4().f[3]++;
    cov_g9qcsxue4().s[11]++;
    // Listen to GET to comments/1
    cy.intercept('GET', '**/comments/*').as('getComment');

    // we have code that gets a comment when
    // the button is clicked in scripts.js
    cov_g9qcsxue4().s[12]++;
    cy.get('.network-btn').click();

    // wait for GET comments/1
    cov_g9qcsxue4().s[13]++;
    cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 304]);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfZzlxY3N4dWU0IiwiYWN0dWFsQ292ZXJhZ2UiLCJzIiwiY29udGV4dCIsImYiLCJiZWZvcmVFYWNoIiwiY3kiLCJ2aXNpdCIsIml0IiwiZ2V0IiwidHlwZSIsIndhaXQiLCJpbnRlcmNlcHQiLCJhcyIsImNsaWNrIiwiaXRzIiwic2hvdWxkIl0sInNvdXJjZXMiOlsid2FpdGluZy5jeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cImN5cHJlc3NcIiAvPlxuXG5jb250ZXh0KCdXYWl0aW5nJywgKCkgPT4ge1xuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBjeS52aXNpdCgnaHR0cHM6Ly9leGFtcGxlLmN5cHJlc3MuaW8vY29tbWFuZHMvd2FpdGluZycpXG4gIH0pXG4gIC8vIEJFIENBUkVGVUwgb2YgYWRkaW5nIHVubmVjZXNzYXJ5IHdhaXQgdGltZXMuXG4gIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9iZXN0LXByYWN0aWNlcyNVbm5lY2Vzc2FyeS1XYWl0aW5nXG5cbiAgLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL3dhaXRcbiAgaXQoJ2N5LndhaXQoKSAtIHdhaXQgZm9yIGEgc3BlY2lmaWMgYW1vdW50IG9mIHRpbWUnLCAoKSA9PiB7XG4gICAgY3kuZ2V0KCcud2FpdC1pbnB1dDEnKS50eXBlKCdXYWl0IDEwMDBtcyBhZnRlciB0eXBpbmcnKVxuICAgIGN5LndhaXQoMTAwMClcbiAgICBjeS5nZXQoJy53YWl0LWlucHV0MicpLnR5cGUoJ1dhaXQgMTAwMG1zIGFmdGVyIHR5cGluZycpXG4gICAgY3kud2FpdCgxMDAwKVxuICAgIGN5LmdldCgnLndhaXQtaW5wdXQzJykudHlwZSgnV2FpdCAxMDAwbXMgYWZ0ZXIgdHlwaW5nJylcbiAgICBjeS53YWl0KDEwMDApXG4gIH0pXG5cbiAgaXQoJ2N5LndhaXQoKSAtIHdhaXQgZm9yIGEgc3BlY2lmaWMgcm91dGUnLCAoKSA9PiB7XG4gICAgLy8gTGlzdGVuIHRvIEdFVCB0byBjb21tZW50cy8xXG4gICAgY3kuaW50ZXJjZXB0KCdHRVQnLCAnKiovY29tbWVudHMvKicpLmFzKCdnZXRDb21tZW50JylcblxuICAgIC8vIHdlIGhhdmUgY29kZSB0aGF0IGdldHMgYSBjb21tZW50IHdoZW5cbiAgICAvLyB0aGUgYnV0dG9uIGlzIGNsaWNrZWQgaW4gc2NyaXB0cy5qc1xuICAgIGN5LmdldCgnLm5ldHdvcmstYnRuJykuY2xpY2soKVxuXG4gICAgLy8gd2FpdCBmb3IgR0VUIGNvbW1lbnRzLzFcbiAgICBjeS53YWl0KCdAZ2V0Q29tbWVudCcpLml0cygncmVzcG9uc2Uuc3RhdHVzQ29kZScpLnNob3VsZCgnYmUub25lT2YnLCBbMjAwLCAzMDRdKVxuICB9KVxufSlcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGFBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGFBQUE7QUFBQUEsYUFBQSxHQUFBRSxDQUFBO0FBZlo7O0FBRUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTTtFQUFBSCxhQUFBLEdBQUFJLENBQUE7RUFBQUosYUFBQSxHQUFBRSxDQUFBO0VBQ3ZCRyxVQUFVLENBQUMsTUFBTTtJQUFBTCxhQUFBLEdBQUFJLENBQUE7SUFBQUosYUFBQSxHQUFBRSxDQUFBO0lBQ2ZJLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDLDZDQUE2QyxDQUFDO0VBQ3pELENBQUMsQ0FBQztFQUNGO0VBQ0E7O0VBRUE7RUFBQVAsYUFBQSxHQUFBRSxDQUFBO0VBQ0FNLEVBQUUsQ0FBQyxnREFBZ0QsRUFBRSxNQUFNO0lBQUFSLGFBQUEsR0FBQUksQ0FBQTtJQUFBSixhQUFBLEdBQUFFLENBQUE7SUFDekRJLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsMEJBQTBCLENBQUM7SUFBQVYsYUFBQSxHQUFBRSxDQUFBO0lBQ3ZESSxFQUFFLENBQUNLLElBQUksQ0FBQyxJQUFJLENBQUM7SUFBQVgsYUFBQSxHQUFBRSxDQUFBO0lBQ2JJLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsMEJBQTBCLENBQUM7SUFBQVYsYUFBQSxHQUFBRSxDQUFBO0lBQ3ZESSxFQUFFLENBQUNLLElBQUksQ0FBQyxJQUFJLENBQUM7SUFBQVgsYUFBQSxHQUFBRSxDQUFBO0lBQ2JJLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsMEJBQTBCLENBQUM7SUFBQVYsYUFBQSxHQUFBRSxDQUFBO0lBQ3ZESSxFQUFFLENBQUNLLElBQUksQ0FBQyxJQUFJLENBQUM7RUFDZixDQUFDLENBQUM7RUFBQVgsYUFBQSxHQUFBRSxDQUFBO0VBRUZNLEVBQUUsQ0FBQyx1Q0FBdUMsRUFBRSxNQUFNO0lBQUFSLGFBQUEsR0FBQUksQ0FBQTtJQUFBSixhQUFBLEdBQUFFLENBQUE7SUFDaEQ7SUFDQUksRUFBRSxDQUFDTSxTQUFTLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDQyxFQUFFLENBQUMsWUFBWSxDQUFDOztJQUVyRDtJQUNBO0lBQUFiLGFBQUEsR0FBQUUsQ0FBQTtJQUNBSSxFQUFFLENBQUNHLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQ0ssS0FBSyxDQUFDLENBQUM7O0lBRTlCO0lBQUFkLGFBQUEsR0FBQUUsQ0FBQTtJQUNBSSxFQUFFLENBQUNLLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQ0ksR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUNDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7RUFDbEYsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDIn0=