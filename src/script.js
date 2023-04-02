var d, h, m, $messages = $(".messages-content"),
   i = 0;

function updateScrollbar() {
   $messages.mCustomScrollbar("update").mCustomScrollbar("scrollTo", "bottom", {
      scrollInertia: 10,
      timeout: 0
   })
}

function setDate() {
   d = new Date, m != d.getMinutes() && (m = d.getMinutes(), $('<div class="timestamp">' + d.getHours() + ":" + m + "</div>").appendTo($(".message:last")))
}

function insertMessage() {
   if (msg = $(".message-input").val(), "" == $.trim(msg)) return !1;
   $('<div class="message message-personal">' + msg + "</div>").appendTo($(".mCSB_container")).addClass("new"), setDate(), $(".message-input").val(null), updateScrollbar(), setTimeout((function () {
      fakeMessage()
   }), 1e3 + 20 * Math.random() * 100)
}
$(window).load((function () {
   $messages.mCustomScrollbar(), setTimeout((function () {
      fakeMessage()
   }), 100)
})), $(".message-submit").click((function () {
   insertMessage()
})), $(window).on("keydown", (function (e) {
   if (13 == e.which) return insertMessage(), !1
}));
var Fake = ["How are you?", "What do you do?", "That's awesome", ":)"];

function fakeMessage() {
   if ("" != $(".message-input").val()) return !1;
   $('<div class="message loading new"><figure class="avatar"><img src="https://img.icons8.com/ios-filled/50/000000/guest-male--v1.png"/></figure><span></span></div>').appendTo($(".mCSB_container")), updateScrollbar(), setTimeout((function () {
      $(".message.loading").remove(), $('<div class="message new"><figure class="avatar"><img src="https://img.icons8.com/ios-filled/50/000000/guest-male--v1.png"/></figure>' + Fake[i] + "</div>").appendTo($(".mCSB_container")).addClass("new"), setDate(), updateScrollbar(), i++
   }), 1e3 + 20 * Math.random() * 100)
}