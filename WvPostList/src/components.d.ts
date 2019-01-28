/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/redux';


export namespace Components {

  interface WvAddPost {}
  interface WvAddPostAttributes extends StencilHTMLAttributes {}

  interface WvComment {
    'comment': Object;
  }
  interface WvCommentAttributes extends StencilHTMLAttributes {
    'comment'?: Object;
  }

  interface WvPostList {
    'currentUser': string;
    'isDebug': string;
    'posts': string;
    'relatedRecordId': string;
    'relatedRecords': string;
    'siteRootUrl': string;
  }
  interface WvPostListAttributes extends StencilHTMLAttributes {
    'currentUser'?: string;
    'isDebug'?: string;
    'posts'?: string;
    'relatedRecordId'?: string;
    'relatedRecords'?: string;
    'siteRootUrl'?: string;
  }

  interface WvPost {
    'post': Object;
  }
  interface WvPostAttributes extends StencilHTMLAttributes {
    'post'?: Object;
  }
}

declare global {
  interface StencilElementInterfaces {
    'WvAddPost': Components.WvAddPost;
    'WvComment': Components.WvComment;
    'WvPostList': Components.WvPostList;
    'WvPost': Components.WvPost;
  }

  interface StencilIntrinsicElements {
    'wv-add-post': Components.WvAddPostAttributes;
    'wv-comment': Components.WvCommentAttributes;
    'wv-post-list': Components.WvPostListAttributes;
    'wv-post': Components.WvPostAttributes;
  }


  interface HTMLWvAddPostElement extends Components.WvAddPost, HTMLStencilElement {}
  var HTMLWvAddPostElement: {
    prototype: HTMLWvAddPostElement;
    new (): HTMLWvAddPostElement;
  };

  interface HTMLWvCommentElement extends Components.WvComment, HTMLStencilElement {}
  var HTMLWvCommentElement: {
    prototype: HTMLWvCommentElement;
    new (): HTMLWvCommentElement;
  };

  interface HTMLWvPostListElement extends Components.WvPostList, HTMLStencilElement {}
  var HTMLWvPostListElement: {
    prototype: HTMLWvPostListElement;
    new (): HTMLWvPostListElement;
  };

  interface HTMLWvPostElement extends Components.WvPost, HTMLStencilElement {}
  var HTMLWvPostElement: {
    prototype: HTMLWvPostElement;
    new (): HTMLWvPostElement;
  };

  interface HTMLElementTagNameMap {
    'wv-add-post': HTMLWvAddPostElement
    'wv-comment': HTMLWvCommentElement
    'wv-post-list': HTMLWvPostListElement
    'wv-post': HTMLWvPostElement
  }

  interface ElementTagNameMap {
    'wv-add-post': HTMLWvAddPostElement;
    'wv-comment': HTMLWvCommentElement;
    'wv-post-list': HTMLWvPostListElement;
    'wv-post': HTMLWvPostElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
