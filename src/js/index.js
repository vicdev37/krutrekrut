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

    $(".btn-black").each(function () {
      $(this).on('click', function () {
        $('.modal-2').addClass("open");
        $('.form-wrapper-2').addClass("open");
      })
    })

    $('.close').on('click', function () {
      $('.form-wrapper-2').removeClass("open");
      $('.modal-2').removeClass("open");
    })

    $(document).mouseup(function (e) {
      let block = $(".form-wrapper");
      let block2 = $(".form-wrapper-2");
      if (!block.is(e.target) &&
        block.has(e.target).length === 0) {
        $('.modal').removeClass("open");
      }
      if (!block2.is(e.target) &&
        block2.has(e.target).length === 0) {
        $('.modal-2').removeClass("open");
      }
    });
    // form

    $('#form').on('submit', function (event) {
      event.preventDefault()
      console.log('fsdfsd');
      let name = $('#name').val().trim();
      let contact = $('#contact').val().trim();
      let company = $('#company').val().trim();
      let position = $('#position').val().trim();
      let vacancy = $('#vacancy').val().trim();
      let site = $('#site').val().trim();

      const createHtmlForEmail = () => {
        return `<div>
          <div>
            name: <b>${name}</b>
          </div>
          <div>
            contact: <b>${contact}</b>
          </div>
          <div>
            company: <b>${company}</b>
          </div>
          <div>
            position: <b>${position}</b>
          </div>
          <div>
            vacancy: <b>${vacancy}</b>
          </div>
          <div>
            site: <b>${site}</b>
          </div>
        </div>`
      }

      if (name == '') {
        $('#errorMassage').text("Введите имя")
        return false;
      } else if (contact == '') {
        $('#errorMassage').text("Введите контактные данные")
        return false;
      } else if (company == '') {
        $('#errorMassage').text("Введите название компании")
        return false;
      } else if (position == '') {
        $('#errorMassage').text("Введите должность")
        return false;
      }
      $('#errorMassage').text('')

      const letterData = {
        to: 'krutrecruit@krutrecruit.com',
        subject: 'Форма "Бесплатно получить кандидата заполнена"',
        text: 'yo',
        html: createHtmlForEmail()
      }


      $.ajax({
        url: 'https://api.42.works/mailer',
        type: 'POST',
        cache: false,
        data: JSON.stringify(letterData),
        beforeSend: function () {
          $('#sendForm').prop("disabled", true)
        },
        success: function (data) {
          if (!data) {
            alert('Произошла ошибка')
          } else {
            $('#form').trigger("reset")
          }
          $('#sendForm').prop("disabled", false)
        },
        contentType: "application/json; charset=utf-8",
      });
    });


    $('#form2').on('submit', function (event) {
      event.preventDefault()
      console.log('fsdfsd');
      let name2 = $('#name2').val().trim();
      let contact2 = $('#contact2').val().trim();
      let company2 = $('#company2').val().trim();
      let position2 = $('#position2').val().trim();
      let vacancy2 = $('#vacancy2').val().trim();
      let site2 = $('#site2').val().trim();

      const createHtmlForEmail2 = () => {
        return `<div>
          <div>
            name: <b>${name2}</b>
          </div>
          <div>
            contact: <b>${contact2}</b>
          </div>
          <div>
            company: <b>${company2}</b>
          </div>
          <div>
            position: <b>${position2}</b>
          </div>
          <div>
            vacancy: <b>${vacancy2}</b>
          </div>
          <div>
            site: <b>${site2}</b>
          </div>
        </div>`
      }

      if (name2 == '') {
        $('#errorMassage').text("Введите имя")
        return false;
      } else if (contact2 == '') {
        $('#errorMassage').text("Введите контактные данные")
        return false;
      } else if (company2 == '') {
        $('#errorMassage').text("Введите название компании")
        return false;
      } else if (position2 == '') {
        $('#errorMassage').text("Введите должность")
        return false;
      }
      $('#errorMassage').text('')

      const letterData = {
        to: 'krutrecruit@krutrecruit.com',
        subject: 'Форма "Узнать точную стоимость и сроки заполнена"',
        text: 'yo',
        html: createHtmlForEmail2()
      }


      $.ajax({
        url: 'https://api.42.works/mailer',
        type: 'POST',
        cache: false,
        data: JSON.stringify(letterData),
        beforeSend: function () {
          $('#sendForm').prop("disabled", true)
        },
        success: function (data) {
          if (!data) {
            alert('Произошла ошибка')
          } else {
            $('#form2').trigger("reset")
          }
          $('#sendForm').prop("disabled", false)
        },
        contentType: "application/json; charset=utf-8",
      });
    });
  });