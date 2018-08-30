/*
 wysihtml5 v0.3.0
 https://github.com/xing/wysihtml5

 Author: Christopher Blum (https://github.com/tiff)

 Copyright (C) 2012 XING AG
 Licensed under the MIT license (MIT)

 Rangy, a cross-browser JavaScript range and selection library
 http://code.google.com/p/rangy/

 Copyright 2011, Tim Down
 Licensed under the MIT license.
 Version: 1.2.2
 Build date: 13 November 2011
*/
var wysihtml5={version:"0.3.0",commands:{},dom:{},quirks:{},toolbar:{},lang:{},selection:{},views:{},INVISIBLE_SPACE:"\ufeff",EMPTY_FUNCTION:function(){},ELEMENT_NODE:1,TEXT_NODE:3,BACKSPACE_KEY:8,ENTER_KEY:13,ESCAPE_KEY:27,SPACE_KEY:32,DELETE_KEY:46};
window.rangy=function(){function b(a,b){var c=typeof a[b];return c==k||!!(c==h&&a[b])||"unknown"==c}function c(a,b){return!!(typeof a[b]==h&&a[b])}function a(a,b){return typeof a[b]!=j}function d(a){return function(b,c){for(var d=c.length;d--;)if(!a(b,c[d]))return!1;return!0}}function e(a){return a&&m(a,r)&&x(a,q)}function f(a){window.alert("Rangy not supported in your browser. Reason: "+a);o.initialized=!0;o.supported=!1}function g(){if(!o.initialized){var a,d=!1,h=!1;b(document,"createRange")&&
(a=document.createRange(),m(a,p)&&x(a,n)&&(d=!0),a.detach());if((a=c(document,"body")?document.body:document.getElementsByTagName("body")[0])&&b(a,"createTextRange"))a=a.createTextRange(),e(a)&&(h=!0);!d&&!h&&f("Neither Range nor TextRange are implemented");o.initialized=!0;o.features={implementsDomRange:d,implementsTextRange:h};d=w.concat(z);h=0;for(a=d.length;h<a;++h)try{d[h](o)}catch(j){c(window,"console")&&b(window.console,"log")&&window.console.log("Init listener threw an exception. Continuing.",
j)}}}function i(a){this.name=a;this.supported=this.initialized=!1}var h="object",k="function",j="undefined",n="startContainer startOffset endContainer endOffset collapsed commonAncestorContainer START_TO_START START_TO_END END_TO_START END_TO_END".split(" "),p="setStart setStartBefore setStartAfter setEnd setEndBefore setEndAfter collapse selectNode selectNodeContents compareBoundaryPoints deleteContents extractContents cloneContents insertNode surroundContents cloneRange toString detach".split(" "),
q="boundingHeight boundingLeft boundingTop boundingWidth htmlText text".split(" "),r="collapse compareEndPoints duplicate getBookmark moveToBookmark moveToElementText parentElement pasteHTML select setEndPoint getBoundingClientRect".split(" "),m=d(b),s=d(c),x=d(a),o={version:"1.2.2",initialized:!1,supported:!0,util:{isHostMethod:b,isHostObject:c,isHostProperty:a,areHostMethods:m,areHostObjects:s,areHostProperties:x,isTextRange:e},features:{},modules:{},config:{alertOnWarn:!1,preferTextRange:!1}};
o.fail=f;o.warn=function(a){a="Rangy warning: "+a;o.config.alertOnWarn?window.alert(a):typeof window.console!=j&&typeof window.console.log!=j&&window.console.log(a)};({}).hasOwnProperty?o.util.extend=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}:f("hasOwnProperty not supported");var z=[],w=[];o.init=g;o.addInitListener=function(a){o.initialized?a(o):z.push(a)};var y=[];o.addCreateMissingNativeApiListener=function(a){y.push(a)};o.createMissingNativeApi=function(a){a=a||window;g();
for(var b=0,c=y.length;b<c;++b)y[b](a)};i.prototype.fail=function(a){this.initialized=!0;this.supported=!1;throw Error("Module '"+this.name+"' failed to load: "+a);};i.prototype.warn=function(a){o.warn("Module "+this.name+": "+a)};i.prototype.createError=function(a){return Error("Error in Rangy "+this.name+" module: "+a)};o.createModule=function(a,b){var c=new i(a);o.modules[a]=c;w.push(function(a){b(a,c);c.initialized=!0;c.supported=!0})};o.requireModules=function(a){for(var b=0,c=a.length,d,h;b<
c;++b){h=a[b];d=o.modules[h];if(!d||!(d instanceof i))throw Error("Module '"+h+"' not found");if(!d.supported)throw Error("Module '"+h+"' not supported");}};var A=!1,s=function(){A||(A=!0,o.initialized||g())};if(typeof window==j)f("No window found");else if(typeof document==j)f("No document found");else return b(document,"addEventListener")&&document.addEventListener("DOMContentLoaded",s,!1),b(window,"addEventListener")?window.addEventListener("load",s,!1):b(window,"attachEvent")?window.attachEvent("onload",
s):f("Window does not have required addEventListener or attachEvent method"),o}();
rangy.createModule("DomUtil",function(b,c){function a(a){for(var b=0;a=a.previousSibling;)b++;return b}function d(a,b){var c=[],d;for(d=a;d;d=d.parentNode)c.push(d);for(d=b;d;d=d.parentNode)if(m(c,d))return d;return null}function e(a,b,c){for(c=c?a:a.parentNode;c;){a=c.parentNode;if(a===b)return c;c=a}return null}function f(a){a=a.nodeType;return 3==a||4==a||8==a}function g(a,b){var c=b.nextSibling,d=b.parentNode;c?d.insertBefore(a,c):d.appendChild(a);return a}function i(a){if(9==a.nodeType)return a;
if(typeof a.ownerDocument!=p)return a.ownerDocument;if(typeof a.document!=p)return a.document;if(a.parentNode)return i(a.parentNode);throw Error("getDocument: no document found for node");}function h(a){return!a?"[No node]":f(a)?'"'+a.data+'"':1==a.nodeType?"<"+a.nodeName+(a.id?' id="'+a.id+'"':"")+">["+a.childNodes.length+"]":a.nodeName}function k(a){this._next=this.root=a}function j(a,b){this.node=a;this.offset=b}function n(a){this.code=this[a];this.codeName=a;this.message="DOMException: "+this.codeName}
var p="undefined",q=b.util;q.areHostMethods(document,["createDocumentFragment","createElement","createTextNode"])||c.fail("document missing a Node creation method");q.isHostMethod(document,"getElementsByTagName")||c.fail("document missing getElementsByTagName method");var r=document.createElement("div");q.areHostMethods(r,["insertBefore","appendChild","cloneNode"])||c.fail("Incomplete Element implementation");q.isHostProperty(r,"innerHTML")||c.fail("Element is missing innerHTML property");r=document.createTextNode("test");
q.areHostMethods(r,["splitText","deleteData","insertData","appendData","cloneNode"])||c.fail("Incomplete Text Node implementation");var m=function(a,b){for(var c=a.length;c--;)if(a[c]===b)return!0;return!1};k.prototype={_current:null,hasNext:function(){return!!this._next},next:function(){var a=this._current=this._next,b;if(this._current){b=a.firstChild;if(!b)for(b=null;a!==this.root&&!(b=a.nextSibling);)a=a.parentNode;this._next=b}return this._current},detach:function(){this._current=this._next=this.root=
null}};j.prototype={equals:function(a){return this.node===a.node&this.offset==a.offset},inspect:function(){return"[DomPosition("+h(this.node)+":"+this.offset+")]"}};n.prototype={INDEX_SIZE_ERR:1,HIERARCHY_REQUEST_ERR:3,WRONG_DOCUMENT_ERR:4,NO_MODIFICATION_ALLOWED_ERR:7,NOT_FOUND_ERR:8,NOT_SUPPORTED_ERR:9,INVALID_STATE_ERR:11};n.prototype.toString=function(){return this.message};b.dom={arrayContains:m,isHtmlNamespace:function(a){var b;return typeof a.namespaceURI==p||null===(b=a.namespaceURI)||"http://www.w3.org/1999/xhtml"==
b},parentElement:function(a){a=a.parentNode;return 1==a.nodeType?a:null},getNodeIndex:a,getNodeLength:function(a){var b;return f(a)?a.length:(b=a.childNodes)?b.length:0},getCommonAncestor:d,isAncestorOf:function(a,b,c){for(b=c?b:b.parentNode;b;){if(b===a)return!0;b=b.parentNode}return!1},getClosestAncestorIn:e,isCharacterDataNode:f,insertAfter:g,splitDataNode:function(a,b){var c=a.cloneNode(!1);c.deleteData(0,b);a.deleteData(b,a.length-b);g(c,a);return c},getDocument:i,getWindow:function(a){a=i(a);
if(typeof a.defaultView!=p)return a.defaultView;if(typeof a.parentWindow!=p)return a.parentWindow;throw Error("Cannot get a window object for node");},getIframeWindow:function(a){if(typeof a.contentWindow!=p)return a.contentWindow;if(typeof a.contentDocument!=p)return a.contentDocument.defaultView;throw Error("getIframeWindow: No Window object found for iframe element");},getIframeDocument:function(a){if(typeof a.contentDocument!=p)return a.contentDocument;if(typeof a.contentWindow!=p)return a.contentWindow.document;
throw Error("getIframeWindow: No Document object found for iframe element");},getBody:function(a){return q.isHostObject(a,"body")?a.body:a.getElementsByTagName("body")[0]},getRootContainer:function(a){for(var b;b=a.parentNode;)a=b;return a},comparePoints:function(b,c,h,j){var k;if(b==h)return c===j?0:c<j?-1:1;if(k=e(h,b,!0))return c<=a(k)?-1:1;if(k=e(b,h,!0))return a(k)<j?-1:1;c=d(b,h);b=b===c?c:e(b,c,!0);h=h===c?c:e(h,c,!0);if(b===h)throw Error("comparePoints got to case 4 and childA and childB are the same!");
for(c=c.firstChild;c;){if(c===b)return-1;if(c===h)return 1;c=c.nextSibling}throw Error("Should not be here!");},inspectNode:h,fragmentFromNodeChildren:function(a){for(var b=i(a).createDocumentFragment(),c;c=a.firstChild;)b.appendChild(c);return b},createIterator:function(a){return new k(a)},DomPosition:j};b.DOMException=n});
rangy.createModule("DomRange",function(b){function c(a,b){return 3!=a.nodeType&&(l.isAncestorOf(a,b.startContainer,!0)||l.isAncestorOf(a,b.endContainer,!0))}function a(a){return l.getDocument(a.startContainer)}function d(a,b,c){if(b=a._listeners[b])for(var d=0,h=b.length;d<h;++d)b[d].call(a,{target:a,args:c})}function e(a){return new u(a.parentNode,l.getNodeIndex(a))}function f(a){return new u(a.parentNode,l.getNodeIndex(a)+1)}function g(a,b,c){var d=11==a.nodeType?a.firstChild:a;l.isCharacterDataNode(b)?
c==b.length?l.insertAfter(a,b):b.parentNode.insertBefore(a,0==c?b:l.splitDataNode(b,c)):c>=b.childNodes.length?b.appendChild(a):b.insertBefore(a,b.childNodes[c]);return d}function i(b){for(var c,d,h=a(b.range).createDocumentFragment();d=b.next();){c=b.isPartiallySelectedSubtree();d=d.cloneNode(!c);c&&(c=b.getSubtreeIterator(),d.appendChild(i(c)),c.detach(!0));if(10==d.nodeType)throw new B("HIERARCHY_REQUEST_ERR");h.appendChild(d)}return h}function h(a,b,c){for(var d,e,c=c||{stop:!1};d=a.next();)if(a.isPartiallySelectedSubtree())if(!1===
b(d)){c.stop=!0;break}else{if(d=a.getSubtreeIterator(),h(d,b,c),d.detach(!0),c.stop)break}else for(d=l.createIterator(d);e=d.next();)if(!1===b(e)){c.stop=!0;return}}function k(a){for(var b;a.next();)a.isPartiallySelectedSubtree()?(b=a.getSubtreeIterator(),k(b),b.detach(!0)):a.remove()}function j(b){for(var c,d=a(b.range).createDocumentFragment(),h;c=b.next();){b.isPartiallySelectedSubtree()?(c=c.cloneNode(!1),h=b.getSubtreeIterator(),c.appendChild(j(h)),h.detach(!0)):b.remove();if(10==c.nodeType)throw new B("HIERARCHY_REQUEST_ERR");
d.appendChild(c)}return d}function n(a,b,c){var d=!(!b||!b.length),e,j=!!c;d&&(e=RegExp("^("+b.join("|")+")$"));var k=[];h(new q(a,!1),function(a){(!d||e.test(a.nodeType))&&(!j||c(a))&&k.push(a)});return k}function p(a){return"["+("undefined"==typeof a.getName?"Range":a.getName())+"("+l.inspectNode(a.startContainer)+":"+a.startOffset+", "+l.inspectNode(a.endContainer)+":"+a.endOffset+")]"}function q(a,b){this.range=a;this.clonePartiallySelectedTextNodes=b;if(!a.collapsed){this.sc=a.startContainer;
this.so=a.startOffset;this.ec=a.endContainer;this.eo=a.endOffset;var c=a.commonAncestorContainer;this.sc===this.ec&&l.isCharacterDataNode(this.sc)?(this.isSingleCharacterDataNode=!0,this._first=this._last=this._next=this.sc):(this._first=this._next=this.sc===c&&!l.isCharacterDataNode(this.sc)?this.sc.childNodes[this.so]:l.getClosestAncestorIn(this.sc,c,!0),this._last=this.ec===c&&!l.isCharacterDataNode(this.ec)?this.ec.childNodes[this.eo-1]:l.getClosestAncestorIn(this.ec,c,!0))}}function r(a){this.code=
this[a];this.codeName=a;this.message="RangeException: "+this.codeName}function m(a,b,c){this.nodes=n(a,b,c);this._next=this.nodes[0];this._position=0}function s(a){return function(b,c){for(var d,h=c?b:b.parentNode;h;){d=h.nodeType;if(l.arrayContains(a,d))return h;h=h.parentNode}return null}}function x(a,b){if($(a,b))throw new r("INVALID_NODE_TYPE_ERR");}function o(a){if(!a.startContainer)throw new B("INVALID_STATE_ERR");}function z(a,b){if(!l.arrayContains(b,a.nodeType))throw new r("INVALID_NODE_TYPE_ERR");
}function w(a,b){if(0>b||b>(l.isCharacterDataNode(a)?a.length:a.childNodes.length))throw new B("INDEX_SIZE_ERR");}function y(a,b){if(O(a,!0)!==O(b,!0))throw new B("WRONG_DOCUMENT_ERR");}function A(a){if(aa(a,!0))throw new B("NO_MODIFICATION_ALLOWED_ERR");}function t(a,b){if(!a)throw new B(b);}function v(a){o(a);if(!l.arrayContains(G,a.startContainer.nodeType)&&!O(a.startContainer,!0)||!l.arrayContains(G,a.endContainer.nodeType)&&!O(a.endContainer,!0)||!(a.startOffset<=(l.isCharacterDataNode(a.startContainer)?
a.startContainer.length:a.startContainer.childNodes.length))||!(a.endOffset<=(l.isCharacterDataNode(a.endContainer)?a.endContainer.length:a.endContainer.childNodes.length)))throw Error("Range error: Range is no longer valid after DOM mutation ("+a.inspect()+")");}function D(){}function K(a){a.START_TO_START=Q;a.START_TO_END=U;a.END_TO_END=ba;a.END_TO_START=V;a.NODE_BEFORE=W;a.NODE_AFTER=X;a.NODE_BEFORE_AND_AFTER=Y;a.NODE_INSIDE=R}function F(a){K(a);K(a.prototype)}function E(a,b){return function(){v(this);
var c=this.startContainer,d=this.startOffset,e=this.commonAncestorContainer,j=new q(this,!0);c!==e&&(c=l.getClosestAncestorIn(c,e,!0),d=f(c),c=d.node,d=d.offset);h(j,A);j.reset();e=a(j);j.detach();b(this,c,d,c,d);return e}}function I(a,d,h){function g(a,b){return function(c){o(this);z(c,L);z(M(c),G);c=(a?e:f)(c);(b?i:n)(this,c.node,c.offset)}}function i(a,b,c){var h=a.endContainer,e=a.endOffset;if(b!==a.startContainer||c!==a.startOffset){if(M(b)!=M(h)||1==l.comparePoints(b,c,h,e))h=b,e=c;d(a,b,c,
h,e)}}function n(a,b,c){var h=a.startContainer,e=a.startOffset;if(b!==a.endContainer||c!==a.endOffset){if(M(b)!=M(h)||-1==l.comparePoints(b,c,h,e))h=b,e=c;d(a,h,e,b,c)}}a.prototype=new D;b.util.extend(a.prototype,{setStart:function(a,b){o(this);x(a,!0);w(a,b);i(this,a,b)},setEnd:function(a,b){o(this);x(a,!0);w(a,b);n(this,a,b)},setStartBefore:g(!0,!0),setStartAfter:g(!1,!0),setEndBefore:g(!0,!1),setEndAfter:g(!1,!1),collapse:function(a){v(this);a?d(this,this.startContainer,this.startOffset,this.startContainer,
this.startOffset):d(this,this.endContainer,this.endOffset,this.endContainer,this.endOffset)},selectNodeContents:function(a){o(this);x(a,!0);d(this,a,0,a,l.getNodeLength(a))},selectNode:function(a){o(this);x(a,!1);z(a,L);var b=e(a),a=f(a);d(this,b.node,b.offset,a.node,a.offset)},extractContents:E(j,d),deleteContents:E(k,d),canSurroundContents:function(){v(this);A(this.startContainer);A(this.endContainer);var a=new q(this,!0),b=a._first&&c(a._first,this)||a._last&&c(a._last,this);a.detach();return!b},
detach:function(){h(this)},splitBoundaries:function(){v(this);var a=this.startContainer,b=this.startOffset,c=this.endContainer,h=this.endOffset,e=a===c;l.isCharacterDataNode(c)&&(0<h&&h<c.length)&&l.splitDataNode(c,h);l.isCharacterDataNode(a)&&(0<b&&b<a.length)&&(a=l.splitDataNode(a,b),e?(h-=b,c=a):c==a.parentNode&&h>=l.getNodeIndex(a)&&h++,b=0);d(this,a,b,c,h)},normalizeBoundaries:function(){v(this);var a=this.startContainer,b=this.startOffset,c=this.endContainer,h=this.endOffset,e=function(a){var b=
a.nextSibling;b&&b.nodeType==a.nodeType&&(c=a,h=a.length,a.appendData(b.data),b.parentNode.removeChild(b))},j=function(d){var e=d.previousSibling;if(e&&e.nodeType==d.nodeType){a=d;var j=d.length;b=e.length;d.insertData(0,e.data);e.parentNode.removeChild(e);a==c?(h+=b,c=a):c==d.parentNode&&(e=l.getNodeIndex(d),h==e?(c=d,h=j):h>e&&h--)}},k=!0;l.isCharacterDataNode(c)?c.length==h&&e(c):(0<h&&(k=c.childNodes[h-1])&&l.isCharacterDataNode(k)&&e(k),k=!this.collapsed);k?l.isCharacterDataNode(a)?0==b&&j(a):
b<a.childNodes.length&&(e=a.childNodes[b])&&l.isCharacterDataNode(e)&&j(e):(a=c,b=h);d(this,a,b,c,h)},collapseToPoint:function(a,b){o(this);x(a,!0);w(a,b);(a!==this.startContainer||b!==this.startOffset||a!==this.endContainer||b!==this.endOffset)&&d(this,a,b,a,b)}});F(a)}function N(a){a.collapsed=a.startContainer===a.endContainer&&a.startOffset===a.endOffset;a.commonAncestorContainer=a.collapsed?a.startContainer:l.getCommonAncestor(a.startContainer,a.endContainer)}function J(a,b,c,h,e){var j=a.startContainer!==
b||a.startOffset!==c,k=a.endContainer!==h||a.endOffset!==e;a.startContainer=b;a.startOffset=c;a.endContainer=h;a.endOffset=e;N(a);d(a,"boundarychange",{startMoved:j,endMoved:k})}function C(a){this.startContainer=a;this.startOffset=0;this.endContainer=a;this.endOffset=0;this._listeners={boundarychange:[],detach:[]};N(this)}b.requireModules(["DomUtil"]);var l=b.dom,u=l.DomPosition,B=b.DOMException;q.prototype={_current:null,_next:null,_first:null,_last:null,isSingleCharacterDataNode:!1,reset:function(){this._current=
null;this._next=this._first},hasNext:function(){return!!this._next},next:function(){var a=this._current=this._next;a&&(this._next=a!==this._last?a.nextSibling:null,l.isCharacterDataNode(a)&&this.clonePartiallySelectedTextNodes&&(a===this.ec&&(a=a.cloneNode(!0)).deleteData(this.eo,a.length-this.eo),this._current===this.sc&&(a=a.cloneNode(!0)).deleteData(0,this.so)));return a},remove:function(){var a=this._current,b,c;l.isCharacterDataNode(a)&&(a===this.sc||a===this.ec)?(b=a===this.sc?this.so:0,c=a===
this.ec?this.eo:a.length,b!=c&&a.deleteData(b,c-b)):a.parentNode&&a.parentNode.removeChild(a)},isPartiallySelectedSubtree:function(){return c(this._current,this.range)},getSubtreeIterator:function(){var b;if(this.isSingleCharacterDataNode)b=this.range.cloneRange(),b.collapse();else{b=new C(a(this.range));var c=this._current,d=c,h=0,e=c,j=l.getNodeLength(c);l.isAncestorOf(c,this.sc,!0)&&(d=this.sc,h=this.so);l.isAncestorOf(c,this.ec,!0)&&(e=this.ec,j=this.eo);J(b,d,h,e,j)}return new q(b,this.clonePartiallySelectedTextNodes)},
detach:function(a){a&&this.range.detach();this.range=this._current=this._next=this._first=this._last=this.sc=this.so=this.ec=this.eo=null}};r.prototype={BAD_BOUNDARYPOINTS_ERR:1,INVALID_NODE_TYPE_ERR:2};r.prototype.toString=function(){return this.message};m.prototype={_current:null,hasNext:function(){return!!this._next},next:function(){this._current=this._next;this._next=this.nodes[++this._position];return this._current},detach:function(){this._current=this._next=this.nodes=null}};var L=[1,3,4,5,
7,8,10],G=[2,9,11],P=[1,3,4,5,7,8,10,11],H=[1,3,4,5,7,8],M=l.getRootContainer,O=s([9,11]),aa=s([5,6,10,12]),$=s([6,10,12]),Z=document.createElement("style"),S=!1;try{Z.innerHTML="<b>x</b>",S=3==Z.firstChild.nodeType}catch(ca){}b.features.htmlParsingConforms=S;var T="startContainer startOffset endContainer endOffset collapsed commonAncestorContainer".split(" "),Q=0,U=1,ba=2,V=3,W=0,X=1,Y=2,R=3;D.prototype={attachListener:function(a,b){this._listeners[a].push(b)},compareBoundaryPoints:function(a,b){v(this);
y(this.startContainer,b.startContainer);var c=a==V||a==Q?"start":"end",d=a==U||a==Q?"start":"end";return l.comparePoints(this[c+"Container"],this[c+"Offset"],b[d+"Container"],b[d+"Offset"])},insertNode:function(a){v(this);z(a,P);A(this.startContainer);if(l.isAncestorOf(a,this.startContainer,!0))throw new B("HIERARCHY_REQUEST_ERR");this.setStartBefore(g(a,this.startContainer,this.startOffset))},cloneContents:function(){v(this);var b,c;if(this.collapsed)return a(this).createDocumentFragment();if(this.startContainer===
this.endContainer&&l.isCharacterDataNode(this.startContainer))return b=this.startContainer.cloneNode(!0),b.data=b.data.slice(this.startOffset,this.endOffset),c=a(this).createDocumentFragment(),c.appendChild(b),c;c=new q(this,!0);b=i(c);c.detach();return b},canSurroundContents:function(){v(this);A(this.startContainer);A(this.endContainer);var a=new q(this,!0),b=a._first&&c(a._first,this)||a._last&&c(a._last,this);a.detach();return!b},surroundContents:function(a){z(a,H);if(!this.canSurroundContents())throw new r("BAD_BOUNDARYPOINTS_ERR");
var b=this.extractContents();if(a.hasChildNodes())for(;a.lastChild;)a.removeChild(a.lastChild);g(a,this.startContainer,this.startOffset);a.appendChild(b);this.selectNode(a)},cloneRange:function(){v(this);for(var b=new C(a(this)),c=T.length,d;c--;)d=T[c],b[d]=this[d];return b},toString:function(){v(this);var a=this.startContainer;if(a===this.endContainer&&l.isCharacterDataNode(a))return 3==a.nodeType||4==a.nodeType?a.data.slice(this.startOffset,this.endOffset):"";var b=[],a=new q(this,!0);h(a,function(a){(3==
a.nodeType||4==a.nodeType)&&b.push(a.data)});a.detach();return b.join("")},compareNode:function(a){v(this);var b=a.parentNode,c=l.getNodeIndex(a);if(!b)throw new B("NOT_FOUND_ERR");a=this.comparePoint(b,c);b=this.comparePoint(b,c+1);return 0>a?0<b?Y:W:0<b?X:R},comparePoint:function(a,b){v(this);t(a,"HIERARCHY_REQUEST_ERR");y(a,this.startContainer);return 0>l.comparePoints(a,b,this.startContainer,this.startOffset)?-1:0<l.comparePoints(a,b,this.endContainer,this.endOffset)?1:0},createContextualFragment:S?
function(a){var b=this.startContainer,c=l.getDocument(b);if(!b)throw new B("INVALID_STATE_ERR");var d=null;1==b.nodeType?d=b:l.isCharacterDataNode(b)&&(d=l.parentElement(b));d=null===d||"HTML"==d.nodeName&&l.isHtmlNamespace(l.getDocument(d).documentElement)&&l.isHtmlNamespace(d)?c.createElement("body"):d.cloneNode(!1);d.innerHTML=a;return l.fragmentFromNodeChildren(d)}:function(b){o(this);var c=a(this).createElement("body");c.innerHTML=b;return l.fragmentFromNodeChildren(c)},toHtml:function(){v(this);
var b=a(this).createElement("div");b.appendChild(this.cloneContents());return b.innerHTML},intersectsNode:function(b,c){v(this);t(b,"NOT_FOUND_ERR");if(l.getDocument(b)!==a(this))return!1;var d=b.parentNode,h=l.getNodeIndex(b);t(d,"NOT_FOUND_ERR");var e=l.comparePoints(d,h,this.endContainer,this.endOffset),d=l.comparePoints(d,h+1,this.startContainer,this.startOffset);return c?0>=e&&0<=d:0>e&&0<d},isPointInRange:function(a,b){v(this);t(a,"HIERARCHY_REQUEST_ERR");y(a,this.startContainer);return 0<=
l.comparePoints(a,b,this.startContainer,this.startOffset)&&0>=l.comparePoints(a,b,this.endContainer,this.endOffset)},intersectsRange:function(b,c){v(this);if(a(b)!=a(this))throw new B("WRONG_DOCUMENT_ERR");var d=l.comparePoints(this.startContainer,this.startOffset,b.endContainer,b.endOffset),h=l.comparePoints(this.endContainer,this.endOffset,b.startContainer,b.startOffset);return c?0>=d&&0<=h:0>d&&0<h},intersection:function(a){if(this.intersectsRange(a)){var b=l.comparePoints(this.startContainer,
this.startOffset,a.startContainer,a.startOffset),c=l.comparePoints(this.endContainer,this.endOffset,a.endContainer,a.endOffset),d=this.cloneRange();-1==b&&d.setStart(a.startContainer,a.startOffset);1==c&&d.setEnd(a.endContainer,a.endOffset);return d}return null},union:function(a){if(this.intersectsRange(a,!0)){var b=this.cloneRange();-1==l.comparePoints(a.startContainer,a.startOffset,this.startContainer,this.startOffset)&&b.setStart(a.startContainer,a.startOffset);1==l.comparePoints(a.endContainer,
a.endOffset,this.endContainer,this.endOffset)&&b.setEnd(a.endContainer,a.endOffset);return b}throw new r("Ranges do not intersect");},containsNode:function(a,b){return b?this.intersectsNode(a,!1):this.compareNode(a)==R},containsNodeContents:function(a){return 0<=this.comparePoint(a,0)&&0>=this.comparePoint(a,l.getNodeLength(a))},containsRange:function(a){return this.intersection(a).equals(a)},containsNodeText:function(a){var b=this.cloneRange();b.selectNode(a);var c=b.getNodes([3]);return 0<c.length?
(b.setStart(c[0],0),a=c.pop(),b.setEnd(a,a.length),a=this.containsRange(b),b.detach(),a):this.containsNodeContents(a)},createNodeIterator:function(a,b){v(this);return new m(this,a,b)},getNodes:function(a,b){v(this);return n(this,a,b)},getDocument:function(){return a(this)},collapseBefore:function(a){o(this);this.setEndBefore(a);this.collapse(!1)},collapseAfter:function(a){o(this);this.setStartAfter(a);this.collapse(!0)},getName:function(){return"DomRange"},equals:function(a){return C.rangesEqual(this,
a)},inspect:function(){return p(this)}};I(C,J,function(a){o(a);a.startContainer=a.startOffset=a.endContainer=a.endOffset=null;a.collapsed=a.commonAncestorContainer=null;d(a,"detach",null);a._listeners=null});b.rangePrototype=D.prototype;C.rangeProperties=T;C.RangeIterator=q;C.copyComparisonConstants=F;C.createPrototypeRange=I;C.inspect=p;C.getRangeDocument=a;C.rangesEqual=function(a,b){return a.startContainer===b.startContainer&&a.startOffset===b.startOffset&&a.endContainer===b.endContainer&&a.endOffset===
b.endOffset};b.DomRange=C;b.RangeException=r});
rangy.createModule("WrappedRange",function(b){function c(a,b,c,d){var g=a.duplicate();g.collapse(c);var i=g.parentElement();e.isAncestorOf(b,i,!0)||(i=b);if(!i.canHaveHTML)return new f(i.parentNode,e.getNodeIndex(i));var b=e.getDocument(i).createElement("span"),r,m=c?"StartToStart":"StartToEnd";do i.insertBefore(b,b.previousSibling),g.moveToElementText(b);while(0<(r=g.compareEndPoints(m,a))&&b.previousSibling);m=b.nextSibling;if(-1==r&&m&&e.isCharacterDataNode(m)){g.setEndPoint(c?"EndToStart":"EndToEnd",
a);if(/[\r\n]/.test(m.data)){i=g.duplicate();c=i.text.replace(/\r\n/g,"\r").length;for(c=i.moveStart("character",c);-1==i.compareEndPoints("StartToEnd",i);)c++,i.moveStart("character",1)}else c=g.text.length;i=new f(m,c)}else m=(d||!c)&&b.previousSibling,i=(c=(d||c)&&b.nextSibling)&&e.isCharacterDataNode(c)?new f(c,0):m&&e.isCharacterDataNode(m)?new f(m,m.length):new f(i,e.getNodeIndex(b));b.parentNode.removeChild(b);return i}function a(a,b){var c,d,f=a.offset,g=e.getDocument(a.node),i=g.body.createTextRange(),
m=e.isCharacterDataNode(a.node);m?(c=a.node,d=c.parentNode):(c=a.node.childNodes,c=f<c.length?c[f]:null,d=a.node);g=g.createElement("span");g.innerHTML="&#feff;";c?d.insertBefore(g,c):d.appendChild(g);i.moveToElementText(g);i.collapse(!b);d.removeChild(g);if(m)i[b?"moveStart":"moveEnd"]("character",f);return i}b.requireModules(["DomUtil","DomRange"]);var d,e=b.dom,f=e.DomPosition,g=b.DomRange;if(b.features.implementsDomRange&&(!b.features.implementsTextRange||!b.config.preferTextRange))(function(){function a(b){for(var c=
j.length,d;c--;)d=j[c],b[d]=b.nativeRange[d]}var c,j=g.rangeProperties,f;d=function(b){if(!b)throw Error("Range must be specified");this.nativeRange=b;a(this)};g.createPrototypeRange(d,function(a,b,c,d,h){var e=a.endContainer!==d||a.endOffset!=h;if(a.startContainer!==b||a.startOffset!=c||e)a.setEnd(d,h),a.setStart(b,c)},function(a){a.nativeRange.detach();a.detached=!0;for(var b=j.length,c;b--;)c=j[b],a[c]=null});c=d.prototype;c.selectNode=function(b){this.nativeRange.selectNode(b);a(this)};c.deleteContents=
function(){this.nativeRange.deleteContents();a(this)};c.extractContents=function(){var b=this.nativeRange.extractContents();a(this);return b};c.cloneContents=function(){return this.nativeRange.cloneContents()};c.surroundContents=function(b){this.nativeRange.surroundContents(b);a(this)};c.collapse=function(b){this.nativeRange.collapse(b);a(this)};c.cloneRange=function(){return new d(this.nativeRange.cloneRange())};c.refresh=function(){a(this)};c.toString=function(){return this.nativeRange.toString()};
var i=document.createTextNode("test");e.getBody(document).appendChild(i);var q=document.createRange();q.setStart(i,0);q.setEnd(i,0);try{q.setStart(i,1),c.setStart=function(b,c){this.nativeRange.setStart(b,c);a(this)},c.setEnd=function(b,c){this.nativeRange.setEnd(b,c);a(this)},f=function(b){return function(c){this.nativeRange[b](c);a(this)}}}catch(r){c.setStart=function(b,c){try{this.nativeRange.setStart(b,c)}catch(d){this.nativeRange.setEnd(b,c),this.nativeRange.setStart(b,c)}a(this)},c.setEnd=function(b,
c){try{this.nativeRange.setEnd(b,c)}catch(d){this.nativeRange.setStart(b,c),this.nativeRange.setEnd(b,c)}a(this)},f=function(b,c){return function(d){try{this.nativeRange[b](d)}catch(e){this.nativeRange[c](d),this.nativeRange[b](d)}a(this)}}}c.setStartBefore=f("setStartBefore","setEndBefore");c.setStartAfter=f("setStartAfter","setEndAfter");c.setEndBefore=f("setEndBefore","setStartBefore");c.setEndAfter=f("setEndAfter","setStartAfter");q.selectNodeContents(i);c.selectNodeContents=q.startContainer==
i&&q.endContainer==i&&0==q.startOffset&&q.endOffset==i.length?function(b){this.nativeRange.selectNodeContents(b);a(this)}:function(a){this.setStart(a,0);this.setEnd(a,g.getEndOffset(a))};q.selectNodeContents(i);q.setEnd(i,3);f=document.createRange();f.selectNodeContents(i);f.setEnd(i,4);f.setStart(i,2);c.compareBoundaryPoints=-1==q.compareBoundaryPoints(q.START_TO_END,f)&1==q.compareBoundaryPoints(q.END_TO_START,f)?function(a,b){b=b.nativeRange||b;a==b.START_TO_END?a=b.END_TO_START:a==b.END_TO_START&&
(a=b.START_TO_END);return this.nativeRange.compareBoundaryPoints(a,b)}:function(a,b){return this.nativeRange.compareBoundaryPoints(a,b.nativeRange||b)};b.util.isHostMethod(q,"createContextualFragment")&&(c.createContextualFragment=function(a){return this.nativeRange.createContextualFragment(a)});e.getBody(document).removeChild(i);q.detach();f.detach()})(),b.createNativeRange=function(a){a=a||document;return a.createRange()};else if(b.features.implementsTextRange){d=function(a){this.textRange=a;this.refresh()};
d.prototype=new g(document);d.prototype.refresh=function(){var a,b,d=this.textRange;a=d.parentElement();var f=d.duplicate();f.collapse(!0);b=f.parentElement();f=d.duplicate();f.collapse(!1);d=f.parentElement();b=b==d?b:e.getCommonAncestor(b,d);b=b==a?b:e.getCommonAncestor(a,b);0==this.textRange.compareEndPoints("StartToEnd",this.textRange)?b=a=c(this.textRange,b,!0,!0):(a=c(this.textRange,b,!0,!1),b=c(this.textRange,b,!1,!1));this.setStart(a.node,a.offset);this.setEnd(b.node,b.offset)};g.copyComparisonConstants(d);
var i=function(){return this}();"undefined"==typeof i.Range&&(i.Range=d);b.createNativeRange=function(a){a=a||document;return a.body.createTextRange()}}b.features.implementsTextRange&&(d.rangeToTextRange=function(b){if(b.collapsed)return a(new f(b.startContainer,b.startOffset),!0);var c=a(new f(b.startContainer,b.startOffset),!0),d=a(new f(b.endContainer,b.endOffset),!1),b=e.getDocument(b.startContainer).body.createTextRange();b.setEndPoint("StartToStart",c);b.setEndPoint("EndToEnd",d);return b});
d.prototype.getName=function(){return"WrappedRange"};b.WrappedRange=d;b.createRange=function(a){a=a||document;return new d(b.createNativeRange(a))};b.createRangyRange=function(a){a=a||document;return new g(a)};b.createIframeRange=function(a){return b.createRange(e.getIframeDocument(a))};b.createIframeRangyRange=function(a){return b.createRangyRange(e.getIframeDocument(a))};b.addCreateMissingNativeApiListener(function(a){a=a.document;if(typeof a.createRange=="undefined")a.createRange=function(){return b.createRange(this)};
a=a=null})});
rangy.createModule("WrappedSelection",function(b,c){function a(a){return(a||window).getSelection()}function d(a){return(a||window).document.selection}function e(a,b,c){var d=c?"end":"start",c=c?"start":"end";a.anchorNode=b[d+"Container"];a.anchorOffset=b[d+"Offset"];a.focusNode=b[c+"Container"];a.focusOffset=b[c+"Offset"]}function f(a){a.anchorNode=a.focusNode=null;a.anchorOffset=a.focusOffset=0;a.rangeCount=0;a.isCollapsed=!0;a._ranges.length=0}function g(a){var c;a instanceof x?(c=a._selectionNativeRange,
c||(c=b.createNativeRange(m.getDocument(a.startContainer)),c.setEnd(a.endContainer,a.endOffset),c.setStart(a.startContainer,a.startOffset),a._selectionNativeRange=c,a.attachListener("detach",function(){this._selectionNativeRange=null}))):a instanceof o?c=a.nativeRange:b.features.implementsDomRange&&a instanceof m.getWindow(a.startContainer).Range&&(c=a);return c}function i(a){var b=a.getNodes(),c;a:if(!b.length||1!=b[0].nodeType)c=!1;else{c=1;for(var d=b.length;c<d;++c)if(!m.isAncestorOf(b[0],b[c])){c=
!1;break a}c=!0}if(!c)throw Error("getSingleElementFromRange: range "+a.inspect()+" did not consist of a single element");return b[0]}function h(a,b){var c=new o(b);a._ranges=[c];e(a,c,!1);a.rangeCount=1;a.isCollapsed=c.collapsed}function k(a){a._ranges.length=0;if("None"==a.docSelection.type)f(a);else{var c=a.docSelection.createRange();if(c&&"undefined"!=typeof c.text)h(a,c);else{a.rangeCount=c.length;for(var d,j=m.getDocument(c.item(0)),k=0;k<a.rangeCount;++k)d=b.createRange(j),d.selectNode(c.item(k)),
a._ranges.push(d);a.isCollapsed=1==a.rangeCount&&a._ranges[0].collapsed;e(a,a._ranges[a.rangeCount-1],!1)}}}function j(a,b){for(var c=a.docSelection.createRange(),d=i(b),e=m.getDocument(c.item(0)),e=m.getBody(e).createControlRange(),h=0,j=c.length;h<j;++h)e.add(c.item(h));try{e.add(d)}catch(f){throw Error("addRange(): Element within the specified Range could not be added to control selection (does it have layout?)");}e.select();k(a)}function n(a,b,c){this.nativeSelection=a;this.docSelection=b;this._ranges=
[];this.win=c;this.refresh()}function p(a,b){for(var c=m.getDocument(b[0].startContainer),c=m.getBody(c).createControlRange(),d=0,e;d<rangeCount;++d){e=i(b[d]);try{c.add(e)}catch(h){throw Error("setRanges(): Element within the one of the specified Ranges could not be added to control selection (does it have layout?)");}}c.select();k(a)}function q(a,b){if(a.anchorNode&&m.getDocument(a.anchorNode)!==m.getDocument(b))throw new z("WRONG_DOCUMENT_ERR");}function r(a){var b=[],c=new w(a.anchorNode,a.anchorOffset),
d=new w(a.focusNode,a.focusOffset),e="function"==typeof a.getName?a.getName():"Selection";if("undefined"!=typeof a.rangeCount)for(var h=0,j=a.rangeCount;h<j;++h)b[h]=x.inspect(a.getRangeAt(h));return"["+e+"(Ranges: "+b.join(", ")+")(anchor: "+c.inspect()+", focus: "+d.inspect()+"]"}b.requireModules(["DomUtil","DomRange","WrappedRange"]);b.config.checkSelectionRanges=!0;var m=b.dom,s=b.util,x=b.DomRange,o=b.WrappedRange,z=b.DOMException,w=m.DomPosition,y,A,t=b.util.isHostMethod(window,"getSelection"),
v=b.util.isHostObject(document,"selection"),D=v&&(!t||b.config.preferTextRange);D?(y=d,b.isSelectionValid=function(a){var a=(a||window).document,b=a.selection;return"None"!=b.type||m.getDocument(b.createRange().parentElement())==a}):t?(y=a,b.isSelectionValid=function(){return!0}):c.fail("Neither document.selection or window.getSelection() detected.");b.getNativeSelection=y;var t=y(),K=b.createNativeRange(document),F=m.getBody(document),E=s.areHostObjects(t,s.areHostProperties(t,["anchorOffset","focusOffset"]));
b.features.selectionHasAnchorAndFocus=E;var I=s.isHostMethod(t,"extend");b.features.selectionHasExtend=I;var N="number"==typeof t.rangeCount;b.features.selectionHasRangeCount=N;var J=!1,C=!0;s.areHostMethods(t,["addRange","getRangeAt","removeAllRanges"])&&("number"==typeof t.rangeCount&&b.features.implementsDomRange)&&function(){var a=document.createElement("iframe");F.appendChild(a);var b=m.getIframeDocument(a);b.open();b.write("<html><head></head><body>12</body></html>");b.close();var c=m.getIframeWindow(a).getSelection(),
d=b.documentElement.lastChild.firstChild,b=b.createRange();b.setStart(d,1);b.collapse(true);c.addRange(b);C=c.rangeCount==1;c.removeAllRanges();var e=b.cloneRange();b.setStart(d,0);e.setEnd(d,2);c.addRange(b);c.addRange(e);J=c.rangeCount==2;b.detach();e.detach();F.removeChild(a)}();b.features.selectionSupportsMultipleRanges=J;b.features.collapsedNonEditableSelectionsSupported=C;var l=!1,u;F&&s.isHostMethod(F,"createControlRange")&&(u=F.createControlRange(),s.areHostProperties(u,["item","add"])&&(l=
!0));b.features.implementsControlRange=l;A=E?function(a){return a.anchorNode===a.focusNode&&a.anchorOffset===a.focusOffset}:function(a){return a.rangeCount?a.getRangeAt(a.rangeCount-1).collapsed:false};var B;s.isHostMethod(t,"getRangeAt")?B=function(a,b){try{return a.getRangeAt(b)}catch(c){return null}}:E&&(B=function(a){var c=m.getDocument(a.anchorNode),c=b.createRange(c);c.setStart(a.anchorNode,a.anchorOffset);c.setEnd(a.focusNode,a.focusOffset);if(c.collapsed!==this.isCollapsed){c.setStart(a.focusNode,
a.focusOffset);c.setEnd(a.anchorNode,a.anchorOffset)}return c});b.getSelection=function(a){var a=a||window,b=a._rangySelection,c=y(a),e=v?d(a):null;if(b){b.nativeSelection=c;b.docSelection=e;b.refresh(a)}else{b=new n(c,e,a);a._rangySelection=b}return b};b.getIframeSelection=function(a){return b.getSelection(m.getIframeWindow(a))};u=n.prototype;if(!D&&E&&s.areHostMethods(t,["removeAllRanges","addRange"])){u.removeAllRanges=function(){this.nativeSelection.removeAllRanges();f(this)};var L=function(a,
c){var d=x.getRangeDocument(c),d=b.createRange(d);d.collapseToPoint(c.endContainer,c.endOffset);a.nativeSelection.addRange(g(d));a.nativeSelection.extend(c.startContainer,c.startOffset);a.refresh()};u.addRange=N?function(a,c){if(l&&v&&this.docSelection.type=="Control")j(this,a);else if(c&&I)L(this,a);else{var d;if(J)d=this.rangeCount;else{this.removeAllRanges();d=0}this.nativeSelection.addRange(g(a));this.rangeCount=this.nativeSelection.rangeCount;if(this.rangeCount==d+1){if(b.config.checkSelectionRanges)(d=
B(this.nativeSelection,this.rangeCount-1))&&!x.rangesEqual(d,a)&&(a=new o(d));this._ranges[this.rangeCount-1]=a;e(this,a,H(this.nativeSelection));this.isCollapsed=A(this)}else this.refresh()}}:function(a,b){if(b&&I)L(this,a);else{this.nativeSelection.addRange(g(a));this.refresh()}};u.setRanges=function(a){if(l&&a.length>1)p(this,a);else{this.removeAllRanges();for(var b=0,c=a.length;b<c;++b)this.addRange(a[b])}}}else if(s.isHostMethod(t,"empty")&&s.isHostMethod(K,"select")&&l&&D)u.removeAllRanges=
function(){try{this.docSelection.empty();if(this.docSelection.type!="None"){var a;if(this.anchorNode)a=m.getDocument(this.anchorNode);else if(this.docSelection.type=="Control"){var b=this.docSelection.createRange();b.length&&(a=m.getDocument(b.item(0)).body.createTextRange())}if(a){a.body.createTextRange().select();this.docSelection.empty()}}}catch(c){}f(this)},u.addRange=function(a){if(this.docSelection.type=="Control")j(this,a);else{o.rangeToTextRange(a).select();this._ranges[0]=a;this.rangeCount=
1;this.isCollapsed=this._ranges[0].collapsed;e(this,a,false)}},u.setRanges=function(a){this.removeAllRanges();var b=a.length;b>1?p(this,a):b&&this.addRange(a[0])};else return c.fail("No means of selecting a Range or TextRange was found"),!1;u.getRangeAt=function(a){if(a<0||a>=this.rangeCount)throw new z("INDEX_SIZE_ERR");return this._ranges[a]};var G;if(D)G=function(a){var c;if(b.isSelectionValid(a.win))c=a.docSelection.createRange();else{c=m.getBody(a.win.document).createTextRange();c.collapse(true)}a.docSelection.type==
"Control"?k(a):c&&typeof c.text!="undefined"?h(a,c):f(a)};else if(s.isHostMethod(t,"getRangeAt")&&"number"==typeof t.rangeCount)G=function(a){if(l&&v&&a.docSelection.type=="Control")k(a);else{a._ranges.length=a.rangeCount=a.nativeSelection.rangeCount;if(a.rangeCount){for(var c=0,d=a.rangeCount;c<d;++c)a._ranges[c]=new b.WrappedRange(a.nativeSelection.getRangeAt(c));e(a,a._ranges[a.rangeCount-1],H(a.nativeSelection));a.isCollapsed=A(a)}else f(a)}};else if(E&&"boolean"==typeof t.isCollapsed&&"boolean"==
typeof K.collapsed&&b.features.implementsDomRange)G=function(a){var b;b=a.nativeSelection;if(b.anchorNode){b=B(b,0);a._ranges=[b];a.rangeCount=1;b=a.nativeSelection;a.anchorNode=b.anchorNode;a.anchorOffset=b.anchorOffset;a.focusNode=b.focusNode;a.focusOffset=b.focusOffset;a.isCollapsed=A(a)}else f(a)};else return c.fail("No means of obtaining a Range or TextRange from the user's selection was found"),!1;u.refresh=function(a){var b=a?this._ranges.slice(0):null;G(this);if(a){a=b.length;if(a!=this._ranges.length)return false;
for(;a--;)if(!x.rangesEqual(b[a],this._ranges[a]))return false;return true}};var P=function(a,b){var c=a.getAllRanges(),d=false;a.removeAllRanges();for(var e=0,h=c.length;e<h;++e)d||b!==c[e]?a.addRange(c[e]):d=true;a.rangeCount||f(a)};u.removeRange=l?function(a){if(this.docSelection.type=="Control"){for(var b=this.docSelection.createRange(),a=i(a),c=m.getDocument(b.item(0)),c=m.getBody(c).createControlRange(),d,e=false,h=0,j=b.length;h<j;++h){d=b.item(h);d!==a||e?c.add(b.item(h)):e=true}c.select();
k(this)}else P(this,a)}:function(a){P(this,a)};var H;!D&&E&&b.features.implementsDomRange?(H=function(a){var b=false;a.anchorNode&&(b=m.comparePoints(a.anchorNode,a.anchorOffset,a.focusNode,a.focusOffset)==1);return b},u.isBackwards=function(){return H(this)}):H=u.isBackwards=function(){return false};u.toString=function(){for(var a=[],b=0,c=this.rangeCount;b<c;++b)a[b]=""+this._ranges[b];return a.join("")};u.collapse=function(a,c){q(this,a);var d=b.createRange(m.getDocument(a));d.collapseToPoint(a,
c);this.removeAllRanges();this.addRange(d);this.isCollapsed=true};u.collapseToStart=function(){if(this.rangeCount){var a=this._ranges[0];this.collapse(a.startContainer,a.startOffset)}else throw new z("INVALID_STATE_ERR");};u.collapseToEnd=function(){if(this.rangeCount){var a=this._ranges[this.rangeCount-1];this.collapse(a.endContainer,a.endOffset)}else throw new z("INVALID_STATE_ERR");};u.selectAllChildren=function(a){q(this,a);var c=b.createRange(m.getDocument(a));c.selectNodeContents(a);this.removeAllRanges();
this.addRange(c)};u.deleteFromDocument=function(){if(l&&v&&this.docSelection.type=="Control"){for(var a=this.docSelection.createRange(),b;a.length;){b=a.item(0);a.remove(b);b.parentNode.removeChild(b)}this.refresh()}else if(this.rangeCount){a=this.getAllRanges();this.removeAllRanges();b=0;for(var c=a.length;b<c;++b)a[b].deleteContents();this.addRange(a[c-1])}};u.getAllRanges=function(){return this._ranges.slice(0)};u.setSingleRange=function(a){this.setRanges([a])};u.containsNode=function(a,b){for(var c=
0,d=this._ranges.length;c<d;++c)if(this._ranges[c].containsNode(a,b))return true;return false};u.toHtml=function(){var a="";if(this.rangeCount){for(var a=x.getRangeDocument(this._ranges[0]).createElement("div"),b=0,c=this._ranges.length;b<c;++b)a.appendChild(this._ranges[b].cloneContents());a=a.innerHTML}return a};u.getName=function(){return"WrappedSelection"};u.inspect=function(){return r(this)};u.detach=function(){this.win=this.anchorNode=this.focusNode=this.win._rangySelection=null};n.inspect=
r;b.Selection=n;b.selectionPrototype=u;b.addCreateMissingNativeApiListener(function(a){if(typeof a.getSelection=="undefined")a.getSelection=function(){return b.getSelection(this)};a=null})});var Base=function(){};
Base.extend=function(b,c){var a=Base.prototype.extend;Base._prototyping=!0;var d=new this;a.call(d,b);d.base=function(){};delete Base._prototyping;var e=d.constructor,f=d.constructor=function(){if(!Base._prototyping)if(this._constructing||this.constructor==f)this._constructing=!0,e.apply(this,arguments),delete this._constructing;else if(null!=arguments[0])return(arguments[0].extend||a).call(arguments[0],d)};f.ancestor=this;f.extend=this.extend;f.forEach=this.forEach;f.implement=this.implement;f.prototype=
d;f.toString=this.toString;f.valueOf=function(a){return"object"==a?f:e.valueOf()};a.call(f,c);"function"==typeof f.init&&f.init();return f};
Base.prototype={extend:function(b,c){if(1<arguments.length){var a=this[b];if(a&&"function"==typeof c&&(!a.valueOf||a.valueOf()!=c.valueOf())&&/\bbase\b/.test(c)){var d=c.valueOf(),c=function(){var b=this.base||Base.prototype.base;this.base=a;var c=d.apply(this,arguments);this.base=b;return c};c.valueOf=function(a){return"object"==a?c:d};c.toString=Base.toString}this[b]=c}else if(b){var e=Base.prototype.extend;!Base._prototyping&&"function"!=typeof this&&(e=this.extend||e);for(var f={toSource:null},
g=["constructor","toString","valueOf"],i=Base._prototyping?0:1;h=g[i++];)b[h]!=f[h]&&e.call(this,h,b[h]);for(var h in b)f[h]||e.call(this,h,b[h])}return this}};
Base=Base.extend({constructor:function(b){this.extend(b)}},{ancestor:Object,version:"1.1",forEach:function(b,c,a){for(var d in b)void 0===this.prototype[d]&&c.call(a,b[d],d,b)},implement:function(){for(var b=0;b<arguments.length;b++)if("function"==typeof arguments[b])arguments[b](this.prototype);else this.prototype.extend(arguments[b]);return this},toString:function(){return""+this.valueOf()}});
wysihtml5.browser=function(){var b=navigator.userAgent,c=document.createElement("div"),a=-1!==b.indexOf("MSIE")&&-1===b.indexOf("Opera"),d=-1!==b.indexOf("Gecko")&&-1===b.indexOf("KHTML"),e=-1!==b.indexOf("AppleWebKit/"),f=-1!==b.indexOf("Chrome/"),g=-1!==b.indexOf("Opera/");return{USER_AGENT:b,supported:function(){var a=this.USER_AGENT.toLowerCase(),b="contentEditable"in c,d=document.execCommand&&document.queryCommandSupported&&document.queryCommandState,e=document.querySelector&&document.querySelectorAll,
a=this.isIos()&&5>(/ipad|iphone|ipod/.test(a)&&a.match(/ os (\d+).+? like mac os x/)||[,0])[1]||-1!==a.indexOf("opera mobi")||-1!==a.indexOf("hpwos/");return b&&d&&e&&!a},isTouchDevice:function(){return this.supportsEvent("touchmove")},isIos:function(){var a=this.USER_AGENT.toLowerCase();return-1!==a.indexOf("webkit")&&-1!==a.indexOf("mobile")},supportsSandboxedIframes:function(){return a},throwsMixedContentWarningWhenIframeSrcIsEmpty:function(){return!("querySelector"in document)},displaysCaretInEmptyContentEditableCorrectly:function(){return!d},
hasCurrentStyleProperty:function(){return"currentStyle"in c},insertsLineBreaksOnReturn:function(){return d},supportsPlaceholderAttributeOn:function(a){return"placeholder"in a},supportsEvent:function(a){var b;if(!(b="on"+a in c))c.setAttribute("on"+a,"return;"),b="function"===typeof c["on"+a];return b},supportsEventsInIframeCorrectly:function(){return!g},firesOnDropOnlyWhenOnDragOverIsCancelled:function(){return e||d},supportsDataTransfer:function(){try{return e&&(window.Clipboard||window.DataTransfer).prototype.getData}catch(a){return!1}},
supportsHTML5Tags:function(a){a=a.createElement("div");a.innerHTML="<article>foo</article>";return"<article>foo</article>"===a.innerHTML.toLowerCase()},supportsCommand:function(){var b={formatBlock:a,insertUnorderedList:a||g||e,insertOrderedList:a||g||e},c={insertHTML:d};return function(a,d){if(!b[d]){try{return a.queryCommandSupported(d)}catch(e){}try{return a.queryCommandEnabled(d)}catch(f){return!!c[d]}}return!1}}(),doesAutoLinkingInContentEditable:function(){return a},canDisableAutoLinking:function(){return this.supportsCommand(document,
"AutoUrlDetect")},clearsContentEditableCorrectly:function(){return d||g||e},supportsGetAttributeCorrectly:function(){return"1"!=document.createElement("td").getAttribute("rowspan")},canSelectImagesInContentEditable:function(){return d||a||g},clearsListsInContentEditableCorrectly:function(){return d||a||e},autoScrollsToCaret:function(){return!e},autoClosesUnclosedTags:function(){var a=c.cloneNode(!1),b;a.innerHTML="<p><div></div>";a=a.innerHTML.toLowerCase();b="<p></p><div></div>"===a||"<p><div></div></p>"===
a;this.autoClosesUnclosedTags=function(){return b};return b},supportsNativeGetElementsByClassName:function(){return-1!==(""+document.getElementsByClassName).indexOf("[native code]")},supportsSelectionModify:function(){return"getSelection"in window&&"modify"in window.getSelection()},supportsClassList:function(){return"classList"in c},needsSpaceAfterLineBreak:function(){return g},supportsSpeechApiOn:function(a){return 11<=(b.match(/Chrome\/(\d+)/)||[,0])[1]&&("onwebkitspeechchange"in a||"speech"in a)},
crashesWhenDefineProperty:function(b){return a&&("XMLHttpRequest"===b||"XDomainRequest"===b)},doesAsyncFocus:function(){return a},hasProblemsSettingCaretAfterImg:function(){return a},hasUndoInContextMenu:function(){return d||f||g}}}();
wysihtml5.lang.array=function(b){return{contains:function(c){if(b.indexOf)return-1!==b.indexOf(c);for(var a=0,d=b.length;a<d;a++)if(b[a]===c)return!0;return!1},without:function(c){for(var c=wysihtml5.lang.array(c),a=[],d=0,e=b.length;d<e;d++)c.contains(b[d])||a.push(b[d]);return a},get:function(){for(var c=0,a=b.length,d=[];c<a;c++)d.push(b[c]);return d}}};
wysihtml5.lang.Dispatcher=Base.extend({observe:function(b,c){this.events=this.events||{};this.events[b]=this.events[b]||[];this.events[b].push(c);return this},on:function(){return this.observe.apply(this,wysihtml5.lang.array(arguments).get())},fire:function(b,c){this.events=this.events||{};for(var a=this.events[b]||[],d=0;d<a.length;d++)a[d].call(this,c);return this},stopObserving:function(b,c){this.events=this.events||{};var a=0,d,e;if(b){d=this.events[b]||[];for(e=[];a<d.length;a++)d[a]!==c&&c&&
e.push(d[a]);this.events[b]=e}else this.events={};return this}});wysihtml5.lang.object=function(b){return{merge:function(c){for(var a in c)b[a]=c[a];return this},get:function(){return b},clone:function(){var c={},a;for(a in b)c[a]=b[a];return c},isArray:function(){return"[object Array]"===Object.prototype.toString.call(b)}}};
(function(){var b=/^\s+/,c=/\s+$/;wysihtml5.lang.string=function(a){a=""+a;return{trim:function(){return a.replace(b,"").replace(c,"")},interpolate:function(b){for(var c in b)a=this.replace("#{"+c+"}").by(b[c]);return a},replace:function(b){return{by:function(c){return a.split(b).join(c)}}}}}})();
(function(b){function c(a){return a.replace(e,function(a,b){var c=(b.match(f)||[])[1]||"",d=i[c],b=b.replace(f,"");b.split(d).length>b.split(c).length&&(b+=c,c="");var e=d=b;b.length>g&&(e=e.substr(0,g)+"...");"www."===d.substr(0,4)&&(d="http://"+d);return'<a href="'+d+'">'+e+"</a>"+c})}function a(h){if(!d.contains(h.nodeName))if(h.nodeType===b.TEXT_NODE&&h.data.match(e)){var f=h.parentNode,j;j=f.ownerDocument;var g=j._wysihtml5_tempElement;g||(g=j._wysihtml5_tempElement=j.createElement("div"));j=
g;j.innerHTML="<span></span>"+c(h.data);for(j.removeChild(j.firstChild);j.firstChild;)f.insertBefore(j.firstChild,h);f.removeChild(h)}else{f=b.lang.array(h.childNodes).get();j=f.length;for(g=0;g<j;g++)a(f[g]);return h}}var d=b.lang.array("CODE PRE A SCRIPT HEAD TITLE STYLE".split(" ")),e=/((https?:\/\/|www\.)[^\s<]{3,})/gi,f=/([^\w\/\-](,?))$/i,g=100,i={")":"(","]":"[","}":"{"};b.dom.autoLink=function(b){var c;a:{c=b;for(var e;c.parentNode;){c=c.parentNode;e=c.nodeName;if(d.contains(e)){c=!0;break a}if("body"===
e)break}c=!1}if(c)return b;b===b.ownerDocument.documentElement&&(b=b.ownerDocument.body);return a(b)};b.dom.autoLink.URL_REG_EXP=e})(wysihtml5);
(function(b){var c=b.browser.supportsClassList(),a=b.dom;a.addClass=function(b,e){if(c)return b.classList.add(e);a.hasClass(b,e)||(b.className+=" "+e)};a.removeClass=function(a,b){if(c)return a.classList.remove(b);a.className=a.className.replace(RegExp("(^|\\s+)"+b+"(\\s+|$)")," ")};a.hasClass=function(a,b){if(c)return a.classList.contains(b);var f=a.className;return 0<f.length&&(f==b||RegExp("(^|\\s)"+b+"(\\s|$)").test(f))}})(wysihtml5);
wysihtml5.dom.contains=function(){var b=document.documentElement;if(b.contains)return function(b,a){a.nodeType!==wysihtml5.ELEMENT_NODE&&(a=a.parentNode);return b!==a&&b.contains(a)};if(b.compareDocumentPosition)return function(b,a){return!!(b.compareDocumentPosition(a)&16)}}();
wysihtml5.dom.convertToList=function(){function b(b,a){var d=b.createElement("li");a.appendChild(d);return d}return function(c,a){if("UL"===c.nodeName||"OL"===c.nodeName||"MENU"===c.nodeName)return c;var d=c.ownerDocument,e=d.createElement(a),f=c.querySelectorAll("br"),g=f.length,i,h,k,j,n;for(n=0;n<g;n++)for(i=f[n];(h=i.parentNode)&&h!==c&&h.lastChild===i;){if("block"===wysihtml5.dom.getStyle("display").from(h)){h.removeChild(i);break}wysihtml5.dom.insert(i).after(i.parentNode)}f=wysihtml5.lang.array(c.childNodes).get();
g=f.length;for(n=0;n<g;n++)j=j||b(d,e),i=f[n],h="block"===wysihtml5.dom.getStyle("display").from(i),k="BR"===i.nodeName,h?(j=j.firstChild?b(d,e):j,j.appendChild(i),j=null):k?j=j.firstChild?null:j:j.appendChild(i);c.parentNode.replaceChild(e,c);return e}}();wysihtml5.dom.copyAttributes=function(b){return{from:function(c){return{to:function(a){for(var d,e=0,f=b.length;e<f;e++)d=b[e],"undefined"!==typeof c[d]&&""!==c[d]&&(a[d]=c[d]);return{andTo:arguments.callee}}}}}};
(function(b){var c=["-webkit-box-sizing","-moz-box-sizing","-ms-box-sizing","box-sizing"],a=function(a){var e;a:for(var f=0,g=c.length;f<g;f++)if("border-box"===b.getStyle(c[f]).from(a)){e=c[f];break a}return e?parseInt(b.getStyle("width").from(a),10)<a.offsetWidth:!1};b.copyStyles=function(d){return{from:function(e){a(e)&&(d=wysihtml5.lang.array(d).without(c));for(var f="",g=d.length,i=0,h;i<g;i++)h=d[i],f+=h+":"+b.getStyle(h).from(e)+";";return{to:function(a){b.setStyles(f).on(a);return{andTo:arguments.callee}}}}}}})(wysihtml5.dom);
(function(b){b.dom.delegate=function(c,a,d,e){return b.dom.observe(c,d,function(d){for(var g=d.target,i=b.lang.array(c.querySelectorAll(a));g&&g!==c;){if(i.contains(g)){e.call(g,d);break}g=g.parentNode}})}})(wysihtml5);
wysihtml5.dom.getAsDom=function(){var b="abbr article aside audio bdi canvas command datalist details figcaption figure footer header hgroup keygen mark meter nav output progress rp rt ruby svg section source summary time track video wbr".split(" ");return function(c,a){var a=a||document,d;if("object"===typeof c&&c.nodeType)d=a.createElement("div"),d.appendChild(c);else if(wysihtml5.browser.supportsHTML5Tags(a))d=a.createElement("div"),d.innerHTML=c;else{d=a;if(!d._wysihtml5_supportsHTML5Tags){for(var e=
0,f=b.length;e<f;e++)d.createElement(b[e]);d._wysihtml5_supportsHTML5Tags=!0}d=a;e=d.createElement("div");e.style.display="none";d.body.appendChild(e);try{e.innerHTML=c}catch(g){}d.body.removeChild(e);d=e}return d}}();
wysihtml5.dom.getParentElement=function(){function b(b,a){return!a||!a.length?!0:"string"===typeof a?b===a:wysihtml5.lang.array(a).contains(b)}return function(c,a,d){d=d||50;if(a.className||a.classRegExp){a:{for(var e=a.nodeName,f=a.className,a=a.classRegExp;d--&&c&&"BODY"!==c.nodeName;){var g;if(g=c.nodeType===wysihtml5.ELEMENT_NODE)if(g=b(c.nodeName,e)){g=f;var i=(c.className||"").match(a)||[];g=!g?!!i.length:i[i.length-1]===g}if(g)break a;c=c.parentNode}c=null}return c}a:{e=a.nodeName;for(f=d;f--&&
c&&"BODY"!==c.nodeName;){if(b(c.nodeName,e))break a;c=c.parentNode}c=null}return c}}();
wysihtml5.dom.getStyle=function(){function b(b){return b.replace(a,function(a){return a.charAt(1).toUpperCase()})}var c={"float":"styleFloat"in document.createElement("div").style?"styleFloat":"cssFloat"},a=/\-[a-z]/g;return function(a){return{from:function(e){if(e.nodeType===wysihtml5.ELEMENT_NODE){var f=e.ownerDocument,g=c[a]||b(a),i=e.style,h=e.currentStyle,k=i[g];if(k)return k;if(h)try{return h[g]}catch(j){}var g=f.defaultView||f.parentWindow,f=("height"===a||"width"===a)&&"TEXTAREA"===e.nodeName,
n;if(g.getComputedStyle)return f&&(n=i.overflow,i.overflow="hidden"),e=g.getComputedStyle(e,null).getPropertyValue(a),f&&(i.overflow=n||""),e}}}}}();wysihtml5.dom.hasElementWithTagName=function(){var b={},c=1;return function(a,d){var e=(a._wysihtml5_identifier||(a._wysihtml5_identifier=c++))+":"+d,f=b[e];f||(f=b[e]=a.getElementsByTagName(d));return 0<f.length}}();
(function(b){var c={},a=1;b.dom.hasElementWithClassName=function(d,e){if(!b.browser.supportsNativeGetElementsByClassName())return!!d.querySelector("."+e);var f=(d._wysihtml5_identifier||(d._wysihtml5_identifier=a++))+":"+e,g=c[f];g||(g=c[f]=d.getElementsByClassName(e));return 0<g.length}})(wysihtml5);wysihtml5.dom.insert=function(b){return{after:function(c){c.parentNode.insertBefore(b,c.nextSibling)},before:function(c){c.parentNode.insertBefore(b,c)},into:function(c){c.appendChild(b)}}};
wysihtml5.dom.insertCSS=function(b){b=b.join("\n");return{into:function(c){var a=c.head||c.getElementsByTagName("head")[0],d=c.createElement("style");d.type="text/css";d.styleSheet?d.styleSheet.cssText=b:d.appendChild(c.createTextNode(b));a&&a.appendChild(d)}}};
wysihtml5.dom.observe=function(b,c,a){for(var c="string"===typeof c?[c]:c,d,e,f=0,g=c.length;f<g;f++)e=c[f],b.addEventListener?b.addEventListener(e,a,!1):(d=function(c){"target"in c||(c.target=c.srcElement);c.preventDefault=c.preventDefault||function(){this.returnValue=false};c.stopPropagation=c.stopPropagation||function(){this.cancelBubble=true};a.call(b,c)},b.attachEvent("on"+e,d));return{stop:function(){for(var e,h=0,f=c.length;h<f;h++)e=c[h],b.removeEventListener?b.removeEventListener(e,a,!1):
b.detachEvent("on"+e,d)}}};
wysihtml5.dom.parse=function(){function b(c,e){var h=c.childNodes,f=h.length,g;g=a[c.nodeType];var k=0;g=g&&g(c);if(!g)return null;for(k=0;k<f;k++)(newChild=b(h[k],e))&&g.appendChild(newChild);return e&&1>=g.childNodes.length&&g.nodeName.toLowerCase()===d&&!g.attributes.length?g.firstChild:g}function c(a,b){var b=b.toLowerCase(),c;if(c="IMG"==a.nodeName)if(c="src"==b){var d;try{d=a.complete&&!a.mozMatchesSelector(":-moz-broken")}catch(e){a.complete&&"complete"===a.readyState&&(d=!0)}c=!0===d}return c?
a.src:i&&"outerHTML"in a?-1!=a.outerHTML.toLowerCase().indexOf(" "+b+"=")?a.getAttribute(b):null:a.getAttribute(b)}var a={1:function(a){var b,f,i=g.tags;f=a.nodeName.toLowerCase();b=a.scopeName;if(a._wysihtml5)return null;a._wysihtml5=1;if("wysihtml5-temp"===a.className)return null;b&&"HTML"!=b&&(f=b+":"+f);"outerHTML"in a&&!wysihtml5.browser.autoClosesUnclosedTags()&&("P"===a.nodeName&&"</p>"!==a.outerHTML.slice(-4).toLowerCase())&&(f="div");if(f in i){b=i[f];if(!b||b.remove)return null;b="string"===
typeof b?{rename_tag:b}:b}else if(a.firstChild)b={rename_tag:d};else return null;f=a.ownerDocument.createElement(b.rename_tag||f);var i={},r=b.set_class,m=b.add_class,s=b.set_attributes,x=b.check_attributes,o=g.classes,z=0,w=[];b=[];var y=[],A=[],t;s&&(i=wysihtml5.lang.object(s).clone());if(x)for(t in x)if(s=h[x[t]])s=s(c(a,t)),"string"===typeof s&&(i[t]=s);r&&w.push(r);if(m)for(t in m)if(s=k[m[t]])r=s(c(a,t)),"string"===typeof r&&w.push(r);o["_wysihtml5-temp-placeholder"]=1;(A=a.getAttribute("class"))&&
(w=w.concat(A.split(e)));for(m=w.length;z<m;z++)a=w[z],o[a]&&b.push(a);for(o=b.length;o--;)a=b[o],wysihtml5.lang.array(y).contains(a)||y.unshift(a);y.length&&(i["class"]=y.join(" "));for(t in i)try{f.setAttribute(t,i[t])}catch(v){}i.src&&("undefined"!==typeof i.width&&f.setAttribute("width",i.width),"undefined"!==typeof i.height&&f.setAttribute("height",i.height));return f},3:function(a){return a.ownerDocument.createTextNode(a.data)}},d="span",e=/\s+/,f={tags:{},classes:{}},g={},i=!wysihtml5.browser.supportsGetAttributeCorrectly(),
h={url:function(){var a=/^https?:\/\//i;return function(b){return!b||!b.match(a)?null:b.replace(a,function(a){return a.toLowerCase()})}}(),alt:function(){var a=/[^ a-z0-9_\-]/gi;return function(b){return!b?"":b.replace(a,"")}}(),numbers:function(){var a=/\D/g;return function(b){return(b=(b||"").replace(a,""))||null}}()},k={align_img:function(){var a={left:"wysiwyg-float-left",right:"wysiwyg-float-right"};return function(b){return a[(""+b).toLowerCase()]}}(),align_text:function(){var a={left:"wysiwyg-text-align-left",
right:"wysiwyg-text-align-right",center:"wysiwyg-text-align-center",justify:"wysiwyg-text-align-justify"};return function(b){return a[(""+b).toLowerCase()]}}(),clear_br:function(){var a={left:"wysiwyg-clear-left",right:"wysiwyg-clear-right",both:"wysiwyg-clear-both",all:"wysiwyg-clear-both"};return function(b){return a[(""+b).toLowerCase()]}}(),size_font:function(){var a={1:"wysiwyg-font-size-xx-small",2:"wysiwyg-font-size-small",3:"wysiwyg-font-size-medium",4:"wysiwyg-font-size-large",5:"wysiwyg-font-size-x-large",
6:"wysiwyg-font-size-xx-large",7:"wysiwyg-font-size-xx-large","-":"wysiwyg-font-size-smaller","+":"wysiwyg-font-size-larger"};return function(b){return a[(""+b).charAt(0)]}}()};return function(a,c,d,e){wysihtml5.lang.object(g).merge(f).merge(c).get();for(var d=d||a.ownerDocument||document,c=d.createDocumentFragment(),h="string"===typeof a,a=h?wysihtml5.dom.getAsDom(a,d):a;a.firstChild;)d=a.firstChild,a.removeChild(d),(d=b(d,e))&&c.appendChild(d);a.innerHTML="";a.appendChild(c);return h?wysihtml5.quirks.getCorrectInnerHTML(a):
a}}();wysihtml5.dom.removeEmptyTextNodes=function(b){for(var c=wysihtml5.lang.array(b.childNodes).get(),a=c.length,d=0;d<a;d++)b=c[d],b.nodeType===wysihtml5.TEXT_NODE&&""===b.data&&b.parentNode.removeChild(b)};wysihtml5.dom.renameElement=function(b,c){for(var a=b.ownerDocument.createElement(c),d;d=b.firstChild;)a.appendChild(d);wysihtml5.dom.copyAttributes(["align","className"]).from(b).to(a);b.parentNode.replaceChild(a,b);return a};
wysihtml5.dom.replaceWithChildNodes=function(b){if(b.parentNode)if(b.firstChild){for(var c=b.ownerDocument.createDocumentFragment();b.firstChild;)c.appendChild(b.firstChild);b.parentNode.replaceChild(c,b)}else b.parentNode.removeChild(b)};
(function(b){function c(a){var b=a.ownerDocument.createElement("br");a.appendChild(b)}b.resolveList=function(a){if(!("MENU"!==a.nodeName&&"UL"!==a.nodeName&&"OL"!==a.nodeName)){var d=a.ownerDocument.createDocumentFragment(),e=a.previousElementSibling||a.previousSibling,f,g,i;for(e&&"block"!==b.getStyle("display").from(e)&&c(d);i=a.firstChild;){for(f=i.lastChild;e=i.firstChild;)g=(g=e===f)&&"block"!==b.getStyle("display").from(e)&&"BR"!==e.nodeName,d.appendChild(e),g&&c(d);i.parentNode.removeChild(i)}a.parentNode.replaceChild(d,
a)}}})(wysihtml5.dom);
(function(b){var c=document,a="parent top opener frameElement frames localStorage globalStorage sessionStorage indexedDB".split(" "),d="open close openDialog showModalDialog alert confirm prompt openDatabase postMessage XMLHttpRequest XDomainRequest".split(" "),e=["referrer","write","open","close"];b.dom.Sandbox=Base.extend({constructor:function(a,c){this.callback=a||b.EMPTY_FUNCTION;this.config=b.lang.object({}).merge(c).get();this.iframe=this._createIframe()},insertInto:function(a){"string"===typeof a&&
(a=c.getElementById(a));a.appendChild(this.iframe)},getIframe:function(){return this.iframe},getWindow:function(){this._readyError()},getDocument:function(){this._readyError()},destroy:function(){var a=this.getIframe();a.parentNode.removeChild(a)},_readyError:function(){throw Error("wysihtml5.Sandbox: Sandbox iframe isn't loaded yet");},_createIframe:function(){var a=this,d=c.createElement("iframe");d.className="wysihtml5-sandbox";b.dom.setAttributes({security:"restricted",allowtransparency:"true",
frameborder:0,width:0,height:0,marginwidth:0,marginheight:0}).on(d);b.browser.throwsMixedContentWarningWhenIframeSrcIsEmpty()&&(d.src="javascript:'<html></html>'");d.onload=function(){d.onreadystatechange=d.onload=null;a._onLoadIframe(d)};d.onreadystatechange=function(){if(/loaded|complete/.test(d.readyState)){d.onreadystatechange=d.onload=null;a._onLoadIframe(d)}};return d},_onLoadIframe:function(f){if(b.dom.contains(c.documentElement,f)){var g=this,i=f.contentWindow,h=f.contentWindow.document,k=
this._getHtml({charset:c.characterSet||c.charset||"utf-8",stylesheets:this.config.stylesheets});h.open("text/html","replace");h.write(k);h.close();this.getWindow=function(){return f.contentWindow};this.getDocument=function(){return f.contentWindow.document};i.onerror=function(a,b,c){throw Error("wysihtml5.Sandbox: "+a,b,c);};if(!b.browser.supportsSandboxedIframes()){var j,k=0;for(j=a.length;k<j;k++)this._unset(i,a[k]);k=0;for(j=d.length;k<j;k++)this._unset(i,d[k],b.EMPTY_FUNCTION);k=0;for(j=e.length;k<
j;k++)this._unset(h,e[k]);this._unset(h,"cookie","",!0)}this.loaded=!0;setTimeout(function(){g.callback(g)},0)}},_getHtml:function(a){var c=a.stylesheets,d="",e=0,k;if(c="string"===typeof c?[c]:c)for(k=c.length;e<k;e++)d+='<link rel="stylesheet" href="'+c[e]+'">';a.stylesheets=d;return b.lang.string('<!DOCTYPE html><html><head><meta charset="#{charset}">#{stylesheets}</head><body></body></html>').interpolate(a)},_unset:function(a,c,d,e){try{a[c]=d}catch(k){}try{a.__defineGetter__(c,function(){return d})}catch(j){}if(e)try{a.__defineSetter__(c,
function(){})}catch(n){}if(!b.browser.crashesWhenDefineProperty(c))try{var p={get:function(){return d}};e&&(p.set=function(){});Object.defineProperty(a,c,p)}catch(q){}}})})(wysihtml5);(function(){var b={className:"class"};wysihtml5.dom.setAttributes=function(c){return{on:function(a){for(var d in c)a.setAttribute(b[d]||d,c[d])}}}})();
wysihtml5.dom.setStyles=function(b){return{on:function(c){c=c.style;if("string"===typeof b)c.cssText+=";"+b;else for(var a in b)"float"===a?(c.cssFloat=b[a],c.styleFloat=b[a]):c[a]=b[a]}}};
(function(b){b.simulatePlaceholder=function(c,a,d){var e=function(){a.hasPlaceholderSet()&&a.clear();b.removeClass(a.element,"placeholder")},f=function(){a.isEmpty()&&(a.setValue(d),b.addClass(a.element,"placeholder"))};c.observe("set_placeholder",f).observe("unset_placeholder",e).observe("focus:composer",e).observe("paste:composer",e).observe("blur:composer",f);f()}})(wysihtml5.dom);
(function(b){var c=document.documentElement;"textContent"in c?(b.setTextContent=function(a,b){a.textContent=b},b.getTextContent=function(a){return a.textContent}):"innerText"in c?(b.setTextContent=function(a,b){a.innerText=b},b.getTextContent=function(a){return a.innerText}):(b.setTextContent=function(a,b){a.nodeValue=b},b.getTextContent=function(a){return a.nodeValue})})(wysihtml5.dom);
wysihtml5.quirks.cleanPastedHTML=function(){var b={"a u":wysihtml5.dom.replaceWithChildNodes};return function(c,a,d){var a=a||b,d=d||c.ownerDocument||document,e="string"===typeof c,f,g,i,h=0,c=e?wysihtml5.dom.getAsDom(c,d):c;for(i in a){f=c.querySelectorAll(i);d=a[i];for(g=f.length;h<g;h++)d(f[h])}return e?c.innerHTML:c}}();
(function(b){var c=b.dom;b.quirks.ensureProperClearing=function(){var a=function(){var a=this;setTimeout(function(){var b=a.innerHTML.toLowerCase();if("<p>&nbsp;</p>"==b||"<p>&nbsp;</p><p>&nbsp;</p>"==b)a.innerHTML=""},0)};return function(b){c.observe(b.element,["cut","keydown"],a)}}();b.quirks.ensureProperClearingOfLists=function(){var a=["OL","UL","MENU"];return function(d){c.observe(d.element,"keydown",function(e){if(e.keyCode===b.BACKSPACE_KEY){var f=d.selection.getSelectedNode(),e=d.element;
e.firstChild&&b.lang.array(a).contains(e.firstChild.nodeName)&&(f=c.getParentElement(f,{nodeName:a}))&&f==e.firstChild&&1>=f.childNodes.length&&(f.firstChild?""===f.firstChild.innerHTML:1)&&f.parentNode.removeChild(f)}})}}()})(wysihtml5);
(function(b){b.quirks.getCorrectInnerHTML=function(c){var a=c.innerHTML;if(-1===a.indexOf("%7E"))return a;var c=c.querySelectorAll("[href*='~'], [src*='~']"),d,e,f,g;g=0;for(f=c.length;g<f;g++)d=c[g].href||c[g].src,e=b.lang.string(d).replace("~").by("%7E"),a=b.lang.string(a).replace(e).by(d);return a}})(wysihtml5);
(function(b){var c=b.dom,a="LI P H1 H2 H3 H4 H5 H6".split(" "),d=["UL","OL","MENU"];b.quirks.insertLineBreakOnReturn=function(e){function f(a){if(a=c.getParentElement(a,{nodeName:["P","DIV"]},2)){var d=document.createTextNode(b.INVISIBLE_SPACE);c.insert(d).before(a);c.replaceWithChildNodes(a);e.selection.selectNode(d)}}c.observe(e.element.ownerDocument,"keydown",function(g){var i=g.keyCode;if(!(g.shiftKey||i!==b.ENTER_KEY&&i!==b.BACKSPACE_KEY)){var h=e.selection.getSelectedNode();(h=c.getParentElement(h,
{nodeName:a},4))?"LI"===h.nodeName&&(i===b.ENTER_KEY||i===b.BACKSPACE_KEY)?setTimeout(function(){var a=e.selection.getSelectedNode(),b;a&&((b=c.getParentElement(a,{nodeName:d},2))||f(a))},0):h.nodeName.match(/H[1-6]/)&&i===b.ENTER_KEY&&setTimeout(function(){f(e.selection.getSelectedNode())},0):i===b.ENTER_KEY&&!b.browser.insertsLineBreaksOnReturn()&&(e.commands.exec("insertLineBreak"),g.preventDefault())}})}})(wysihtml5);
(function(b){b.quirks.redraw=function(c){b.dom.addClass(c,"wysihtml5-quirks-redraw");b.dom.removeClass(c,"wysihtml5-quirks-redraw");try{var a=c.ownerDocument;a.execCommand("italic",!1,null);a.execCommand("italic",!1,null)}catch(d){}}})(wysihtml5);
(function(b){var c=b.dom;b.Selection=Base.extend({constructor:function(a){window.rangy.init();this.editor=a;this.composer=a.composer;this.doc=this.composer.doc},getBookmark:function(){var a=this.getRange();return a&&a.cloneRange()},setBookmark:function(a){a&&this.setSelection(a)},setBefore:function(a){var b=rangy.createRange(this.doc);b.setStartBefore(a);b.setEndBefore(a);return this.setSelection(b)},setAfter:function(a){var b=rangy.createRange(this.doc);b.setStartAfter(a);b.setEndAfter(a);return this.setSelection(b)},
selectNode:function(a){var d=rangy.createRange(this.doc),e=a.nodeType===b.ELEMENT_NODE,f="canHaveHTML"in a?a.canHaveHTML:"IMG"!==a.nodeName,g=e?a.innerHTML:a.data,g=""===g||g===b.INVISIBLE_SPACE,i=c.getStyle("display").from(a),i="block"===i||"list-item"===i;if(g&&e&&f)try{a.innerHTML=b.INVISIBLE_SPACE}catch(h){}f?d.selectNodeContents(a):d.selectNode(a);f&&g&&e?d.collapse(i):f&&g&&(d.setStartAfter(a),d.setEndAfter(a));this.setSelection(d)},getSelectedNode:function(a){if(a&&this.doc.selection&&"Control"===
this.doc.selection.type&&(a=this.doc.selection.createRange())&&a.length)return a.item(0);a=this.getSelection(this.doc);return a.focusNode===a.anchorNode?a.focusNode:(a=this.getRange(this.doc))?a.commonAncestorContainer:this.doc.body},executeAndRestore:function(a,c){var e=this.doc.body,f=c&&e.scrollTop,g=c&&e.scrollLeft,i='<span class="_wysihtml5-temp-placeholder">'+b.INVISIBLE_SPACE+"</span>",h=this.getRange(this.doc);if(h){i=h.createContextualFragment(i);h.insertNode(i);try{a(h.startContainer,h.endContainer)}catch(k){setTimeout(function(){throw k;
},0)}(caretPlaceholder=this.doc.querySelector("._wysihtml5-temp-placeholder"))?(h=rangy.createRange(this.doc),h.selectNode(caretPlaceholder),h.deleteContents(),this.setSelection(h)):e.focus();c&&(e.scrollTop=f,e.scrollLeft=g);try{caretPlaceholder.parentNode.removeChild(caretPlaceholder)}catch(j){}}else a(e,e)},executeAndRestoreSimple:function(a){var b,c,f=this.getRange(),g=this.doc.body,i;if(f){b=f.getNodes([3]);g=b[0]||f.startContainer;i=b[b.length-1]||f.endContainer;b=g===f.startContainer?f.startOffset:
0;c=i===f.endContainer?f.endOffset:i.length;try{a(f.startContainer,f.endContainer)}catch(h){setTimeout(function(){throw h;},0)}a=rangy.createRange(this.doc);try{a.setStart(g,b)}catch(k){}try{a.setEnd(i,c)}catch(j){}try{this.setSelection(a)}catch(n){}}else a(g,g)},insertHTML:function(a){var a=rangy.createRange(this.doc).createContextualFragment(a),b=a.lastChild;this.insertNode(a);b&&this.setAfter(b)},insertNode:function(a){var b=this.getRange();b&&b.insertNode(a)},surround:function(a){var b=this.getRange();
if(b)try{b.surroundContents(a),this.selectNode(a)}catch(c){a.appendChild(b.extractContents()),b.insertNode(a)}},scrollIntoView:function(){var a=this.doc,c=a.documentElement.scrollHeight>a.documentElement.offsetHeight,e;if(!(e=a._wysihtml5ScrollIntoViewElement))e=a.createElement("span"),e.innerHTML=b.INVISIBLE_SPACE;e=a._wysihtml5ScrollIntoViewElement=e;if(c){this.insertNode(e);var c=e,f=0;if(c.parentNode){do f+=c.offsetTop||0,c=c.offsetParent;while(c)}c=f;e.parentNode.removeChild(e);c>a.body.scrollTop&&
(a.body.scrollTop=c)}},selectLine:function(){b.browser.supportsSelectionModify()?this._selectLine_W3C():this.doc.selection&&this._selectLine_MSIE()},_selectLine_W3C:function(){var a=this.doc.defaultView.getSelection();a.modify("extend","left","lineboundary");a.modify("extend","right","lineboundary")},_selectLine_MSIE:function(){var a=this.doc.selection.createRange(),b=a.boundingTop,c=this.doc.body.scrollWidth,f;if(a.moveToPoint){0===b&&(f=this.doc.createElement("span"),this.insertNode(f),b=f.offsetTop,
f.parentNode.removeChild(f));b+=1;for(f=-10;f<c;f+=2)try{a.moveToPoint(f,b);break}catch(g){}for(f=this.doc.selection.createRange();0<=c;c--)try{f.moveToPoint(c,b);break}catch(i){}a.setEndPoint("EndToEnd",f);a.select()}},getText:function(){var a=this.getSelection();return a?a.toString():""},getNodes:function(a,b){var c=this.getRange();return c?c.getNodes([a],b):[]},getRange:function(){var a=this.getSelection();return a&&a.rangeCount&&a.getRangeAt(0)},getSelection:function(){return rangy.getSelection(this.doc.defaultView||
this.doc.parentWindow)},setSelection:function(a){return rangy.getSelection(this.doc.defaultView||this.doc.parentWindow).setSingleRange(a)}})})(wysihtml5);
(function(b,c){function a(a,b){return c.dom.isCharacterDataNode(a)?0==b?!!a.previousSibling:b==a.length?!!a.nextSibling:!0:0<b&&b<a.childNodes.length}function d(a,b,e){var f;c.dom.isCharacterDataNode(b)&&(0==e?(e=c.dom.getNodeIndex(b),b=b.parentNode):e==b.length?(e=c.dom.getNodeIndex(b)+1,b=b.parentNode):f=c.dom.splitDataNode(b,e));if(!f){f=b.cloneNode(!1);f.id&&f.removeAttribute("id");for(var g;g=b.childNodes[e];)f.appendChild(g);c.dom.insertAfter(f,b)}return b==a?f:d(a,f.parentNode,c.dom.getNodeIndex(f))}
function e(a){this.firstTextNode=(this.isElementMerge=a.nodeType==b.ELEMENT_NODE)?a.lastChild:a;this.textNodes=[this.firstTextNode]}function f(a,b,c,d){this.tagNames=a||[g];this.cssClass=b||"";this.similarClassRegExp=c;this.normalize=d;this.applyToAnyTagName=!1}var g="span",i=/\s+/g;e.prototype={doMerge:function(){for(var a=[],b,c,d=0,e=this.textNodes.length;d<e;++d)b=this.textNodes[d],c=b.parentNode,a[d]=b.data,d&&(c.removeChild(b),c.hasChildNodes()||c.parentNode.removeChild(c));return this.firstTextNode.data=
a=a.join("")},getLength:function(){for(var a=this.textNodes.length,b=0;a--;)b+=this.textNodes[a].length;return b},toString:function(){for(var a=[],b=0,c=this.textNodes.length;b<c;++b)a[b]="'"+this.textNodes[b].data+"'";return"[Merge("+a.join(",")+")]"}};f.prototype={getAncestorWithClass:function(a){for(var d;a;){if(this.cssClass)if(d=this.cssClass,a.className){var e=a.className.match(this.similarClassRegExp)||[];d=e[e.length-1]===d}else d=!1;else d=!0;if(a.nodeType==b.ELEMENT_NODE&&c.dom.arrayContains(this.tagNames,
a.tagName.toLowerCase())&&d)return a;a=a.parentNode}return!1},postApply:function(a,b){for(var c=a[0],d=a[a.length-1],f=[],g,i=c,m=d,s=0,x=d.length,o,z,w=0,y=a.length;w<y;++w)if(o=a[w],z=this.getAdjacentMergeableTextNode(o.parentNode,!1)){if(g||(g=new e(z),f.push(g)),g.textNodes.push(o),o===c&&(i=g.firstTextNode,s=i.length),o===d)m=g.firstTextNode,x=g.getLength()}else g=null;if(c=this.getAdjacentMergeableTextNode(d.parentNode,!0))g||(g=new e(d),f.push(g)),g.textNodes.push(c);if(f.length){w=0;for(y=
f.length;w<y;++w)f[w].doMerge();b.setStart(i,s);b.setEnd(m,x)}},getAdjacentMergeableTextNode:function(a,c){var d=a.nodeType==b.TEXT_NODE,e=d?a.parentNode:a,f=c?"nextSibling":"previousSibling";if(d){if((d=a[f])&&d.nodeType==b.TEXT_NODE)return d}else if((d=e[f])&&this.areElementsMergeable(a,d))return d[c?"firstChild":"lastChild"];return null},areElementsMergeable:function(a,b){var d;if(d=c.dom.arrayContains(this.tagNames,(a.tagName||"").toLowerCase()))if(d=c.dom.arrayContains(this.tagNames,(b.tagName||
"").toLowerCase()))if(d=a.className.replace(i," ")==b.className.replace(i," "))a:if(a.attributes.length!=b.attributes.length)d=!1;else{d=0;for(var e=a.attributes.length,f,g;d<e;++d)if(f=a.attributes[d],g=f.name,"class"!=g&&(g=b.attributes.getNamedItem(g),f.specified!=g.specified||f.specified&&f.nodeValue!==g.nodeValue)){d=!1;break a}d=!0}return d},createContainer:function(a){a=a.createElement(this.tagNames[0]);this.cssClass&&(a.className=this.cssClass);return a},applyToTextNode:function(a){var b=
a.parentNode;1==b.childNodes.length&&c.dom.arrayContains(this.tagNames,b.tagName.toLowerCase())?this.cssClass&&(a=this.cssClass,b.className?(b.className&&(b.className=b.className.replace(this.similarClassRegExp,"")),b.className+=" "+a):b.className=a):(b=this.createContainer(c.dom.getDocument(a)),a.parentNode.insertBefore(b,a),b.appendChild(a))},isRemovable:function(a){return c.dom.arrayContains(this.tagNames,a.tagName.toLowerCase())&&b.lang.string(a.className).trim()==this.cssClass},undoToTextNode:function(b,
c,e){c.containsNode(e)||(b=c.cloneRange(),b.selectNode(e),b.isPointInRange(c.endContainer,c.endOffset)&&a(c.endContainer,c.endOffset)&&(d(e,c.endContainer,c.endOffset),c.setEndAfter(e)),b.isPointInRange(c.startContainer,c.startOffset)&&a(c.startContainer,c.startOffset)&&(e=d(e,c.startContainer,c.startOffset)));this.similarClassRegExp&&e.className&&(e.className=e.className.replace(this.similarClassRegExp,""));if(this.isRemovable(e)){c=e;for(e=c.parentNode;c.firstChild;)e.insertBefore(c.firstChild,
c);e.removeChild(c)}},applyToRange:function(a){var c=a.getNodes([b.TEXT_NODE]);if(!c.length)try{var d=this.createContainer(a.endContainer.ownerDocument);a.surroundContents(d);this.selectNode(a,d);return}catch(e){}a.splitBoundaries();c=a.getNodes([b.TEXT_NODE]);if(c.length){for(var f=0,g=c.length;f<g;++f)d=c[f],this.getAncestorWithClass(d)||this.applyToTextNode(d);a.setStart(c[0],0);d=c[c.length-1];a.setEnd(d,d.length);this.normalize&&this.postApply(c,a)}},undoToRange:function(a){var c=a.getNodes([b.TEXT_NODE]),
d,e;c.length?(a.splitBoundaries(),c=a.getNodes([b.TEXT_NODE])):(c=a.endContainer.ownerDocument.createTextNode(b.INVISIBLE_SPACE),a.insertNode(c),a.selectNode(c),c=[c]);for(var f=0,g=c.length;f<g;++f)d=c[f],(e=this.getAncestorWithClass(d))&&this.undoToTextNode(d,a,e);1==g?this.selectNode(a,c[0]):(a.setStart(c[0],0),d=c[c.length-1],a.setEnd(d,d.length),this.normalize&&this.postApply(c,a))},selectNode:function(a,c){var d=c.nodeType===b.ELEMENT_NODE,e="canHaveHTML"in c?c.canHaveHTML:!0,f=d?c.innerHTML:
c.data;if((f=""===f||f===b.INVISIBLE_SPACE)&&d&&e)try{c.innerHTML=b.INVISIBLE_SPACE}catch(g){}a.selectNodeContents(c);f&&d?a.collapse(!1):f&&(a.setStartAfter(c),a.setEndAfter(c))},getTextSelectedByRange:function(a,b){var c=b.cloneRange();c.selectNodeContents(a);var d=c.intersection(b),d=d?d.toString():"";c.detach();return d},isAppliedToRange:function(a){var c=[],d,e=a.getNodes([b.TEXT_NODE]);if(!e.length)return(d=this.getAncestorWithClass(a.startContainer))?[d]:!1;for(var f=0,g=e.length,i;f<g;++f){i=
this.getTextSelectedByRange(e[f],a);d=this.getAncestorWithClass(e[f]);if(""!=i&&!d)return!1;c.push(d)}return c},toggleRange:function(a){this.isAppliedToRange(a)?this.undoToRange(a):this.applyToRange(a)}};b.selection.HTMLApplier=f})(wysihtml5,rangy);
wysihtml5.Commands=Base.extend({constructor:function(b){this.editor=b;this.composer=b.composer;this.doc=this.composer.doc},support:function(b){return wysihtml5.browser.supportsCommand(this.doc,b)},exec:function(b,c){var a=wysihtml5.commands[b],d=wysihtml5.lang.array(arguments).get(),e=a&&a.exec,f=null;this.editor.fire("beforecommand:composer");if(e)d.unshift(this.composer),f=e.apply(a,d);else try{f=this.doc.execCommand(b,!1,c)}catch(g){}this.editor.fire("aftercommand:composer");return f},state:function(b,
c){var a=wysihtml5.commands[b],d=wysihtml5.lang.array(arguments).get(),e=a&&a.state;if(e)return d.unshift(this.composer),e.apply(a,d);try{return this.doc.queryCommandState(b)}catch(f){return!1}},value:function(b){var c=wysihtml5.commands[b],a=c&&c.value;if(a)return a.call(c,this.composer,b);try{return this.doc.queryCommandValue(b)}catch(d){return null}}});
(function(b){b.commands.bold={exec:function(c,a){return b.commands.formatInline.exec(c,a,"b")},state:function(c,a){return b.commands.formatInline.state(c,a,"b")},value:function(){}}})(wysihtml5);
(function(b){function c(c,g){var i=c.doc,h="_wysihtml5-temp-"+ +new Date,k=0,j,n,p;b.commands.formatInline.exec(c,a,d,h,/non-matching-class/g);j=i.querySelectorAll(d+"."+h);for(h=j.length;k<h;k++)for(p in n=j[k],n.removeAttribute("class"),g)n.setAttribute(p,g[p]);k=n;1===h&&(p=e.getTextContent(n),h=!!n.querySelector("*"),p=""===p||p===b.INVISIBLE_SPACE,!h&&p&&(e.setTextContent(n,g.text||n.href),i=i.createTextNode(" "),c.selection.setAfter(n),c.selection.insertNode(i),k=i));c.selection.setAfter(k)}
var a,d="A",e=b.dom;b.commands.createLink={exec:function(a,b,d){var h=this.state(a,b);h?a.selection.executeAndRestore(function(){for(var a=h.length,b=0,c,d,f;b<a;b++)c=h[b],d=e.getParentElement(c,{nodeName:"code"}),f=e.getTextContent(c),f.match(e.autoLink.URL_REG_EXP)&&!d?e.renameElement(c,"code"):e.replaceWithChildNodes(c)}):(d="object"===typeof d?d:{href:d},c(a,d))},state:function(a,c){return b.commands.formatInline.state(a,c,"A")},value:function(){return a}}})(wysihtml5);
(function(b){var c=/wysiwyg-font-size-[a-z\-]+/g;b.commands.fontSize={exec:function(a,d,e){return b.commands.formatInline.exec(a,d,"span","wysiwyg-font-size-"+e,c)},state:function(a,d,e){return b.commands.formatInline.state(a,d,"span","wysiwyg-font-size-"+e,c)},value:function(){}}})(wysihtml5);
(function(b){var c=/wysiwyg-color-[a-z]+/g;b.commands.foreColor={exec:function(a,d,e){return b.commands.formatInline.exec(a,d,"span","wysiwyg-color-"+e,c)},state:function(a,d,e){return b.commands.formatInline.state(a,d,"span","wysiwyg-color-"+e,c)},value:function(){}}})(wysihtml5);
(function(b){function c(a){for(a=a.previousSibling;a&&a.nodeType===b.TEXT_NODE&&!b.lang.string(a.data).trim();)a=a.previousSibling;return a}function a(a){for(a=a.nextSibling;a&&a.nodeType===b.TEXT_NODE&&!b.lang.string(a.data).trim();)a=a.nextSibling;return a}function d(a){return"BR"===a.nodeName||"block"===g.getStyle("display").from(a)?!0:!1}function e(a,c,d,e){if(e)var f=g.observe(a,"DOMNodeInserted",function(a){var a=a.target,c;a.nodeType===b.ELEMENT_NODE&&(c=g.getStyle("display").from(a),"inline"!==
c.substr(0,6)&&(a.className+=" "+e))});a.execCommand(c,!1,d);f&&f.stop()}function f(b,d){b.selection.selectLine();b.selection.surround(d);var e=a(d),f=c(d);e&&"BR"===e.nodeName&&e.parentNode.removeChild(e);f&&"BR"===f.nodeName&&f.parentNode.removeChild(f);(e=d.lastChild)&&"BR"===e.nodeName&&e.parentNode.removeChild(e);b.selection.selectNode(d)}var g=b.dom,i="H1 H2 H3 H4 H5 H6 P BLOCKQUOTE DIV".split(" ");b.commands.formatBlock={exec:function(h,k,j,n,p){var q=h.doc,r=this.state(h,k,j,n,p),m,j="string"===
typeof j?j.toUpperCase():j;if(r)h.selection.executeAndRestoreSimple(function(){p&&(r.className=r.className.replace(p,""));var e=!!b.lang.string(r.className).trim();if(!e&&r.nodeName===(j||"DIV")){var e=r,f=e.ownerDocument,h=a(e),i=c(e);h&&!d(h)&&e.parentNode.insertBefore(f.createElement("br"),h);i&&!d(i)&&e.parentNode.insertBefore(f.createElement("br"),e);g.replaceWithChildNodes(r)}else e&&g.renameElement(r,"DIV")});else{if(null===j||b.lang.array(i).contains(j))if(m=h.selection.getSelectedNode(),
r=g.getParentElement(m,{nodeName:i})){h.selection.executeAndRestoreSimple(function(){j&&(r=g.renameElement(r,j));if(n){var a=r;a.className?(a.className=a.className.replace(p,""),a.className+=" "+n):a.className=n}});return}h.commands.support(k)?e(q,k,j||"DIV",n):(r=q.createElement(j||"DIV"),n&&(r.className=n),f(h,r))}},state:function(a,b,c,d,e){c="string"===typeof c?c.toUpperCase():c;a=a.selection.getSelectedNode();return g.getParentElement(a,{nodeName:c,className:d,classRegExp:e})},value:function(){}}})(wysihtml5);
(function(b){function c(c,f,g){var i=c+":"+f;if(!d[i]){var h=d,k=b.selection.HTMLApplier,j=a[c],c=j?[c.toLowerCase(),j.toLowerCase()]:[c.toLowerCase()];h[i]=new k(c,f,g,!0)}return d[i]}var a={strong:"b",em:"i",b:"strong",i:"em"},d={};b.commands.formatInline={exec:function(a,b,d,i,h){b=a.selection.getRange();if(!b)return!1;c(d,i,h).toggleRange(b);a.selection.setSelection(b)},state:function(d,f,g,i,h){var f=d.doc,k=a[g]||g;if(!b.dom.hasElementWithTagName(f,g)&&!b.dom.hasElementWithTagName(f,k)||i&&
!b.dom.hasElementWithClassName(f,i))return!1;d=d.selection.getRange();return!d?!1:c(g,i,h).isAppliedToRange(d)},value:function(){}}})(wysihtml5);(function(b){b.commands.insertHTML={exec:function(b,a,d){b.commands.support(a)?b.doc.execCommand(a,!1,d):b.selection.insertHTML(d)},state:function(){return!1},value:function(){}}})(wysihtml5);
(function(b){b.commands.insertImage={exec:function(c,a,d){var d="object"===typeof d?d:{src:d},e=c.doc,a=this.state(c),f;if(a)c.selection.setBefore(a),d=a.parentNode,d.removeChild(a),b.dom.removeEmptyTextNodes(d),"A"===d.nodeName&&!d.firstChild&&(c.selection.setAfter(d),d.parentNode.removeChild(d)),b.quirks.redraw(c.element);else{a=e.createElement("IMG");for(f in d)a[f]=d[f];c.selection.insertNode(a);b.browser.hasProblemsSettingCaretAfterImg()?(d=e.createTextNode(b.INVISIBLE_SPACE),c.selection.insertNode(d),
c.selection.setAfter(d)):c.selection.setAfter(a)}},state:function(c){var a;if(!b.dom.hasElementWithTagName(c.doc,"IMG"))return!1;a=c.selection.getSelectedNode();if(!a)return!1;if("IMG"===a.nodeName)return a;if(a.nodeType!==b.ELEMENT_NODE)return!1;a=c.selection.getText();if(a=b.lang.string(a).trim())return!1;c=c.selection.getNodes(b.ELEMENT_NODE,function(a){return"IMG"===a.nodeName});return 1!==c.length?!1:c[0]},value:function(b){return(b=this.state(b))&&b.src}}})(wysihtml5);
(function(b){var c="<br>"+(b.browser.needsSpaceAfterLineBreak()?" ":"");b.commands.insertLineBreak={exec:function(a,d){a.commands.support(d)?(a.doc.execCommand(d,!1,null),b.browser.autoScrollsToCaret()||a.selection.scrollIntoView()):a.commands.exec("insertHTML",c)},state:function(){return!1},value:function(){}}})(wysihtml5);
(function(b){b.commands.insertOrderedList={exec:function(c,a){var d=c.doc,e=c.selection.getSelectedNode(),f=b.dom.getParentElement(e,{nodeName:"OL"}),g=b.dom.getParentElement(e,{nodeName:"UL"}),e="_wysihtml5-temp-"+(new Date).getTime(),i;c.commands.support(a)?d.execCommand(a,!1,null):f?c.selection.executeAndRestoreSimple(function(){b.dom.resolveList(f)}):g?c.selection.executeAndRestoreSimple(function(){b.dom.renameElement(g,"ol")}):(c.commands.exec("formatBlock","div",e),i=d.querySelector("."+e),
d=""===i.innerHTML||i.innerHTML===b.INVISIBLE_SPACE,c.selection.executeAndRestoreSimple(function(){f=b.dom.convertToList(i,"ol")}),d&&c.selection.selectNode(f.querySelector("li")))},state:function(c){c=c.selection.getSelectedNode();return b.dom.getParentElement(c,{nodeName:"OL"})},value:function(){}}})(wysihtml5);
(function(b){b.commands.insertUnorderedList={exec:function(c,a){var d=c.doc,e=c.selection.getSelectedNode(),f=b.dom.getParentElement(e,{nodeName:"UL"}),g=b.dom.getParentElement(e,{nodeName:"OL"}),e="_wysihtml5-temp-"+(new Date).getTime(),i;c.commands.support(a)?d.execCommand(a,!1,null):f?c.selection.executeAndRestoreSimple(function(){b.dom.resolveList(f)}):g?c.selection.executeAndRestoreSimple(function(){b.dom.renameElement(g,"ul")}):(c.commands.exec("formatBlock","div",e),i=d.querySelector("."+e),
d=""===i.innerHTML||i.innerHTML===b.INVISIBLE_SPACE,c.selection.executeAndRestoreSimple(function(){f=b.dom.convertToList(i,"ul")}),d&&c.selection.selectNode(f.querySelector("li")))},state:function(c){c=c.selection.getSelectedNode();return b.dom.getParentElement(c,{nodeName:"UL"})},value:function(){}}})(wysihtml5);(function(b){b.commands.italic={exec:function(c,a){return b.commands.formatInline.exec(c,a,"i")},state:function(c,a){return b.commands.formatInline.state(c,a,"i")},value:function(){}}})(wysihtml5);
(function(b){var c=/wysiwyg-text-align-[a-z]+/g;b.commands.justifyCenter={exec:function(a){return b.commands.formatBlock.exec(a,"formatBlock",null,"wysiwyg-text-align-center",c)},state:function(a){return b.commands.formatBlock.state(a,"formatBlock",null,"wysiwyg-text-align-center",c)},value:function(){}}})(wysihtml5);
(function(b){var c=/wysiwyg-text-align-[a-z]+/g;b.commands.justifyLeft={exec:function(a){return b.commands.formatBlock.exec(a,"formatBlock",null,"wysiwyg-text-align-left",c)},state:function(a){return b.commands.formatBlock.state(a,"formatBlock",null,"wysiwyg-text-align-left",c)},value:function(){}}})(wysihtml5);
(function(b){var c=/wysiwyg-text-align-[a-z]+/g;b.commands.justifyRight={exec:function(a){return b.commands.formatBlock.exec(a,"formatBlock",null,"wysiwyg-text-align-right",c)},state:function(a){return b.commands.formatBlock.state(a,"formatBlock",null,"wysiwyg-text-align-right",c)},value:function(){}}})(wysihtml5);(function(b){b.commands.underline={exec:function(c,a){return b.commands.formatInline.exec(c,a,"u")},state:function(c,a){return b.commands.formatInline.state(c,a,"u")},value:function(){}}})(wysihtml5);
(function(b){var c='<span id="_wysihtml5-undo" class="_wysihtml5-temp">'+b.INVISIBLE_SPACE+"</span>",a='<span id="_wysihtml5-redo" class="_wysihtml5-temp">'+b.INVISIBLE_SPACE+"</span>",d=b.dom;b.UndoManager=b.lang.Dispatcher.extend({constructor:function(a){this.editor=a;this.composer=a.composer;this.element=this.composer.element;this.history=[this.composer.getValue()];this.position=1;this.composer.commands.support("insertHTML")&&this._observe()},_observe:function(){var e=this,f=this.composer.sandbox.getDocument(),
g;d.observe(this.element,"keydown",function(a){if(!(a.altKey||!a.ctrlKey&&!a.metaKey)){var b=a.keyCode,c=90===b&&a.shiftKey||89===b;90===b&&!a.shiftKey?(e.undo(),a.preventDefault()):c&&(e.redo(),a.preventDefault())}});d.observe(this.element,"keydown",function(a){a=a.keyCode;a!==g&&(g=a,(8===a||46===a)&&e.transact())});if(b.browser.hasUndoInContextMenu()){var i,h,k=function(){for(var a;a=f.querySelector("._wysihtml5-temp");)a.parentNode.removeChild(a);clearInterval(i)};d.observe(this.element,"contextmenu",
function(){k();e.composer.selection.executeAndRestoreSimple(function(){e.element.lastChild&&e.composer.selection.setAfter(e.element.lastChild);f.execCommand("insertHTML",!1,c);f.execCommand("insertHTML",!1,a);f.execCommand("undo",!1,null)});i=setInterval(function(){f.getElementById("_wysihtml5-redo")?(k(),e.redo()):f.getElementById("_wysihtml5-undo")||(k(),e.undo())},400);h||(h=!0,d.observe(document,"mousedown",k),d.observe(f,["mousedown","paste","cut","copy"],k))})}this.editor.observe("newword:composer",
function(){e.transact()}).observe("beforecommand:composer",function(){e.transact()})},transact:function(){var a=this.history[this.position-1],b=this.composer.getValue();if(b!=a){if(40<(this.history.length=this.position))this.history.shift(),this.position--;this.position++;this.history.push(b)}},undo:function(){this.transact();1>=this.position||(this.set(this.history[--this.position-1]),this.editor.fire("undo:composer"))},redo:function(){this.position>=this.history.length||(this.set(this.history[++this.position-
1]),this.editor.fire("redo:composer"))},set:function(a){this.composer.setValue(a);this.editor.focus(!0)}})})(wysihtml5);
wysihtml5.views.View=Base.extend({constructor:function(b,c,a){this.parent=b;this.element=c;this.config=a;this._observeViewChange()},_observeViewChange:function(){var b=this;this.parent.observe("beforeload",function(){b.parent.observe("change_view",function(c){c===b.name?(b.parent.currentView=b,b.show(),setTimeout(function(){b.focus()},0)):b.hide()})})},focus:function(){if(this.element.ownerDocument.querySelector(":focus")!==this.element)try{this.element.focus()}catch(b){}},hide:function(){this.element.style.display=
"none"},show:function(){this.element.style.display=""},disable:function(){this.element.setAttribute("disabled","disabled")},enable:function(){this.element.removeAttribute("disabled")}});
(function(b){var c=b.dom,a=b.browser;b.views.Composer=b.views.View.extend({name:"composer",CARET_HACK:"<br>",constructor:function(a,b,c){this.base(a,b,c);this.textarea=this.parent.textarea;this._initSandbox()},clear:function(){this.element.innerHTML=a.displaysCaretInEmptyContentEditableCorrectly()?"":this.CARET_HACK},getValue:function(a){var c=this.isEmpty()?"":b.quirks.getCorrectInnerHTML(this.element);a&&(c=this.parent.parse(c));return c=b.lang.string(c).replace(b.INVISIBLE_SPACE).by("")},setValue:function(a,
b){b&&(a=this.parent.parse(a));this.element.innerHTML=a},show:function(){this.iframe.style.display=this._displayStyle||"";this.disable();this.enable()},hide:function(){this._displayStyle=c.getStyle("display").from(this.iframe);"none"===this._displayStyle&&(this._displayStyle=null);this.iframe.style.display="none"},disable:function(){this.element.removeAttribute("contentEditable");this.base()},enable:function(){this.element.setAttribute("contentEditable","true");this.base()},focus:function(a){b.browser.doesAsyncFocus()&&
this.hasPlaceholderSet()&&this.clear();this.base();var c=this.element.lastChild;a&&c&&("BR"===c.nodeName?this.selection.setBefore(this.element.lastChild):this.selection.setAfter(this.element.lastChild))},getTextContent:function(){return c.getTextContent(this.element)},hasPlaceholderSet:function(){return this.getTextContent()==this.textarea.element.getAttribute("placeholder")},isEmpty:function(){var a=this.element.innerHTML;return""===a||a===this.CARET_HACK||this.hasPlaceholderSet()||""===this.getTextContent()&&
!this.element.querySelector("blockquote, ul, ol, img, embed, object, table, iframe, svg, video, audio, button, input, select, textarea")},_initSandbox:function(){var a=this;this.sandbox=new c.Sandbox(function(){a._create()},{stylesheets:this.config.stylesheets});this.iframe=this.sandbox.getIframe();var b=document.createElement("input");b.type="hidden";b.name="_wysihtml5_mode";b.value=1;var f=this.textarea.element;c.insert(this.iframe).after(f);c.insert(b).after(f)},_create:function(){var d=this;this.doc=
this.sandbox.getDocument();this.element=this.doc.body;this.textarea=this.parent.textarea;this.element.innerHTML=this.textarea.getValue(!0);this.enable();this.selection=new b.Selection(this.parent);this.commands=new b.Commands(this.parent);c.copyAttributes("className spellcheck title lang dir accessKey".split(" ")).from(this.textarea.element).to(this.element);c.addClass(this.element,this.config.composerClassName);this.config.style&&this.style();this.observe();var e=this.config.name;e&&(c.addClass(this.element,
e),c.addClass(this.iframe,e));(e="string"===typeof this.config.placeholder?this.config.placeholder:this.textarea.element.getAttribute("placeholder"))&&c.simulatePlaceholder(this.parent,this,e);this.commands.exec("styleWithCSS",!1);this._initAutoLinking();this._initObjectResizing();this._initUndoManager();(this.textarea.element.hasAttribute("autofocus")||document.querySelector(":focus")==this.textarea.element)&&setTimeout(function(){d.focus()},100);b.quirks.insertLineBreakOnReturn(this);a.clearsContentEditableCorrectly()||
b.quirks.ensureProperClearing(this);a.clearsListsInContentEditableCorrectly()||b.quirks.ensureProperClearingOfLists(this);this.initSync&&this.config.sync&&this.initSync();this.textarea.hide();this.parent.fire("beforeload").fire("load")},_initAutoLinking:function(){var d=this,e=a.canDisableAutoLinking(),f=a.doesAutoLinkingInContentEditable();e&&this.commands.exec("autoUrlDetect",!1);if(this.config.autoLink){(!f||f&&e)&&this.parent.observe("newword:composer",function(){d.selection.executeAndRestore(function(a,
b){c.autoLink(b.parentNode)})});var g=this.sandbox.getDocument().getElementsByTagName("a"),i=c.autoLink.URL_REG_EXP,h=function(a){a=b.lang.string(c.getTextContent(a)).trim();"www."===a.substr(0,4)&&(a="http://"+a);return a};c.observe(this.element,"keydown",function(a){if(g.length){var a=d.selection.getSelectedNode(a.target.ownerDocument),b=c.getParentElement(a,{nodeName:"A"},4),e;b&&(e=h(b),setTimeout(function(){var a=h(b);a!==e&&a.match(i)&&b.setAttribute("href",a)},0))}})}},_initObjectResizing:function(){var d=
["width","height"],e=d.length,f=this.element;this.commands.exec("enableObjectResizing",this.config.allowObjectResizing);this.config.allowObjectResizing?a.supportsEvent("resizeend")&&c.observe(f,"resizeend",function(a){for(var a=a.target||a.srcElement,c=a.style,h=0,k;h<e;h++)k=d[h],c[k]&&(a.setAttribute(k,parseInt(c[k],10)),c[k]="");b.quirks.redraw(f)}):a.supportsEvent("resizestart")&&c.observe(f,"resizestart",function(a){a.preventDefault()})},_initUndoManager:function(){new b.UndoManager(this.parent)}})})(wysihtml5);
(function(b){var c=b.dom,a=document,d=window,e=a.createElement("div"),f="background-color color cursor font-family font-size font-style font-variant font-weight line-height letter-spacing text-align text-decoration text-indent text-rendering word-break word-wrap word-spacing".split(" "),g="background-color border-collapse border-bottom-color border-bottom-style border-bottom-width border-left-color border-left-style border-left-width border-right-color border-right-style border-right-width border-top-color border-top-style border-top-width clear display float margin-bottom margin-left margin-right margin-top outline-color outline-offset outline-width outline-style padding-left padding-right padding-top padding-bottom position top left right bottom z-index vertical-align text-align -webkit-box-sizing -moz-box-sizing -ms-box-sizing box-sizing -webkit-box-shadow -moz-box-shadow -ms-box-shadow box-shadow -webkit-border-top-right-radius -moz-border-radius-topright border-top-right-radius -webkit-border-bottom-right-radius -moz-border-radius-bottomright border-bottom-right-radius -webkit-border-bottom-left-radius -moz-border-radius-bottomleft border-bottom-left-radius -webkit-border-top-left-radius -moz-border-radius-topleft border-top-left-radius width height".split(" "),
i="width height top left right bottom".split(" "),h=["html             { height: 100%; }","body             { min-height: 100%; padding: 0; margin: 0; margin-top: -1px; padding-top: 1px; }","._wysihtml5-temp { display: none; }",b.browser.isGecko?"body.placeholder { color: graytext !important; }":"body.placeholder { color: #a9a9a9 !important; }","body[disabled]   { background-color: #eee !important; color: #999 !important; cursor: default !important; }","img:-moz-broken  { -moz-force-broken-image-icon: 1; height: 24px; width: 24px; }"],
k=function(b){if(b.setActive)try{b.setActive()}catch(e){}else{var f=b.style,h=a.documentElement.scrollTop||a.body.scrollTop,g=a.documentElement.scrollLeft||a.body.scrollLeft,f={position:f.position,top:f.top,left:f.left,WebkitUserSelect:f.WebkitUserSelect};c.setStyles({position:"absolute",top:"-99999px",left:"-99999px",WebkitUserSelect:"none"}).on(b);b.focus();c.setStyles(f).on(b);d.scrollTo&&d.scrollTo(g,h)}};b.views.Composer.prototype.style=function(){var j=this,n=a.querySelector(":focus"),p=this.textarea.element,
q=p.hasAttribute("placeholder"),r=q&&p.getAttribute("placeholder");this.focusStylesHost=this.focusStylesHost||e.cloneNode(!1);this.blurStylesHost=this.blurStylesHost||e.cloneNode(!1);q&&p.removeAttribute("placeholder");p===n&&p.blur();c.copyStyles(g).from(p).to(this.iframe).andTo(this.blurStylesHost);c.copyStyles(f).from(p).to(this.element).andTo(this.blurStylesHost);c.insertCSS(h).into(this.element.ownerDocument);k(p);c.copyStyles(g).from(p).to(this.focusStylesHost);c.copyStyles(f).from(p).to(this.focusStylesHost);
var m=b.lang.array(g).without(["display"]);n?n.focus():p.blur();q&&p.setAttribute("placeholder",r);if(!b.browser.hasCurrentStyleProperty())var s=c.observe(d,"resize",function(){if(c.contains(document.documentElement,j.iframe)){var a=c.getStyle("display").from(p),b=c.getStyle("display").from(j.iframe);p.style.display="";j.iframe.style.display="none";c.copyStyles(i).from(p).to(j.iframe).andTo(j.focusStylesHost).andTo(j.blurStylesHost);j.iframe.style.display=b;p.style.display=a}else s.stop()});this.parent.observe("focus:composer",
function(){c.copyStyles(m).from(j.focusStylesHost).to(j.iframe);c.copyStyles(f).from(j.focusStylesHost).to(j.element)});this.parent.observe("blur:composer",function(){c.copyStyles(m).from(j.blurStylesHost).to(j.iframe);c.copyStyles(f).from(j.blurStylesHost).to(j.element)});return this}})(wysihtml5);
(function(b){var c=b.dom,a=b.browser,d={66:"bold",73:"italic",85:"underline"};b.views.Composer.prototype.observe=function(){var e=this,f=this.getValue(),g=this.sandbox.getIframe(),i=this.element,h=a.supportsEventsInIframeCorrectly()?i:this.sandbox.getWindow(),k=a.supportsEvent("drop")?["drop","paste"]:["dragdrop","paste"];c.observe(g,"DOMNodeRemoved",function(){clearInterval(j);e.parent.fire("destroy:composer")});var j=setInterval(function(){c.contains(document.documentElement,g)||(clearInterval(j),
e.parent.fire("destroy:composer"))},250);c.observe(h,"focus",function(){e.parent.fire("focus").fire("focus:composer");setTimeout(function(){f=e.getValue()},0)});c.observe(h,"blur",function(){f!==e.getValue()&&e.parent.fire("change").fire("change:composer");e.parent.fire("blur").fire("blur:composer")});b.browser.isIos()&&c.observe(i,"blur",function(){var a=i.ownerDocument.createElement("input"),b=document.documentElement.scrollTop||document.body.scrollTop,c=document.documentElement.scrollLeft||document.body.scrollLeft;
try{e.selection.insertNode(a)}catch(d){i.appendChild(a)}a.focus();a.parentNode.removeChild(a);window.scrollTo(c,b)});c.observe(i,"dragenter",function(){e.parent.fire("unset_placeholder")});a.firesOnDropOnlyWhenOnDragOverIsCancelled()&&c.observe(i,["dragover","dragenter"],function(a){a.preventDefault()});c.observe(i,k,function(b){var c=b.dataTransfer,d;c&&a.supportsDataTransfer()&&(d=c.getData("text/html")||c.getData("text/plain"));d?(i.focus(),e.commands.exec("insertHTML",d),e.parent.fire("paste").fire("paste:composer"),
b.stopPropagation(),b.preventDefault()):setTimeout(function(){e.parent.fire("paste").fire("paste:composer")},0)});c.observe(i,"keyup",function(a){a=a.keyCode;(a===b.SPACE_KEY||a===b.ENTER_KEY)&&e.parent.fire("newword:composer")});this.parent.observe("paste:composer",function(){setTimeout(function(){e.parent.fire("newword:composer")},0)});a.canSelectImagesInContentEditable()||c.observe(i,"mousedown",function(a){var b=a.target;"IMG"===b.nodeName&&(e.selection.selectNode(b),a.preventDefault())});c.observe(i,
"keydown",function(a){var b=d[a.keyCode];if((a.ctrlKey||a.metaKey)&&!a.altKey&&b)e.commands.exec(b),a.preventDefault()});c.observe(i,"keydown",function(a){var c=e.selection.getSelectedNode(!0),d=a.keyCode;if(c&&"IMG"===c.nodeName&&(d===b.BACKSPACE_KEY||d===b.DELETE_KEY))d=c.parentNode,d.removeChild(c),"A"===d.nodeName&&!d.firstChild&&d.parentNode.removeChild(d),setTimeout(function(){b.quirks.redraw(i)},0),a.preventDefault()});var n={IMG:"Image: ",A:"Link: "};c.observe(i,"mouseover",function(a){var a=
a.target,b=a.nodeName;!("A"!==b&&"IMG"!==b)&&!a.hasAttribute("title")&&(b=n[b]+(a.getAttribute("href")||a.getAttribute("src")),a.setAttribute("title",b))})}})(wysihtml5);
(function(b){b.views.Synchronizer=Base.extend({constructor:function(b,a,d){this.editor=b;this.textarea=a;this.composer=d;this._observe()},fromComposerToTextarea:function(c){this.textarea.setValue(b.lang.string(this.composer.getValue()).trim(),c)},fromTextareaToComposer:function(b){var a=this.textarea.getValue();a?this.composer.setValue(a,b):(this.composer.clear(),this.editor.fire("set_placeholder"))},sync:function(b){"textarea"===this.editor.currentView.name?this.fromTextareaToComposer(b):this.fromComposerToTextarea(b)},
_observe:function(){var c,a=this,d=this.textarea.element.form,e=function(){c=setInterval(function(){a.fromComposerToTextarea()},400)},f=function(){clearInterval(c);c=null};e();d&&(b.dom.observe(d,"submit",function(){a.sync(!0)}),b.dom.observe(d,"reset",function(){setTimeout(function(){a.fromTextareaToComposer()},0)}));this.editor.observe("change_view",function(b){if(b==="composer"&&!c){a.fromTextareaToComposer(true);e()}else if(b==="textarea"){a.fromComposerToTextarea(true);f()}});this.editor.observe("destroy:composer",
f)}})})(wysihtml5);
wysihtml5.views.Textarea=wysihtml5.views.View.extend({name:"textarea",constructor:function(b,c,a){this.base(b,c,a);this._observe()},clear:function(){this.element.value=""},getValue:function(b){var c=this.isEmpty()?"":this.element.value;b&&(c=this.parent.parse(c));return c},setValue:function(b,c){c&&(b=this.parent.parse(b));this.element.value=b},hasPlaceholderSet:function(){var b=wysihtml5.browser.supportsPlaceholderAttributeOn(this.element),c=this.element.getAttribute("placeholder")||null,a=this.element.value;
return b&&!a||a===c},isEmpty:function(){return!wysihtml5.lang.string(this.element.value).trim()||this.hasPlaceholderSet()},_observe:function(){var b=this.element,c=this.parent,a={focusin:"focus",focusout:"blur"},d=wysihtml5.browser.supportsEvent("focusin")?["focusin","focusout","change"]:["focus","blur","change"];c.observe("beforeload",function(){wysihtml5.dom.observe(b,d,function(b){b=a[b.type]||b.type;c.fire(b).fire(b+":textarea")});wysihtml5.dom.observe(b,["paste","drop"],function(){setTimeout(function(){c.fire("paste").fire("paste:textarea")},
0)})})}});
(function(b){var c=b.dom;b.toolbar.Dialog=b.lang.Dispatcher.extend({constructor:function(a,b){this.link=a;this.container=b},_observe:function(){if(!this._observed){var a=this,d=function(b){var c=a._serialize();c==a.elementToChange?a.fire("edit",c):a.fire("save",c);a.hide();b.preventDefault();b.stopPropagation()};c.observe(a.link,"click",function(){c.hasClass(a.link,"wysihtml5-command-dialog-opened")&&setTimeout(function(){a.hide()},0)});c.observe(this.container,"keydown",function(c){var e=c.keyCode;
e===b.ENTER_KEY&&d(c);e===b.ESCAPE_KEY&&a.hide()});c.delegate(this.container,"[data-wysihtml5-dialog-action=save]","click",d);c.delegate(this.container,"[data-wysihtml5-dialog-action=cancel]","click",function(b){a.fire("cancel");a.hide();b.preventDefault();b.stopPropagation()});for(var e=this.container.querySelectorAll("input, select, textarea"),f=0,g=e.length,i=function(){clearInterval(a.interval)};f<g;f++)c.observe(e[f],"change",i);this._observed=!0}},_serialize:function(){for(var a=this.elementToChange||
{},b=this.container.querySelectorAll("[data-wysihtml5-dialog-field]"),c=b.length,f=0;f<c;f++)a[b[f].getAttribute("data-wysihtml5-dialog-field")]=b[f].value;return a},_interpolate:function(a){for(var b,c,f=document.querySelector(":focus"),g=this.container.querySelectorAll("[data-wysihtml5-dialog-field]"),i=g.length,h=0;h<i;h++)b=g[h],b!==f&&!(a&&"hidden"===b.type)&&(c=b.getAttribute("data-wysihtml5-dialog-field"),c=this.elementToChange?this.elementToChange[c]||"":b.defaultValue,b.value=c)},show:function(a){var b=
this,e=this.container.querySelector("input, select, textarea");this.elementToChange=a;this._observe();this._interpolate();a&&(this.interval=setInterval(function(){b._interpolate(!0)},500));c.addClass(this.link,"wysihtml5-command-dialog-opened");this.container.style.display="";this.fire("show");if(e&&!a)try{e.focus()}catch(f){}},hide:function(){clearInterval(this.interval);this.elementToChange=null;c.removeClass(this.link,"wysihtml5-command-dialog-opened");this.container.style.display="none";this.fire("hide")}})})(wysihtml5);
(function(b){var c=b.dom,a={position:"relative"},d={left:0,margin:0,opacity:0,overflow:"hidden",padding:0,position:"absolute",top:0,zIndex:1},e={cursor:"inherit",fontSize:"50px",height:"50px",marginTop:"-25px",outline:0,padding:0,position:"absolute",right:"-4px",top:"50%"},f={"x-webkit-speech":"",speech:""};b.toolbar.Speech=function(g,i){var h=document.createElement("input");if(b.browser.supportsSpeechApiOn(h)){var k=document.createElement("div");b.lang.object(d).merge({width:i.offsetWidth+"px",height:i.offsetHeight+
"px"});c.insert(h).into(k);c.insert(k).into(i);c.setStyles(e).on(h);c.setAttributes(f).on(h);c.setStyles(d).on(k);c.setStyles(a).on(i);c.observe(h,"onwebkitspeechchange"in h?"webkitspeechchange":"speechchange",function(){g.execCommand("insertText",h.value);h.value=""});c.observe(h,"click",function(a){c.hasClass(i,"wysihtml5-command-disabled")&&a.preventDefault();a.stopPropagation()})}else i.style.display="none"}})(wysihtml5);
(function(b){var c=b.dom;b.toolbar.Toolbar=Base.extend({constructor:function(a,c){this.editor=a;this.container="string"===typeof c?document.getElementById(c):c;this.composer=a.composer;this._getLinks("command");this._getLinks("action");this._observe();this.show();for(var e=this.container.querySelectorAll("[data-wysihtml5-command=insertSpeech]"),f=e.length,g=0;g<f;g++)new b.toolbar.Speech(this,e[g])},_getLinks:function(a){for(var c=this[a+"Links"]=b.lang.array(this.container.querySelectorAll("[data-wysihtml5-"+
a+"]")).get(),e=c.length,f=0,g=this[a+"Mapping"]={},i,h,k,j,n;f<e;f++)i=c[f],k=i.getAttribute("data-wysihtml5-"+a),j=i.getAttribute("data-wysihtml5-"+a+"-value"),h=this.container.querySelector("[data-wysihtml5-"+a+"-group='"+k+"']"),n=this._getDialog(i,k),g[k+":"+j]={link:i,group:h,name:k,value:j,dialog:n,state:!1}},_getDialog:function(a,c){var e=this,f=this.container.querySelector("[data-wysihtml5-dialog='"+c+"']"),g,i;f&&(g=new b.toolbar.Dialog(a,f),g.observe("show",function(){i=e.composer.selection.getBookmark();
e.editor.fire("show:dialog",{command:c,dialogContainer:f,commandLink:a})}),g.observe("save",function(b){i&&e.composer.selection.setBookmark(i);e._execCommand(c,b);e.editor.fire("save:dialog",{command:c,dialogContainer:f,commandLink:a})}),g.observe("cancel",function(){e.editor.focus(!1);e.editor.fire("cancel:dialog",{command:c,dialogContainer:f,commandLink:a})}));return g},execCommand:function(a,b){if(!this.commandsDisabled){var c=this.commandMapping[a+":"+b];c&&c.dialog&&!c.state?c.dialog.show():
this._execCommand(a,b)}},_execCommand:function(a,b){this.editor.focus(!1);this.composer.commands.exec(a,b);this._updateLinkStates()},execAction:function(a){var b=this.editor;switch(a){case "change_view":b.currentView===b.textarea?b.fire("change_view","composer"):b.fire("change_view","textarea")}},_observe:function(){for(var a=this,b=this.editor,e=this.container,f=this.commandLinks.concat(this.actionLinks),g=f.length,i=0;i<g;i++)c.setAttributes({href:"javascript:;",unselectable:"on"}).on(f[i]);c.delegate(e,
"[data-wysihtml5-command]","mousedown",function(a){a.preventDefault()});c.delegate(e,"[data-wysihtml5-command]","click",function(b){var c=this.getAttribute("data-wysihtml5-command"),d=this.getAttribute("data-wysihtml5-command-value");a.execCommand(c,d);b.preventDefault()});c.delegate(e,"[data-wysihtml5-action]","click",function(b){var c=this.getAttribute("data-wysihtml5-action");a.execAction(c);b.preventDefault()});b.observe("focus:composer",function(){a.bookmark=null;clearInterval(a.interval);a.interval=
setInterval(function(){a._updateLinkStates()},500)});b.observe("blur:composer",function(){clearInterval(a.interval)});b.observe("destroy:composer",function(){clearInterval(a.interval)});b.observe("change_view",function(b){setTimeout(function(){a.commandsDisabled="composer"!==b;a._updateLinkStates();a.commandsDisabled?c.addClass(e,"wysihtml5-commands-disabled"):c.removeClass(e,"wysihtml5-commands-disabled")},0)})},_updateLinkStates:function(){var a=this.commandMapping,d=this.actionMapping,e,f,g;for(e in a)if(g=
a[e],this.commandsDisabled?(f=!1,c.removeClass(g.link,"wysihtml5-command-active"),g.group&&c.removeClass(g.group,"wysihtml5-command-active"),g.dialog&&g.dialog.hide()):(f=this.composer.commands.state(g.name,g.value),b.lang.object(f).isArray()&&(f=1===f.length?f[0]:!0),c.removeClass(g.link,"wysihtml5-command-disabled"),g.group&&c.removeClass(g.group,"wysihtml5-command-disabled")),g.state!==f)(g.state=f)?(c.addClass(g.link,"wysihtml5-command-active"),g.group&&c.addClass(g.group,"wysihtml5-command-active"),
g.dialog&&("object"===typeof f?g.dialog.show(f):g.dialog.hide())):(c.removeClass(g.link,"wysihtml5-command-active"),g.group&&c.removeClass(g.group,"wysihtml5-command-active"),g.dialog&&g.dialog.hide());for(e in d)a=d[e],"change_view"===a.name&&(a.state=this.editor.currentView===this.editor.textarea,a.state?c.addClass(a.link,"wysihtml5-action-active"):c.removeClass(a.link,"wysihtml5-action-active"))},show:function(){this.container.style.display=""},hide:function(){this.container.style.display="none"}})})(wysihtml5);
(function(b){var c={name:void 0,style:!0,toolbar:void 0,autoLink:!0,parserRules:{tags:{br:{},span:{},div:{},p:{}},classes:{}},parser:b.dom.parse,composerClassName:"wysihtml5-editor",bodyClassName:"wysihtml5-supported",stylesheets:[],placeholderText:void 0,allowObjectResizing:!0,supportTouchDevices:!0};b.Editor=b.lang.Dispatcher.extend({constructor:function(a,d){this.textareaElement="string"===typeof a?document.getElementById(a):a;this.config=b.lang.object({}).merge(c).merge(d).get();this.currentView=
this.textarea=new b.views.Textarea(this,this.textareaElement,this.config);this._isCompatible=b.browser.supported();if(!this._isCompatible||!this.config.supportTouchDevices&&b.browser.isTouchDevice()){var e=this;setTimeout(function(){e.fire("beforeload").fire("load")},0)}else{b.dom.addClass(document.body,this.config.bodyClassName);this.currentView=this.composer=new b.views.Composer(this,this.textareaElement,this.config);"function"===typeof this.config.parser&&this._initParser();this.observe("beforeload",
function(){this.synchronizer=new b.views.Synchronizer(this,this.textarea,this.composer);this.config.toolbar&&(this.toolbar=new b.toolbar.Toolbar(this,this.config.toolbar))});try{console.log("Heya! This page is using wysihtml5 for rich text editing. Check out https://github.com/xing/wysihtml5")}catch(f){}}},isCompatible:function(){return this._isCompatible},clear:function(){this.currentView.clear();return this},getValue:function(a){return this.currentView.getValue(a)},setValue:function(a,b){if(!a)return this.clear();
this.currentView.setValue(a,b);return this},focus:function(a){this.currentView.focus(a);return this},disable:function(){this.currentView.disable();return this},enable:function(){this.currentView.enable();return this},isEmpty:function(){return this.currentView.isEmpty()},hasPlaceholderSet:function(){return this.currentView.hasPlaceholderSet()},parse:function(a){var c=this.config.parser(a,this.config.parserRules,this.composer.sandbox.getDocument(),!0);"object"===typeof a&&b.quirks.redraw(a);return c},
_initParser:function(){this.observe("paste:composer",function(){var a=this;a.composer.selection.executeAndRestore(function(){b.quirks.cleanPastedHTML(a.composer.element);a.parse(a.composer.element)},!0)});this.observe("paste:textarea",function(){this.textarea.setValue(this.parse(this.textarea.getValue()))})}})})(wysihtml5);

