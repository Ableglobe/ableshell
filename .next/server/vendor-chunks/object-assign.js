"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/object-assign";
exports.ids = ["vendor-chunks/object-assign"];
exports.modules = {

/***/ "(ssr)/./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/*\nobject-assign\n(c) Sindre Sorhus\n@license MIT\n*/ \n/* eslint-disable no-unused-vars */ var getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\nvar propIsEnumerable = Object.prototype.propertyIsEnumerable;\nfunction toObject(val) {\n    if (val === null || val === undefined) {\n        throw new TypeError(\"Object.assign cannot be called with null or undefined\");\n    }\n    return Object(val);\n}\nfunction shouldUseNative() {\n    try {\n        if (!Object.assign) {\n            return false;\n        }\n        // Detect buggy property enumeration order in older V8 versions.\n        // https://bugs.chromium.org/p/v8/issues/detail?id=4118\n        var test1 = new String(\"abc\"); // eslint-disable-line no-new-wrappers\n        test1[5] = \"de\";\n        if (Object.getOwnPropertyNames(test1)[0] === \"5\") {\n            return false;\n        }\n        // https://bugs.chromium.org/p/v8/issues/detail?id=3056\n        var test2 = {};\n        for(var i = 0; i < 10; i++){\n            test2[\"_\" + String.fromCharCode(i)] = i;\n        }\n        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {\n            return test2[n];\n        });\n        if (order2.join(\"\") !== \"0123456789\") {\n            return false;\n        }\n        // https://bugs.chromium.org/p/v8/issues/detail?id=3056\n        var test3 = {};\n        \"abcdefghijklmnopqrst\".split(\"\").forEach(function(letter) {\n            test3[letter] = letter;\n        });\n        if (Object.keys(Object.assign({}, test3)).join(\"\") !== \"abcdefghijklmnopqrst\") {\n            return false;\n        }\n        return true;\n    } catch (err) {\n        // We don't expect any of the above to throw, but better to be safe.\n        return false;\n    }\n}\nmodule.exports = shouldUseNative() ? Object.assign : function(target, source) {\n    var from;\n    var to = toObject(target);\n    var symbols;\n    for(var s = 1; s < arguments.length; s++){\n        from = Object(arguments[s]);\n        for(var key in from){\n            if (hasOwnProperty.call(from, key)) {\n                to[key] = from[key];\n            }\n        }\n        if (getOwnPropertySymbols) {\n            symbols = getOwnPropertySymbols(from);\n            for(var i = 0; i < symbols.length; i++){\n                if (propIsEnumerable.call(from, symbols[i])) {\n                    to[symbols[i]] = from[symbols[i]];\n                }\n            }\n        }\n    }\n    return to;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7OztBQUlBLEdBRUE7QUFDQSxpQ0FBaUMsR0FDakMsSUFBSUEsd0JBQXdCQyxPQUFPRCxxQkFBcUI7QUFDeEQsSUFBSUUsaUJBQWlCRCxPQUFPRSxTQUFTLENBQUNELGNBQWM7QUFDcEQsSUFBSUUsbUJBQW1CSCxPQUFPRSxTQUFTLENBQUNFLG9CQUFvQjtBQUU1RCxTQUFTQyxTQUFTQyxHQUFHO0lBQ3BCLElBQUlBLFFBQVEsUUFBUUEsUUFBUUMsV0FBVztRQUN0QyxNQUFNLElBQUlDLFVBQVU7SUFDckI7SUFFQSxPQUFPUixPQUFPTTtBQUNmO0FBRUEsU0FBU0c7SUFDUixJQUFJO1FBQ0gsSUFBSSxDQUFDVCxPQUFPVSxNQUFNLEVBQUU7WUFDbkIsT0FBTztRQUNSO1FBRUEsZ0VBQWdFO1FBRWhFLHVEQUF1RDtRQUN2RCxJQUFJQyxRQUFRLElBQUlDLE9BQU8sUUFBUyxzQ0FBc0M7UUFDdEVELEtBQUssQ0FBQyxFQUFFLEdBQUc7UUFDWCxJQUFJWCxPQUFPYSxtQkFBbUIsQ0FBQ0YsTUFBTSxDQUFDLEVBQUUsS0FBSyxLQUFLO1lBQ2pELE9BQU87UUFDUjtRQUVBLHVEQUF1RDtRQUN2RCxJQUFJRyxRQUFRLENBQUM7UUFDYixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSSxJQUFJQSxJQUFLO1lBQzVCRCxLQUFLLENBQUMsTUFBTUYsT0FBT0ksWUFBWSxDQUFDRCxHQUFHLEdBQUdBO1FBQ3ZDO1FBQ0EsSUFBSUUsU0FBU2pCLE9BQU9hLG1CQUFtQixDQUFDQyxPQUFPSSxHQUFHLENBQUMsU0FBVUMsQ0FBQztZQUM3RCxPQUFPTCxLQUFLLENBQUNLLEVBQUU7UUFDaEI7UUFDQSxJQUFJRixPQUFPRyxJQUFJLENBQUMsUUFBUSxjQUFjO1lBQ3JDLE9BQU87UUFDUjtRQUVBLHVEQUF1RDtRQUN2RCxJQUFJQyxRQUFRLENBQUM7UUFDYix1QkFBdUJDLEtBQUssQ0FBQyxJQUFJQyxPQUFPLENBQUMsU0FBVUMsTUFBTTtZQUN4REgsS0FBSyxDQUFDRyxPQUFPLEdBQUdBO1FBQ2pCO1FBQ0EsSUFBSXhCLE9BQU95QixJQUFJLENBQUN6QixPQUFPVSxNQUFNLENBQUMsQ0FBQyxHQUFHVyxRQUFRRCxJQUFJLENBQUMsUUFDN0Msd0JBQXdCO1lBQ3pCLE9BQU87UUFDUjtRQUVBLE9BQU87SUFDUixFQUFFLE9BQU9NLEtBQUs7UUFDYixvRUFBb0U7UUFDcEUsT0FBTztJQUNSO0FBQ0Q7QUFFQUMsT0FBT0MsT0FBTyxHQUFHbkIsb0JBQW9CVCxPQUFPVSxNQUFNLEdBQUcsU0FBVW1CLE1BQU0sRUFBRUMsTUFBTTtJQUM1RSxJQUFJQztJQUNKLElBQUlDLEtBQUszQixTQUFTd0I7SUFDbEIsSUFBSUk7SUFFSixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUMsVUFBVUMsTUFBTSxFQUFFRixJQUFLO1FBQzFDSCxPQUFPL0IsT0FBT21DLFNBQVMsQ0FBQ0QsRUFBRTtRQUUxQixJQUFLLElBQUlHLE9BQU9OLEtBQU07WUFDckIsSUFBSTlCLGVBQWVxQyxJQUFJLENBQUNQLE1BQU1NLE1BQU07Z0JBQ25DTCxFQUFFLENBQUNLLElBQUksR0FBR04sSUFBSSxDQUFDTSxJQUFJO1lBQ3BCO1FBQ0Q7UUFFQSxJQUFJdEMsdUJBQXVCO1lBQzFCa0MsVUFBVWxDLHNCQUFzQmdDO1lBQ2hDLElBQUssSUFBSWhCLElBQUksR0FBR0EsSUFBSWtCLFFBQVFHLE1BQU0sRUFBRXJCLElBQUs7Z0JBQ3hDLElBQUlaLGlCQUFpQm1DLElBQUksQ0FBQ1AsTUFBTUUsT0FBTyxDQUFDbEIsRUFBRSxHQUFHO29CQUM1Q2lCLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDbEIsRUFBRSxDQUFDLEdBQUdnQixJQUFJLENBQUNFLE9BQU8sQ0FBQ2xCLEVBQUUsQ0FBQztnQkFDbEM7WUFDRDtRQUNEO0lBQ0Q7SUFFQSxPQUFPaUI7QUFDUiIsInNvdXJjZXMiOlsid2VicGFjazovL3R1cnRsZXNoZWxsLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanM/YTFkNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIl0sIm5hbWVzIjpbImdldE93blByb3BlcnR5U3ltYm9scyIsIk9iamVjdCIsImhhc093blByb3BlcnR5IiwicHJvdG90eXBlIiwicHJvcElzRW51bWVyYWJsZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidG9PYmplY3QiLCJ2YWwiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJzaG91bGRVc2VOYXRpdmUiLCJhc3NpZ24iLCJ0ZXN0MSIsIlN0cmluZyIsImdldE93blByb3BlcnR5TmFtZXMiLCJ0ZXN0MiIsImkiLCJmcm9tQ2hhckNvZGUiLCJvcmRlcjIiLCJtYXAiLCJuIiwiam9pbiIsInRlc3QzIiwic3BsaXQiLCJmb3JFYWNoIiwibGV0dGVyIiwia2V5cyIsImVyciIsIm1vZHVsZSIsImV4cG9ydHMiLCJ0YXJnZXQiLCJzb3VyY2UiLCJmcm9tIiwidG8iLCJzeW1ib2xzIiwicyIsImFyZ3VtZW50cyIsImxlbmd0aCIsImtleSIsImNhbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/object-assign/index.js\n");

/***/ })

};
;