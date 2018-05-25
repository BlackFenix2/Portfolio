(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{194:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(332);t.default=(e=>r.createElement(a.a,{visible:e.visible},r.createElement("div",null,r.createElement("header",{className:"w3-container w3-teal"},r.createElement("button",{onClick:e.toggleEvent,className:"w3-button w3-display-topright"},"×"),r.createElement("h2",null,"Apple")),r.createElement("div",{className:"w3-panel"},e.children))))},314:function(e,t,n){var r;
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r))e.push(a.apply(null,r));else if("object"===s)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}void 0!==e&&e.exports?e.exports=a:void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},332:function(e,t,n){"use strict";var r=n(314),a=n.n(r),s=n(1);var i=class extends s.Component{render(){if(!this.props.visible)return null;const e=a()({"w3-show":this.props.visible,"w3-modal":!0});return s.createElement("div",{className:e},s.createElement("div",{className:"w3-modal-content w3-card w3-animate-top",style:{maxWidth:"35%"}},this.props.children))}};n.d(t,"a",function(){return i})}}]);