/*! remarkable 1.7.1 https://github.com/jonschlinkert/remarkable @license MIT */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Remarkable=e()}}(function(){var e;return function t(e,r,n){function s(i,l){if(!r[i]){if(!e[i]){var a="function"==typeof require&&require;if(!l&&a)return a(i,!0);if(o)return o(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var u=r[i]={exports:{}};e[i][0].call(u.exports,function(t){var r=e[i][1][t];return s(r?r:t)},u,u.exports,t,e,r,n)}return r[i].exports}for(var o="function"==typeof require&&require,i=0;i<n.length;i++)s(n[i]);return s}({1:[function(e,t){"use strict";t.exports={Aacute:"Á",aacute:"á",Abreve:"Ă",abreve:"ă",ac:"∾",acd:"∿",acE:"∾̳",Acirc:"Â",acirc:"â",acute:"´",Acy:"А",acy:"а",AElig:"Æ",aelig:"æ",af:"⁡",Afr:"𝔄",afr:"𝔞",Agrave:"À",agrave:"à",alefsym:"ℵ",aleph:"ℵ",Alpha:"Α",alpha:"α",Amacr:"Ā",amacr:"ā",amalg:"⨿",AMP:"&",amp:"&",And:"⩓",and:"∧",andand:"⩕",andd:"⩜",andslope:"⩘",andv:"⩚",ang:"∠",ange:"⦤",angle:"∠",angmsd:"∡",angmsdaa:"⦨",angmsdab:"⦩",angmsdac:"⦪",angmsdad:"⦫",angmsdae:"⦬",angmsdaf:"⦭",angmsdag:"⦮",angmsdah:"⦯",angrt:"∟",angrtvb:"⊾",angrtvbd:"⦝",angsph:"∢",angst:"Å",angzarr:"⍼",Aogon:"Ą",aogon:"ą",Aopf:"𝔸",aopf:"𝕒",ap:"≈",apacir:"⩯",apE:"⩰",ape:"≊",apid:"≋",apos:"'",ApplyFunction:"⁡",approx:"≈",approxeq:"≊",Aring:"Å",aring:"å",Ascr:"𝒜",ascr:"𝒶",Assign:"≔",ast:"*",asymp:"≈",asympeq:"≍",Atilde:"Ã",atilde:"ã",Auml:"Ä",auml:"ä",awconint:"∳",awint:"⨑",backcong:"≌",backepsilon:"϶",backprime:"‵",backsim:"∽",backsimeq:"⋍",Backslash:"∖",Barv:"⫧",barvee:"⊽",Barwed:"⌆",barwed:"⌅",barwedge:"⌅",bbrk:"⎵",bbrktbrk:"⎶",bcong:"≌",Bcy:"Б",bcy:"б",bdquo:"„",becaus:"∵",Because:"∵",because:"∵",bemptyv:"⦰",bepsi:"϶",bernou:"ℬ",Bernoullis:"ℬ",Beta:"Β",beta:"β",beth:"ℶ",between:"≬",Bfr:"𝔅",bfr:"𝔟",bigcap:"⋂",bigcirc:"◯",bigcup:"⋃",bigodot:"⨀",bigoplus:"⨁",bigotimes:"⨂",bigsqcup:"⨆",bigstar:"★",bigtriangledown:"▽",bigtriangleup:"△",biguplus:"⨄",bigvee:"⋁",bigwedge:"⋀",bkarow:"⤍",blacklozenge:"⧫",blacksquare:"▪",blacktriangle:"▴",blacktriangledown:"▾",blacktriangleleft:"◂",blacktriangleright:"▸",blank:"␣",blk12:"▒",blk14:"░",blk34:"▓",block:"█",bne:"=⃥",bnequiv:"≡⃥",bNot:"⫭",bnot:"⌐",Bopf:"𝔹",bopf:"𝕓",bot:"⊥",bottom:"⊥",bowtie:"⋈",boxbox:"⧉",boxDL:"╗",boxDl:"╖",boxdL:"╕",boxdl:"┐",boxDR:"╔",boxDr:"╓",boxdR:"╒",boxdr:"┌",boxH:"═",boxh:"─",boxHD:"╦",boxHd:"╤",boxhD:"╥",boxhd:"┬",boxHU:"╩",boxHu:"╧",boxhU:"╨",boxhu:"┴",boxminus:"⊟",boxplus:"⊞",boxtimes:"⊠",boxUL:"╝",boxUl:"╜",boxuL:"╛",boxul:"┘",boxUR:"╚",boxUr:"╙",boxuR:"╘",boxur:"└",boxV:"║",boxv:"│",boxVH:"╬",boxVh:"╫",boxvH:"╪",boxvh:"┼",boxVL:"╣",boxVl:"╢",boxvL:"╡",boxvl:"┤",boxVR:"╠",boxVr:"╟",boxvR:"╞",boxvr:"├",bprime:"‵",Breve:"˘",breve:"˘",brvbar:"¦",Bscr:"ℬ",bscr:"𝒷",bsemi:"⁏",bsim:"∽",bsime:"⋍",bsol:"\\",bsolb:"⧅",bsolhsub:"⟈",bull:"•",bullet:"•",bump:"≎",bumpE:"⪮",bumpe:"≏",Bumpeq:"≎",bumpeq:"≏",Cacute:"Ć",cacute:"ć",Cap:"⋒",cap:"∩",capand:"⩄",capbrcup:"⩉",capcap:"⩋",capcup:"⩇",capdot:"⩀",CapitalDifferentialD:"ⅅ",caps:"∩︀",caret:"⁁",caron:"ˇ",Cayleys:"ℭ",ccaps:"⩍",Ccaron:"Č",ccaron:"č",Ccedil:"Ç",ccedil:"ç",Ccirc:"Ĉ",ccirc:"ĉ",Cconint:"∰",ccups:"⩌",ccupssm:"⩐",Cdot:"Ċ",cdot:"ċ",cedil:"¸",Cedilla:"¸",cemptyv:"⦲",cent:"¢",CenterDot:"·",centerdot:"·",Cfr:"ℭ",cfr:"𝔠",CHcy:"Ч",chcy:"ч",check:"✓",checkmark:"✓",Chi:"Χ",chi:"χ",cir:"○",circ:"ˆ",circeq:"≗",circlearrowleft:"↺",circlearrowright:"↻",circledast:"⊛",circledcirc:"⊚",circleddash:"⊝",CircleDot:"⊙",circledR:"®",circledS:"Ⓢ",CircleMinus:"⊖",CirclePlus:"⊕",CircleTimes:"⊗",cirE:"⧃",cire:"≗",cirfnint:"⨐",cirmid:"⫯",cirscir:"⧂",ClockwiseContourIntegral:"∲",CloseCurlyDoubleQuote:"”",CloseCurlyQuote:"’",clubs:"♣",clubsuit:"♣",Colon:"∷",colon:":",Colone:"⩴",colone:"≔",coloneq:"≔",comma:",",commat:"@",comp:"∁",compfn:"∘",complement:"∁",complexes:"ℂ",cong:"≅",congdot:"⩭",Congruent:"≡",Conint:"∯",conint:"∮",ContourIntegral:"∮",Copf:"ℂ",copf:"𝕔",coprod:"∐",Coproduct:"∐",COPY:"©",copy:"©",copysr:"℗",CounterClockwiseContourIntegral:"∳",crarr:"↵",Cross:"⨯",cross:"✗",Cscr:"𝒞",cscr:"𝒸",csub:"⫏",csube:"⫑",csup:"⫐",csupe:"⫒",ctdot:"⋯",cudarrl:"⤸",cudarrr:"⤵",cuepr:"⋞",cuesc:"⋟",cularr:"↶",cularrp:"⤽",Cup:"⋓",cup:"∪",cupbrcap:"⩈",CupCap:"≍",cupcap:"⩆",cupcup:"⩊",cupdot:"⊍",cupor:"⩅",cups:"∪︀",curarr:"↷",curarrm:"⤼",curlyeqprec:"⋞",curlyeqsucc:"⋟",curlyvee:"⋎",curlywedge:"⋏",curren:"¤",curvearrowleft:"↶",curvearrowright:"↷",cuvee:"⋎",cuwed:"⋏",cwconint:"∲",cwint:"∱",cylcty:"⌭",Dagger:"‡",dagger:"†",daleth:"ℸ",Darr:"↡",dArr:"⇓",darr:"↓",dash:"‐",Dashv:"⫤",dashv:"⊣",dbkarow:"⤏",dblac:"˝",Dcaron:"Ď",dcaron:"ď",Dcy:"Д",dcy:"д",DD:"ⅅ",dd:"ⅆ",ddagger:"‡",ddarr:"⇊",DDotrahd:"⤑",ddotseq:"⩷",deg:"°",Del:"∇",Delta:"Δ",delta:"δ",demptyv:"⦱",dfisht:"⥿",Dfr:"𝔇",dfr:"𝔡",dHar:"⥥",dharl:"⇃",dharr:"⇂",DiacriticalAcute:"´",DiacriticalDot:"˙",DiacriticalDoubleAcute:"˝",DiacriticalGrave:"`",DiacriticalTilde:"˜",diam:"⋄",Diamond:"⋄",diamond:"⋄",diamondsuit:"♦",diams:"♦",die:"¨",DifferentialD:"ⅆ",digamma:"ϝ",disin:"⋲",div:"÷",divide:"÷",divideontimes:"⋇",divonx:"⋇",DJcy:"Ђ",djcy:"ђ",dlcorn:"⌞",dlcrop:"⌍",dollar:"$",Dopf:"𝔻",dopf:"𝕕",Dot:"¨",dot:"˙",DotDot:"⃜",doteq:"≐",doteqdot:"≑",DotEqual:"≐",dotminus:"∸",dotplus:"∔",dotsquare:"⊡",doublebarwedge:"⌆",DoubleContourIntegral:"∯",DoubleDot:"¨",DoubleDownArrow:"⇓",DoubleLeftArrow:"⇐",DoubleLeftRightArrow:"⇔",DoubleLeftTee:"⫤",DoubleLongLeftArrow:"⟸",DoubleLongLeftRightArrow:"⟺",DoubleLongRightArrow:"⟹",DoubleRightArrow:"⇒",DoubleRightTee:"⊨",DoubleUpArrow:"⇑",DoubleUpDownArrow:"⇕",DoubleVerticalBar:"∥",DownArrow:"↓",Downarrow:"⇓",downarrow:"↓",DownArrowBar:"⤓",DownArrowUpArrow:"⇵",DownBreve:"̑",downdownarrows:"⇊",downharpoonleft:"⇃",downharpoonright:"⇂",DownLeftRightVector:"⥐",DownLeftTeeVector:"⥞",DownLeftVector:"↽",DownLeftVectorBar:"⥖",DownRightTeeVector:"⥟",DownRightVector:"⇁",DownRightVectorBar:"⥗",DownTee:"⊤",DownTeeArrow:"↧",drbkarow:"⤐",drcorn:"⌟",drcrop:"⌌",Dscr:"𝒟",dscr:"𝒹",DScy:"Ѕ",dscy:"ѕ",dsol:"⧶",Dstrok:"Đ",dstrok:"đ",dtdot:"⋱",dtri:"▿",dtrif:"▾",duarr:"⇵",duhar:"⥯",dwangle:"⦦",DZcy:"Џ",dzcy:"џ",dzigrarr:"⟿",Eacute:"É",eacute:"é",easter:"⩮",Ecaron:"Ě",ecaron:"ě",ecir:"≖",Ecirc:"Ê",ecirc:"ê",ecolon:"≕",Ecy:"Э",ecy:"э",eDDot:"⩷",Edot:"Ė",eDot:"≑",edot:"ė",ee:"ⅇ",efDot:"≒",Efr:"𝔈",efr:"𝔢",eg:"⪚",Egrave:"È",egrave:"è",egs:"⪖",egsdot:"⪘",el:"⪙",Element:"∈",elinters:"⏧",ell:"ℓ",els:"⪕",elsdot:"⪗",Emacr:"Ē",emacr:"ē",empty:"∅",emptyset:"∅",EmptySmallSquare:"◻",emptyv:"∅",EmptyVerySmallSquare:"▫",emsp:" ",emsp13:" ",emsp14:" ",ENG:"Ŋ",eng:"ŋ",ensp:" ",Eogon:"Ę",eogon:"ę",Eopf:"𝔼",eopf:"𝕖",epar:"⋕",eparsl:"⧣",eplus:"⩱",epsi:"ε",Epsilon:"Ε",epsilon:"ε",epsiv:"ϵ",eqcirc:"≖",eqcolon:"≕",eqsim:"≂",eqslantgtr:"⪖",eqslantless:"⪕",Equal:"⩵",equals:"=",EqualTilde:"≂",equest:"≟",Equilibrium:"⇌",equiv:"≡",equivDD:"⩸",eqvparsl:"⧥",erarr:"⥱",erDot:"≓",Escr:"ℰ",escr:"ℯ",esdot:"≐",Esim:"⩳",esim:"≂",Eta:"Η",eta:"η",ETH:"Ð",eth:"ð",Euml:"Ë",euml:"ë",euro:"€",excl:"!",exist:"∃",Exists:"∃",expectation:"ℰ",ExponentialE:"ⅇ",exponentiale:"ⅇ",fallingdotseq:"≒",Fcy:"Ф",fcy:"ф",female:"♀",ffilig:"ﬃ",fflig:"ﬀ",ffllig:"ﬄ",Ffr:"𝔉",ffr:"𝔣",filig:"ﬁ",FilledSmallSquare:"◼",FilledVerySmallSquare:"▪",fjlig:"fj",flat:"♭",fllig:"ﬂ",fltns:"▱",fnof:"ƒ",Fopf:"𝔽",fopf:"𝕗",ForAll:"∀",forall:"∀",fork:"⋔",forkv:"⫙",Fouriertrf:"ℱ",fpartint:"⨍",frac12:"½",frac13:"⅓",frac14:"¼",frac15:"⅕",frac16:"⅙",frac18:"⅛",frac23:"⅔",frac25:"⅖",frac34:"¾",frac35:"⅗",frac38:"⅜",frac45:"⅘",frac56:"⅚",frac58:"⅝",frac78:"⅞",frasl:"⁄",frown:"⌢",Fscr:"ℱ",fscr:"𝒻",gacute:"ǵ",Gamma:"Γ",gamma:"γ",Gammad:"Ϝ",gammad:"ϝ",gap:"⪆",Gbreve:"Ğ",gbreve:"ğ",Gcedil:"Ģ",Gcirc:"Ĝ",gcirc:"ĝ",Gcy:"Г",gcy:"г",Gdot:"Ġ",gdot:"ġ",gE:"≧",ge:"≥",gEl:"⪌",gel:"⋛",geq:"≥",geqq:"≧",geqslant:"⩾",ges:"⩾",gescc:"⪩",gesdot:"⪀",gesdoto:"⪂",gesdotol:"⪄",gesl:"⋛︀",gesles:"⪔",Gfr:"𝔊",gfr:"𝔤",Gg:"⋙",gg:"≫",ggg:"⋙",gimel:"ℷ",GJcy:"Ѓ",gjcy:"ѓ",gl:"≷",gla:"⪥",glE:"⪒",glj:"⪤",gnap:"⪊",gnapprox:"⪊",gnE:"≩",gne:"⪈",gneq:"⪈",gneqq:"≩",gnsim:"⋧",Gopf:"𝔾",gopf:"𝕘",grave:"`",GreaterEqual:"≥",GreaterEqualLess:"⋛",GreaterFullEqual:"≧",GreaterGreater:"⪢",GreaterLess:"≷",GreaterSlantEqual:"⩾",GreaterTilde:"≳",Gscr:"𝒢",gscr:"ℊ",gsim:"≳",gsime:"⪎",gsiml:"⪐",GT:">",Gt:"≫",gt:">",gtcc:"⪧",gtcir:"⩺",gtdot:"⋗",gtlPar:"⦕",gtquest:"⩼",gtrapprox:"⪆",gtrarr:"⥸",gtrdot:"⋗",gtreqless:"⋛",gtreqqless:"⪌",gtrless:"≷",gtrsim:"≳",gvertneqq:"≩︀",gvnE:"≩︀",Hacek:"ˇ",hairsp:" ",half:"½",hamilt:"ℋ",HARDcy:"Ъ",hardcy:"ъ",hArr:"⇔",harr:"↔",harrcir:"⥈",harrw:"↭",Hat:"^",hbar:"ℏ",Hcirc:"Ĥ",hcirc:"ĥ",hearts:"♥",heartsuit:"♥",hellip:"…",hercon:"⊹",Hfr:"ℌ",hfr:"𝔥",HilbertSpace:"ℋ",hksearow:"⤥",hkswarow:"⤦",hoarr:"⇿",homtht:"∻",hookleftarrow:"↩",hookrightarrow:"↪",Hopf:"ℍ",hopf:"𝕙",horbar:"―",HorizontalLine:"─",Hscr:"ℋ",hscr:"𝒽",hslash:"ℏ",Hstrok:"Ħ",hstrok:"ħ",HumpDownHump:"≎",HumpEqual:"≏",hybull:"⁃",hyphen:"‐",Iacute:"Í",iacute:"í",ic:"⁣",Icirc:"Î",icirc:"î",Icy:"И",icy:"и",Idot:"İ",IEcy:"Е",iecy:"е",iexcl:"¡",iff:"⇔",Ifr:"ℑ",ifr:"𝔦",Igrave:"Ì",igrave:"ì",ii:"ⅈ",iiiint:"⨌",iiint:"∭",iinfin:"⧜",iiota:"℩",IJlig:"Ĳ",ijlig:"ĳ",Im:"ℑ",Imacr:"Ī",imacr:"ī",image:"ℑ",ImaginaryI:"ⅈ",imagline:"ℐ",imagpart:"ℑ",imath:"ı",imof:"⊷",imped:"Ƶ",Implies:"⇒","in":"∈",incare:"℅",infin:"∞",infintie:"⧝",inodot:"ı",Int:"∬","int":"∫",intcal:"⊺",integers:"ℤ",Integral:"∫",intercal:"⊺",Intersection:"⋂",intlarhk:"⨗",intprod:"⨼",InvisibleComma:"⁣",InvisibleTimes:"⁢",IOcy:"Ё",iocy:"ё",Iogon:"Į",iogon:"į",Iopf:"𝕀",iopf:"𝕚",Iota:"Ι",iota:"ι",iprod:"⨼",iquest:"¿",Iscr:"ℐ",iscr:"𝒾",isin:"∈",isindot:"⋵",isinE:"⋹",isins:"⋴",isinsv:"⋳",isinv:"∈",it:"⁢",Itilde:"Ĩ",itilde:"ĩ",Iukcy:"І",iukcy:"і",Iuml:"Ï",iuml:"ï",Jcirc:"Ĵ",jcirc:"ĵ",Jcy:"Й",jcy:"й",Jfr:"𝔍",jfr:"𝔧",jmath:"ȷ",Jopf:"𝕁",jopf:"𝕛",Jscr:"𝒥",jscr:"𝒿",Jsercy:"Ј",jsercy:"ј",Jukcy:"Є",jukcy:"є",Kappa:"Κ",kappa:"κ",kappav:"ϰ",Kcedil:"Ķ",kcedil:"ķ",Kcy:"К",kcy:"к",Kfr:"𝔎",kfr:"𝔨",kgreen:"ĸ",KHcy:"Х",khcy:"х",KJcy:"Ќ",kjcy:"ќ",Kopf:"𝕂",kopf:"𝕜",Kscr:"𝒦",kscr:"𝓀",lAarr:"⇚",Lacute:"Ĺ",lacute:"ĺ",laemptyv:"⦴",lagran:"ℒ",Lambda:"Λ",lambda:"λ",Lang:"⟪",lang:"⟨",langd:"⦑",langle:"⟨",lap:"⪅",Laplacetrf:"ℒ",laquo:"«",Larr:"↞",lArr:"⇐",larr:"←",larrb:"⇤",larrbfs:"⤟",larrfs:"⤝",larrhk:"↩",larrlp:"↫",larrpl:"⤹",larrsim:"⥳",larrtl:"↢",lat:"⪫",lAtail:"⤛",latail:"⤙",late:"⪭",lates:"⪭︀",lBarr:"⤎",lbarr:"⤌",lbbrk:"❲",lbrace:"{",lbrack:"[",lbrke:"⦋",lbrksld:"⦏",lbrkslu:"⦍",Lcaron:"Ľ",lcaron:"ľ",Lcedil:"Ļ",lcedil:"ļ",lceil:"⌈",lcub:"{",Lcy:"Л",lcy:"л",ldca:"⤶",ldquo:"“",ldquor:"„",ldrdhar:"⥧",ldrushar:"⥋",ldsh:"↲",lE:"≦",le:"≤",LeftAngleBracket:"⟨",LeftArrow:"←",Leftarrow:"⇐",leftarrow:"←",LeftArrowBar:"⇤",LeftArrowRightArrow:"⇆",leftarrowtail:"↢",LeftCeiling:"⌈",LeftDoubleBracket:"⟦",LeftDownTeeVector:"⥡",LeftDownVector:"⇃",LeftDownVectorBar:"⥙",LeftFloor:"⌊",leftharpoondown:"↽",leftharpoonup:"↼",leftleftarrows:"⇇",LeftRightArrow:"↔",Leftrightarrow:"⇔",leftrightarrow:"↔",leftrightarrows:"⇆",leftrightharpoons:"⇋",leftrightsquigarrow:"↭",LeftRightVector:"⥎",LeftTee:"⊣",LeftTeeArrow:"↤",LeftTeeVector:"⥚",leftthreetimes:"⋋",LeftTriangle:"⊲",LeftTriangleBar:"⧏",LeftTriangleEqual:"⊴",LeftUpDownVector:"⥑",LeftUpTeeVector:"⥠",LeftUpVector:"↿",LeftUpVectorBar:"⥘",LeftVector:"↼",LeftVectorBar:"⥒",lEg:"⪋",leg:"⋚",leq:"≤",leqq:"≦",leqslant:"⩽",les:"⩽",lescc:"⪨",lesdot:"⩿",lesdoto:"⪁",lesdotor:"⪃",lesg:"⋚︀",lesges:"⪓",lessapprox:"⪅",lessdot:"⋖",lesseqgtr:"⋚",lesseqqgtr:"⪋",LessEqualGreater:"⋚",LessFullEqual:"≦",LessGreater:"≶",lessgtr:"≶",LessLess:"⪡",lesssim:"≲",LessSlantEqual:"⩽",LessTilde:"≲",lfisht:"⥼",lfloor:"⌊",Lfr:"𝔏",lfr:"𝔩",lg:"≶",lgE:"⪑",lHar:"⥢",lhard:"↽",lharu:"↼",lharul:"⥪",lhblk:"▄",LJcy:"Љ",ljcy:"љ",Ll:"⋘",ll:"≪",llarr:"⇇",llcorner:"⌞",Lleftarrow:"⇚",llhard:"⥫",lltri:"◺",Lmidot:"Ŀ",lmidot:"ŀ",lmoust:"⎰",lmoustache:"⎰",lnap:"⪉",lnapprox:"⪉",lnE:"≨",lne:"⪇",lneq:"⪇",lneqq:"≨",lnsim:"⋦",loang:"⟬",loarr:"⇽",lobrk:"⟦",LongLeftArrow:"⟵",Longleftarrow:"⟸",longleftarrow:"⟵",LongLeftRightArrow:"⟷",Longleftrightarrow:"⟺",longleftrightarrow:"⟷",longmapsto:"⟼",LongRightArrow:"⟶",Longrightarrow:"⟹",longrightarrow:"⟶",looparrowleft:"↫",looparrowright:"↬",lopar:"⦅",Lopf:"𝕃",lopf:"𝕝",loplus:"⨭",lotimes:"⨴",lowast:"∗",lowbar:"_",LowerLeftArrow:"↙",LowerRightArrow:"↘",loz:"◊",lozenge:"◊",lozf:"⧫",lpar:"(",lparlt:"⦓",lrarr:"⇆",lrcorner:"⌟",lrhar:"⇋",lrhard:"⥭",lrm:"‎",lrtri:"⊿",lsaquo:"‹",Lscr:"ℒ",lscr:"𝓁",Lsh:"↰",lsh:"↰",lsim:"≲",lsime:"⪍",lsimg:"⪏",lsqb:"[",lsquo:"‘",lsquor:"‚",Lstrok:"Ł",lstrok:"ł",LT:"<",Lt:"≪",lt:"<",ltcc:"⪦",ltcir:"⩹",ltdot:"⋖",lthree:"⋋",ltimes:"⋉",ltlarr:"⥶",ltquest:"⩻",ltri:"◃",ltrie:"⊴",ltrif:"◂",ltrPar:"⦖",lurdshar:"⥊",luruhar:"⥦",lvertneqq:"≨︀",lvnE:"≨︀",macr:"¯",male:"♂",malt:"✠",maltese:"✠",Map:"⤅",map:"↦",mapsto:"↦",mapstodown:"↧",mapstoleft:"↤",mapstoup:"↥",marker:"▮",mcomma:"⨩",Mcy:"М",mcy:"м",mdash:"—",mDDot:"∺",measuredangle:"∡",MediumSpace:" ",Mellintrf:"ℳ",Mfr:"𝔐",mfr:"𝔪",mho:"℧",micro:"µ",mid:"∣",midast:"*",midcir:"⫰",middot:"·",minus:"−",minusb:"⊟",minusd:"∸",minusdu:"⨪",MinusPlus:"∓",mlcp:"⫛",mldr:"…",mnplus:"∓",models:"⊧",Mopf:"𝕄",mopf:"𝕞",mp:"∓",Mscr:"ℳ",mscr:"𝓂",mstpos:"∾",Mu:"Μ",mu:"μ",multimap:"⊸",mumap:"⊸",nabla:"∇",Nacute:"Ń",nacute:"ń",nang:"∠⃒",nap:"≉",napE:"⩰̸",napid:"≋̸",napos:"ŉ",napprox:"≉",natur:"♮",natural:"♮",naturals:"ℕ",nbsp:" ",nbump:"≎̸",nbumpe:"≏̸",ncap:"⩃",Ncaron:"Ň",ncaron:"ň",Ncedil:"Ņ",ncedil:"ņ",ncong:"≇",ncongdot:"⩭̸",ncup:"⩂",Ncy:"Н",ncy:"н",ndash:"–",ne:"≠",nearhk:"⤤",neArr:"⇗",nearr:"↗",nearrow:"↗",nedot:"≐̸",NegativeMediumSpace:"​",NegativeThickSpace:"​",NegativeThinSpace:"​",NegativeVeryThinSpace:"​",nequiv:"≢",nesear:"⤨",nesim:"≂̸",NestedGreaterGreater:"≫",NestedLessLess:"≪",NewLine:"\n",nexist:"∄",nexists:"∄",Nfr:"𝔑",nfr:"𝔫",ngE:"≧̸",nge:"≱",ngeq:"≱",ngeqq:"≧̸",ngeqslant:"⩾̸",nges:"⩾̸",nGg:"⋙̸",ngsim:"≵",nGt:"≫⃒",ngt:"≯",ngtr:"≯",nGtv:"≫̸",nhArr:"⇎",nharr:"↮",nhpar:"⫲",ni:"∋",nis:"⋼",nisd:"⋺",niv:"∋",NJcy:"Њ",njcy:"њ",nlArr:"⇍",nlarr:"↚",nldr:"‥",nlE:"≦̸",nle:"≰",nLeftarrow:"⇍",nleftarrow:"↚",nLeftrightarrow:"⇎",nleftrightarrow:"↮",nleq:"≰",nleqq:"≦̸",nleqslant:"⩽̸",nles:"⩽̸",nless:"≮",nLl:"⋘̸",nlsim:"≴",nLt:"≪⃒",nlt:"≮",nltri:"⋪",nltrie:"⋬",nLtv:"≪̸",nmid:"∤",NoBreak:"⁠",NonBreakingSpace:" ",Nopf:"ℕ",nopf:"𝕟",Not:"⫬",not:"¬",NotCongruent:"≢",NotCupCap:"≭",NotDoubleVerticalBar:"∦",NotElement:"∉",NotEqual:"≠",NotEqualTilde:"≂̸",NotExists:"∄",NotGreater:"≯",NotGreaterEqual:"≱",NotGreaterFullEqual:"≧̸",NotGreaterGreater:"≫̸",NotGreaterLess:"≹",NotGreaterSlantEqual:"⩾̸",NotGreaterTilde:"≵",NotHumpDownHump:"≎̸",NotHumpEqual:"≏̸",notin:"∉",notindot:"⋵̸",notinE:"⋹̸",notinva:"∉",notinvb:"⋷",notinvc:"⋶",NotLeftTriangle:"⋪",NotLeftTriangleBar:"⧏̸",NotLeftTriangleEqual:"⋬",NotLess:"≮",NotLessEqual:"≰",NotLessGreater:"≸",NotLessLess:"≪̸",NotLessSlantEqual:"⩽̸",NotLessTilde:"≴",NotNestedGreaterGreater:"⪢̸",NotNestedLessLess:"⪡̸",notni:"∌",notniva:"∌",notnivb:"⋾",notnivc:"⋽",NotPrecedes:"⊀",NotPrecedesEqual:"⪯̸",NotPrecedesSlantEqual:"⋠",NotReverseElement:"∌",NotRightTriangle:"⋫",NotRightTriangleBar:"⧐̸",NotRightTriangleEqual:"⋭",NotSquareSubset:"⊏̸",NotSquareSubsetEqual:"⋢",NotSquareSuperset:"⊐̸",NotSquareSupersetEqual:"⋣",NotSubset:"⊂⃒",NotSubsetEqual:"⊈",NotSucceeds:"⊁",NotSucceedsEqual:"⪰̸",NotSucceedsSlantEqual:"⋡",NotSucceedsTilde:"≿̸",NotSuperset:"⊃⃒",NotSupersetEqual:"⊉",NotTilde:"≁",NotTildeEqual:"≄",NotTildeFullEqual:"≇",NotTildeTilde:"≉",NotVerticalBar:"∤",npar:"∦",nparallel:"∦",nparsl:"⫽⃥",npart:"∂̸",npolint:"⨔",npr:"⊀",nprcue:"⋠",npre:"⪯̸",nprec:"⊀",npreceq:"⪯̸",nrArr:"⇏",nrarr:"↛",nrarrc:"⤳̸",nrarrw:"↝̸",nRightarrow:"⇏",nrightarrow:"↛",nrtri:"⋫",nrtrie:"⋭",nsc:"⊁",nsccue:"⋡",nsce:"⪰̸",Nscr:"𝒩",nscr:"𝓃",nshortmid:"∤",nshortparallel:"∦",nsim:"≁",nsime:"≄",nsimeq:"≄",nsmid:"∤",nspar:"∦",nsqsube:"⋢",nsqsupe:"⋣",nsub:"⊄",nsubE:"⫅̸",nsube:"⊈",nsubset:"⊂⃒",nsubseteq:"⊈",nsubseteqq:"⫅̸",nsucc:"⊁",nsucceq:"⪰̸",nsup:"⊅",nsupE:"⫆̸",nsupe:"⊉",nsupset:"⊃⃒",nsupseteq:"⊉",nsupseteqq:"⫆̸",ntgl:"≹",Ntilde:"Ñ",ntilde:"ñ",ntlg:"≸",ntriangleleft:"⋪",ntrianglelefteq:"⋬",ntriangleright:"⋫",ntrianglerighteq:"⋭",Nu:"Ν",nu:"ν",num:"#",numero:"№",numsp:" ",nvap:"≍⃒",nVDash:"⊯",nVdash:"⊮",nvDash:"⊭",nvdash:"⊬",nvge:"≥⃒",nvgt:">⃒",nvHarr:"⤄",nvinfin:"⧞",nvlArr:"⤂",nvle:"≤⃒",nvlt:"<⃒",nvltrie:"⊴⃒",nvrArr:"⤃",nvrtrie:"⊵⃒",nvsim:"∼⃒",nwarhk:"⤣",nwArr:"⇖",nwarr:"↖",nwarrow:"↖",nwnear:"⤧",Oacute:"Ó",oacute:"ó",oast:"⊛",ocir:"⊚",Ocirc:"Ô",ocirc:"ô",Ocy:"О",ocy:"о",odash:"⊝",Odblac:"Ő",odblac:"ő",odiv:"⨸",odot:"⊙",odsold:"⦼",OElig:"Œ",oelig:"œ",ofcir:"⦿",Ofr:"𝔒",ofr:"𝔬",ogon:"˛",Ograve:"Ò",ograve:"ò",ogt:"⧁",ohbar:"⦵",ohm:"Ω",oint:"∮",olarr:"↺",olcir:"⦾",olcross:"⦻",oline:"‾",olt:"⧀",Omacr:"Ō",omacr:"ō",Omega:"Ω",omega:"ω",Omicron:"Ο",omicron:"ο",omid:"⦶",ominus:"⊖",Oopf:"𝕆",oopf:"𝕠",opar:"⦷",OpenCurlyDoubleQuote:"“",OpenCurlyQuote:"‘",operp:"⦹",oplus:"⊕",Or:"⩔",or:"∨",orarr:"↻",ord:"⩝",order:"ℴ",orderof:"ℴ",ordf:"ª",ordm:"º",origof:"⊶",oror:"⩖",orslope:"⩗",orv:"⩛",oS:"Ⓢ",Oscr:"𝒪",oscr:"ℴ",Oslash:"Ø",oslash:"ø",osol:"⊘",Otilde:"Õ",otilde:"õ",Otimes:"⨷",otimes:"⊗",otimesas:"⨶",Ouml:"Ö",ouml:"ö",ovbar:"⌽",OverBar:"‾",OverBrace:"⏞",OverBracket:"⎴",OverParenthesis:"⏜",par:"∥",para:"¶",parallel:"∥",parsim:"⫳",parsl:"⫽",part:"∂",PartialD:"∂",Pcy:"П",pcy:"п",percnt:"%",period:".",permil:"‰",perp:"⊥",pertenk:"‱",Pfr:"𝔓",pfr:"𝔭",Phi:"Φ",phi:"φ",phiv:"ϕ",phmmat:"ℳ",phone:"☎",Pi:"Π",pi:"π",pitchfork:"⋔",piv:"ϖ",planck:"ℏ",planckh:"ℎ",plankv:"ℏ",plus:"+",plusacir:"⨣",plusb:"⊞",pluscir:"⨢",plusdo:"∔",plusdu:"⨥",pluse:"⩲",PlusMinus:"±",plusmn:"±",plussim:"⨦",plustwo:"⨧",pm:"±",Poincareplane:"ℌ",pointint:"⨕",Popf:"ℙ",popf:"𝕡",pound:"£",Pr:"⪻",pr:"≺",prap:"⪷",prcue:"≼",prE:"⪳",pre:"⪯",prec:"≺",precapprox:"⪷",preccurlyeq:"≼",Precedes:"≺",PrecedesEqual:"⪯",PrecedesSlantEqual:"≼",PrecedesTilde:"≾",preceq:"⪯",precnapprox:"⪹",precneqq:"⪵",precnsim:"⋨",precsim:"≾",Prime:"″",prime:"′",primes:"ℙ",prnap:"⪹",prnE:"⪵",prnsim:"⋨",prod:"∏",Product:"∏",profalar:"⌮",profline:"⌒",profsurf:"⌓",prop:"∝",Proportion:"∷",Proportional:"∝",propto:"∝",prsim:"≾",prurel:"⊰",Pscr:"𝒫",pscr:"𝓅",Psi:"Ψ",psi:"ψ",puncsp:" ",Qfr:"𝔔",qfr:"𝔮",qint:"⨌",Qopf:"ℚ",qopf:"𝕢",qprime:"⁗",Qscr:"𝒬",qscr:"𝓆",quaternions:"ℍ",quatint:"⨖",quest:"?",questeq:"≟",QUOT:'"',quot:'"',rAarr:"⇛",race:"∽̱",Racute:"Ŕ",racute:"ŕ",radic:"√",raemptyv:"⦳",Rang:"⟫",rang:"⟩",rangd:"⦒",range:"⦥",rangle:"⟩",raquo:"»",Rarr:"↠",rArr:"⇒",rarr:"→",rarrap:"⥵",rarrb:"⇥",rarrbfs:"⤠",rarrc:"⤳",rarrfs:"⤞",rarrhk:"↪",rarrlp:"↬",rarrpl:"⥅",rarrsim:"⥴",Rarrtl:"⤖",rarrtl:"↣",rarrw:"↝",rAtail:"⤜",ratail:"⤚",ratio:"∶",rationals:"ℚ",RBarr:"⤐",rBarr:"⤏",rbarr:"⤍",rbbrk:"❳",rbrace:"}",rbrack:"]",rbrke:"⦌",rbrksld:"⦎",rbrkslu:"⦐",Rcaron:"Ř",rcaron:"ř",Rcedil:"Ŗ",rcedil:"ŗ",rceil:"⌉",rcub:"}",Rcy:"Р",rcy:"р",rdca:"⤷",rdldhar:"⥩",rdquo:"”",rdquor:"”",rdsh:"↳",Re:"ℜ",real:"ℜ",realine:"ℛ",realpart:"ℜ",reals:"ℝ",rect:"▭",REG:"®",reg:"®",ReverseElement:"∋",ReverseEquilibrium:"⇋",ReverseUpEquilibrium:"⥯",rfisht:"⥽",rfloor:"⌋",Rfr:"ℜ",rfr:"𝔯",rHar:"⥤",rhard:"⇁",rharu:"⇀",rharul:"⥬",Rho:"Ρ",rho:"ρ",rhov:"ϱ",RightAngleBracket:"⟩",RightArrow:"→",Rightarrow:"⇒",rightarrow:"→",RightArrowBar:"⇥",RightArrowLeftArrow:"⇄",rightarrowtail:"↣",RightCeiling:"⌉",RightDoubleBracket:"⟧",RightDownTeeVector:"⥝",RightDownVector:"⇂",RightDownVectorBar:"⥕",RightFloor:"⌋",rightharpoondown:"⇁",rightharpoonup:"⇀",rightleftarrows:"⇄",rightleftharpoons:"⇌",rightrightarrows:"⇉",rightsquigarrow:"↝",RightTee:"⊢",RightTeeArrow:"↦",RightTeeVector:"⥛",rightthreetimes:"⋌",RightTriangle:"⊳",RightTriangleBar:"⧐",RightTriangleEqual:"⊵",RightUpDownVector:"⥏",RightUpTeeVector:"⥜",RightUpVector:"↾",RightUpVectorBar:"⥔",RightVector:"⇀",RightVectorBar:"⥓",ring:"˚",risingdotseq:"≓",rlarr:"⇄",rlhar:"⇌",rlm:"‏",rmoust:"⎱",rmoustache:"⎱",rnmid:"⫮",roang:"⟭",roarr:"⇾",robrk:"⟧",ropar:"⦆",Ropf:"ℝ",ropf:"𝕣",roplus:"⨮",rotimes:"⨵",RoundImplies:"⥰",rpar:")",rpargt:"⦔",rppolint:"⨒",rrarr:"⇉",Rrightarrow:"⇛",rsaquo:"›",Rscr:"ℛ",rscr:"𝓇",Rsh:"↱",rsh:"↱",rsqb:"]",rsquo:"’",rsquor:"’",rthree:"⋌",rtimes:"⋊",rtri:"▹",rtrie:"⊵",rtrif:"▸",rtriltri:"⧎",RuleDelayed:"⧴",ruluhar:"⥨",rx:"℞",Sacute:"Ś",sacute:"ś",sbquo:"‚",Sc:"⪼",sc:"≻",scap:"⪸",Scaron:"Š",scaron:"š",sccue:"≽",scE:"⪴",sce:"⪰",Scedil:"Ş",scedil:"ş",Scirc:"Ŝ",scirc:"ŝ",scnap:"⪺",scnE:"⪶",scnsim:"⋩",scpolint:"⨓",scsim:"≿",Scy:"С",scy:"с",sdot:"⋅",sdotb:"⊡",sdote:"⩦",searhk:"⤥",seArr:"⇘",searr:"↘",searrow:"↘",sect:"§",semi:";",seswar:"⤩",setminus:"∖",setmn:"∖",sext:"✶",Sfr:"𝔖",sfr:"𝔰",sfrown:"⌢",sharp:"♯",SHCHcy:"Щ",shchcy:"щ",SHcy:"Ш",shcy:"ш",ShortDownArrow:"↓",ShortLeftArrow:"←",shortmid:"∣",shortparallel:"∥",ShortRightArrow:"→",ShortUpArrow:"↑",shy:"­",Sigma:"Σ",sigma:"σ",sigmaf:"ς",sigmav:"ς",sim:"∼",simdot:"⩪",sime:"≃",simeq:"≃",simg:"⪞",simgE:"⪠",siml:"⪝",simlE:"⪟",simne:"≆",simplus:"⨤",simrarr:"⥲",slarr:"←",SmallCircle:"∘",smallsetminus:"∖",smashp:"⨳",smeparsl:"⧤",smid:"∣",smile:"⌣",smt:"⪪",smte:"⪬",smtes:"⪬︀",SOFTcy:"Ь",softcy:"ь",sol:"/",solb:"⧄",solbar:"⌿",Sopf:"𝕊",sopf:"𝕤",spades:"♠",spadesuit:"♠",spar:"∥",sqcap:"⊓",sqcaps:"⊓︀",sqcup:"⊔",sqcups:"⊔︀",Sqrt:"√",sqsub:"⊏",sqsube:"⊑",sqsubset:"⊏",sqsubseteq:"⊑",sqsup:"⊐",sqsupe:"⊒",sqsupset:"⊐",sqsupseteq:"⊒",squ:"□",Square:"□",square:"□",SquareIntersection:"⊓",SquareSubset:"⊏",SquareSubsetEqual:"⊑",SquareSuperset:"⊐",SquareSupersetEqual:"⊒",SquareUnion:"⊔",squarf:"▪",squf:"▪",srarr:"→",Sscr:"𝒮",sscr:"𝓈",ssetmn:"∖",ssmile:"⌣",sstarf:"⋆",Star:"⋆",star:"☆",starf:"★",straightepsilon:"ϵ",straightphi:"ϕ",strns:"¯",Sub:"⋐",sub:"⊂",subdot:"⪽",subE:"⫅",sube:"⊆",subedot:"⫃",submult:"⫁",subnE:"⫋",subne:"⊊",subplus:"⪿",subrarr:"⥹",Subset:"⋐",subset:"⊂",subseteq:"⊆",subseteqq:"⫅",SubsetEqual:"⊆",subsetneq:"⊊",subsetneqq:"⫋",subsim:"⫇",subsub:"⫕",subsup:"⫓",succ:"≻",succapprox:"⪸",succcurlyeq:"≽",Succeeds:"≻",SucceedsEqual:"⪰",SucceedsSlantEqual:"≽",SucceedsTilde:"≿",succeq:"⪰",succnapprox:"⪺",succneqq:"⪶",succnsim:"⋩",succsim:"≿",SuchThat:"∋",Sum:"∑",sum:"∑",sung:"♪",Sup:"⋑",sup:"⊃",sup1:"¹",sup2:"²",sup3:"³",supdot:"⪾",supdsub:"⫘",supE:"⫆",supe:"⊇",supedot:"⫄",Superset:"⊃",SupersetEqual:"⊇",suphsol:"⟉",suphsub:"⫗",suplarr:"⥻",supmult:"⫂",supnE:"⫌",supne:"⊋",supplus:"⫀",Supset:"⋑",supset:"⊃",supseteq:"⊇",supseteqq:"⫆",supsetneq:"⊋",supsetneqq:"⫌",supsim:"⫈",supsub:"⫔",supsup:"⫖",swarhk:"⤦",swArr:"⇙",swarr:"↙",swarrow:"↙",swnwar:"⤪",szlig:"ß",Tab:"	",target:"⌖",Tau:"Τ",tau:"τ",tbrk:"⎴",Tcaron:"Ť",tcaron:"ť",Tcedil:"Ţ",tcedil:"ţ",Tcy:"Т",tcy:"т",tdot:"⃛",telrec:"⌕",Tfr:"𝔗",tfr:"𝔱",there4:"∴",Therefore:"∴",therefore:"∴",Theta:"Θ",theta:"θ",thetasym:"ϑ",thetav:"ϑ",thickapprox:"≈",thicksim:"∼",ThickSpace:"  ",thinsp:" ",ThinSpace:" ",thkap:"≈",thksim:"∼",THORN:"Þ",thorn:"þ",Tilde:"∼",tilde:"˜",TildeEqual:"≃",TildeFullEqual:"≅",TildeTilde:"≈",times:"×",timesb:"⊠",timesbar:"⨱",timesd:"⨰",tint:"∭",toea:"⤨",top:"⊤",topbot:"⌶",topcir:"⫱",Topf:"𝕋",topf:"𝕥",topfork:"⫚",tosa:"⤩",tprime:"‴",TRADE:"™",trade:"™",triangle:"▵",triangledown:"▿",triangleleft:"◃",trianglelefteq:"⊴",triangleq:"≜",triangleright:"▹",trianglerighteq:"⊵",tridot:"◬",trie:"≜",triminus:"⨺",TripleDot:"⃛",triplus:"⨹",trisb:"⧍",tritime:"⨻",trpezium:"⏢",Tscr:"𝒯",tscr:"𝓉",TScy:"Ц",tscy:"ц",TSHcy:"Ћ",tshcy:"ћ",Tstrok:"Ŧ",tstrok:"ŧ",twixt:"≬",twoheadleftarrow:"↞",twoheadrightarrow:"↠",Uacute:"Ú",uacute:"ú",Uarr:"↟",uArr:"⇑",uarr:"↑",Uarrocir:"⥉",Ubrcy:"Ў",ubrcy:"ў",Ubreve:"Ŭ",ubreve:"ŭ",Ucirc:"Û",ucirc:"û",Ucy:"У",ucy:"у",udarr:"⇅",Udblac:"Ű",udblac:"ű",udhar:"⥮",ufisht:"⥾",Ufr:"𝔘",ufr:"𝔲",Ugrave:"Ù",ugrave:"ù",uHar:"⥣",uharl:"↿",uharr:"↾",uhblk:"▀",ulcorn:"⌜",ulcorner:"⌜",ulcrop:"⌏",ultri:"◸",Umacr:"Ū",umacr:"ū",uml:"¨",UnderBar:"_",UnderBrace:"⏟",UnderBracket:"⎵",UnderParenthesis:"⏝",Union:"⋃",UnionPlus:"⊎",Uogon:"Ų",uogon:"ų",Uopf:"𝕌",uopf:"𝕦",UpArrow:"↑",Uparrow:"⇑",uparrow:"↑",UpArrowBar:"⤒",UpArrowDownArrow:"⇅",UpDownArrow:"↕",Updownarrow:"⇕",updownarrow:"↕",UpEquilibrium:"⥮",upharpoonleft:"↿",upharpoonright:"↾",uplus:"⊎",UpperLeftArrow:"↖",UpperRightArrow:"↗",Upsi:"ϒ",upsi:"υ",upsih:"ϒ",Upsilon:"Υ",upsilon:"υ",UpTee:"⊥",UpTeeArrow:"↥",upuparrows:"⇈",urcorn:"⌝",urcorner:"⌝",urcrop:"⌎",Uring:"Ů",uring:"ů",urtri:"◹",Uscr:"𝒰",uscr:"𝓊",utdot:"⋰",Utilde:"Ũ",utilde:"ũ",utri:"▵",utrif:"▴",uuarr:"⇈",Uuml:"Ü",uuml:"ü",uwangle:"⦧",vangrt:"⦜",varepsilon:"ϵ",varkappa:"ϰ",varnothing:"∅",varphi:"ϕ",varpi:"ϖ",varpropto:"∝",vArr:"⇕",varr:"↕",varrho:"ϱ",varsigma:"ς",varsubsetneq:"⊊︀",varsubsetneqq:"⫋︀",varsupsetneq:"⊋︀",varsupsetneqq:"⫌︀",vartheta:"ϑ",vartriangleleft:"⊲",vartriangleright:"⊳",Vbar:"⫫",vBar:"⫨",vBarv:"⫩",Vcy:"В",vcy:"в",VDash:"⊫",Vdash:"⊩",vDash:"⊨",vdash:"⊢",Vdashl:"⫦",Vee:"⋁",vee:"∨",veebar:"⊻",veeeq:"≚",vellip:"⋮",Verbar:"‖",verbar:"|",Vert:"‖",vert:"|",VerticalBar:"∣",VerticalLine:"|",VerticalSeparator:"❘",VerticalTilde:"≀",VeryThinSpace:" ",Vfr:"𝔙",vfr:"𝔳",vltri:"⊲",vnsub:"⊂⃒",vnsup:"⊃⃒",Vopf:"𝕍",vopf:"𝕧",vprop:"∝",vrtri:"⊳",Vscr:"𝒱",vscr:"𝓋",vsubnE:"⫋︀",vsubne:"⊊︀",vsupnE:"⫌︀",vsupne:"⊋︀",Vvdash:"⊪",vzigzag:"⦚",Wcirc:"Ŵ",wcirc:"ŵ",wedbar:"⩟",Wedge:"⋀",wedge:"∧",wedgeq:"≙",weierp:"℘",Wfr:"𝔚",wfr:"𝔴",Wopf:"𝕎",wopf:"𝕨",wp:"℘",wr:"≀",wreath:"≀",Wscr:"𝒲",wscr:"𝓌",xcap:"⋂",xcirc:"◯",xcup:"⋃",xdtri:"▽",Xfr:"𝔛",xfr:"𝔵",xhArr:"⟺",xharr:"⟷",Xi:"Ξ",xi:"ξ",xlArr:"⟸",xlarr:"⟵",xmap:"⟼",xnis:"⋻",xodot:"⨀",Xopf:"𝕏",xopf:"𝕩",xoplus:"⨁",xotime:"⨂",xrArr:"⟹",xrarr:"⟶",Xscr:"𝒳",xscr:"𝓍",xsqcup:"⨆",xuplus:"⨄",xutri:"△",xvee:"⋁",xwedge:"⋀",Yacute:"Ý",yacute:"ý",YAcy:"Я",yacy:"я",Ycirc:"Ŷ",ycirc:"ŷ",Ycy:"Ы",ycy:"ы",yen:"¥",Yfr:"𝔜",yfr:"𝔶",YIcy:"Ї",yicy:"ї",Yopf:"𝕐",yopf:"𝕪",Yscr:"𝒴",yscr:"𝓎",YUcy:"Ю",yucy:"ю",Yuml:"Ÿ",yuml:"ÿ",Zacute:"Ź",zacute:"ź",Zcaron:"Ž",zcaron:"ž",Zcy:"З",zcy:"з",Zdot:"Ż",zdot:"ż",zeetrf:"ℨ",ZeroWidthSpace:"​",Zeta:"Ζ",zeta:"ζ",Zfr:"ℨ",zfr:"𝔷",ZHcy:"Ж",zhcy:"ж",zigrarr:"⇝",Zopf:"ℤ",zopf:"𝕫",Zscr:"𝒵",zscr:"𝓏",zwj:"‍",zwnj:"‌"}},{}],2:[function(e,t){"use strict";var r={};["article","aside","button","blockquote","body","canvas","caption","col","colgroup","dd","div","dl","dt","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","iframe","li","map","object","ol","output","p","pre","progress","script","section","style","table","tbody","td","textarea","tfoot","th","tr","thead","ul","video"].forEach(function(e){r[e]=!0}),t.exports=r},{}],3:[function(e,t){"use strict";function r(e,t){return e=e.source,t=t||"",function r(n,s){return n?(s=s.source||s,e=e.replace(n,s),r):new RegExp(e,t)}}var n=/[a-zA-Z_:][a-zA-Z0-9:._-]*/,s=/[^"'=<>`\x00-\x20]+/,o=/'[^']*'/,i=/"[^"]*"/,l=r(/(?:unquoted|single_quoted|double_quoted)/)("unquoted",s)("single_quoted",o)("double_quoted",i)(),a=r(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)("attr_name",n)("attr_value",l)(),c=r(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)("attribute",a)(),u=/<\/[A-Za-z][A-Za-z0-9]*\s*>/,p=/<!--([^-]+|[-][^-]+)*-->/,h=/<[?].*?[?]>/,f=/<![A-Z]+\s+[^>]*>/,d=/<!\[CDATA\[([^\]]+|\][^\]]|\]\][^>])*\]\]>/,g=r(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)("open_tag",c)("close_tag",u)("comment",p)("processing",h)("declaration",f)("cdata",d)();t.exports.HTML_TAG_RE=g},{}],4:[function(e,t){"use strict";t.exports=["coap","doi","javascript","aaa","aaas","about","acap","cap","cid","crid","data","dav","dict","dns","file","ftp","geo","go","gopher","h323","http","https","iax","icap","im","imap","info","ipp","iris","iris.beep","iris.xpc","iris.xpcs","iris.lwz","ldap","mailto","mid","msrp","msrps","mtqp","mupdate","news","nfs","ni","nih","nntp","opaquelocktoken","pop","pres","rtsp","service","session","shttp","sieve","sip","sips","sms","snmp","soap.beep","soap.beeps","tag","tel","telnet","tftp","thismessage","tn3270","tip","tv","urn","vemmi","ws","wss","xcon","xcon-userid","xmlrpc.beep","xmlrpc.beeps","xmpp","z39.50r","z39.50s","adiumxtra","afp","afs","aim","apt","attachment","aw","beshare","bitcoin","bolo","callto","chrome","chrome-extension","com-eventbrite-attendee","content","cvs","dlna-playsingle","dlna-playcontainer","dtn","dvb","ed2k","facetime","feed","finger","fish","gg","git","gizmoproject","gtalk","hcp","icon","ipn","irc","irc6","ircs","itms","jar","jms","keyparc","lastfm","ldaps","magnet","maps","market","message","mms","ms-help","msnim","mumble","mvn","notes","oid","palm","paparazzi","platform","proxy","psyc","query","res","resource","rmi","rsync","rtmp","secondlife","sftp","sgn","skype","smb","soldat","spotify","ssh","steam","svn","teamspeak","things","udp","unreal","ut2004","ventrilo","view-source","webcal","wtai","wyciwyg","xfire","xri","ymsgr"]},{}],5:[function(e,t,r){"use strict";function n(e){return Object.prototype.toString.call(e)}function s(e){return"[object String]"===n(e)}function o(e,t){return e?d.call(e,t):!1}function i(e){var t=[].slice.call(arguments,1);return t.forEach(function(t){if(t){if("object"!=typeof t)throw new TypeError(t+"must be object");Object.keys(t).forEach(function(r){e[r]=t[r]})}}),e}function l(e){return e.indexOf("\\")<0?e:e.replace(g,"$1")}function a(e){return e>=55296&&57343>=e?!1:e>=64976&&65007>=e?!1:65535===(65535&e)||65534===(65535&e)?!1:e>=0&&8>=e?!1:11===e?!1:e>=14&&31>=e?!1:e>=127&&159>=e?!1:e>1114111?!1:!0}function c(e){if(e>65535){e-=65536;var t=55296+(e>>10),r=56320+(1023&e);return String.fromCharCode(t,r)}return String.fromCharCode(e)}function u(e,t){var r=0;return o(v,t)?v[t]:35===t.charCodeAt(0)&&b.test(t)&&(r="x"===t[1].toLowerCase()?parseInt(t.slice(2),16):parseInt(t.slice(1),10),a(r))?c(r):e}function p(e){return e.indexOf("&")<0?e:e.replace(m,u)}function h(e){return y[e]}function f(e){return k.test(e)?e.replace(_,h):e}var d=Object.prototype.hasOwnProperty,g=/\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g,m=/&([a-z#][a-z0-9]{1,31});/gi,b=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,v=e("./entities"),k=/[&<>"]/,_=/[&<>"]/g,y={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};r.assign=i,r.isString=s,r.has=o,r.unescapeMd=l,r.isValidEntityCode=a,r.fromCodePoint=c,r.replaceEntities=p,r.escapeHtml=f},{"./entities":1}],6:[function(e,t){"use strict";t.exports={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,linkTarget:"",typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["block","inline","references","abbr2"]},block:{rules:["blockquote","code","fences","heading","hr","htmlblock","lheading","list","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","htmltag","links","newline","text"]}}}},{}],7:[function(e,t){"use strict";t.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,linkTarget:"",typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["block","inline","references","replacements","linkify","smartquotes","references","abbr2","footnote_tail"]},block:{rules:["blockquote","code","fences","footnote","heading","hr","htmlblock","lheading","list","paragraph","table"]},inline:{rules:["autolink","backticks","del","emphasis","entity","escape","footnote_ref","htmltag","links","newline","text"]}}}},{}],8:[function(e,t){"use strict";t.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,linkTarget:"",typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{},block:{},inline:{}}}},{}],9:[function(e,t){"use strict";var r=e("../common/utils").replaceEntities;t.exports=function(e){var t=r(e);try{t=decodeURI(t)}catch(n){}return encodeURI(t)}},{"../common/utils":5}],10:[function(e,t){"use strict";t.exports=function(e){return e.trim().replace(/\s+/g," ").toUpperCase()}},{}],11:[function(e,t){"use strict";var r=e("./normalize_link"),n=e("../common/utils").unescapeMd;t.exports=function(e,t){var s,o,i,l=t,a=e.posMax;if(60===e.src.charCodeAt(t)){for(t++;a>t;){if(s=e.src.charCodeAt(t),10===s)return!1;if(62===s)return i=r(n(e.src.slice(l+1,t))),e.parser.validateLink(i)?(e.pos=t+1,e.linkContent=i,!0):!1;92===s&&a>t+1?t+=2:t++}return!1}for(o=0;a>t&&(s=e.src.charCodeAt(t),32!==s)&&!(s>8&&14>s);)if(92===s&&a>t+1)t+=2;else{if(40===s&&(o++,o>1))break;if(41===s&&(o--,0>o))break;t++}return l===t?!1:(i=n(e.src.slice(l,t)),e.parser.validateLink(i)?(e.linkContent=i,e.pos=t,!0):!1)}},{"../common/utils":5,"./normalize_link":9}],12:[function(e,t){"use strict";t.exports=function(e,t){
var r,n,s,o=-1,i=e.posMax,l=e.pos,a=e.isInLabel;if(e.isInLabel)return-1;if(e.labelUnmatchedScopes)return e.labelUnmatchedScopes--,-1;for(e.pos=t+1,e.isInLabel=!0,r=1;e.pos<i;){if(s=e.src.charCodeAt(e.pos),91===s)r++;else if(93===s&&(r--,0===r)){n=!0;break}e.parser.skipToken(e)}return n?(o=e.pos,e.labelUnmatchedScopes=0):e.labelUnmatchedScopes=r-1,e.pos=l,e.isInLabel=a,o}},{}],13:[function(e,t){"use strict";var r=e("../common/utils").unescapeMd;t.exports=function(e,t){var n,s=t,o=e.posMax,i=e.src.charCodeAt(t);if(34!==i&&39!==i&&40!==i)return!1;for(t++,40===i&&(i=41);o>t;){if(n=e.src.charCodeAt(t),n===i)return e.pos=t+1,e.linkContent=r(e.src.slice(s+1,t)),!0;92===n&&o>t+1?t+=2:t++}return!1}},{"../common/utils":5}],14:[function(e,t){"use strict";function r(e,t,r){this.src=t,this.env=r,this.options=e.options,this.tokens=[],this.inlineMode=!1,this.inline=e.inline,this.block=e.block,this.renderer=e.renderer,this.typographer=e.typographer}function n(e,t){"string"!=typeof e&&(t=e,e="default"),this.inline=new a,this.block=new l,this.core=new i,this.renderer=new o,this.ruler=new c,this.options={},this.configure(u[e]),this.set(t||{})}var s=e("./common/utils").assign,o=e("./renderer"),i=e("./parser_core"),l=e("./parser_block"),a=e("./parser_inline"),c=e("./ruler"),u={"default":e("./configs/default"),full:e("./configs/full"),commonmark:e("./configs/commonmark")};n.prototype.set=function(e){s(this.options,e)},n.prototype.configure=function(e){var t=this;if(!e)throw new Error("Wrong `remarkable` preset, check name/content");e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(r){e.components[r].rules&&t[r].ruler.enable(e.components[r].rules,!0)})},n.prototype.use=function(e,t){return e(this,t),this},n.prototype.parse=function(e,t){var n=new r(this,e,t);return this.core.process(n),n.tokens},n.prototype.render=function(e,t){return t=t||{},this.renderer.render(this.parse(e,t),this.options,t)},n.prototype.parseInline=function(e,t){var n=new r(this,e,t);return n.inlineMode=!0,this.core.process(n),n.tokens},n.prototype.renderInline=function(e,t){return t=t||{},this.renderer.render(this.parseInline(e,t),this.options,t)},t.exports=n,t.exports.utils=e("./common/utils")},{"./common/utils":5,"./configs/commonmark":6,"./configs/default":7,"./configs/full":8,"./parser_block":15,"./parser_core":16,"./parser_inline":17,"./renderer":18,"./ruler":19}],15:[function(e,t){"use strict";function r(){this.ruler=new n;for(var e=0;e<o.length;e++)this.ruler.push(o[e][0],o[e][1],{alt:(o[e][2]||[]).slice()})}var n=e("./ruler"),s=e("./rules_block/state_block"),o=[["code",e("./rules_block/code")],["fences",e("./rules_block/fences"),["paragraph","blockquote","list"]],["blockquote",e("./rules_block/blockquote"),["paragraph","blockquote","list"]],["hr",e("./rules_block/hr"),["paragraph","blockquote","list"]],["list",e("./rules_block/list"),["paragraph","blockquote"]],["footnote",e("./rules_block/footnote"),["paragraph"]],["heading",e("./rules_block/heading"),["paragraph","blockquote"]],["lheading",e("./rules_block/lheading")],["htmlblock",e("./rules_block/htmlblock"),["paragraph","blockquote"]],["table",e("./rules_block/table"),["paragraph"]],["deflist",e("./rules_block/deflist"),["paragraph"]],["paragraph",e("./rules_block/paragraph")]];r.prototype.tokenize=function(e,t,r){for(var n,s,o=this.ruler.getRules(""),i=o.length,l=t,a=!1;r>l&&(e.line=l=e.skipEmptyLines(l),!(l>=r))&&!(e.tShift[l]<e.blkIndent);){for(s=0;i>s&&!(n=o[s](e,l,r,!1));s++);if(e.tight=!a,e.isEmpty(e.line-1)&&(a=!0),l=e.line,r>l&&e.isEmpty(l)){if(a=!0,l++,r>l&&"list"===e.parentType&&e.isEmpty(l))break;e.line=l}}};var i=/[\n\t]/g,l=/\r[\n\u0085]|[\u2424\u2028\u0085]/g,a=/\u00a0/g;r.prototype.parse=function(e,t,r,n){var o,c=0,u=0;return e?(e=e.replace(a," "),e=e.replace(l,"\n"),e.indexOf("	")>=0&&(e=e.replace(i,function(t,r){var n;return 10===e.charCodeAt(r)?(c=r+1,u=0,t):(n="    ".slice((r-c-u)%4),u=r-c+1,n)})),o=new s(e,this,t,r,n),void this.tokenize(o,o.line,o.lineMax)):[]},t.exports=r},{"./ruler":19,"./rules_block/blockquote":21,"./rules_block/code":22,"./rules_block/deflist":23,"./rules_block/fences":24,"./rules_block/footnote":25,"./rules_block/heading":26,"./rules_block/hr":27,"./rules_block/htmlblock":28,"./rules_block/lheading":29,"./rules_block/list":30,"./rules_block/paragraph":31,"./rules_block/state_block":32,"./rules_block/table":33}],16:[function(e,t){"use strict";function r(){this.options={},this.ruler=new n;for(var e=0;e<s.length;e++)this.ruler.push(s[e][0],s[e][1])}var n=e("./ruler"),s=[["block",e("./rules_core/block")],["abbr",e("./rules_core/abbr")],["references",e("./rules_core/references")],["inline",e("./rules_core/inline")],["footnote_tail",e("./rules_core/footnote_tail")],["abbr2",e("./rules_core/abbr2")],["replacements",e("./rules_core/replacements")],["smartquotes",e("./rules_core/smartquotes")],["linkify",e("./rules_core/linkify")]];r.prototype.process=function(e){var t,r,n;for(n=this.ruler.getRules(""),t=0,r=n.length;r>t;t++)n[t](e)},t.exports=r},{"./ruler":19,"./rules_core/abbr":34,"./rules_core/abbr2":35,"./rules_core/block":36,"./rules_core/footnote_tail":37,"./rules_core/inline":38,"./rules_core/linkify":39,"./rules_core/references":40,"./rules_core/replacements":41,"./rules_core/smartquotes":42}],17:[function(e,t){"use strict";function r(){this.ruler=new s;for(var e=0;e<l.length;e++)this.ruler.push(l[e][0],l[e][1]);this.validateLink=n}function n(e){var t=["vbscript","javascript","file","data"],r=e.trim().toLowerCase();return r=i.replaceEntities(r),-1!==r.indexOf(":")&&-1!==t.indexOf(r.split(":")[0])?!1:!0}var s=e("./ruler"),o=e("./rules_inline/state_inline"),i=e("./common/utils"),l=[["text",e("./rules_inline/text")],["newline",e("./rules_inline/newline")],["escape",e("./rules_inline/escape")],["backticks",e("./rules_inline/backticks")],["del",e("./rules_inline/del")],["ins",e("./rules_inline/ins")],["mark",e("./rules_inline/mark")],["emphasis",e("./rules_inline/emphasis")],["sub",e("./rules_inline/sub")],["sup",e("./rules_inline/sup")],["links",e("./rules_inline/links")],["footnote_inline",e("./rules_inline/footnote_inline")],["footnote_ref",e("./rules_inline/footnote_ref")],["autolink",e("./rules_inline/autolink")],["htmltag",e("./rules_inline/htmltag")],["entity",e("./rules_inline/entity")]];r.prototype.skipToken=function(e){var t,r,n=this.ruler.getRules(""),s=n.length,o=e.pos;if((r=e.cacheGet(o))>0)return void(e.pos=r);for(t=0;s>t;t++)if(n[t](e,!0))return void e.cacheSet(o,e.pos);e.pos++,e.cacheSet(o,e.pos)},r.prototype.tokenize=function(e){for(var t,r,n=this.ruler.getRules(""),s=n.length,o=e.posMax;e.pos<o;){for(r=0;s>r&&!(t=n[r](e,!1));r++);if(t){if(e.pos>=o)break}else e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},r.prototype.parse=function(e,t,r,n){var s=new o(e,this,t,r,n);this.tokenize(s)},t.exports=r},{"./common/utils":5,"./ruler":19,"./rules_inline/autolink":43,"./rules_inline/backticks":44,"./rules_inline/del":45,"./rules_inline/emphasis":46,"./rules_inline/entity":47,"./rules_inline/escape":48,"./rules_inline/footnote_inline":49,"./rules_inline/footnote_ref":50,"./rules_inline/htmltag":51,"./rules_inline/ins":52,"./rules_inline/links":53,"./rules_inline/mark":54,"./rules_inline/newline":55,"./rules_inline/state_inline":56,"./rules_inline/sub":57,"./rules_inline/sup":58,"./rules_inline/text":59}],18:[function(e,t){"use strict";function r(){this.rules=n.assign({},s),this.getBreak=s.getBreak}var n=e("./common/utils"),s=e("./rules");t.exports=r,r.prototype.renderInline=function(e,t,r){for(var n=this.rules,s=e.length,o=0,i="";s--;)i+=n[e[o].type](e,o++,t,r,this);return i},r.prototype.render=function(e,t,r){for(var n=this.rules,s=e.length,o=-1,i="";++o<s;)i+="inline"===e[o].type?this.renderInline(e[o].children,t,r):n[e[o].type](e,o,t,r,this);return i}},{"./common/utils":5,"./rules":20}],19:[function(e,t){"use strict";function r(){this.__rules__=[],this.__cache__=null}r.prototype.__find__=function(e){for(var t=this.__rules__.length,r=-1;t--;)if(this.__rules__[++r].name===e)return r;return-1},r.prototype.__compile__=function(){var e=this,t=[""];e.__rules__.forEach(function(e){e.enabled&&e.alt.forEach(function(e){t.indexOf(e)<0&&t.push(e)})}),e.__cache__={},t.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(r){r.enabled&&(t&&r.alt.indexOf(t)<0||e.__cache__[t].push(r.fn))})})},r.prototype.at=function(e,t,r){var n=this.__find__(e),s=r||{};if(-1===n)throw new Error("Parser rule not found: "+e);this.__rules__[n].fn=t,this.__rules__[n].alt=s.alt||[],this.__cache__=null},r.prototype.before=function(e,t,r,n){var s=this.__find__(e),o=n||{};if(-1===s)throw new Error("Parser rule not found: "+e);this.__rules__.splice(s,0,{name:t,enabled:!0,fn:r,alt:o.alt||[]}),this.__cache__=null},r.prototype.after=function(e,t,r,n){var s=this.__find__(e),o=n||{};if(-1===s)throw new Error("Parser rule not found: "+e);this.__rules__.splice(s+1,0,{name:t,enabled:!0,fn:r,alt:o.alt||[]}),this.__cache__=null},r.prototype.push=function(e,t,r){var n=r||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:n.alt||[]}),this.__cache__=null},r.prototype.enable=function(e,t){e=Array.isArray(e)?e:[e],t&&this.__rules__.forEach(function(e){e.enabled=!1}),e.forEach(function(e){var t=this.__find__(e);if(0>t)throw new Error("Rules manager: invalid rule name "+e);this.__rules__[t].enabled=!0},this),this.__cache__=null},r.prototype.disable=function(e){e=Array.isArray(e)?e:[e],e.forEach(function(e){var t=this.__find__(e);if(0>t)throw new Error("Rules manager: invalid rule name "+e);this.__rules__[t].enabled=!1},this),this.__cache__=null},r.prototype.getRules=function(e){return null===this.__cache__&&this.__compile__(),this.__cache__[e]||[]},t.exports=r},{}],20:[function(e,t){"use strict";function r(e,t){return++t>=e.length-2?t:"paragraph_open"===e[t].type&&e[t].tight&&"inline"===e[t+1].type&&0===e[t+1].content.length&&"paragraph_close"===e[t+2].type&&e[t+2].tight?r(e,t+2):t}var n=e("./common/utils").has,s=e("./common/utils").unescapeMd,o=e("./common/utils").replaceEntities,i=e("./common/utils").escapeHtml,l={};l.blockquote_open=function(){return"<blockquote>\n"},l.blockquote_close=function(e,t){return"</blockquote>"+a(e,t)},l.code=function(e,t){return e[t].block?"<pre><code>"+i(e[t].content)+"</code></pre>"+a(e,t):"<code>"+i(e[t].content)+"</code>"},l.fence=function(e,t,r,l,c){var u,p,h,f=e[t],d="",g=r.langPrefix,m="";if(f.params){if(u=f.params.split(/\s+/g),p=u.join(" "),n(c.rules.fence_custom,u[0]))return c.rules.fence_custom[u[0]](e,t,r,l,c);m=i(o(s(p))),d=' class="'+g+m+'"'}return h=r.highlight?r.highlight.apply(r.highlight,[f.content].concat(u))||i(f.content):i(f.content),"<pre><code"+d+">"+h+"</code></pre>"+a(e,t)},l.fence_custom={},l.heading_open=function(e,t){return"<h"+e[t].hLevel+">"},l.heading_close=function(e,t){return"</h"+e[t].hLevel+">\n"},l.hr=function(e,t,r){return(r.xhtmlOut?"<hr />":"<hr>")+a(e,t)},l.bullet_list_open=function(){return"<ul>\n"},l.bullet_list_close=function(e,t){return"</ul>"+a(e,t)},l.list_item_open=function(){return"<li>"},l.list_item_close=function(){return"</li>\n"},l.ordered_list_open=function(e,t){var r=e[t],n=r.order>1?' start="'+r.order+'"':"";return"<ol"+n+">\n"},l.ordered_list_close=function(e,t){return"</ol>"+a(e,t)},l.paragraph_open=function(e,t){return e[t].tight?"":"<p>"},l.paragraph_close=function(e,t){var r=!(e[t].tight&&t&&"inline"===e[t-1].type&&!e[t-1].content);return(e[t].tight?"":"</p>")+(r?a(e,t):"")},l.link_open=function(e,t,r){var n=e[t].title?' title="'+i(o(e[t].title))+'"':"",s=r.linkTarget?' target="'+r.linkTarget+'"':"";return'<a href="'+i(e[t].href)+'"'+n+s+">"},l.link_close=function(){return"</a>"},l.image=function(e,t,r){var n=' src="'+i(e[t].src)+'"',l=e[t].title?' title="'+i(o(e[t].title))+'"':"",a=' alt="'+(e[t].alt?i(o(s(e[t].alt))):"")+'"',c=r.xhtmlOut?" /":"";return"<img"+n+a+l+c+">"},l.table_open=function(){return"<table>\n"},l.table_close=function(){return"</table>\n"},l.thead_open=function(){return"<thead>\n"},l.thead_close=function(){return"</thead>\n"},l.tbody_open=function(){return"<tbody>\n"},l.tbody_close=function(){return"</tbody>\n"},l.tr_open=function(){return"<tr>"},l.tr_close=function(){return"</tr>\n"},l.th_open=function(e,t){var r=e[t];return"<th"+(r.align?' style="text-align:'+r.align+'"':"")+">"},l.th_close=function(){return"</th>"},l.td_open=function(e,t){var r=e[t];return"<td"+(r.align?' style="text-align:'+r.align+'"':"")+">"},l.td_close=function(){return"</td>"},l.strong_open=function(){return"<strong>"},l.strong_close=function(){return"</strong>"},l.em_open=function(){return"<em>"},l.em_close=function(){return"</em>"},l.del_open=function(){return"<del>"},l.del_close=function(){return"</del>"},l.ins_open=function(){return"<ins>"},l.ins_close=function(){return"</ins>"},l.mark_open=function(){return"<mark>"},l.mark_close=function(){return"</mark>"},l.sub=function(e,t){return"<sub>"+i(e[t].content)+"</sub>"},l.sup=function(e,t){return"<sup>"+i(e[t].content)+"</sup>"},l.hardbreak=function(e,t,r){return r.xhtmlOut?"<br />\n":"<br>\n"},l.softbreak=function(e,t,r){return r.breaks?r.xhtmlOut?"<br />\n":"<br>\n":"\n"},l.text=function(e,t){return i(e[t].content)},l.htmlblock=function(e,t){return e[t].content},l.htmltag=function(e,t){return e[t].content},l.abbr_open=function(e,t){return'<abbr title="'+i(o(e[t].title))+'">'},l.abbr_close=function(){return"</abbr>"},l.footnote_ref=function(e,t){var r=Number(e[t].id+1).toString(),n="fnref"+r;return e[t].subId>0&&(n+=":"+e[t].subId),'<sup class="footnote-ref"><a href="#fn'+r+'" id="'+n+'">['+r+"]</a></sup>"},l.footnote_block_open=function(e,t,r){var n=r.xhtmlOut?'<hr class="footnotes-sep" />\n':'<hr class="footnotes-sep">\n';return n+'<section class="footnotes">\n<ol class="footnotes-list">\n'},l.footnote_block_close=function(){return"</ol>\n</section>\n"},l.footnote_open=function(e,t){var r=Number(e[t].id+1).toString();return'<li id="fn'+r+'"  class="footnote-item">'},l.footnote_close=function(){return"</li>\n"},l.footnote_anchor=function(e,t){var r=Number(e[t].id+1).toString(),n="fnref"+r;return e[t].subId>0&&(n+=":"+e[t].subId),' <a href="#'+n+'" class="footnote-backref">↩</a>'},l.dl_open=function(){return"<dl>\n"},l.dt_open=function(){return"<dt>"},l.dd_open=function(){return"<dd>"},l.dl_close=function(){return"</dl>\n"},l.dt_close=function(){return"</dt>\n"},l.dd_close=function(){return"</dd>\n"};var a=l.getBreak=function(e,t){return t=r(e,t),t<e.length&&"list_item_close"===e[t].type?"":"\n"};t.exports=l},{"./common/utils":5}],21:[function(e,t){"use strict";t.exports=function(e,t,r,n){var s,o,i,l,a,c,u,p,h,f,d,g=e.bMarks[t]+e.tShift[t],m=e.eMarks[t];if(g>m)return!1;if(62!==e.src.charCodeAt(g++))return!1;if(e.level>=e.options.maxNesting)return!1;if(n)return!0;for(32===e.src.charCodeAt(g)&&g++,a=e.blkIndent,e.blkIndent=0,l=[e.bMarks[t]],e.bMarks[t]=g,g=m>g?e.skipSpaces(g):g,o=g>=m,i=[e.tShift[t]],e.tShift[t]=g-e.bMarks[t],p=e.parser.ruler.getRules("blockquote"),s=t+1;r>s&&(g=e.bMarks[s]+e.tShift[s],m=e.eMarks[s],!(g>=m));s++)if(62!==e.src.charCodeAt(g++)){if(o)break;for(d=!1,h=0,f=p.length;f>h;h++)if(p[h](e,s,r,!0)){d=!0;break}if(d)break;l.push(e.bMarks[s]),i.push(e.tShift[s]),e.tShift[s]=-1337}else 32===e.src.charCodeAt(g)&&g++,l.push(e.bMarks[s]),e.bMarks[s]=g,g=m>g?e.skipSpaces(g):g,o=g>=m,i.push(e.tShift[s]),e.tShift[s]=g-e.bMarks[s];for(c=e.parentType,e.parentType="blockquote",e.tokens.push({type:"blockquote_open",lines:u=[t,0],level:e.level++}),e.parser.tokenize(e,t,s),e.tokens.push({type:"blockquote_close",level:--e.level}),e.parentType=c,u[1]=e.line,h=0;h<i.length;h++)e.bMarks[h+t]=l[h],e.tShift[h+t]=i[h];return e.blkIndent=a,!0}},{}],22:[function(e,t){"use strict";t.exports=function(e,t,r){var n,s;if(e.tShift[t]-e.blkIndent<4)return!1;for(s=n=t+1;r>n;)if(e.isEmpty(n))n++;else{if(!(e.tShift[n]-e.blkIndent>=4))break;n++,s=n}return e.line=n,e.tokens.push({type:"code",content:e.getLines(t,s,4+e.blkIndent,!0),block:!0,lines:[t,e.line],level:e.level}),!0}},{}],23:[function(e,t){"use strict";function r(e,t){var r,n,s=e.bMarks[t]+e.tShift[t],o=e.eMarks[t];return s>=o?-1:(n=e.src.charCodeAt(s++),126!==n&&58!==n?-1:(r=e.skipSpaces(s),s===r?-1:r>=o?-1:r))}function n(e,t){var r,n,s=e.level+2;for(r=t+2,n=e.tokens.length-2;n>r;r++)e.tokens[r].level===s&&"paragraph_open"===e.tokens[r].type&&(e.tokens[r+2].tight=!0,e.tokens[r].tight=!0,r+=2)}t.exports=function(e,t,s,o){var i,l,a,c,u,p,h,f,d,g,m,b,v,k;if(o)return e.ddIndent<0?!1:r(e,t)>=0;if(h=t+1,e.isEmpty(h)&&++h>s)return!1;if(e.tShift[h]<e.blkIndent)return!1;if(i=r(e,h),0>i)return!1;if(e.level>=e.options.maxNesting)return!1;p=e.tokens.length,e.tokens.push({type:"dl_open",lines:u=[t,0],level:e.level++}),a=t,l=h;e:for(;;){for(k=!0,v=!1,e.tokens.push({type:"dt_open",lines:[a,a],level:e.level++}),e.tokens.push({type:"inline",content:e.getLines(a,a+1,e.blkIndent,!1).trim(),level:e.level+1,lines:[a,a],children:[]}),e.tokens.push({type:"dt_close",level:--e.level});;){if(e.tokens.push({type:"dd_open",lines:c=[h,0],level:e.level++}),b=e.tight,d=e.ddIndent,f=e.blkIndent,m=e.tShift[l],g=e.parentType,e.blkIndent=e.ddIndent=e.tShift[l]+2,e.tShift[l]=i-e.bMarks[l],e.tight=!0,e.parentType="deflist",e.parser.tokenize(e,l,s,!0),(!e.tight||v)&&(k=!1),v=e.line-l>1&&e.isEmpty(e.line-1),e.tShift[l]=m,e.tight=b,e.parentType=g,e.blkIndent=f,e.ddIndent=d,e.tokens.push({type:"dd_close",level:--e.level}),c[1]=h=e.line,h>=s)break e;if(e.tShift[h]<e.blkIndent)break e;if(i=r(e,h),0>i)break;l=h}if(h>=s)break;if(a=h,e.isEmpty(a))break;if(e.tShift[a]<e.blkIndent)break;if(l=a+1,l>=s)break;if(e.isEmpty(l)&&l++,l>=s)break;if(e.tShift[l]<e.blkIndent)break;if(i=r(e,l),0>i)break}return e.tokens.push({type:"dl_close",level:--e.level}),u[1]=h,e.line=h,k&&n(e,p),!0}},{}],24:[function(e,t){"use strict";t.exports=function(e,t,r,n){var s,o,i,l,a,c=!1,u=e.bMarks[t]+e.tShift[t],p=e.eMarks[t];if(u+3>p)return!1;if(s=e.src.charCodeAt(u),126!==s&&96!==s)return!1;if(a=u,u=e.skipChars(u,s),o=u-a,3>o)return!1;if(i=e.src.slice(u,p).trim(),i.indexOf("`")>=0)return!1;if(n)return!0;for(l=t;(l++,!(l>=r))&&(u=a=e.bMarks[l]+e.tShift[l],p=e.eMarks[l],!(p>u&&e.tShift[l]<e.blkIndent));)if(e.src.charCodeAt(u)===s&&!(e.tShift[l]-e.blkIndent>=4||(u=e.skipChars(u,s),o>u-a||(u=e.skipSpaces(u),p>u)))){c=!0;break}return o=e.tShift[t],e.line=l+(c?1:0),e.tokens.push({type:"fence",params:i,content:e.getLines(t+1,l,o,!0),lines:[t,e.line],level:e.level}),!0}},{}],25:[function(e,t){"use strict";t.exports=function(e,t,r,n){var s,o,i,l,a,c=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];if(c+4>u)return!1;if(91!==e.src.charCodeAt(c))return!1;if(94!==e.src.charCodeAt(c+1))return!1;if(e.level>=e.options.maxNesting)return!1;for(l=c+2;u>l;l++){if(32===e.src.charCodeAt(l))return!1;if(93===e.src.charCodeAt(l))break}return l===c+2?!1:l+1>=u||58!==e.src.charCodeAt(++l)?!1:n?!0:(l++,e.env.footnotes||(e.env.footnotes={}),e.env.footnotes.refs||(e.env.footnotes.refs={}),a=e.src.slice(c+2,l-2),e.env.footnotes.refs[":"+a]=-1,e.tokens.push({type:"footnote_reference_open",label:a,level:e.level++}),s=e.bMarks[t],o=e.tShift[t],i=e.parentType,e.tShift[t]=e.skipSpaces(l)-l,e.bMarks[t]=l,e.blkIndent+=4,e.parentType="footnote",e.tShift[t]<e.blkIndent&&(e.tShift[t]+=e.blkIndent,e.bMarks[t]-=e.blkIndent),e.parser.tokenize(e,t,r,!0),e.parentType=i,e.blkIndent-=4,e.tShift[t]=o,e.bMarks[t]=s,e.tokens.push({type:"footnote_reference_close",level:--e.level}),!0)}},{}],26:[function(e,t){"use strict";t.exports=function(e,t,r,n){var s,o,i,l=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(l>=a)return!1;if(s=e.src.charCodeAt(l),35!==s||l>=a)return!1;for(o=1,s=e.src.charCodeAt(++l);35===s&&a>l&&6>=o;)o++,s=e.src.charCodeAt(++l);return o>6||a>l&&32!==s?!1:n?!0:(a=e.skipCharsBack(a,32,l),i=e.skipCharsBack(a,35,l),i>l&&32===e.src.charCodeAt(i-1)&&(a=i),e.line=t+1,e.tokens.push({type:"heading_open",hLevel:o,lines:[t,e.line],level:e.level}),a>l&&e.tokens.push({type:"inline",content:e.src.slice(l,a).trim(),level:e.level+1,lines:[t,e.line],children:[]}),e.tokens.push({type:"heading_close",hLevel:o,level:e.level}),!0)}},{}],27:[function(e,t){"use strict";t.exports=function(e,t,r,n){var s,o,i,l=e.bMarks[t],a=e.eMarks[t];if(l+=e.tShift[t],l>a)return!1;if(s=e.src.charCodeAt(l++),42!==s&&45!==s&&95!==s)return!1;for(o=1;a>l;){if(i=e.src.charCodeAt(l++),i!==s&&32!==i)return!1;i===s&&o++}return 3>o?!1:n?!0:(e.line=t+1,e.tokens.push({type:"hr",lines:[t,e.line],level:e.level}),!0)}},{}],28:[function(e,t){"use strict";function r(e){var t=32|e;return t>=97&&122>=t}var n=e("../common/html_blocks"),s=/^<([a-zA-Z]{1,15})[\s\/>]/,o=/^<\/([a-zA-Z]{1,15})[\s>]/;t.exports=function(e,t,i,l){var a,c,u,p=e.bMarks[t],h=e.eMarks[t],f=e.tShift[t];if(p+=f,!e.options.html)return!1;if(f>3||p+2>=h)return!1;if(60!==e.src.charCodeAt(p))return!1;if(a=e.src.charCodeAt(p+1),33===a||63===a){if(l)return!0}else{if(47!==a&&!r(a))return!1;if(47===a){if(c=e.src.slice(p,h).match(o),!c)return!1}else if(c=e.src.slice(p,h).match(s),!c)return!1;if(n[c[1].toLowerCase()]!==!0)return!1;if(l)return!0}for(u=t+1;u<e.lineMax&&!e.isEmpty(u);)u++;return e.line=u,e.tokens.push({type:"htmlblock",level:e.level,lines:[t,e.line],content:e.getLines(t,u,0,!0)}),!0}},{"../common/html_blocks":2}],29:[function(e,t){"use strict";t.exports=function(e,t,r){var n,s,o,i=t+1;return i>=r?!1:e.tShift[i]<e.blkIndent?!1:e.tShift[i]-e.blkIndent>3?!1:(s=e.bMarks[i]+e.tShift[i],o=e.eMarks[i],s>=o?!1:(n=e.src.charCodeAt(s),45!==n&&61!==n?!1:(s=e.skipChars(s,n),s=e.skipSpaces(s),o>s?!1:(s=e.bMarks[t]+e.tShift[t],e.line=i+1,e.tokens.push({type:"heading_open",hLevel:61===n?1:2,lines:[t,e.line],level:e.level}),e.tokens.push({type:"inline",content:e.src.slice(s,e.eMarks[t]).trim(),level:e.level+1,lines:[t,e.line-1],children:[]}),e.tokens.push({type:"heading_close",hLevel:61===n?1:2,level:e.level}),!0))))}},{}],30:[function(e,t){"use strict";function r(e,t){var r,n,s;return n=e.bMarks[t]+e.tShift[t],s=e.eMarks[t],n>=s?-1:(r=e.src.charCodeAt(n++),42!==r&&45!==r&&43!==r?-1:s>n&&32!==e.src.charCodeAt(n)?-1:n)}function n(e,t){var r,n=e.bMarks[t]+e.tShift[t],s=e.eMarks[t];if(n+1>=s)return-1;if(r=e.src.charCodeAt(n++),48>r||r>57)return-1;for(;;){if(n>=s)return-1;if(r=e.src.charCodeAt(n++),!(r>=48&&57>=r)){if(41===r||46===r)break;return-1}}return s>n&&32!==e.src.charCodeAt(n)?-1:n}function s(e,t){var r,n,s=e.level+2;for(r=t+2,n=e.tokens.length-2;n>r;r++)e.tokens[r].level===s&&"paragraph_open"===e.tokens[r].type&&(e.tokens[r+2].tight=!0,e.tokens[r].tight=!0,r+=2)}t.exports=function(e,t,o,i){var l,a,c,u,p,h,f,d,g,m,b,v,k,_,y,x,w,A,q,C,S,E,M=!0;if((d=n(e,t))>=0)k=!0;else{if(!((d=r(e,t))>=0))return!1;k=!1}if(e.level>=e.options.maxNesting)return!1;if(v=e.src.charCodeAt(d-1),i)return!0;for(y=e.tokens.length,k?(f=e.bMarks[t]+e.tShift[t],b=Number(e.src.substr(f,d-f-1)),e.tokens.push({type:"ordered_list_open",order:b,lines:w=[t,0],level:e.level++})):e.tokens.push({type:"bullet_list_open",lines:w=[t,0],level:e.level++}),l=t,x=!1,q=e.parser.ruler.getRules("list");!(!(o>l)||(_=e.skipSpaces(d),g=e.eMarks[l],m=_>=g?1:_-d,m>4&&(m=1),1>m&&(m=1),a=d-e.bMarks[l]+m,e.tokens.push({type:"list_item_open",lines:A=[t,0],level:e.level++}),u=e.blkIndent,p=e.tight,c=e.tShift[t],h=e.parentType,e.tShift[t]=_-e.bMarks[t],e.blkIndent=a,e.tight=!0,e.parentType="list",e.parser.tokenize(e,t,o,!0),(!e.tight||x)&&(M=!1),x=e.line-t>1&&e.isEmpty(e.line-1),e.blkIndent=u,e.tShift[t]=c,e.tight=p,e.parentType=h,e.tokens.push({type:"list_item_close",level:--e.level}),l=t=e.line,A[1]=l,_=e.bMarks[t],l>=o)||e.isEmpty(l)||e.tShift[l]<e.blkIndent);){for(E=!1,C=0,S=q.length;S>C;C++)if(q[C](e,l,o,!0)){E=!0;break}if(E)break;if(k){if(d=n(e,l),0>d)break}else if(d=r(e,l),0>d)break;if(v!==e.src.charCodeAt(d-1))break}return e.tokens.push({type:k?"ordered_list_close":"bullet_list_close",level:--e.level}),w[1]=l,e.line=l,M&&s(e,y),!0}},{}],31:[function(e,t){"use strict";t.exports=function(e,t){var r,n,s,o,i,l,a=t+1;if(r=e.lineMax,r>a&&!e.isEmpty(a))for(l=e.parser.ruler.getRules("paragraph");r>a&&!e.isEmpty(a);a++)if(!(e.tShift[a]-e.blkIndent>3)){for(s=!1,o=0,i=l.length;i>o;o++)if(l[o](e,a,r,!0)){s=!0;break}if(s)break}return n=e.getLines(t,a,e.blkIndent,!1).trim(),e.line=a,n.length&&(e.tokens.push({type:"paragraph_open",tight:!1,lines:[t,e.line],level:e.level}),e.tokens.push({type:"inline",content:n,level:e.level+1,lines:[t,e.line],children:[]}),e.tokens.push({type:"paragraph_close",tight:!1,level:e.level})),!0}},{}],32:[function(e,t){"use strict";function r(e,t,r,n,s){var o,i,l,a,c,u,p;for(this.src=e,this.parser=t,this.options=r,this.env=n,this.tokens=s,this.bMarks=[],this.eMarks=[],this.tShift=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.parentType="root",this.ddIndent=-1,this.level=0,this.result="",i=this.src,u=0,p=!1,l=a=u=0,c=i.length;c>a;a++){if(o=i.charCodeAt(a),!p){if(32===o){u++;continue}p=!0}(10===o||a===c-1)&&(10!==o&&a++,this.bMarks.push(l),this.eMarks.push(a),this.tShift.push(u),p=!1,u=0,l=a+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.lineMax=this.bMarks.length-1}r.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},r.prototype.skipEmptyLines=function(e){for(var t=this.lineMax;t>e&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},r.prototype.skipSpaces=function(e){for(var t=this.src.length;t>e&&32===this.src.charCodeAt(e);e++);return e},r.prototype.skipChars=function(e,t){for(var r=this.src.length;r>e&&this.src.charCodeAt(e)===t;e++);return e},r.prototype.skipCharsBack=function(e,t,r){if(r>=e)return e;for(;e>r;)if(t!==this.src.charCodeAt(--e))return e+1;return e},r.prototype.getLines=function(e,t,r,n){var s,o,i,l,a,c=e;if(e>=t)return"";if(c+1===t)return o=this.bMarks[c]+Math.min(this.tShift[c],r),i=n?this.eMarks[c]+1:this.eMarks[c],this.src.slice(o,i);for(l=new Array(t-e),s=0;t>c;c++,s++)a=this.tShift[c],a>r&&(a=r),0>a&&(a=0),o=this.bMarks[c]+a,i=t>c+1||n?this.eMarks[c]+1:this.eMarks[c],l[s]=this.src.slice(o,i);return l.join("")},t.exports=r},{}],33:[function(e,t){"use strict";function r(e,t){var r=e.bMarks[t]+e.blkIndent,n=e.eMarks[t];return e.src.substr(r,n-r)}t.exports=function(e,t,n,s){var o,i,l,a,c,u,p,h,f,d,g;if(t+2>n)return!1;if(c=t+1,e.tShift[c]<e.blkIndent)return!1;if(l=e.bMarks[c]+e.tShift[c],l>=e.eMarks[c])return!1;if(o=e.src.charCodeAt(l),124!==o&&45!==o&&58!==o)return!1;if(i=r(e,t+1),!/^[-:| ]+$/.test(i))return!1;if(u=i.split("|"),2>=u)return!1;for(h=[],a=0;a<u.length;a++){if(f=u[a].trim(),!f){if(0===a||a===u.length-1)continue;return!1}if(!/^:?-+:?$/.test(f))return!1;h.push(58===f.charCodeAt(f.length-1)?58===f.charCodeAt(0)?"center":"right":58===f.charCodeAt(0)?"left":"")}if(i=r(e,t).trim(),-1===i.indexOf("|"))return!1;if(u=i.replace(/^\||\|$/g,"").split("|"),h.length!==u.length)return!1;if(s)return!0;for(e.tokens.push({type:"table_open",lines:d=[t,0],level:e.level++}),e.tokens.push({type:"thead_open",lines:[t,t+1],level:e.level++}),e.tokens.push({type:"tr_open",lines:[t,t+1],level:e.level++}),a=0;a<u.length;a++)e.tokens.push({type:"th_open",align:h[a],lines:[t,t+1],level:e.level++}),e.tokens.push({type:"inline",content:u[a].trim(),lines:[t,t+1],level:e.level,children:[]}),e.tokens.push({type:"th_close",level:--e.level});for(e.tokens.push({type:"tr_close",level:--e.level}),e.tokens.push({type:"thead_close",level:--e.level}),e.tokens.push({type:"tbody_open",lines:g=[t+2,0],level:e.level++}),c=t+2;n>c&&!(e.tShift[c]<e.blkIndent)&&(i=r(e,c).trim(),-1!==i.indexOf("|"));c++){for(u=i.replace(/^\||\|$/g,"").split("|"),e.tokens.push({type:"tr_open",level:e.level++}),a=0;a<u.length;a++)e.tokens.push({type:"td_open",align:h[a],level:e.level++}),p=u[a].substring(124===u[a].charCodeAt(0)?1:0,124===u[a].charCodeAt(u[a].length-1)?u[a].length-1:u[a].length).trim(),e.tokens.push({type:"inline",content:p,level:e.level,children:[]}),e.tokens.push({type:"td_close",level:--e.level});e.tokens.push({type:"tr_close",level:--e.level})}return e.tokens.push({type:"tbody_close",level:--e.level}),e.tokens.push({type:"table_close",level:--e.level}),d[1]=g[1]=c,e.line=c,!0}},{}],34:[function(e,t){"use strict";function r(e,t,r,o){var i,l,a,c,u,p;if(42!==e.charCodeAt(0))return-1;if(91!==e.charCodeAt(1))return-1;if(-1===e.indexOf("]:"))return-1;if(i=new n(e,t,r,o,[]),l=s(i,1),0>l||58!==e.charCodeAt(l+1))return-1;for(c=i.posMax,a=l+2;c>a&&10!==i.src.charCodeAt(a);a++);return u=e.slice(2,l),p=e.slice(l+2,a).trim(),0===p.length?-1:(o.abbreviations||(o.abbreviations={}),"undefined"==typeof o.abbreviations[":"+u]&&(o.abbreviations[":"+u]=p),a)}var n=e("../rules_inline/state_inline"),s=e("../helpers/parse_link_label");t.exports=function(e){var t,n,s,o,i=e.tokens;if(!e.inlineMode)for(t=1,n=i.length-1;n>t;t++)if("paragraph_open"===i[t-1].type&&"inline"===i[t].type&&"paragraph_close"===i[t+1].type){for(s=i[t].content;s.length&&(o=r(s,e.inline,e.options,e.env),!(0>o));)s=s.slice(o).trim();i[t].content=s,s.length||(i[t-1].tight=!0,i[t+1].tight=!0)}}},{"../helpers/parse_link_label":12,"../rules_inline/state_inline":56}],35:[function(e,t){"use strict";function r(e){return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1")}var n=" \n()[]'\".,!?-";t.exports=function(e){var t,s,o,i,l,a,c,u,p,h,f,d,g=e.tokens;if(e.env.abbreviations)for(e.env.abbrRegExp||(d="(^|["+n.split("").map(r).join("")+"])("+Object.keys(e.env.abbreviations).map(function(e){return e.substr(1)}).sort(function(e,t){return t.length-e.length}).map(r).join("|")+")($|["+n.split("").map(r).join("")+"])",e.env.abbrRegExp=new RegExp(d,"g")),h=e.env.abbrRegExp,s=0,o=g.length;o>s;s++)if("inline"===g[s].type)for(i=g[s].children,t=i.length-1;t>=0;t--)if(l=i[t],"text"===l.type){for(u=0,a=l.content,h.lastIndex=0,p=l.level,c=[];f=h.exec(a);)h.lastIndex>u&&c.push({type:"text",content:a.slice(u,f.index+f[1].length),level:p}),c.push({type:"abbr_open",title:e.env.abbreviations[":"+f[2]],level:p++}),c.push({type:"text",content:f[2],level:p}),c.push({type:"abbr_close",level:--p}),u=h.lastIndex-f[3].length;c.length&&(u<a.length&&c.push({type:"text",content:a.slice(u),level:p}),g[s].children=i=[].concat(i.slice(0,t),c,i.slice(t+1)))}}},{}],36:[function(e,t){"use strict";t.exports=function(e){e.inlineMode?e.tokens.push({type:"inline",content:e.src.replace(/\n/g," ").trim(),level:0,lines:[0,1],children:[]}):e.block.parse(e.src,e.options,e.env,e.tokens)}},{}],37:[function(e,t){"use strict";t.exports=function(e){var t,r,n,s,o,i,l,a,c,u=0,p=!1,h={};if(e.env.footnotes&&(e.tokens=e.tokens.filter(function(e){return"footnote_reference_open"===e.type?(p=!0,a=[],c=e.label,!1):"footnote_reference_close"===e.type?(p=!1,h[":"+c]=a,!1):(p&&a.push(e),!p)}),e.env.footnotes.list)){for(i=e.env.footnotes.list,e.tokens.push({type:"footnote_block_open",level:u++}),t=0,r=i.length;r>t;t++){for(e.tokens.push({type:"footnote_open",id:t,level:u++}),i[t].tokens?(l=[],l.push({type:"paragraph_open",tight:!1,level:u++}),l.push({type:"inline",content:"",level:u,children:i[t].tokens}),l.push({type:"paragraph_close",tight:!1,level:--u})):i[t].label&&(l=h[":"+i[t].label]),e.tokens=e.tokens.concat(l),o="paragraph_close"===e.tokens[e.tokens.length-1].type?e.tokens.pop():null,s=i[t].count>0?i[t].count:1,n=0;s>n;n++)e.tokens.push({type:"footnote_anchor",id:t,subId:n,level:u});o&&e.tokens.push(o),e.tokens.push({type:"footnote_close",level:--u})}e.tokens.push({type:"footnote_block_close",level:--u})}}},{}],38:[function(e,t){"use strict";t.exports=function(e){var t,r,n,s=e.tokens;for(r=0,n=s.length;n>r;r++)t=s[r],"inline"===t.type&&e.inline.parse(t.content,e.options,e.env,t.children)}},{}],39:[function(e,t){"use strict";function r(e){return/^<a[>\s]/i.test(e)}function n(e){return/^<\/a\s*>/i.test(e)}function s(){var e=[],t=new o({stripPrefix:!1,url:!0,email:!0,twitter:!1,replaceFn:function(t,r){switch(r.getType()){case"url":e.push({text:r.matchedText,url:r.getUrl()});break;case"email":e.push({text:r.matchedText,url:"mailto:"+r.getEmail().replace(/^mailto:/i,"")})}return!1}});return{links:e,autolinker:t}}var o=e("autolinker"),i=/www|@|\:\/\//;t.exports=function(e){var t,o,l,a,c,u,p,h,f,d,g,m,b,v=e.tokens,k=null;if(e.options.linkify)for(o=0,l=v.length;l>o;o++)if("inline"===v[o].type)for(a=v[o].children,
g=0,t=a.length-1;t>=0;t--)if(c=a[t],"link_close"!==c.type){if("htmltag"===c.type&&(r(c.content)&&g>0&&g--,n(c.content)&&g++),!(g>0)&&"text"===c.type&&i.test(c.content)){if(k||(k=s(),m=k.links,b=k.autolinker),u=c.content,m.length=0,b.link(u),!m.length)continue;for(p=[],d=c.level,h=0;h<m.length;h++)e.inline.validateLink(m[h].url)&&(f=u.indexOf(m[h].text),f&&(d=d,p.push({type:"text",content:u.slice(0,f),level:d})),p.push({type:"link_open",href:m[h].url,title:"",level:d++}),p.push({type:"text",content:m[h].text,level:d}),p.push({type:"link_close",level:--d}),u=u.slice(f+m[h].text.length));u.length&&p.push({type:"text",content:u,level:d}),v[o].children=a=[].concat(a.slice(0,t),p,a.slice(t+1))}}else for(t--;a[t].level!==c.level&&"link_open"!==a[t].type;)t--}},{autolinker:60}],40:[function(e,t){"use strict";function r(e,t,r,a){var c,u,p,h,f,d,g,m,b;if(91!==e.charCodeAt(0))return-1;if(-1===e.indexOf("]:"))return-1;if(c=new n(e,t,r,a,[]),u=s(c,0),0>u||58!==e.charCodeAt(u+1))return-1;for(h=c.posMax,p=u+2;h>p&&(f=c.src.charCodeAt(p),32===f||10===f);p++);if(!o(c,p))return-1;for(g=c.linkContent,p=c.pos,d=p,p+=1;h>p&&(f=c.src.charCodeAt(p),32===f||10===f);p++);for(h>p&&d!==p&&i(c,p)?(m=c.linkContent,p=c.pos):(m="",p=d);h>p&&32===c.src.charCodeAt(p);)p++;return h>p&&10!==c.src.charCodeAt(p)?-1:(b=l(e.slice(1,u)),"undefined"==typeof a.references[b]&&(a.references[b]={title:m,href:g}),p)}var n=e("../rules_inline/state_inline"),s=e("../helpers/parse_link_label"),o=e("../helpers/parse_link_destination"),i=e("../helpers/parse_link_title"),l=e("../helpers/normalize_reference");t.exports=function(e){var t,n,s,o,i=e.tokens;if(e.env.references=e.env.references||{},!e.inlineMode)for(t=1,n=i.length-1;n>t;t++)if("inline"===i[t].type&&"paragraph_open"===i[t-1].type&&"paragraph_close"===i[t+1].type){for(s=i[t].content;s.length&&(o=r(s,e.inline,e.options,e.env),!(0>o));)s=s.slice(o).trim();i[t].content=s,s.length||(i[t-1].tight=!0,i[t+1].tight=!0)}}},{"../helpers/normalize_reference":10,"../helpers/parse_link_destination":11,"../helpers/parse_link_label":12,"../helpers/parse_link_title":13,"../rules_inline/state_inline":56}],41:[function(e,t){"use strict";function r(e){return e.indexOf("(")<0?e:e.replace(s,function(e,t){return o[t.toLowerCase()]})}var n=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,s=/\((c|tm|r|p)\)/gi,o={c:"©",r:"®",p:"§",tm:"™"};t.exports=function(e){var t,s,o,i,l;if(e.options.typographer)for(l=e.tokens.length-1;l>=0;l--)if("inline"===e.tokens[l].type)for(i=e.tokens[l].children,t=i.length-1;t>=0;t--)s=i[t],"text"===s.type&&(o=s.content,o=r(o),n.test(o)&&(o=o.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---([^-]|$)/gm,"$1—$2").replace(/(^|\s)--(\s|$)/gm,"$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/gm,"$1–$2")),s.content=o)}},{}],42:[function(e,t){"use strict";function r(e,t){return 0>t||t>=e.length?!1:!i.test(e[t])}function n(e,t,r){return e.substr(0,t)+r+e.substr(t+1)}var s=/['"]/,o=/['"]/g,i=/[-\s()\[\]]/,l="’";t.exports=function(e){var t,i,a,c,u,p,h,f,d,g,m,b,v,k,_,y,x;if(e.options.typographer)for(x=[],_=e.tokens.length-1;_>=0;_--)if("inline"===e.tokens[_].type)for(y=e.tokens[_].children,x.length=0,t=0;t<y.length;t++)if(i=y[t],"text"===i.type&&!s.test(i.text)){for(h=y[t].level,v=x.length-1;v>=0&&!(x[v].level<=h);v--);x.length=v+1,a=i.content,u=0,p=a.length;e:for(;p>u&&(o.lastIndex=u,c=o.exec(a));)if(f=!r(a,c.index-1),u=c.index+1,k="'"===c[0],d=!r(a,u),d||f){if(m=!d,b=!f)for(v=x.length-1;v>=0&&(g=x[v],!(x[v].level<h));v--)if(g.single===k&&x[v].level===h){g=x[v],k?(y[g.token].content=n(y[g.token].content,g.pos,e.options.quotes[2]),i.content=n(i.content,c.index,e.options.quotes[3])):(y[g.token].content=n(y[g.token].content,g.pos,e.options.quotes[0]),i.content=n(i.content,c.index,e.options.quotes[1])),x.length=v;continue e}m?x.push({token:t,pos:c.index,single:k,level:h}):b&&k&&(i.content=n(i.content,c.index,l))}else k&&(i.content=n(i.content,c.index,l))}}},{}],43:[function(e,t){"use strict";var r=e("../common/url_schemas"),n=e("../helpers/normalize_link"),s=/^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,o=/^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;t.exports=function(e,t){var i,l,a,c,u,p=e.pos;return 60!==e.src.charCodeAt(p)?!1:(i=e.src.slice(p),i.indexOf(">")<0?!1:(l=i.match(o))?r.indexOf(l[1].toLowerCase())<0?!1:(c=l[0].slice(1,-1),u=n(c),e.parser.validateLink(c)?(t||(e.push({type:"link_open",href:u,level:e.level}),e.push({type:"text",content:c,level:e.level+1}),e.push({type:"link_close",level:e.level})),e.pos+=l[0].length,!0):!1):(a=i.match(s),a?(c=a[0].slice(1,-1),u=n("mailto:"+c),e.parser.validateLink(u)?(t||(e.push({type:"link_open",href:u,level:e.level}),e.push({type:"text",content:c,level:e.level+1}),e.push({type:"link_close",level:e.level})),e.pos+=a[0].length,!0):!1):!1))}},{"../common/url_schemas":4,"../helpers/normalize_link":9}],44:[function(e,t){"use strict";t.exports=function(e,t){var r,n,s,o,i,l=e.pos,a=e.src.charCodeAt(l);if(96!==a)return!1;for(r=l,l++,n=e.posMax;n>l&&96===e.src.charCodeAt(l);)l++;for(s=e.src.slice(r,l),o=i=l;-1!==(o=e.src.indexOf("`",i));){for(i=o+1;n>i&&96===e.src.charCodeAt(i);)i++;if(i-o===s.length)return t||e.push({type:"code",content:e.src.slice(l,o).replace(/[ \n]+/g," ").trim(),block:!1,level:e.level}),e.pos=i,!0}return t||(e.pending+=s),e.pos+=s.length,!0}},{}],45:[function(e,t){"use strict";t.exports=function(e,t){var r,n,s,o,i,l=e.posMax,a=e.pos;if(126!==e.src.charCodeAt(a))return!1;if(t)return!1;if(a+4>=l)return!1;if(126!==e.src.charCodeAt(a+1))return!1;if(e.level>=e.options.maxNesting)return!1;if(o=a>0?e.src.charCodeAt(a-1):-1,i=e.src.charCodeAt(a+2),126===o)return!1;if(126===i)return!1;if(32===i||10===i)return!1;for(n=a+2;l>n&&126===e.src.charCodeAt(n);)n++;if(n>a+3)return e.pos+=n-a,t||(e.pending+=e.src.slice(a,n)),!0;for(e.pos=a+2,s=1;e.pos+1<l;){if(126===e.src.charCodeAt(e.pos)&&126===e.src.charCodeAt(e.pos+1)&&(o=e.src.charCodeAt(e.pos-1),i=e.pos+2<l?e.src.charCodeAt(e.pos+2):-1,126!==i&&126!==o&&(32!==o&&10!==o?s--:32!==i&&10!==i&&s++,0>=s))){r=!0;break}e.parser.skipToken(e)}return r?(e.posMax=e.pos,e.pos=a+2,t||(e.push({type:"del_open",level:e.level++}),e.parser.tokenize(e),e.push({type:"del_close",level:--e.level})),e.pos=e.posMax+2,e.posMax=l,!0):(e.pos=a,!1)}},{}],46:[function(e,t){"use strict";function r(e){return e>=48&&57>=e||e>=65&&90>=e||e>=97&&122>=e}function n(e,t){var n,s,o,i=t,l=!0,a=!0,c=e.posMax,u=e.src.charCodeAt(t);for(n=t>0?e.src.charCodeAt(t-1):-1;c>i&&e.src.charCodeAt(i)===u;)i++;return i>=c&&(l=!1),o=i-t,o>=4?l=a=!1:(s=c>i?e.src.charCodeAt(i):-1,(32===s||10===s)&&(l=!1),(32===n||10===n)&&(a=!1),95===u&&(r(n)&&(l=!1),r(s)&&(a=!1))),{can_open:l,can_close:a,delims:o}}t.exports=function(e,t){var r,s,o,i,l,a,c,u=e.posMax,p=e.pos,h=e.src.charCodeAt(p);if(95!==h&&42!==h)return!1;if(t)return!1;if(c=n(e,p),r=c.delims,!c.can_open)return e.pos+=r,t||(e.pending+=e.src.slice(p,e.pos)),!0;if(e.level>=e.options.maxNesting)return!1;for(e.pos=p+r,a=[r];e.pos<u;)if(e.src.charCodeAt(e.pos)!==h)e.parser.skipToken(e);else{if(c=n(e,e.pos),s=c.delims,c.can_close){for(i=a.pop(),l=s;i!==l;){if(i>l){a.push(i-l);break}if(l-=i,0===a.length)break;e.pos+=i,i=a.pop()}if(0===a.length){r=i,o=!0;break}e.pos+=s;continue}c.can_open&&a.push(s),e.pos+=s}return o?(e.posMax=e.pos,e.pos=p+r,t||((2===r||3===r)&&e.push({type:"strong_open",level:e.level++}),(1===r||3===r)&&e.push({type:"em_open",level:e.level++}),e.parser.tokenize(e),(1===r||3===r)&&e.push({type:"em_close",level:--e.level}),(2===r||3===r)&&e.push({type:"strong_close",level:--e.level})),e.pos=e.posMax+r,e.posMax=u,!0):(e.pos=p,!1)}},{}],47:[function(e,t){"use strict";var r=e("../common/entities"),n=e("../common/utils").has,s=e("../common/utils").isValidEntityCode,o=e("../common/utils").fromCodePoint,i=/^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i,l=/^&([a-z][a-z0-9]{1,31});/i;t.exports=function(e,t){var a,c,u,p=e.pos,h=e.posMax;if(38!==e.src.charCodeAt(p))return!1;if(h>p+1)if(a=e.src.charCodeAt(p+1),35===a){if(u=e.src.slice(p).match(i))return t||(c="x"===u[1][0].toLowerCase()?parseInt(u[1].slice(1),16):parseInt(u[1],10),e.pending+=o(s(c)?c:65533)),e.pos+=u[0].length,!0}else if(u=e.src.slice(p).match(l),u&&n(r,u[1]))return t||(e.pending+=r[u[1]]),e.pos+=u[0].length,!0;return t||(e.pending+="&"),e.pos++,!0}},{"../common/entities":1,"../common/utils":5}],48:[function(e,t){"use strict";for(var r=[],n=0;256>n;n++)r.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){r[e.charCodeAt(0)]=1}),t.exports=function(e,t){var n,s=e.pos,o=e.posMax;if(92!==e.src.charCodeAt(s))return!1;if(s++,o>s){if(n=e.src.charCodeAt(s),256>n&&0!==r[n])return t||(e.pending+=e.src[s]),e.pos+=2,!0;if(10===n){for(t||e.push({type:"hardbreak",level:e.level}),s++;o>s&&32===e.src.charCodeAt(s);)s++;return e.pos=s,!0}}return t||(e.pending+="\\"),e.pos++,!0}},{}],49:[function(e,t){"use strict";var r=e("../helpers/parse_link_label");t.exports=function(e,t){var n,s,o,i,l=e.posMax,a=e.pos;return a+2>=l?!1:94!==e.src.charCodeAt(a)?!1:91!==e.src.charCodeAt(a+1)?!1:e.level>=e.options.maxNesting?!1:(n=a+2,s=r(e,a+1),0>s?!1:(t||(e.env.footnotes||(e.env.footnotes={}),e.env.footnotes.list||(e.env.footnotes.list=[]),o=e.env.footnotes.list.length,e.pos=n,e.posMax=s,e.push({type:"footnote_ref",id:o,level:e.level}),e.linkLevel++,i=e.tokens.length,e.parser.tokenize(e),e.env.footnotes.list[o]={tokens:e.tokens.splice(i)},e.linkLevel--),e.pos=s+1,e.posMax=l,!0))}},{"../helpers/parse_link_label":12}],50:[function(e,t){"use strict";t.exports=function(e,t){var r,n,s,o,i=e.posMax,l=e.pos;if(l+3>i)return!1;if(!e.env.footnotes||!e.env.footnotes.refs)return!1;if(91!==e.src.charCodeAt(l))return!1;if(94!==e.src.charCodeAt(l+1))return!1;if(e.level>=e.options.maxNesting)return!1;for(n=l+2;i>n;n++){if(32===e.src.charCodeAt(n))return!1;if(10===e.src.charCodeAt(n))return!1;if(93===e.src.charCodeAt(n))break}return n===l+2?!1:n>=i?!1:(n++,r=e.src.slice(l+2,n-1),"undefined"==typeof e.env.footnotes.refs[":"+r]?!1:(t||(e.env.footnotes.list||(e.env.footnotes.list=[]),e.env.footnotes.refs[":"+r]<0?(s=e.env.footnotes.list.length,e.env.footnotes.list[s]={label:r,count:0},e.env.footnotes.refs[":"+r]=s):s=e.env.footnotes.refs[":"+r],o=e.env.footnotes.list[s].count,e.env.footnotes.list[s].count++,e.push({type:"footnote_ref",id:s,subId:o,level:e.level})),e.pos=n,e.posMax=i,!0))}},{}],51:[function(e,t){"use strict";function r(e){var t=32|e;return t>=97&&122>=t}var n=e("../common/html_re").HTML_TAG_RE;t.exports=function(e,t){var s,o,i,l=e.pos;return e.options.html?(i=e.posMax,60!==e.src.charCodeAt(l)||l+2>=i?!1:(s=e.src.charCodeAt(l+1),(33===s||63===s||47===s||r(s))&&(o=e.src.slice(l).match(n))?(t||e.push({type:"htmltag",content:e.src.slice(l,l+o[0].length),level:e.level}),e.pos+=o[0].length,!0):!1)):!1}},{"../common/html_re":3}],52:[function(e,t){"use strict";t.exports=function(e,t){var r,n,s,o,i,l=e.posMax,a=e.pos;if(43!==e.src.charCodeAt(a))return!1;if(t)return!1;if(a+4>=l)return!1;if(43!==e.src.charCodeAt(a+1))return!1;if(e.level>=e.options.maxNesting)return!1;if(o=a>0?e.src.charCodeAt(a-1):-1,i=e.src.charCodeAt(a+2),43===o)return!1;if(43===i)return!1;if(32===i||10===i)return!1;for(n=a+2;l>n&&43===e.src.charCodeAt(n);)n++;if(n!==a+2)return e.pos+=n-a,t||(e.pending+=e.src.slice(a,n)),!0;for(e.pos=a+2,s=1;e.pos+1<l;){if(43===e.src.charCodeAt(e.pos)&&43===e.src.charCodeAt(e.pos+1)&&(o=e.src.charCodeAt(e.pos-1),i=e.pos+2<l?e.src.charCodeAt(e.pos+2):-1,43!==i&&43!==o&&(32!==o&&10!==o?s--:32!==i&&10!==i&&s++,0>=s))){r=!0;break}e.parser.skipToken(e)}return r?(e.posMax=e.pos,e.pos=a+2,t||(e.push({type:"ins_open",level:e.level++}),e.parser.tokenize(e),e.push({type:"ins_close",level:--e.level})),e.pos=e.posMax+2,e.posMax=l,!0):(e.pos=a,!1)}},{}],53:[function(e,t){"use strict";var r=e("../helpers/parse_link_label"),n=e("../helpers/parse_link_destination"),s=e("../helpers/parse_link_title"),o=e("../helpers/normalize_reference");t.exports=function(e,t){var i,l,a,c,u,p,h,f,d=!1,g=e.pos,m=e.posMax,b=e.pos,v=e.src.charCodeAt(b);if(33===v&&(d=!0,v=e.src.charCodeAt(++b)),91!==v)return!1;if(e.level>=e.options.maxNesting)return!1;if(i=b+1,l=r(e,b),0>l)return!1;if(p=l+1,m>p&&40===e.src.charCodeAt(p)){for(p++;m>p&&(f=e.src.charCodeAt(p),32===f||10===f);p++);if(p>=m)return!1;for(b=p,n(e,p)?(c=e.linkContent,p=e.pos):c="",b=p;m>p&&(f=e.src.charCodeAt(p),32===f||10===f);p++);if(m>p&&b!==p&&s(e,p))for(u=e.linkContent,p=e.pos;m>p&&(f=e.src.charCodeAt(p),32===f||10===f);p++);else u="";if(p>=m||41!==e.src.charCodeAt(p))return e.pos=g,!1;p++}else{if(e.linkLevel>0)return!1;for(;m>p&&(f=e.src.charCodeAt(p),32===f||10===f);p++);if(m>p&&91===e.src.charCodeAt(p)&&(b=p+1,p=r(e,p),p>=0?a=e.src.slice(b,p++):p=b-1),a||("undefined"==typeof a&&(p=l+1),a=e.src.slice(i,l)),h=e.env.references[o(a)],!h)return e.pos=g,!1;c=h.href,u=h.title}return t||(e.pos=i,e.posMax=l,d?e.push({type:"image",src:c,title:u,alt:e.src.substr(i,l-i),level:e.level}):(e.push({type:"link_open",href:c,title:u,level:e.level++}),e.linkLevel++,e.parser.tokenize(e),e.linkLevel--,e.push({type:"link_close",level:--e.level}))),e.pos=p,e.posMax=m,!0}},{"../helpers/normalize_reference":10,"../helpers/parse_link_destination":11,"../helpers/parse_link_label":12,"../helpers/parse_link_title":13}],54:[function(e,t){"use strict";t.exports=function(e,t){var r,n,s,o,i,l=e.posMax,a=e.pos;if(61!==e.src.charCodeAt(a))return!1;if(t)return!1;if(a+4>=l)return!1;if(61!==e.src.charCodeAt(a+1))return!1;if(e.level>=e.options.maxNesting)return!1;if(o=a>0?e.src.charCodeAt(a-1):-1,i=e.src.charCodeAt(a+2),61===o)return!1;if(61===i)return!1;if(32===i||10===i)return!1;for(n=a+2;l>n&&61===e.src.charCodeAt(n);)n++;if(n!==a+2)return e.pos+=n-a,t||(e.pending+=e.src.slice(a,n)),!0;for(e.pos=a+2,s=1;e.pos+1<l;){if(61===e.src.charCodeAt(e.pos)&&61===e.src.charCodeAt(e.pos+1)&&(o=e.src.charCodeAt(e.pos-1),i=e.pos+2<l?e.src.charCodeAt(e.pos+2):-1,61!==i&&61!==o&&(32!==o&&10!==o?s--:32!==i&&10!==i&&s++,0>=s))){r=!0;break}e.parser.skipToken(e)}return r?(e.posMax=e.pos,e.pos=a+2,t||(e.push({type:"mark_open",level:e.level++}),e.parser.tokenize(e),e.push({type:"mark_close",level:--e.level})),e.pos=e.posMax+2,e.posMax=l,!0):(e.pos=a,!1)}},{}],55:[function(e,t){"use strict";t.exports=function(e,t){var r,n,s=e.pos;if(10!==e.src.charCodeAt(s))return!1;if(r=e.pending.length-1,n=e.posMax,!t)if(r>=0&&32===e.pending.charCodeAt(r))if(r>=1&&32===e.pending.charCodeAt(r-1)){for(var o=r-2;o>=0;o--)if(32!==e.pending.charCodeAt(o)){e.pending=e.pending.substring(0,o+1);break}e.push({type:"hardbreak",level:e.level})}else e.pending=e.pending.slice(0,-1),e.push({type:"softbreak",level:e.level});else e.push({type:"softbreak",level:e.level});for(s++;n>s&&32===e.src.charCodeAt(s);)s++;return e.pos=s,!0}},{}],56:[function(e,t){"use strict";function r(e,t,r,n,s){this.src=e,this.env=n,this.options=r,this.parser=t,this.tokens=s,this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache=[],this.isInLabel=!1,this.linkLevel=0,this.linkContent="",this.labelUnmatchedScopes=0}r.prototype.pushPending=function(){this.tokens.push({type:"text",content:this.pending,level:this.pendingLevel}),this.pending=""},r.prototype.push=function(e){this.pending&&this.pushPending(),this.tokens.push(e),this.pendingLevel=this.level},r.prototype.cacheSet=function(e,t){for(var r=this.cache.length;e>=r;r++)this.cache.push(0);this.cache[e]=t},r.prototype.cacheGet=function(e){return e<this.cache.length?this.cache[e]:0},t.exports=r},{}],57:[function(e,t){"use strict";var r=/\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;t.exports=function(e,t){var n,s,o=e.posMax,i=e.pos;if(126!==e.src.charCodeAt(i))return!1;if(t)return!1;if(i+2>=o)return!1;if(e.level>=e.options.maxNesting)return!1;for(e.pos=i+1;e.pos<o;){if(126===e.src.charCodeAt(e.pos)){n=!0;break}e.parser.skipToken(e)}return n&&i+1!==e.pos?(s=e.src.slice(i+1,e.pos),s.match(/(^|[^\\])(\\\\)*\s/)?(e.pos=i,!1):(e.posMax=e.pos,e.pos=i+1,t||e.push({type:"sub",level:e.level,content:s.replace(r,"$1")}),e.pos=e.posMax+1,e.posMax=o,!0)):(e.pos=i,!1)}},{}],58:[function(e,t){"use strict";var r=/\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;t.exports=function(e,t){var n,s,o=e.posMax,i=e.pos;if(94!==e.src.charCodeAt(i))return!1;if(t)return!1;if(i+2>=o)return!1;if(e.level>=e.options.maxNesting)return!1;for(e.pos=i+1;e.pos<o;){if(94===e.src.charCodeAt(e.pos)){n=!0;break}e.parser.skipToken(e)}return n&&i+1!==e.pos?(s=e.src.slice(i+1,e.pos),s.match(/(^|[^\\])(\\\\)*\s/)?(e.pos=i,!1):(e.posMax=e.pos,e.pos=i+1,t||e.push({type:"sup",level:e.level,content:s.replace(r,"$1")}),e.pos=e.posMax+1,e.posMax=o,!0)):(e.pos=i,!1)}},{}],59:[function(e,t){"use strict";function r(e){switch(e){case 10:case 92:case 96:case 42:case 95:case 94:case 91:case 93:case 33:case 38:case 60:case 62:case 123:case 125:case 36:case 37:case 64:case 126:case 43:case 61:case 58:return!0;default:return!1}}t.exports=function(e,t){for(var n=e.pos;n<e.posMax&&!r(e.src.charCodeAt(n));)n++;return n===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)}},{}],60:[function(t,r,n){!function(t,s){"function"==typeof e&&e.amd?e([],function(){return t.Autolinker=s()}):"object"==typeof n?r.exports=s():t.Autolinker=s()}(this,function(){var e=function(t){e.Util.assign(this,t)};return e.prototype={constructor:e,urls:!0,email:!0,twitter:!0,newWindow:!0,stripPrefix:!0,truncate:void 0,className:"",htmlParser:void 0,matchParser:void 0,tagBuilder:void 0,link:function(e){for(var t=this.getHtmlParser(),r=t.parse(e),n=0,s=[],o=0,i=r.length;i>o;o++){var l=r[o],a=l.getType(),c=l.getText();if("element"===a)"a"===l.getTagName()&&(l.isClosing()?n=Math.max(n-1,0):n++),s.push(c);else if("entity"===a)s.push(c);else if(0===n){var u=this.linkifyStr(c);s.push(u)}else s.push(c)}return s.join("")},linkifyStr:function(e){return this.getMatchParser().replace(e,this.createMatchReturnVal,this)},createMatchReturnVal:function(t){var r;if(this.replaceFn&&(r=this.replaceFn.call(this,this,t)),"string"==typeof r)return r;if(r===!1)return t.getMatchedText();if(r instanceof e.HtmlTag)return r.toString();var n=this.getTagBuilder(),s=n.build(t);return s.toString()},getHtmlParser:function(){var t=this.htmlParser;return t||(t=this.htmlParser=new e.htmlParser.HtmlParser),t},getMatchParser:function(){var t=this.matchParser;return t||(t=this.matchParser=new e.matchParser.MatchParser({urls:this.urls,email:this.email,twitter:this.twitter,stripPrefix:this.stripPrefix})),t},getTagBuilder:function(){var t=this.tagBuilder;return t||(t=this.tagBuilder=new e.AnchorTagBuilder({newWindow:this.newWindow,truncate:this.truncate,className:this.className})),t}},e.link=function(t,r){var n=new e(r);return n.link(t)},e.match={},e.htmlParser={},e.matchParser={},e.Util={abstractMethod:function(){throw"abstract"},assign:function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e},extend:function(t,r){var n=t.prototype,s=function(){};s.prototype=n;var o;o=r.hasOwnProperty("constructor")?r.constructor:function(){n.constructor.apply(this,arguments)};var i=o.prototype=new s;return i.constructor=o,i.superclass=n,delete r.constructor,e.Util.assign(i,r),o},ellipsis:function(e,t,r){return e.length>t&&(r=null==r?"..":r,e=e.substring(0,t-r.length)+r),e},indexOf:function(e,t){if(Array.prototype.indexOf)return e.indexOf(t);for(var r=0,n=e.length;n>r;r++)if(e[r]===t)return r;return-1},splitAndCapture:function(e,t){if(!t.global)throw new Error("`splitRegex` must have the 'g' flag set");for(var r,n=[],s=0;r=t.exec(e);)n.push(e.substring(s,r.index)),n.push(r[0]),s=r.index+r[0].length;return n.push(e.substring(s)),n}},e.HtmlTag=e.Util.extend(Object,{whitespaceRegex:/\s+/,constructor:function(t){e.Util.assign(this,t),this.innerHtml=this.innerHtml||this.innerHTML},setTagName:function(e){return this.tagName=e,this},getTagName:function(){return this.tagName||""},setAttr:function(e,t){var r=this.getAttrs();return r[e]=t,this},getAttr:function(e){return this.getAttrs()[e]},setAttrs:function(t){var r=this.getAttrs();return e.Util.assign(r,t),this},getAttrs:function(){return this.attrs||(this.attrs={})},setClass:function(e){return this.setAttr("class",e)},addClass:function(t){for(var r,n=this.getClass(),s=this.whitespaceRegex,o=e.Util.indexOf,i=n?n.split(s):[],l=t.split(s);r=l.shift();)-1===o(i,r)&&i.push(r);return this.getAttrs()["class"]=i.join(" "),this},removeClass:function(t){for(var r,n=this.getClass(),s=this.whitespaceRegex,o=e.Util.indexOf,i=n?n.split(s):[],l=t.split(s);i.length&&(r=l.shift());){var a=o(i,r);-1!==a&&i.splice(a,1)}return this.getAttrs()["class"]=i.join(" "),this},getClass:function(){return this.getAttrs()["class"]||""},hasClass:function(e){return-1!==(" "+this.getClass()+" ").indexOf(" "+e+" ")},setInnerHtml:function(e){return this.innerHtml=e,this},getInnerHtml:function(){return this.innerHtml||""},toString:function(){var e=this.getTagName(),t=this.buildAttrsStr();return t=t?" "+t:"",["<",e,t,">",this.getInnerHtml(),"</",e,">"].join("")},buildAttrsStr:function(){if(!this.attrs)return"";var e=this.getAttrs(),t=[];for(var r in e)e.hasOwnProperty(r)&&t.push(r+'="'+e[r]+'"');return t.join(" ")}}),e.AnchorTagBuilder=e.Util.extend(Object,{constructor:function(t){e.Util.assign(this,t)},build:function(t){var r=new e.HtmlTag({tagName:"a",attrs:this.createAttrs(t.getType(),t.getAnchorHref()),innerHtml:this.processAnchorText(t.getAnchorText())});return r},createAttrs:function(e,t){var r={href:t},n=this.createCssClass(e);return n&&(r["class"]=n),this.newWindow&&(r.target="_blank"),r},createCssClass:function(e){var t=this.className;return t?t+" "+t+"-"+e:""},processAnchorText:function(e){return e=this.doTruncate(e)},doTruncate:function(t){return e.Util.ellipsis(t,this.truncate||Number.POSITIVE_INFINITY)}}),e.htmlParser.HtmlParser=e.Util.extend(Object,{htmlRegex:function(){var e=/[0-9a-zA-Z][0-9a-zA-Z:]*/,t=/[^\s\0"'>\/=\x01-\x1F\x7F]+/,r=/(?:"[^"]*?"|'[^']*?'|[^'"=<>`\s]+)/,n=t.source+"(?:\\s*=\\s*"+r.source+")?";return new RegExp(["(?:","<(!DOCTYPE)","(?:","\\s+","(?:",n,"|",r.source+")",")*",">",")","|","(?:","<(/)?","("+e.source+")","(?:","\\s+",n,")*","\\s*/?",">",")"].join(""),"gi")}(),htmlCharacterEntitiesRegex:/(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi,parse:function(e){for(var t,r,n=this.htmlRegex,s=0,o=[];null!==(t=n.exec(e));){var i=t[0],l=t[1]||t[3],a=!!t[2],c=e.substring(s,t.index);c&&(r=this.parseTextAndEntityNodes(c),o.push.apply(o,r)),o.push(this.createElementNode(i,l,a)),s=t.index+i.length}if(s<e.length){var u=e.substring(s);u&&(r=this.parseTextAndEntityNodes(u),o.push.apply(o,r))}return o},parseTextAndEntityNodes:function(t){for(var r=[],n=e.Util.splitAndCapture(t,this.htmlCharacterEntitiesRegex),s=0,o=n.length;o>s;s+=2){var i=n[s],l=n[s+1];i&&r.push(this.createTextNode(i)),l&&r.push(this.createEntityNode(l))}return r},createElementNode:function(t,r,n){return new e.htmlParser.ElementNode({text:t,tagName:r.toLowerCase(),closing:n})},createEntityNode:function(t){return new e.htmlParser.EntityNode({text:t})},createTextNode:function(t){return new e.htmlParser.TextNode({text:t})}}),e.htmlParser.HtmlNode=e.Util.extend(Object,{text:"",constructor:function(t){e.Util.assign(this,t)},getType:e.Util.abstractMethod,getText:function(){return this.text}}),e.htmlParser.ElementNode=e.Util.extend(e.htmlParser.HtmlNode,{tagName:"",closing:!1,getType:function(){return"element"},getTagName:function(){return this.tagName},isClosing:function(){return this.closing}}),e.htmlParser.EntityNode=e.Util.extend(e.htmlParser.HtmlNode,{getType:function(){return"entity"}}),e.htmlParser.TextNode=e.Util.extend(e.htmlParser.HtmlNode,{getType:function(){return"text"}}),e.matchParser.MatchParser=e.Util.extend(Object,{urls:!0,email:!0,twitter:!0,stripPrefix:!0,matcherRegex:function(){var e=/(^|[^\w])@(\w{1,15})/,t=/(?:[\-;:&=\+\$,\w\.]+@)/,r=/(?:[A-Za-z][-.+A-Za-z0-9]+:(?![A-Za-z][-.+A-Za-z0-9]+:\/\/)(?!\d+\/?)(?:\/\/)?)/,n=/(?:www\.)/,s=/[A-Za-z0-9\.\-]*[A-Za-z0-9\-]/,o=/\.(?:international|construction|contractors|enterprises|photography|productions|foundation|immobilien|industries|management|properties|technology|christmas|community|directory|education|equipment|institute|marketing|solutions|vacations|bargains|boutique|builders|catering|cleaning|clothing|computer|democrat|diamonds|graphics|holdings|lighting|partners|plumbing|supplies|training|ventures|academy|careers|company|cruises|domains|exposed|flights|florist|gallery|guitars|holiday|kitchen|neustar|okinawa|recipes|rentals|reviews|shiksha|singles|support|systems|agency|berlin|camera|center|coffee|condos|dating|estate|events|expert|futbol|kaufen|luxury|maison|monash|museum|nagoya|photos|repair|report|social|supply|tattoo|tienda|travel|viajes|villas|vision|voting|voyage|actor|build|cards|cheap|codes|dance|email|glass|house|mango|ninja|parts|photo|shoes|solar|today|tokyo|tools|watch|works|aero|arpa|asia|best|bike|blue|buzz|camp|club|cool|coop|farm|fish|gift|guru|info|jobs|kiwi|kred|land|limo|link|menu|mobi|moda|name|pics|pink|post|qpon|rich|ruhr|sexy|tips|vote|voto|wang|wien|wiki|zone|bar|bid|biz|cab|cat|ceo|com|edu|gov|int|kim|mil|net|onl|org|pro|pub|red|tel|uno|wed|xxx|xyz|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)\b/,i=/[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]?!:,.;]*[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]]/;return new RegExp(["(",e.source,")","|","(",t.source,s.source,o.source,")","|","(","(?:","(",r.source,s.source,")","|","(?:","(.?//)?",n.source,s.source,")","|","(?:","(.?//)?",s.source,o.source,")",")","(?:"+i.source+")?",")"].join(""),"gi")}(),charBeforeProtocolRelMatchRegex:/^(.)?\/\//,constructor:function(t){e.Util.assign(this,t),this.matchValidator=new e.MatchValidator},replace:function(e,t,r){var n=this;return e.replace(this.matcherRegex,function(e,s,o,i,l,a,c,u,p){var h=n.processCandidateMatch(e,s,o,i,l,a,c,u,p);if(h){var f=t.call(r,h.match);return h.prefixStr+f+h.suffixStr}return e})},processCandidateMatch:function(t,r,n,s,o,i,l,a,c){var u,p=a||c,h="",f="";if(r&&!this.twitter||o&&!this.email||i&&!this.urls||!this.matchValidator.isValidMatch(i,l,p))return null;if(this.matchHasUnbalancedClosingParen(t)&&(t=t.substr(0,t.length-1),f=")"),o)u=new e.match.Email({matchedText:t,email:o});else if(r)n&&(h=n,t=t.slice(1)),u=new e.match.Twitter({matchedText:t,twitterHandle:s});else{if(p){var d=p.match(this.charBeforeProtocolRelMatchRegex)[1]||"";d&&(h=d,t=t.slice(1))}u=new e.match.Url({matchedText:t,url:t,protocolUrlMatch:!!l,protocolRelativeMatch:!!p,stripPrefix:this.stripPrefix})}return{prefixStr:h,suffixStr:f,match:u}},matchHasUnbalancedClosingParen:function(e){var t=e.charAt(e.length-1);if(")"===t){var r=e.match(/\(/g),n=e.match(/\)/g),s=r&&r.length||0,o=n&&n.length||0;if(o>s)return!0}return!1}}),e.MatchValidator=e.Util.extend(Object,{invalidProtocolRelMatchRegex:/^[\w]\/\//,hasFullProtocolRegex:/^[A-Za-z][-.+A-Za-z0-9]+:\/\//,uriSchemeRegex:/^[A-Za-z][-.+A-Za-z0-9]+:/,hasWordCharAfterProtocolRegex:/:[^\s]*?[A-Za-z]/,isValidMatch:function(e,t,r){return t&&!this.isValidUriScheme(t)||this.urlMatchDoesNotHaveProtocolOrDot(e,t)||this.urlMatchDoesNotHaveAtLeastOneWordChar(e,t)||this.isInvalidProtocolRelativeMatch(r)?!1:!0},isValidUriScheme:function(e){var t=e.match(this.uriSchemeRegex)[0].toLowerCase();return"javascript:"!==t&&"vbscript:"!==t},urlMatchDoesNotHaveProtocolOrDot:function(e,t){return!(!e||t&&this.hasFullProtocolRegex.test(t)||-1!==e.indexOf("."))},urlMatchDoesNotHaveAtLeastOneWordChar:function(e,t){return e&&t?!this.hasWordCharAfterProtocolRegex.test(e):!1},isInvalidProtocolRelativeMatch:function(e){return!!e&&this.invalidProtocolRelMatchRegex.test(e)}}),e.match.Match=e.Util.extend(Object,{constructor:function(t){e.Util.assign(this,t)},getType:e.Util.abstractMethod,getMatchedText:function(){return this.matchedText},getAnchorHref:e.Util.abstractMethod,getAnchorText:e.Util.abstractMethod}),e.match.Email=e.Util.extend(e.match.Match,{getType:function(){return"email"},getEmail:function(){return this.email},getAnchorHref:function(){return"mailto:"+this.email},getAnchorText:function(){return this.email}}),e.match.Twitter=e.Util.extend(e.match.Match,{getType:function(){return"twitter"},getTwitterHandle:function(){return this.twitterHandle},getAnchorHref:function(){return"https://twitter.com/"+this.twitterHandle},getAnchorText:function(){return"@"+this.twitterHandle}}),e.match.Url=e.Util.extend(e.match.Match,{urlPrefixRegex:/^(https?:\/\/)?(www\.)?/i,protocolRelativeRegex:/^\/\//,protocolPrepended:!1,getType:function(){return"url"},getUrl:function(){var e=this.url;return this.protocolRelativeMatch||this.protocolUrlMatch||this.protocolPrepended||(e=this.url="http://"+e,this.protocolPrepended=!0),e},getAnchorHref:function(){var e=this.getUrl();return e.replace(/&amp;/g,"&")},getAnchorText:function(){var e=this.getUrl();return this.protocolRelativeMatch&&(e=this.stripProtocolRelativePrefix(e)),this.stripPrefix&&(e=this.stripUrlPrefix(e)),e=this.removeTrailingSlash(e)},stripUrlPrefix:function(e){return e.replace(this.urlPrefixRegex,"")},stripProtocolRelativePrefix:function(e){return e.replace(this.protocolRelativeRegex,"")},removeTrailingSlash:function(e){return"/"===e.charAt(e.length-1)&&(e=e.slice(0,-1)),e}}),e})},{}],"/":[function(e,t){"use strict";t.exports=e("./lib/")},{"./lib/":14}]},{},[])("/")});
var TurndownService = (function () {
'use strict';

function extend (destination) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (source.hasOwnProperty(key)) destination[key] = source[key];
    }
  }
  return destination
}

function repeat (character, count) {
  return Array(count + 1).join(character)
}

var blockElements = [
  'address', 'article', 'aside', 'audio', 'blockquote', 'body', 'canvas',
  'center', 'dd', 'dir', 'div', 'dl', 'dt', 'fieldset', 'figcaption',
  'figure', 'footer', 'form', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'header', 'hgroup', 'hr', 'html', 'isindex', 'li', 'main', 'menu', 'nav',
  'noframes', 'noscript', 'ol', 'output', 'p', 'pre', 'section', 'table',
  'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'ul'
];

function isBlock (node) {
  return blockElements.indexOf(node.nodeName.toLowerCase()) !== -1
}

var voidElements = [
  'area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input',
  'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'
];

function isVoid (node) {
  return voidElements.indexOf(node.nodeName.toLowerCase()) !== -1
}

var voidSelector = voidElements.join();
function hasVoid (node) {
  return node.querySelector && node.querySelector(voidSelector)
}

var rules = {};

rules.paragraph = {
  filter: 'p',

  replacement: function (content) {
    return '\n\n' + content + '\n\n'
  }
};


rules.lineBreak = {
  filter: 'br',

  replacement: function (content, node, options) {
    return options.br + '\n'
  }
};

rules.heading = {
  filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],

  replacement: function (content, node, options) {
    var hLevel = Number(node.nodeName.charAt(1));

    if (options.headingStyle === 'setext' && hLevel < 3) {
      var underline = repeat((hLevel === 1 ? '=' : '-'), content.length);
      return (
        '\n\n' + content + '\n' + underline + '\n\n'
      )
    } else {
      return '\n\n' + repeat('#', hLevel) + ' ' + content + '\n\n'
    }
  }
};

