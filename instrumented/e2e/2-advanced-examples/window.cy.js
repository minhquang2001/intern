function cov_agg65am7b() {
  var path = "/Users/phamquang/Documents/GitHub/intern/cypress/e2e/2-advanced-examples/window.cy.js";
  var hash = "6934c545ede96926ee95c116f4bbb94c99ae16bb";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/phamquang/Documents/GitHub/intern/cypress/e2e/2-advanced-examples/window.cy.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 22,
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
          column: 58
        }
      },
      "3": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 11,
          column: 4
        }
      },
      "4": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 10,
          column: 46
        }
      },
      "5": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 16,
          column: 4
        }
      },
      "6": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 71
        }
      },
      "7": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 21,
          column: 4
        }
      },
      "8": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 48
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 18
          },
          end: {
            line: 3,
            column: 19
          }
        },
        loc: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 22,
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
            column: 51
          },
          end: {
            line: 8,
            column: 52
          }
        },
        loc: {
          start: {
            line: 8,
            column: 57
          },
          end: {
            line: 11,
            column: 3
          }
        },
        line: 8
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 13,
            column: 48
          },
          end: {
            line: 13,
            column: 49
          }
        },
        loc: {
          start: {
            line: 13,
            column: 54
          },
          end: {
            line: 16,
            column: 3
          }
        },
        line: 13
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 18,
            column: 35
          },
          end: {
            line: 18,
            column: 36
          }
        },
        loc: {
          start: {
            line: 18,
            column: 41
          },
          end: {
            line: 21,
            column: 3
          }
        },
        line: 18
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
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6934c545ede96926ee95c116f4bbb94c99ae16bb"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_agg65am7b = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_agg65am7b();
cov_agg65am7b().s[0]++;
/// <reference types="cypress" />

context('Window', () => {
  cov_agg65am7b().f[0]++;
  cov_agg65am7b().s[1]++;
  beforeEach(() => {
    cov_agg65am7b().f[1]++;
    cov_agg65am7b().s[2]++;
    cy.visit('https://example.cypress.io/commands/window');
  });
  cov_agg65am7b().s[3]++;
  it('cy.window() - get the global window object', () => {
    cov_agg65am7b().f[2]++;
    cov_agg65am7b().s[4]++;
    // https://on.cypress.io/window
    cy.window().should('have.property', 'top');
  });
  cov_agg65am7b().s[5]++;
  it('cy.document() - get the document object', () => {
    cov_agg65am7b().f[3]++;
    cov_agg65am7b().s[6]++;
    // https://on.cypress.io/document
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
  });
  cov_agg65am7b().s[7]++;
  it('cy.title() - get the title', () => {
    cov_agg65am7b().f[4]++;
    cov_agg65am7b().s[8]++;
    // https://on.cypress.io/title
    cy.title().should('include', 'Kitchen Sink');
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfYWdnNjVhbTdiIiwiYWN0dWFsQ292ZXJhZ2UiLCJzIiwiY29udGV4dCIsImYiLCJiZWZvcmVFYWNoIiwiY3kiLCJ2aXNpdCIsIml0Iiwid2luZG93Iiwic2hvdWxkIiwiZG9jdW1lbnQiLCJhbmQiLCJ0aXRsZSJdLCJzb3VyY2VzIjpbIndpbmRvdy5jeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cImN5cHJlc3NcIiAvPlxuXG5jb250ZXh0KCdXaW5kb3cnLCAoKSA9PiB7XG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIGN5LnZpc2l0KCdodHRwczovL2V4YW1wbGUuY3lwcmVzcy5pby9jb21tYW5kcy93aW5kb3cnKVxuICB9KVxuXG4gIGl0KCdjeS53aW5kb3coKSAtIGdldCB0aGUgZ2xvYmFsIHdpbmRvdyBvYmplY3QnLCAoKSA9PiB7XG4gICAgLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL3dpbmRvd1xuICAgIGN5LndpbmRvdygpLnNob3VsZCgnaGF2ZS5wcm9wZXJ0eScsICd0b3AnKVxuICB9KVxuXG4gIGl0KCdjeS5kb2N1bWVudCgpIC0gZ2V0IHRoZSBkb2N1bWVudCBvYmplY3QnLCAoKSA9PiB7XG4gICAgLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL2RvY3VtZW50XG4gICAgY3kuZG9jdW1lbnQoKS5zaG91bGQoJ2hhdmUucHJvcGVydHknLCAnY2hhcnNldCcpLmFuZCgnZXEnLCAnVVRGLTgnKVxuICB9KVxuXG4gIGl0KCdjeS50aXRsZSgpIC0gZ2V0IHRoZSB0aXRsZScsICgpID0+IHtcbiAgICAvLyBodHRwczovL29uLmN5cHJlc3MuaW8vdGl0bGVcbiAgICBjeS50aXRsZSgpLnNob3VsZCgnaW5jbHVkZScsICdLaXRjaGVuIFNpbmsnKVxuICB9KVxufSlcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGFBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGFBQUE7QUFBQUEsYUFBQSxHQUFBRSxDQUFBO0FBZlo7O0FBRUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTTtFQUFBSCxhQUFBLEdBQUFJLENBQUE7RUFBQUosYUFBQSxHQUFBRSxDQUFBO0VBQ3RCRyxVQUFVLENBQUMsTUFBTTtJQUFBTCxhQUFBLEdBQUFJLENBQUE7SUFBQUosYUFBQSxHQUFBRSxDQUFBO0lBQ2ZJLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDLDRDQUE0QyxDQUFDO0VBQ3hELENBQUMsQ0FBQztFQUFBUCxhQUFBLEdBQUFFLENBQUE7RUFFRk0sRUFBRSxDQUFDLDRDQUE0QyxFQUFFLE1BQU07SUFBQVIsYUFBQSxHQUFBSSxDQUFBO0lBQUFKLGFBQUEsR0FBQUUsQ0FBQTtJQUNyRDtJQUNBSSxFQUFFLENBQUNHLE1BQU0sQ0FBQyxDQUFDLENBQUNDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDO0VBQzVDLENBQUMsQ0FBQztFQUFBVixhQUFBLEdBQUFFLENBQUE7RUFFRk0sRUFBRSxDQUFDLHlDQUF5QyxFQUFFLE1BQU07SUFBQVIsYUFBQSxHQUFBSSxDQUFBO0lBQUFKLGFBQUEsR0FBQUUsQ0FBQTtJQUNsRDtJQUNBSSxFQUFFLENBQUNLLFFBQVEsQ0FBQyxDQUFDLENBQUNELE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUNFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO0VBQ3JFLENBQUMsQ0FBQztFQUFBWixhQUFBLEdBQUFFLENBQUE7RUFFRk0sRUFBRSxDQUFDLDRCQUE0QixFQUFFLE1BQU07SUFBQVIsYUFBQSxHQUFBSSxDQUFBO0lBQUFKLGFBQUEsR0FBQUUsQ0FBQTtJQUNyQztJQUNBSSxFQUFFLENBQUNPLEtBQUssQ0FBQyxDQUFDLENBQUNILE1BQU0sQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDO0VBQzlDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyJ9