!function(){"use strict";var e=window.wp.element,t=window.wp.components,l=(window.wp.blockEditor,window.wp.blocks),n=window.React;function a(l){const[a,r]=l.isOpened?(0,n.useState)(!0):(0,n.useState)(!1);return(0,e.createElement)("div",{className:`cb__wrapper ${l.isAdditional?"cb__wrapper--additional":""} ${l.isDesignComponent?"cb__wrapper--design-component":""}`,draggable:!0},l.name?(0,e.createElement)("div",{className:"cb__name "+(l.isAdditional?"cb__name--additional":"")},(0,e.createElement)("p",null,l.name),(0,e.createElement)(t.Icon,{icon:a?"arrow-up-alt2":"arrow-down-alt2",onClick:()=>{r(!a)},style:{cursor:"pointer"}})):null,(0,e.createElement)("div",{className:"cb__content",style:{display:a?"block":"none"}},l.children))}function r(t){return(0,e.createElement)("div",{className:"cb__item"},t.children)}function c(t){return(0,e.createElement)("p",{className:"cb__label"},t.children)}const o="Responsive Spacer";(0,l.registerBlockType)("primary/responsivespacer",{title:o,icon:"block-default",category:"primary",attributes:{desktop:{type:"string",default:0},tablet:{type:"string",default:0},mobile:{type:"string",default:0}},edit:function(l){return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a,{isAdditional:!0,name:o},(0,e.createElement)(t.Flex,{gap:10},(0,e.createElement)(t.FlexBlock,null,(0,e.createElement)(r,null,(0,e.createElement)(c,null,"Desktop"),(0,e.createElement)(t.Flex,null,(0,e.createElement)(t.FlexBlock,null,(0,e.createElement)(t.TextControl,{value:l.attributes.desktop,onChange:e=>l.setAttributes({desktop:e})})),(0,e.createElement)(t.FlexItem,null,(0,e.createElement)(c,null,"rem"))))),(0,e.createElement)(t.FlexBlock,null,(0,e.createElement)(r,null,(0,e.createElement)(c,null,"Tablet"),(0,e.createElement)(t.Flex,null,(0,e.createElement)(t.FlexBlock,null,(0,e.createElement)(t.TextControl,{value:l.attributes.tablet,onChange:e=>l.setAttributes({tablet:e})})),(0,e.createElement)(t.FlexItem,null,(0,e.createElement)(c,null,"rem"))))),(0,e.createElement)(t.FlexBlock,null,(0,e.createElement)(r,null,(0,e.createElement)(c,null,"Mobile"),(0,e.createElement)(t.Flex,null,(0,e.createElement)(t.FlexBlock,null,(0,e.createElement)(t.TextControl,{value:l.attributes.mobile,onChange:e=>l.setAttributes({mobile:e})})),(0,e.createElement)(t.FlexItem,null,(0,e.createElement)(c,null,"rem"))))))))},save:function(){return null}})}();