rules.blockquote = {
  filter: 'blockquote',

  replacement: function (content) {
    content = content.replace(/^\n+|\n+$/g, '');
    content = content.replace(/^/gm, '> ');
    return '\n\n' + content + '\n\n'
  }
};

rules.list = {
  filter: ['ul', 'ol'],

  replacement: function (content, node) {
    var parent = node.parentNode;
    if (parent.nodeName === 'LI' && parent.lastElementChild === node) {
      return '\n' + content
    } else {
      return '\n\n' + content + '\n\n'
    }
  }
};

rules.listItem = {
  filter: 'li',

  replacement: function (content, node, options) {
    content = content
      .replace(/^\n+/, '') // remove leading newlines
      .replace(/\n+$/, '\n') // replace trailing newlines with just a single one
      .replace(/\n/gm, '\n    '); // indent
    var prefix = options.bulletListMarker + '   ';
    var parent = node.parentNode;
    if (parent.nodeName === 'OL') {
      var start = parent.getAttribute('start');
      var index = Array.prototype.indexOf.call(parent.children, node);
      prefix = (start ? Number(start) + index : index + 1) + '.  ';
    }
    return (
      prefix + content + (node.nextSibling && !/\n$/.test(content) ? '\n' : '')
    )
  }
};

rules.indentedCodeBlock = {
  filter: function (node, options) {
    return (
      options.codeBlockStyle === 'indented' &&
      node.nodeName === 'PRE' &&
      node.firstChild &&
      node.firstChild.nodeName === 'CODE'
    )
  },

  replacement: function (content, node, options) {
    return (
      '\n\n    ' +
      node.firstChild.textContent.replace(/\n/g, '\n    ') +
      '\n\n'
    )
  }
};

