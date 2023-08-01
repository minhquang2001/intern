function cov_9agii3z7p() {
  var path = "/Users/phamquang/Documents/GitHub/intern/cypress/home.spec.js";
  var hash = "f91d37166a66d30ff79356bd8e5d84f11acee954";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/phamquang/Documents/GitHub/intern/cypress/home.spec.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 0
        },
        end: {
          line: 7,
          column: 2
        }
      },
      "1": {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 6,
          column: 6
        }
      },
      "2": {
        start: {
          line: 4,
          column: 8
        },
        end: {
          line: 4,
          column: 42
        }
      },
      "3": {
        start: {
          line: 5,
          column: 8
        },
        end: {
          line: 5,
          column: 50
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 2,
            column: 22
          },
          end: {
            line: 2,
            column: 23
          }
        },
        loc: {
          start: {
            line: 2,
            column: 28
          },
          end: {
            line: 7,
            column: 1
          }
        },
        line: 2
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 3,
            column: 29
          },
          end: {
            line: 3,
            column: 30
          }
        },
        loc: {
          start: {
            line: 3,
            column: 35
          },
          end: {
            line: 6,
            column: 5
          }
        },
        line: 3
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f91d37166a66d30ff79356bd8e5d84f11acee954"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_9agii3z7p = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_9agii3z7p();
cov_9agii3z7p().s[0]++;
// cypress/integration/home.spec.js
describe('Home Page', () => {
  cov_9agii3z7p().f[0]++;
  cov_9agii3z7p().s[1]++;
  it('successfully loads', () => {
    cov_9agii3z7p().f[1]++;
    cov_9agii3z7p().s[2]++;
    cy.visit('https://localhost:3000'); // Thay đổi thành URL của trang chủ của ứng dụng Nuxt.js
    cov_9agii3z7p().s[3]++;
    cy.contains('Welcome to Your Nuxt.js App'); // Đảm bảo trang chủ có nội dung "Welcome to Your Nuxt.js App"
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfOWFnaWkzejdwIiwiYWN0dWFsQ292ZXJhZ2UiLCJzIiwiZGVzY3JpYmUiLCJmIiwiaXQiLCJjeSIsInZpc2l0IiwiY29udGFpbnMiXSwic291cmNlcyI6WyJob21lLnNwZWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY3lwcmVzcy9pbnRlZ3JhdGlvbi9ob21lLnNwZWMuanNcbmRlc2NyaWJlKCdIb21lIFBhZ2UnLCAoKSA9PiB7XG4gICAgaXQoJ3N1Y2Nlc3NmdWxseSBsb2FkcycsICgpID0+IHtcbiAgICAgICAgY3kudmlzaXQoJ2h0dHBzOi8vbG9jYWxob3N0OjMwMDAnKSAvLyBUaGF5IMSR4buVaSB0aMOgbmggVVJMIGPhu6dhIHRyYW5nIGNo4bunIGPhu6dhIOG7qW5nIGThu6VuZyBOdXh0LmpzXG4gICAgICAgIGN5LmNvbnRhaW5zKCdXZWxjb21lIHRvIFlvdXIgTnV4dC5qcyBBcHAnKSAvLyDEkOG6o20gYuG6o28gdHJhbmcgY2jhu6cgY8OzIG7hu5lpIGR1bmcgXCJXZWxjb21lIHRvIFlvdXIgTnV4dC5qcyBBcHBcIlxuICAgIH0pXG59KVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxhQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxhQUFBO0FBQUFBLGFBQUEsR0FBQUUsQ0FBQTtBQWZaO0FBQ0FDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsTUFBTTtFQUFBSCxhQUFBLEdBQUFJLENBQUE7RUFBQUosYUFBQSxHQUFBRSxDQUFBO0VBQ3hCRyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsTUFBTTtJQUFBTCxhQUFBLEdBQUFJLENBQUE7SUFBQUosYUFBQSxHQUFBRSxDQUFBO0lBQzNCSSxFQUFFLENBQUNDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxFQUFDO0lBQUFQLGFBQUEsR0FBQUUsQ0FBQTtJQUNuQ0ksRUFBRSxDQUFDRSxRQUFRLENBQUMsNkJBQTZCLENBQUMsRUFBQztFQUMvQyxDQUFDLENBQUM7QUFDTixDQUFDLENBQUMifQ==