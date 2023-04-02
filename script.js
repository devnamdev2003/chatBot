var $messages = $('.messages-content'),
      d, h, m,
      i = 0;

$(window).load(function () {
      $messages.mCustomScrollbar();
      setTimeout(function () {
            fakeMessage();
      }, 100);
});

function updateScrollbar() {
      $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
            scrollInertia: 10,
            timeout: 0
      });

}

function setDate() {
      d = new Date();
      if (m != d.getMinutes()) {
            m = d.getMinutes();
            $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
      }
}

function insertMessage() {
      msg = $('.message-input').val();
      if ($.trim(msg) == '') {
            return false;
      }
      $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
      setDate();
      $('.message-input').val(null);
      updateScrollbar();
      setTimeout(function () {
            fakeMessage();
      }, 1000 + Math.random() * 20 * 100);
}

$('.message-submit').click(function () {
      insertMessage();
});

$(window).on('keydown', function (e) {
      if (e.which == 13) {
            insertMessage();
            return false;
      }
});

var Fake = [
      'How are you?',
      'What do you do?',
      'That\'s awesome',
      ':)'];


function fakeMessage() {
      if ($('.message-input').val() != '') {
            return false;
      }
      $('<div class="message loading new"><figure class="avatar"><img src="https://img.icons8.com/ios-filled/50/000000/guest-male--v1.png"/></figure><span></span></div>').appendTo($('.mCSB_container'));
      updateScrollbar();

      setTimeout(function () {
            $('.message.loading').remove();
            $('<div class="message new"><figure class="avatar"><img src="https://img.icons8.com/ios-filled/50/000000/guest-male--v1.png"/></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
            setDate();
            updateScrollbar();
            i++;
      }, 1000 + Math.random() * 20 * 100);

}