rules.fencedCodeBlock = {
  filter: function (node, options) {
    return (
      options.codeBlockStyle === 'fenced' &&
      node.nodeName === 'PRE' &&
      node.firstChild &&
      node.firstChild.nodeName === 'CODE'
    )
  },

  replacement: function (content, node, options) {
    var className = node.firstChild.className || '';
    var language = (className.match(/language-(\S+)/) || [null, ''])[1];

    return (
      '\n\n' + options.fence + language + '\n' +
      node.firstChild.textContent +
      '\n' + options.fence + '\n\n'
    )
  }
};

rules.horizontalRule = {
  filter: 'hr',

  replacement: function (content, node, options) {
    return '\n\n' + options.hr + '\n\n'
  }
};

rules.inlineLink = {
  filter: function (node, options) {
    return (
      options.linkStyle === 'inlined' &&
      node.nodeName === 'A' &&
      node.getAttribute('href')
    )
  },

  replacement: function (content, node) {
    var href = node.getAttribute('href');
    var title = node.title ? ' "' + node.title + '"' : '';
    return '[' + content + '](' + href + title + ')'
  }
};

rules.referenceLink = {
  filter: function (node, options) {
    return (
      options.linkStyle === 'referenced' &&
      node.nodeName === 'A' &&
      node.getAttribute('href')
    )
  },

  replacement: function (content, node, options) {
    var href = node.getAttribute('href');
    var title = node.title ? ' "' + node.title + '"' : '';
    var replacement;
    var reference;

    switch (options.linkReferenceStyle) {
      case 'collapsed':
        replacement = '[' + content + '][]';
        reference = '[' + content + ']: ' + href + title;
        break
      case 'shortcut':
        replacement = '[' + content + ']';
        reference = '[' + content + ']: ' + href + title;
        break
      default:
        var id = this.references.length + 1;
        replacement = '[' + content + '][' + id + ']';
        reference = '[' + id + ']: ' + href + title;
    }

    this.references.push(reference);
    return replacement
  },

  references: [],

  append: function (options) {
    var references = '';
    if (this.references.length) {
      references = '\n\n' + this.references.join('\n') + '\n\n';
      this.references = []; // Reset references
    }
    return references
  }
};

