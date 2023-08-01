function cov_fue1xwydj() {
  var path = "/Users/phamquang/Documents/GitHub/intern/cypress/support/component.js";
  var hash = "452e4b17a93c205c74254a8127a9c3e9902191b5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/phamquang/Documents/GitHub/intern/cypress/support/component.js",
    statementMap: {
      "0": {
        start: {
          line: 24,
          column: 0
        },
        end: {
          line: 24,
          column: 36
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "452e4b17a93c205c74254a8127a9c3e9902191b5"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_fue1xwydj = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_fue1xwydj();
// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from 'cypress/vue2';
cov_fue1xwydj().s[0]++;
Cypress.Commands.add('mount', mount);

// Example use:
// cy.mount(MyComponent)
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfZnVlMXh3eWRqIiwiYWN0dWFsQ292ZXJhZ2UiLCJtb3VudCIsInMiLCJDeXByZXNzIiwiQ29tbWFuZHMiLCJhZGQiXSwic291cmNlcyI6WyJjb21wb25lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vIFRoaXMgZXhhbXBsZSBzdXBwb3J0L2NvbXBvbmVudC5qcyBpcyBwcm9jZXNzZWQgYW5kXG4vLyBsb2FkZWQgYXV0b21hdGljYWxseSBiZWZvcmUgeW91ciB0ZXN0IGZpbGVzLlxuLy9cbi8vIFRoaXMgaXMgYSBncmVhdCBwbGFjZSB0byBwdXQgZ2xvYmFsIGNvbmZpZ3VyYXRpb24gYW5kXG4vLyBiZWhhdmlvciB0aGF0IG1vZGlmaWVzIEN5cHJlc3MuXG4vL1xuLy8gWW91IGNhbiBjaGFuZ2UgdGhlIGxvY2F0aW9uIG9mIHRoaXMgZmlsZSBvciB0dXJuIG9mZlxuLy8gYXV0b21hdGljYWxseSBzZXJ2aW5nIHN1cHBvcnQgZmlsZXMgd2l0aCB0aGVcbi8vICdzdXBwb3J0RmlsZScgY29uZmlndXJhdGlvbiBvcHRpb24uXG4vL1xuLy8gWW91IGNhbiByZWFkIG1vcmUgaGVyZTpcbi8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9jb25maWd1cmF0aW9uXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4vLyBJbXBvcnQgY29tbWFuZHMuanMgdXNpbmcgRVMyMDE1IHN5bnRheDpcbmltcG9ydCAnLi9jb21tYW5kcydcblxuLy8gQWx0ZXJuYXRpdmVseSB5b3UgY2FuIHVzZSBDb21tb25KUyBzeW50YXg6XG4vLyByZXF1aXJlKCcuL2NvbW1hbmRzJylcblxuaW1wb3J0IHsgbW91bnQgfSBmcm9tICdjeXByZXNzL3Z1ZTInXG5cbkN5cHJlc3MuQ29tbWFuZHMuYWRkKCdtb3VudCcsIG1vdW50KVxuXG4vLyBFeGFtcGxlIHVzZTpcbi8vIGN5Lm1vdW50KE15Q29tcG9uZW50KSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxhQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxhQUFBO0FBZlo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU8sWUFBWTs7QUFFbkI7QUFDQTs7QUFFQSxTQUFTRSxLQUFLLFFBQVEsY0FBYztBQUFBRixhQUFBLEdBQUFHLENBQUE7QUFFcENDLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxHQUFHLENBQUMsT0FBTyxFQUFFSixLQUFLLENBQUM7O0FBRXBDO0FBQ0EifQ==