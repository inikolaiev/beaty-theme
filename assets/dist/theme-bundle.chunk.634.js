"use strict";(self.webpackChunkpapathemes_beautify=self.webpackChunkpapathemes_beautify||[]).push([[634],{61634:(t,e,r)=>{r.r(e),r.d(e,{default:()=>p});var i=r(42066),o=r(50469),n=r(25270),a=r(28426),c=r(99706),s=r(38268),d=r(32861),u=r(55825);function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}var p=function(t){var e,r;function o(e){var r;return(r=t.call(this,e)||this).validationDictionary=(0,c.M)(e),r}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,h(e,r);var p=o.prototype;return p.onReady=function(){this.context&&(this.context.show_bulk_order_mode||this.context.useBulkOrder)&&(this.bulkOrder=(0,d.Z)(this.context)),(0,n.Z)(this.context),(0,s.Z)(),u("#facetedSearch").length>0?this.initFacetedSearch():(this.onSortBySubmit=this.onSortBySubmit.bind(this),i.PT.on("sortBy-submitted",this.onSortBySubmit))},p.destroy=function(){this.facetedSearch?this.facetedSearch.destroy():i.PT.off("sortBy-submitted",this.onSortBySubmit)},p.initFacetedSearch=function(){var t=this,e=this.validationDictionary,r=e.price_min_evaluation,i=e.price_max_evaluation,o=e.price_min_not_entered,n=e.price_max_not_entered,c=e.price_invalid_value,s=u("#product-listing-container"),d=u("#faceted-search-container"),h={template:{productListing:"brand/product-listing",sidebar:"brand/sidebar"},config:{shop_by_brand:!0,brand:{products:{limit:this.context.brandProductsPerPage}}},showMore:"brand/show-more"};this.facetedSearch=new a.Z(h,(function(e){s.html(e.productListing),d.html(e.sidebar),u("body").triggerHandler("compareReset"),t.bulkOrder&&t.bulkOrder.reinit(),u("html, body").animate({scrollTop:0},100)}),{validationErrorMessages:{onMinPriceError:r,onMaxPriceError:i,minPriceNotEntered:o,maxPriceNotEntered:n,onInvalidPrice:c}})},o}(o.Z)}}]);
//# sourceMappingURL=theme-bundle.chunk.634.js.map