rules.emphasis = {
  filter: ['em', 'i'],

  replacement: function (content, node, options) {
    // if (!content.trim()) return ''
    return options.emDelimiter + content.trim() + options.emDelimiter
  }
};

rules.strong = {
  filter: ['strong', 'b'],
  replacement: function (content, node, options) {
    return options.strongDelimiter + content.trim() + options.strongDelimiter
  }
};

rules.direita = {

    

        filter: function (node, options) {
            return (
                node.nodeName === 'DIV' &&
                node.getAttribute('class')
            )
        },

        replacement: function (content, node, options) {
            var estilo = node.getAttribute('class');
            var replacement;
            
            switch (estilo.trim()) {
                case 'wysiwyg-text-align-center':
                    replacement = ' |-|-| ' + content + ' |-|-| ';
                    break;
                case 'wysiwyg-text-align-left':
                    replacement = ' ||-| ' + content + ' ||-| ';
                    break;
                case 'wysiwyg-text-align-right':
                    replacement = ' |-|| ' + content + ' |-|| ';
                    break;
            
                default:
                    break;
            }
            return replacement
        },

        references: [],

    };


    // filter: ['div class="  wysiwyg-text-align-right"'],
    // replacement: function (content, node, options) {
    //     return options.direitaDelimiter + content.trim() + options.direitaDelimiter
    // }


