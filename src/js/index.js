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

    $(document).mouseup(function (e) {
      let block = $(".form-wrapper");
      if (!block.is(e.target) &&
        block.has(e.target).length === 0) {
        $('.modal').removeClass("open");
      }
    });



    // postForm() {
    //   this.isFormSending = true



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
        to: 'justicejesus1237@gmail.com',
        subject: 'contact form',
        text: 'yo',
        html: createHtmlForEmail()
      }


      $.ajax({
        url: 'https://api.42.works/mailer',
        type: 'POST',
        cache: false,
        // data: {
        //   'name': name,
        //   'contact': contact,
        //   'company': company,
        //   'position': position,
        //   'vacancy': vacancy,
        //   'site': site
        // },
        // dataType: 'html',
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
        // body: JSON.stringify(letterData),
        // headers: {
        //   'Content-Type': 'application/json'
        // },
      });


      // fetch('https://api.42.works/mailer', {
      //     method: 'POST',
      //     body: JSON.stringify(letterData),
      //     headers: {
      //       'Content-Type': 'application/json'
      //     }
      //   })
      //   .then((response) => {
      //     // console.log('response', response)
      //     this.isFormSending = false
      //     this.$emit('toggleModal', response.status)
      //     this.clearForm()
      //   })
      //   .catch((err) => {
      //     console.err('err', err)
      //     this.isFormSending = false
      //     this.$emit('toggleModal', response.status)
      //     this.clearForm()
      //   })
    });
  });