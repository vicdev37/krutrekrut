var jquery = require("jquery");
const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;
import aos from 'aos'

window.$ = window.jQuery = jquery;
import 'babel-polyfill';
import {
  each
} from 'jquery';

$(document).ready(() => {
  $(".btn-red").each(function () {
    $(this).on('click', function () {
      $('.modal').addClass("open");
      $('.form-wrapper').addClass("open");
    })
  })

  $('.close').on('click', function () {
    $('.form-wrapper').removeClass("open");
    $('.modal').removeClass("open");
  })
});