rules.code = {
  filter: function (node) {
    var hasSiblings = node.previousSibling || node.nextSibling;
    var isCodeBlock = node.parentNode.nodeName === 'PRE' && !hasSiblings;

    return node.nodeName === 'CODE' && !isCodeBlock
  },

  replacement: function (content) {
    if (!content.trim()) return ''

    var delimiter = '`';
    var leadingSpace = '';
    var trailingSpace = '';
    var matches = content.match(/`+/gm);
    if (matches) {
      if (/^`/.test(content)) leadingSpace = ' ';
      if (/`$/.test(content)) trailingSpace = ' ';
      while (matches.indexOf(delimiter) !== -1) delimiter = delimiter + '`';
    }

    return delimiter + leadingSpace + content + trailingSpace + delimiter
  }
};

rules.image = {
  filter: 'img',

  replacement: function (content, node) {
    var alt = node.alt || '';
    var src = node.getAttribute('src') || '';
    var title = node.title || '';
    var titlePart = title ? ' "' + title + '"' : '';
    return src ? '![' + alt + ']' + '(' + src + titlePart + ')' : ''
  }
};

/**
 * Manages a collection of rules used to convert HTML to Markdown
 */

function Rules (options) {

  this.options = options;
  this._keep = [];
  this._remove = [];

  this.blankRule = {
    replacement: options.blankReplacement
  };

  this.keepReplacement = options.keepReplacement;

  this.defaultRule = {
    replacement: options.defaultReplacement
  };

  this.array = [];
  for (var key in options.rules) this.array.push(options.rules[key]);
}

