
          window.__NEXT_REGISTER_PAGE('/verge-team', function() {
            var comp = module.exports=webpackJsonp([4],{18:function(e,t,n){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.forceCheck=t.lazyload=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),u=r(c),s=n(39),m=r(s),d=n(14),f=r(d),p=n(27),h=n(28),g=r(h),v=n(29),b=r(v),w=n(30),y=r(w),E=n(31),_=r(E),k={top:0,right:0,bottom:0,left:0,width:0,height:0},j="data-lazyload-listened",N=[],M=[],S=!1;try{var x=Object.defineProperty({},"passive",{get:function(){S=!0}});window.addEventListener("test",null,x)}catch(e){}var C=!!S&&{capture:!1,passive:!0},O=function(e,t){var n=m.default.findDOMNode(e),r=void 0,a=void 0;try{var o=t.getBoundingClientRect();r=o.top,a=o.height}catch(e){r=k.top,a=k.height}var i=window.innerHeight||document.documentElement.clientHeight,l=Math.max(r,0),c=Math.min(i,r+a)-l,u=void 0,s=void 0;try{var d=n.getBoundingClientRect();u=d.top,s=d.height}catch(e){u=k.top,s=k.height}var f=u-l,p=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return f-p[0]<=c&&f+s+p[1]>=0},T=function(e){var t=m.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,r=void 0;try{var a=t.getBoundingClientRect();n=a.top,r=a.height}catch(e){n=k.top,r=k.height}var o=window.innerHeight||document.documentElement.clientHeight,i=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-i[0]<=o&&n+r+i[1]>=0},A=function(e){var t=m.default.findDOMNode(e);if(t){var n=(0,g.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?O(e,n):T(e))?e.visible||(e.props.once&&M.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},P=function(){M.forEach(function(e){var t=N.indexOf(e);-1!==t&&N.splice(t,1)}),M=[]},D=function(){for(var e=0;e<N.length;++e){var t=N[e];A(t)}P()},z=void 0,R=null,L=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n}return i(t,e),l(t,[{key:"componentDidMount",value:function(){var e=!1;if(void 0!==this.props.debounce&&"throttle"===z?(console.warn("[react-lazyload] Previous delay function is `throttle`, now switching to `debounce`, try setting them unanimously"),e=!0):"debounce"===z&&void 0===this.props.debounce&&(console.warn("[react-lazyload] Previous delay function is `debounce`, now switching to `throttle`, try setting them unanimously"),e=!0),e&&((0,p.off)(window,"scroll",R,C),(0,p.off)(window,"resize",R,C),R=null),R||(void 0!==this.props.debounce?(R=(0,b.default)(D,"number"==typeof this.props.debounce?this.props.debounce:300),z="debounce"):void 0!==this.props.throttle?(R=(0,y.default)(D,"number"==typeof this.props.throttle?this.props.throttle:300),z="throttle"):R=D),this.props.overflow){var t=(0,g.default)(m.default.findDOMNode(this));if(t&&"function"==typeof t.getAttribute){var n=+t.getAttribute(j)+1;1===n&&t.addEventListener("scroll",R,C),t.setAttribute(j,n)}}else if(0===N.length||e){var r=this.props,a=r.scroll,o=r.resize;a&&(0,p.on)(window,"scroll",R,C),o&&(0,p.on)(window,"resize",R,C)}N.push(this),A(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,g.default)(m.default.findDOMNode(this));if(e&&"function"==typeof e.getAttribute){var t=+e.getAttribute(j)-1;0===t?(e.removeEventListener("scroll",R,C),e.removeAttribute(j)):e.setAttribute(j,t)}}var n=N.indexOf(this);-1!==n&&N.splice(n,1),0===N.length&&((0,p.off)(window,"resize",R,C),(0,p.off)(window,"scroll",R,C))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:u.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}(c.Component);L.propTypes={once:f.default.bool,height:f.default.oneOfType([f.default.number,f.default.string]),offset:f.default.oneOfType([f.default.number,f.default.arrayOf(f.default.number)]),overflow:f.default.bool,resize:f.default.bool,scroll:f.default.bool,children:f.default.node,throttle:f.default.oneOfType([f.default.number,f.default.bool]),debounce:f.default.oneOfType([f.default.number,f.default.bool]),placeholder:f.default.node,unmountIfInvisible:f.default.bool},L.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};t.lazyload=_.default;t.default=L,t.forceCheck=D}).call(t,n(5))},20:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise(function(n,r){function a(){var e,t=[],n=[],r={};return o.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm,function(a,o,i){t.push(o=o.toLowerCase()),n.push([o,i]),e=r[o],r[o]=e?e+","+i:i}),{ok:1==(o.status/200|0),status:o.status,statusText:o.statusText,url:o.responseURL,clone:a,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}var o=new XMLHttpRequest;o.open(t.method||"get",e);for(var i in t.headers)o.setRequestHeader(i,t.headers[i]);o.withCredentials="include"==t.credentials,o.onload=function(){n(a())},o.onerror=r,o.send(t.body)})};t.default=r},26:function(e,t,n){e.exports=window.fetch||(window.fetch=n(20).default||n(20))},27:function(e,t,n){"use strict";function r(e,t,n,r){r=r||!1,e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,function(t){n.call(e,t||window.event)})}function a(e,t,n,r){r=r||!1,e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.on=r,t.off=a},28:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e)return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,r=e;r;){if(!r.parentNode)return e.ownerDocument||document.documentElement;var a=window.getComputedStyle(r),o=a.position,i=a.overflow,l=a["overflow-x"],c=a["overflow-y"];if("static"===o&&t)r=r.parentNode;else{if(n.test(i)&&n.test(l)&&n.test(c))return r;r=r.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},29:function(e,t,n){"use strict";function r(e,t,n){var r=void 0,a=void 0,o=void 0,i=void 0,l=void 0,c=function c(){var u=+new Date-i;u<t&&u>=0?r=setTimeout(c,t-u):(r=null,n||(l=e.apply(o,a),r||(o=null,a=null)))};return function(){o=this,a=arguments,i=+new Date;var u=n&&!r;return r||(r=setTimeout(c,t)),u&&(l=e.apply(o,a),o=null,a=null),l}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},30:function(e,t,n){"use strict";function r(e,t,n){t||(t=250);var r,a;return function(){var o=n||this,i=+new Date,l=arguments;r&&i<r+t?(clearTimeout(a),a=setTimeout(function(){r=i,e.apply(o,l)},t)):(r=i,e.apply(o,l))}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},31:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),u=r(c),s=n(18),m=r(s),d=function(e){return e.displayName||e.name||"Component"};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function r(){a(this,r);var e=o(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return e.displayName="LazyLoad"+d(t),e}return i(r,n),l(r,[{key:"render",value:function(){return u.default.createElement(m.default,e,u.default.createElement(t,this.props))}}]),r}(c.Component)}}},430:function(e,t,n){e.exports=n(431)},431:function(e,t,n){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=e.t;return c.default.createElement(p.default,null,c.default.createElement(d.default,null,c.default.createElement("title",{key:"title"},t("common:meta.verge-team.title",{defaultValue:"Verge Team - VergeCurrency.com"}))),c.default.createElement("div",{className:"about"},c.default.createElement("div",{className:"ribbon ribbon--about"},c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:"row center-xs"},c.default.createElement("div",{className:"col-xs-10 col-sm-9 col-md-6 text-center"},c.default.createElement("div",{className:"ribbon-txt"},c.default.createElement("h1",null,"Meet the Verge Team"),c.default.createElement("p",null,"The grassroots culture is what makes Verge"," ",c.default.createElement("span",{className:"hidden-xs"},c.default.createElement("br",null)),"unique and dynamic.")))))),c.default.createElement("div",{className:"intro pt-large pb-large pb-xs-0"},c.default.createElement("div",{className:"row center-xs middle-xs"},c.default.createElement("div",{className:"col-xs-10 col-sm-6"},c.default.createElement("h2",null,"Verge Currency is a 100% open-source project, and the global Verge Community represents the manpower driving it forward. Verge is not a company, there was no ICO held upon the launch and no pre-mining took place.  All contributors, including the Core Team, are unpaid volunteers who donate their time and energy into the project because they are passionate and believe in Verge."),c.default.createElement("p",null,"Below are just some of the most active community members who form the Core Team.")))),c.default.createElement("div",{className:"team pt-xs pb-large"},c.default.createElement("div",{className:"row center-xs"},c.default.createElement("div",{className:"col-xs-10 col-lg-8"},j.map(function(e){return c.default.createElement(y.default,e,c.default.createElement(b.default,e))})))),c.default.createElement("div",{className:"contributors"},c.default.createElement("div",{className:"row center-xs"},c.default.createElement("div",{className:"col-xs-10"},c.default.createElement("div",{className:"row center-xs start-sm"},c.default.createElement("div",{className:"col-xs-12 col-sm-8 col-lg-6 pb-small pb-xs-0"},c.default.createElement("h2",null,"Want to contribute to Verge Currency?"," ",c.default.createElement("span",{className:"hidden-xs"},c.default.createElement("br",null)),"Join our community on Github"),c.default.createElement("p",null,"Verge is open-source software that is constantly improving due to its many contributors. If you would like to contribute as well, take a look at our Github repositories to see where you could make a difference!")),c.default.createElement("div",{className:"col-xs-12 col-sm-4 col-lg-6 end-xs"},c.default.createElement(s.default,{href:"https://github.com/vergecurrency?tab=repositories"},c.default.createElement("a",{href:"https://github.com/vergecurrency?tab=repositories",target:"_blank",rel:"noopener noreferrer",className:"btn btn-tertiary btn-github"},"Go to Verge repo"))),c.default.createElement("div",{className:"col-xs-12"},c.default.createElement(g.default,null))))))))}Object.defineProperty(t,"__esModule",{value:!0});var o=n(432),i=r(o),l=n(0),c=r(l),u=n(1),s=r(u),m=n(8),d=r(m),f=n(6),p=r(f),h=n(436),g=r(h),v=n(437),b=r(v),w=n(438),y=r(w),E=n(7),_=n(9),k=r(_),j=(0,i.default)(n(439)),N=(0,E.translate)(["common","verge-team"],{i18n:k.default,wait:e.browser})(a);t.default=N}).call(t,n(5))},432:function(e,t,n){e.exports={default:n(433),__esModule:!0}},433:function(e,t,n){n(434),e.exports=n(11).Object.values},434:function(e,t,n){var r=n(19),a=n(435)(!1);r(r.S,"Object",{values:function(e){return a(e)}})},435:function(e,t,n){var r=n(44),a=n(37),o=n(61).f;e.exports=function(e){return function(t){for(var n,i=a(t),l=r(i),c=l.length,u=0,s=[];c>u;)o.call(i,n=l[u++])&&s.push(e?[n,i[n]]:i[n]);return s}}},436:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(15),o=r(a),i=n(12),l=r(i),c=n(13),u=r(c),s=n(16),m=r(s),d=n(17),f=r(d),p=n(0),h=r(p),g=n(26),v=r(g),b=n(18),w=r(b),y=function(e){function t(e){(0,l.default)(this,t);var n=(0,m.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return n.state={contributors:[]},n}return(0,f.default)(t,e),(0,u.default)(t,[{key:"componentWillMount",value:function(){var e=this;(0,v.default)("https://api.github.com/repos/vergecurrency/VERGE/contributors").then(function(e){return e.json()}).then(function(t){return e.setState({contributors:t})})}},{key:"render",value:function(){return this.state.contributors.length>0?h.default.createElement("div",null,h.default.createElement("div",{className:"row center-xs pt-xs pb"},this.state.contributors.map(function(e,t){if(15385883!==e.id)return h.default.createElement("div",{key:e.id,className:(0===t?"col-xs-9":"col-xs-6")+" col-xs-6 col-sm-4 col-md-3 col-lg-2"},h.default.createElement("a",{href:e.html_url,target:"_blank",className:"contributors--item"},h.default.createElement("div",{className:"contributors--item__img"},h.default.createElement(w.default,{height:130},h.default.createElement("img",{src:e.avatar_url,alt:e.login}))),h.default.createElement("div",{className:"contributors--item__author"},e.login),h.default.createElement("div",{className:"contributors--item__profile"},h.default.createElement("span",null,"View on GitHub"))))}))):h.default.createElement("span",null,"Loading contributors...")}}]),t}(h.default.Component);t.default=y},437:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=r(a),i=n(1),l=r(i),c=function(e){return e.members.map(function(e){return o.default.createElement("div",{className:"col-xs col-md-3",key:e.name},o.default.createElement("div",{className:"team--member pb-xs"},o.default.createElement("img",{src:e.img,alt:e.name}),o.default.createElement("div",{className:"flexIt"},o.default.createElement("h3",null,e.name),o.default.createElement("div",{className:"socials"},o.default.createElement(l.default,{href:e.twitter},o.default.createElement("a",{className:"icon iconlink "+(e.twitter?"":"hidden"),href:e.twitter,target:"_blank",rel:"noopener noreferrer"},o.default.createElement("i",{className:"icon icon--twitter"}))),o.default.createElement(l.default,{href:e.github},o.default.createElement("a",{className:"icon iconlink "+(e.github?"":"hidden"),href:e.github,target:"_blank",rel:"noopener noreferrer"},o.default.createElement("i",{className:"icon icon--github"}))))),o.default.createElement("h5",null,e.role),o.default.createElement("h5",null,o.default.createElement("i",null,e.location)),o.default.createElement("p",null,o.default.createElement("h5",null,e.occupation)),o.default.createElement("br",null)))})};t.default=c},438:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(r),o=function(e){return a.default.createElement("div",{className:"team-category"},a.default.createElement("div",{className:"category-header"},a.default.createElement("h2",{className:"category-title"},e.title),a.default.createElement("hr",null)),a.default.createElement("div",{className:"row between-xs start-sm"},e.children))};t.default=o},439:function(e,t){e.exports={developer:{title:"Development Team",members:[{img:"../static/img/team/sunerok.png",name:"Justin - Sunerok",role:"Lead Developer",occupation:"Network Security & Blockchain Expert",github:"https://github.com/justinvforvendetta",twitter:"https://twitter.com/justinvendetta",location:"Florida, USA"},{img:"../static/img/team/marpme.png",name:"Marvin - marpme",role:"Product Developer",occupation:"Software Engineer",github:"https://github.com/marpme",twitter:"https://twitter.com/marpme_",location:"Berlin, Germany"},{img:"../static/img/team/stanfaas.jpg",name:"Stan - StanFaas",role:"Lead Web Developer",occupation:"Sr. Front-end developer",github:"https://github.com/StanFaas",twitter:"https://twitter.com/StanFaas",location:"The Netherlands"},{img:"../static/img/team/edwin.jpg",name:"Edwin - EdwinB89",role:"Front-end Developer",occupation:"Front-end developer",github:"https://github.com/EdwinB89",twitter:"",location:"The Netherlands"},{img:"../static/img/team/sourcedexter.jpg",name:"Akshay - Sourcedexter",role:"Bot Dev & India Marketing Lead",occupation:"Data Science Engineer",github:"https://github.com/sourcedexter",twitter:"https://twitter.com/sourcedexter",location:"Bangalore, India"},{img:"../static/img/team/verge.jpg",name:"Swen",role:"Product Developer",occupation:"Full Stack Senior Web Developer",github:"https://github.com/SwenVanZanten",twitter:"https://twitter.com/SwenVanZanten",location:"Voorhout, The Netherlands"}]},businessdevelopment:{title:"Business Development Team",members:[{img:"../static/img/team/spookykid.jpg",name:"SpookyKid",role:"Intl. Business Development & Recruiter",occupation:"",github:"",twitter:"https://twitter.com/Secret_0taKu",location:"USA"},{img:"../static/img/team/mihael.jpg",name:"Mihael",role:"Community Manager",occupation:"Offshore Marine Engineer",github:"",twitter:"https://twitter.com/mihael_xvg",location:"Rijeka, Croatia"},{img:"../static/img/team/CC66.png",name:"Jason - CC66",role:"Community Manager",occupation:"Social Engineering Specialist",github:"",twitter:"https://twitter.com/CoinCrazy66",location:"Tennessee, USA"},{img:"../static/img/team/phanti.jpg",name:"Jonas - Phanti",role:"Vendor & Exchange Outreach / Finance",occupation:"Banking & Finance",github:"",twitter:"https://twitter.com/PhanTi_91",location:"Stuttgart, Germany"},{img:"../static/img/team/verge.jpg",name:"Samantha - CryptoSam",role:"Procurement & Fulfillment",occupation:"Territory Sales Manager",github:"https://github.com/CryptoSamantha",twitter:"https://twitter.com/cryptosamantha",location:"Missouri, USA"}]},advisor:{title:"Advisors",members:[{img:"../static/img/team/cryptorekt.jpg",name:"CryptoRekt",role:"Technical Writer & Advisor",occupation:"Systems Engineer",github:"https://github.com/cryptorekt",twitter:"https://twitter.com/CryptoRekt",location:"California, USA"},{img:"../static/img/team/cryptogirl.png",name:"Dini",role:"Head of Project Management",occupation:"PM Health & Tech",github:"",twitter:"https://twitter.com/CryptoGirlDini",location:"Rotterdam, The Netherlands"},{img:"../static/img/team/chris.png",name:"Chris",role:"Project & Outreach",occupation:"Operational Manager",github:"",twitter:"https://twitter.com/christiaan_jim",location:"Amsterdam, The Netherlands"},{img:"../static/img/team/kris.jpg",name:"Kris Chase",role:"Marketing & Operations Advisor",occupation:"Serial Entrepreneur & Investor",github:"",twitter:"https://twitter.com/ItsKrisChase",location:"Canada"},{img:"../static/img/team/yakuza.jpg",name:"Yakuza112",role:"Technical Advisor",occupation:"Web Developer",github:"https://github.com/Yakuza112",twitter:"https://twitter.com/Yakuza112",location:"Wuppertal, Germany"},{img:"../static/img/team/birb.jpg",name:"Dan - wit_sec_birb",role:"Advisor & Marketing",occupation:"Procurement",github:"",twitter:"https://twitter.com/wit_sec_birb",location:"Melbourne, Australia"},{img:"../static/img/team/stack.jpg",name:"Mike - Stack",role:"Technical Advisor",occupation:"Software Engineer",github:"",twitter:"https://twitter.com/CmplxStack",location:"USA"},{img:"../static/img/team/verge.jpg",name:"ddefying",role:"Technical Advisor",occupation:"Corporate Transaction Attorney",github:"",twitter:"https://twitter.com/cheetosologist",location:"California, USA"},{img:"../static/img/team/jeffs1.png",name:"Jeff",role:"Technical Advisor",occupation:"Systems Engineer",github:"https://github.com/jrsikors",twitter:"",location:"Texas, USA"},{img:"../static/img/team/verge.jpg",name:"Mark",role:"International Marketing Advisor",occupation:"Finance / Credit Specialist",github:"",twitter:"https://twitter.com/vergecanada",location:"Alberta, Canada"},{img:"../static/img/team/verge.jpg",name:"Ernstjan",role:"Vendor Outreach",occupation:"Management Consultant",github:"",twitter:"https://twitter.com/ernstjanalbers",location:"Leusden, The Netherlands"},{img:"../static/img/team/verge.jpg",name:"Lloyd - Swizzlesticks",role:"Technical Writer & Advisor",occupation:"Owner/CIO - Managed Services Provider",github:"",twitter:"https://twitter.com/3wizzlesticks",location:"Kentucky, USA"},{img:"../static/img/team/verge.jpg",name:"BlueManRising",role:"Technical Advisor",occupation:"Civil Engineer",github:"",twitter:"https://twitter.com/nkazier",location:"New Jersey, USA"}]},marketing:{title:"Marketing Team",members:[{img:"../static/img/team/greenazn.jpg",name:"Han - GreentAzn",role:"Marketing & Operations Advisor",occupation:"Head of Marketing",github:"",twitter:"https://twitter.com/greentazn",location:"California, USA"},{img:"../static/img/team/nickgaudiano.jpg",name:"Nick Gaudiano",role:"Media & Visuals Creator; Marketing",occupation:"Entrepeneur",github:"",twitter:"https://twitter.com/XVGGAUDI",location:"Texas, USA"},{img:"../static/img/team/arend.jpg",name:"Arend",role:"Marketing & Technology Integration",occupation:"Student & Entrepeneur",github:"https://github.com/arendgb",twitter:"https://twitter.com/Arend_XVG",location:"The Netherlands"},{img:"../static/img/team/peter.jpg",name:"Peter Hodges",role:"Media & Visuals Creator",occupation:"Visual Effects, 3D Artist & Film Maker",github:"",twitter:"https://twitter.com/peterisanartist",location:"USA"},{img:"../static/img/team/hassan.png",name:"Hassan",role:"Lead UI Designer & Graphics",occupation:"UI/UX Designer & Webdesigner",github:"",twitter:"https://twitter.com/waveon3",location:"Odense, Denmark"},{img:"../static/img/team/RBull.jpg",name:"Ronald - RBull",role:"Outreach Operational Manager",occupation:"Customer Service Manager",github:"",twitter:"https://twitter.com/Rbull076",location:"Breda, The Netherlands"},{img:"../static/img/team/verge.jpg",name:"Lohann - Tonton Lowan",role:"Social Media&PR-French Speaking Countries",occupation:"Entrepreneur",github:"",twitter:"https://twitter.com/vergeliever",location:"France & Taiwan"},{img:"../static/img/team/verge.jpg",name:"Numan",role:"Marketing Operations",occupation:"Lead System Engineer",github:"",twitter:"https://twitter.com/Desolatorbtc",location:"Istanbul, Turkey"},{img:"../static/img/team/verge.jpg",name:"Alexandre",role:"Community Relations Specialist",occupation:"Corporate English Teacher / Editor",github:"",twitter:"https://twitter.com/xvgninja",location:"Germany"},{img:"../static/img/team/rondo_p.png",name:"Andrey - Rondo",role:"Marketing",occupation:"Creative Advertising",github:"",twitter:"https://twitter.com/verge_russia",location:"Moscow, Russia"}]},support:{title:"Technical Support Team",members:[{img:"../static/img/team/akashiro.jpg",name:"Akashiro",role:"Tech Support & Integration",occupation:"",github:"",twitter:"",location:"The Netherlands"}]}}}},[430]);
            return { page: comp.default }
          })
        