Rules.prototype = {

  add: function (key, rule) {
    
      
    this.array.unshift(rule);
  },

  keep: function (filter) {
      

    this._keep.unshift({
      filter: filter,
      replacement: this.keepReplacement
    });
  },

  remove: function (filter) {
    this._remove.unshift({
      filter: filter,
      replacement: function () {
        return ''
      }
    });
  },

  forNode: function (node) {
   
    if (node.isBlank) return this.blankRule
    var rule;
                
    if ((rule = findRule(this.array, node, this.options))) return rule
    if ((rule = findRule(this._keep, node, this.options))) return rule
    if ((rule = findRule(this._remove, node, this.options))) return rule

    return this.defaultRule
  },

  forEach: function (fn) {
    for (var i = 0; i < this.array.length; i++) fn(this.array[i], i);
  }
};

function findRule (rules, node, options) {

  for (var i = 0; i < rules.length; i++) {
    var rule = rules[i];
    if (filterValue(rule, node, options)) return rule
  }
  return void 0
}

function filterValue (rule, node, options) {
  var filter = rule.filter;
  if (typeof filter === 'string') {
    if (filter === node.nodeName.toLowerCase()) return true
  } else if (Array.isArray(filter)) {
    if (filter.indexOf(node.nodeName.toLowerCase()) > -1) return true
  } else if (typeof filter === 'function') {
    if (filter.call(rule, node, options)) return true
  } else {
    throw new TypeError('`filter` needs to be a string, array, or function')
  }
}

/**
 * The collapseWhitespace function is adapted from collapse-whitespace
 * by Luc Thevenard.
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 Luc Thevenard <lucthevenard@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * collapseWhitespace(options) removes extraneous whitespace from an the given element.
 *
 * @param {Object} options
 */
function collapseWhitespace (options) {


  var element = options.element;
  var isBlock = options.isBlock;
  var isVoid = options.isVoid;
  var isPre = options.isPre || function (node) {
    return node.nodeName === 'PRE'
  };

  if (!element.firstChild || isPre(element)) return
    

  var prevText = null;
  var prevVoid = false;

  var prev = null;
  var node = next(prev, element, isPre);

  while (node !== element) {
    if (node.nodeType === 3 || node.nodeType === 4) { // Node.TEXT_NODE or Node.CDATA_SECTION_NODE
      var text = node.data.replace(/[ \r\n\t]+/g, ' ');

      if ((!prevText || / $/.test(prevText.data)) &&
          !prevVoid && text[0] === ' ') {
        text = text.substr(1);
      }

      // `text` might be empty at this point.
      if (!text) {
        node = remove(node);
        continue
      }

      node.data = text;

      prevText = node;
    } else if (node.nodeType === 1) { // Node.ELEMENT_NODE
      if (isBlock(node) || node.nodeName === 'BR') {
        if (prevText) {
          prevText.data = prevText.data.replace(/ $/, '');
        }

        prevText = null;
        prevVoid = false;
      } else if (isVoid(node)) {
        // Avoid trimming space around non-block, non-BR void elements.
        prevText = null;
        prevVoid = true;
      }
    } else {
      node = remove(node);
      continue
    }
      
    var nextNode = next(prev, node, isPre);
    prev = node;
    node = nextNode;
    
  }
    
  if (prevText) {
    prevText.data = prevText.data.replace(/ $/, '');
    if (!prevText.data) {
      remove(prevText);
    }
  }
}

/**
 * remove(node) removes the given node from the DOM and returns the
 * next node in the sequence.
 *
 * @param {Node} node
 * @return {Node} node
 */
function remove (node) {
  var next = node.nextSibling || node.parentNode;

  node.parentNode.removeChild(node);

  return next
}

/**
 * next(prev, current, isPre) returns the next node in the sequence, given the
 * current and previous nodes.
 *
 * @param {Node} prev
 * @param {Node} current
 * @param {Function} isPre
 * @return {Node}
 */
function next (prev, current, isPre) {
  if ((prev && prev.parentNode === current) || isPre(current)) {
    return current.nextSibling || current.parentNode
  }

  return current.firstChild || current.nextSibling || current.parentNode
}

/*
 * Set up window for Node.js
 */

var root = (typeof window !== 'undefined' ? window : {});

/*
 * Parsing HTML strings
 */

function canParseHTMLNatively () {
  var Parser = root.DOMParser;
  var canParse = false;

  // Adapted from https://gist.github.com/1129031
  // Firefox/Opera/IE throw errors on unsupported types
  try {
    // WebKit returns null on unsupported types
    if (new Parser().parseFromString('', 'text/html')) {
      canParse = true;
    }
  } catch (e) {}

  return canParse
}

function createHTMLParser () {
  var Parser = function () {};

  {
    if (shouldUseActiveX()) {
      Parser.prototype.parseFromString = function (string) {
        var doc = new window.ActiveXObject('htmlfile');
        doc.designMode = 'on'; // disable on-page scripts
        doc.open();
        doc.write(string);
        doc.close();
        return doc
      };
    } else {
      Parser.prototype.parseFromString = function (string) {
        var doc = document.implementation.createHTMLDocument('');
        doc.open();
        doc.write(string);
        doc.close();
        return doc
      };
    }
  }
  return Parser
}

function shouldUseActiveX () {
  var useActiveX = false;
  try {
    document.implementation.createHTMLDocument('').open();
  } catch (e) {
    if (window.ActiveXObject) useActiveX = true;
  }
  return useActiveX
}

var HTMLParser = canParseHTMLNatively() ? root.DOMParser : createHTMLParser();

function RootNode (input) {
  var root;
  if (typeof input === 'string') {
    var doc = htmlParser().parseFromString(
      '<x-turndown id="turndown-root">' + input + '</x-turndown>',
      'text/html'
    );
    root = doc.getElementById('turndown-root');
     

  } else {
    root = input.cloneNode(true);
  }
  collapseWhitespace({
    element: root,
    isBlock: isBlock,
    isVoid: isVoid
  });

  return root
}

var _htmlParser;
function htmlParser () {
  _htmlParser = _htmlParser || new HTMLParser();
  return _htmlParser
}

function Node (node) {
  node.isBlock = isBlock(node);
  node.isCode = node.nodeName.toLowerCase() === 'code' || node.parentNode.isCode;
  node.isBlank = isBlank(node);
  node.flankingWhitespace = flankingWhitespace(node);
  return node
}

function isBlank (node) {
  return (
    ['A', 'TH', 'TD', 'IFRAME', 'SCRIPT', 'AUDIO', 'VIDEO'].indexOf(node.nodeName) === -1 &&
    /^\s*$/i.test(node.textContent) &&
    !isVoid(node) &&
    !hasVoid(node)
  )
}

function flankingWhitespace (node) {
  var leading = '';
  var trailing = '';

  if (!node.isBlock) {
    var hasLeading = /^[ \r\n\t]/.test(node.textContent);
    var hasTrailing = /[ \r\n\t]$/.test(node.textContent);

    if (hasLeading && !isFlankedByWhitespace('left', node)) {
      leading = ' ';
    }
    if (hasTrailing && !isFlankedByWhitespace('right', node)) {
      trailing = ' ';
    }
  }

  return { leading: leading, trailing: trailing }
}

function isFlankedByWhitespace (side, node) {
  var sibling;
  var regExp;
  var isFlanked;

  if (side === 'left') {
    sibling = node.previousSibling;
    regExp = / $/;
  } else {
    sibling = node.nextSibling;
    regExp = /^ /;
  }

  if (sibling) {
    if (sibling.nodeType === 3) {
      isFlanked = regExp.test(sibling.nodeValue);
    } else if (sibling.nodeType === 1 && !isBlock(sibling)) {
      isFlanked = regExp.test(sibling.textContent);
    }
  }
  return isFlanked
}

var reduce = Array.prototype.reduce;
var leadingNewLinesRegExp = /^\n*/;
var trailingNewLinesRegExp = /\n*$/;
var escapes = [
  [/\\/g, '\\\\'],
  [/\*/g, '\\*'],
  [/-/g, '\\-'],
  [/^\+ /g, '\\+ '],
  [/^(=+)/g, '\\$1'],
  [/^(#{1,6}) /g, '\\$1 '],
  [/`/g, '\\`'],
  [/^~~~/g, '\\~~~'],
  [/\[/g, '\\['],
  [/\]/g, '\\]'],
  [/^>/g, '\\>'],
  [/_/g, '\\_'],
  [/^(\d+)\. /g, '$1\\. ']
];

function TurndownService (options) {
    
  if (!(this instanceof TurndownService)) return new TurndownService(options)

  var defaults = {
    rules: rules,
    headingStyle: 'setext',
    hr: '* * *',
    bulletListMarker: '*',
    codeBlockStyle: 'indented',
    fence: '```',
    emDelimiter: '_',
    strongDelimiter: '**',
    direitaDelimiter: '|||',
    linkStyle: 'inlined',
    linkReferenceStyle: 'full',
    br: '  ',
    blankReplacement: function (content, node) {
      return node.isBlock ? '\n\n' : ''
    },
    keepReplacement: function (content, node) {
      return node.isBlock ? '\n\n' + node.outerHTML + '\n\n' : node.outerHTML
    },
    defaultReplacement: function (content, node) {
      return node.isBlock ? '\n\n' + content + '\n\n' : content
    }
  };
  this.options = extend({}, defaults, options);
  this.rules = new Rules(this.options);
}

TurndownService.prototype = {
  /**
   * The entry point for converting a string or DOM node to Markdown
   * @public
   * @param {String|HTMLElement} input The string or DOM node to convert
   * @returns A Markdown representation of the input
   * @type String
   */

  turndown: function (input) {
    if (!canConvert(input)) {
      throw new TypeError(
        input + ' is not a string, or an element/document/fragment node.'
      )
    }
     
    if (input === '') return ''

    var output = process.call(this, new RootNode(input));
    return postProcess.call(this, output)
  },

  /**
   * Add one or more plugins
   * @public
   * @param {Function|Array} plugin The plugin or array of plugins to add
   * @returns The Turndown instance for chaining
   * @type Object
   */

  use: function (plugin) {
    if (Array.isArray(plugin)) {
      for (var i = 0; i < plugin.length; i++) this.use(plugin[i]);
    } else if (typeof plugin === 'function') {
      plugin(this);
    } else {
      throw new TypeError('plugin must be a Function or an Array of Functions')
    }
    return this
  },

  /**
   * Adds a rule
   * @public
   * @param {String} key The unique key of the rule
   * @param {Object} rule The rule
   * @returns The Turndown instance for chaining
   * @type Object
   */

  addRule: function (key, rule) {
    this.rules.add(key, rule);
    return this
  },

  /**
   * Keep a node (as HTML) that matches the filter
   * @public
   * @param {String|Array|Function} filter The unique key of the rule
   * @returns The Turndown instance for chaining
   * @type Object
   */

  keep: function (filter) {
    this.rules.keep(filter);
    return this
  },

  /**
   * Remove a node that matches the filter
   * @public
   * @param {String|Array|Function} filter The unique key of the rule
   * @returns The Turndown instance for chaining
   * @type Object
   */

  remove: function (filter) {
    this.rules.remove(filter);
    return this
  },

  /**
   * Escapes Markdown syntax
   * @public
   * @param {String} string The string to escape
   * @returns A string with Markdown syntax escaped
   * @type String
   */

  escape: function (string) {
    return escapes.reduce(function (accumulator, escape) {
      return accumulator.replace(escape[0], escape[1])
    }, string)
  }
};

/**
 * Reduces a DOM node down to its Markdown string equivalent
 * @private
 * @param {HTMLElement} parentNode The node to convert
 * @returns A Markdown representation of the node
 * @type String
 */

function process (parentNode) {

  var self = this;
  return reduce.call(parentNode.childNodes, function (output, node) {
    node = new Node(node);

    var replacement = '';
    if (node.nodeType === 3) {
      replacement = node.isCode ? node.nodeValue : self.escape(node.nodeValue);
    } else if (node.nodeType === 1) {
        
      replacement = replacementForNode.call(self, node);
    }

    return join(output, replacement)
  }, '')
}

/**
 * Appends strings as each rule requires and trims the output
 * @private
 * @param {String} output The conversion output
 * @returns A trimmed version of the ouput
 * @type String
 */

function postProcess (output) {
  var self = this;
  this.rules.forEach(function (rule) {
    if (typeof rule.append === 'function') {
      output = join(output, rule.append(self.options));
    }
  });

  return output.replace(/^[\t\r\n]+/, '').replace(/[\t\r\n\s]+$/, '')
}

/**
 * Converts an element node to its Markdown equivalent
 * @private
 * @param {HTMLElement} node The node to convert
 * @returns A Markdown representation of the node
 * @type String
 */

function replacementForNode (node) {

  var rule = this.rules.forNode(node);
  var content = process.call(this, node);
  var whitespace = node.flankingWhitespace;
  if (whitespace.leading || whitespace.trailing) content = content.trim();
  return (
    whitespace.leading +
    rule.replacement(content, node, this.options) +
    whitespace.trailing
  )
}

/**
 * Determines the new lines between the current output and the replacement
 * @private
 * @param {String} output The current conversion output
 * @param {String} replacement The string to append to the output
 * @returns The whitespace to separate the current output and the replacement
 * @type String
 */

function separatingNewlines (output, replacement) {
  var newlines = [
    output.match(trailingNewLinesRegExp)[0],
    replacement.match(leadingNewLinesRegExp)[0]
  ].sort();
  var maxNewlines = newlines[newlines.length - 1];
  return maxNewlines.length < 2 ? maxNewlines : '\n\n'
}

function join (string1, string2) {

  var separator = separatingNewlines(string1, string2);

  // Remove trailing/leading newlines and replace with separator
  string1 = string1.replace(trailingNewLinesRegExp, '');
  string2 = string2.replace(leadingNewLinesRegExp, '');

  return string1 + separator + string2
}

/**
 * Determines whether an input can be converted
 * @private
 * @param {String|HTMLElement} input Describe this parameter
 * @returns Describe what it returns
 * @type String|Object|Array|Boolean|Number
 */

function canConvert (input) {
  return (
    input != null && (
      typeof input === 'string' ||
      (input.nodeType && (
        input.nodeType === 1 || input.nodeType === 9 || input.nodeType === 11
      ))
    )
  )
}

return TurndownService;

}());
