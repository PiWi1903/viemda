$(document).ready(function (e) {
  function t(e, t = !1, a = "") {
    var n = "",
      o = "",
      i = "";
    return (
      "manager" === e &&
        (n =
          '<img class="chat-content-desc-image" src="img/avtrudy.png" alt="" />'),
      t && ((o = "text-" + t), (i = ' class="p' + t + '"')),
      '<div class="chat-content-item ' +
        e +
        " " +
        o +
        '"><div class="chat-content-desc">' +
        n +
        '<div class="chat-content-desc-item ' +
        e +
        '"><p' +
        i +
        ">" +
        a +
        "</p></div></div></div>"
    );
  }

  function a(a) {
    $(".chat-content-buttons-gender").remove(),
      $(".chat-content-list").append(t("user")),
      $(".chat-content-item.user p").html(e.managerDialog[1][a].text),
      $(".chat-content-list").append(t("manager")),
      $(".chat-content-item.manager p").typed({
        strings: [e.managerDialog[2].text],
        showCursor: !1,

        callback: function () {
          setTimeout(function () {
            //

            //
            var n, o, r;
            $(".chat-content-list").append(
              '<form name="questionForm" class="form"><div class="form-group"><div class="form-group-inline">' +
                '<select name="day" class="custom-select select-day">' +
                '<option value="" selected="selected">Day</option>' +
                (function () {
                  for (
                    i = e.DateBirthday[0].day[0];
                    i < e.DateBirthday[0].day[1] + 1;
                    i++
                  )
                    n += '<option value="' + i + '">' + i + "</option>";
                  return n;
                })() +
                "</select>" +
                "</div>" +
                '<div class="form-group-inline full-month">' +
                '<select name="month" class="custom-select select-month">' +
                '<option value="" selected="selected">Month</option>' +
                ($.each(e.DateBirthday[0].month, function (e, t) {
                  o += '<option value="' + (e + 1) + '">' + t + "</option>";
                }),
                o) +
                "</select>" +
                "</div>" +
                '<div class="form-group-inline year">' +
                '<select name="year" class="custom-select select-year">' +
                '<option value="" selected="selected">Year</option>' +
                (function () {
                  for (
                    i = e.DateBirthday[0].year[0];
                    i < e.DateBirthday[0].year[1] + 1;
                    i++
                  )
                    r += '<option value="' + i + '">' + i + "</option>";
                  return r;
                })() +
                "</select>" +
                "</div>" +
                "</div>" +
                "</form>"
            ),
              e.Scroll();
            var c,
              s = [],
              d = $('form[name="questionForm"]');
            d.find("select").addClass("empty_field"),
              d.find("select").change(function () {
                if (
                  (d.find("select").each(function () {
                    "" != $(this).val()
                      ? $(this).removeClass("empty_field")
                      : $(this).addClass("empty_field"),
                      (s[this.name] = $(this).val());
                  }),
                  0 == d.find(".empty_field").size())
                ) {
                  d.remove();
                  var n = e.MonthVariantType[s.month - 1],
                    o = e.MonthVariant[n][0],
                    i = e.MonthVariant[n][1],
                    r = e.MonthVariant[n][2];
                  (c = [s.day, s.month]),
                    (c = e.getZodiak(c)),
                    (s.day = s.day.length > 1 ? s.day : "0" + s.day),
                    (s.month = s.month.length > 1 ? s.month : "0" + s.month),
                    $(".chat-content-list").append(t("user", "date")),
                    $(".chat-content-item.user.text-date p").html(
                      s.day + "." + s.month + "." + s.year
                    );
                  var l = [],
                    m = [],
                    u = [],
                    p = {
                      zodie: e.ZodiakName[c - 1].name,
                      date: s.day,
                      month1: o,
                      month2: i,
                      month3: r,
                      year: s.year,
                      number: e.randomIntFromInterval(4, 10),
                    };
                  $(".chat-content-list").append(t("manager", "birthday"));
                  var u = e.userZodiak[0].text,
                    h = e.Replace(u, p);
                  $(".chat-content-item.manager p").typed({
                    strings: [h],
                    showCursor: !1,
                    callback: function () {
                      var t = [{ text: e.Replace(e.socNumber[0].text, p) }];
                      (l = $.merge(e.managerVariants[a][0][0], t)),
                        (l = $.merge(l, e.managerVariants[a][0][1])),
                        $.each(l, function (t, a) {
                          m.push(e.Replace(a.text, p));
                        }),
                        e.LoadListMessages(m, p.zodie);
                    },
                  });
                }
              });
          }, 1e3);
        },
      });
  }

  var n = document.querySelector(".country_action").innerHTML,
    o = document.querySelector(".new_price_val").innerHTML,
    r = document.querySelector(".new_price_cur").innerHTML;
  console.log(o),
    console.log(r),
    (e.randomIntFromInterval = function (e, t) {
      return Math.floor(Math.random() * (t - e + 1) + e);
    }),
    (e.managerDialog = [
      {
        text: "Xin Chào!<br>Tôi là PSG.TS Hồ Bá Do. Giảng viên cao cấp Viện Quân Y - Phó chủ tịch hội Y Học Cổ Truyền. <br>",
      },

      {
        text: "Bạn đang có triệu chứng các Bệnh về Viêm Da cơ địa (Tổ đỉa, Vảy nến, Á sừng, Hắc lào)<br> Cần nghe lời khuyên đến từ những Chuyên gia hàng đầu Việt Nam ",
        m: { text: "Nghe Chuyên gia tư vấn" },
        w: { text: "Tạm thời chưa có nhu cầu" },
      },
      {
        text: "Bạn hãy cung cấp Năm sinh để Tôi Tư vấn chính xác tiền sử bệnh ",
      },
    ]),
    (e.userZodiak = [
      {
        text: "Cảm ơn bạn. Ở độ tuổi của bạn đang chiếm đa số những ca mắc về Viêm Da. Cũng là thời điểm vàng để có thể trị dứt điểm các bệnh về Da ",
      },
    ]),
    (e.managerVariants = {
      w: [
        [
          [
            {
              text: "Khi có nhu cầu nghe tư vấn về các bệnh lý về Da hãy liên hệ với chúng tôi <br>",
            },
          ],
          [{ text: " " }],
        ],
      ],
      m: [
        [
          [
            {
              text: "Tất cả những người bị Viêm da cơ địa, tổ đỉa, vảy nến, á sừng... đều có triệu chứng ngứa ngáy, khó chịu sẽ xuất hiện tại những vị trí bị bong da, khô da,… <br> Khi người bệnh càng gãi hoặc tác động đến lớp da này sẽ bong ra có thể rỉ máu gây lở loét. Và khi bạn càng gãi thì sẽ lan ngứa diện rộng hơn.",
            },
            { text: '<br><img width="400px" src="img/1.jpg"></br>' },
            { text: '<br><img width="400px" src="img/2.png"></br>' },
            {
              text: "Bệnh viêm da cơ địa không nguy hiểm đến tính mạng nhưng ảnh hưởng nghiêm trọng đến sức khỏe, bệnh gây chướng ngại về tâm lý vì ảnh hưởng đến thẩm mỹ và giao tiếp; ngứa nhiều gây mất ngủ, giảm tập trung trong công việc, gây khó chịu và trầm cảm cho người bệnh, làm giảm chất lượng cuộc sống.<br>Nếu bệnh viêm da cơ địa không được điều trị đúng cách và chăm sóc da thường xuyên có thể khiến bệnh trở nặng gây ra những biến chứng phức tạp như: Viêm da thần kinh, viêm da cơ địa bội nhiễm, sốt cao, đau nhức, sưng hạch bạch huyết,...",
            },
            {
              text: "Cho đến thời điểm hiện tại, các kiến thức y khoa vẫn chưa đủ cơ sở để có thể chỉ rõ nguyên nhân dẫn đến tình trạng Viêm Da cơ địa ở nhiều người.<br>Tuy nhiên, một số nghiên cứu đã chứng minh rằng, bệnh nhân mắc phải bệnh lý này do cơ địa bị viêm da thì một số yếu tố sau đây có thể là tác nhân chính. Cụ thể gồm:",
            },
            {
              text: "Dị ứng cơ địa: bệnh nhân thường là những đối tượng có hệ miễn dịch kém, dễ bị rối loạn. <br>Trong đó, sự kích ứng của da cũng là dấu hiệu cảnh báo cơ thể đang trong tình trạng phản ứng ngược lại với tác nhân gây bệnh. Do đó, cách chữa bệnh á sừng cho những trường hợp này thường dễ dàng hơn.",
            },
            {
              text: "Di truyền: những đối tượng có bố mẹ bị bệnh á sừng thường có nguy cơ mắc bệnh khá cao.",
            },
            {
              text: "Ngoài ra, sự tiếp xúc của da với một số chất tẩy, chất hóa học cũng là yếu tố khiến da trở nên mẫn cảm nhiều hơn và gia tăng khả năng hình thành bệnh và tái phát. Phần lớn những bệnh nhân mắc bệnh là các đối tượng làm việc trong các khu công nghiệp hoặc sống trong môi trường độc hại.<br> Ví dụ như công nhân làm việc ở nhà máy sản xuất thuốc tẩy, xà phòng, người nội trợ, thợ giặt,...",
            },
            {
              text: "Bệnh này xuất hiện rất phổ biến và có thể điều trị tại nhà không nhất thiết phải đi viện cho tốn kém. ",
            },
            {
              text: "có rất nhiều bệnh nhân đã bị viêm da rất lâu, kể cả đi viện thăm khám nhưng điều trị mãi vẫn chưa khỏi, vậy nguyên nhân là do đâu?",
            },
            {
              text: "Vì đa số các bác sĩ sẽ kê cho bệnh nhân các loại thuốc tây bôi ngoài da có chứa thành phần Corticoid. Có khả năng khắc phục tình trạng viêm da một cách nhanh chóng(Nhưng chỉ trong thời gian tạm thời). Mà chất này có thể làm giảm khả năng miễn dịch của da khiến tăng nguy cơ nhiễm trùng. Nếu sử dụng lâu dài có khả năng dẫn đến ung thư da tôi sẽ khuyên bệnh nhân không được sử dụng thường xuyên.",
            },
            {
              text: " Các bạn nào đang có các bệnh ngoài da như vẩy nến, á sừng, tổ đỉa, viêm da cơ địa...",
            },
            {
              text: "Thì nên dùng những sản phẩm đông y lành tính, có triết xuất từ thiên nhiên thay vì dùng những loại thuốc tây y chỉ có tác dụng tạm thời. <br>Các loại thảo dược tự nhiên sẽ có tác dụng làm dịu và giảm kích ứng da. Đặc biệt là da nhạy cảm hoặc da bị tổn thương",
            },
            {
              text: "Khi sử dụng những sản phẩm đông y sẽ có tác dụng đào thải độc tố từ trong ra ngoài tuy kết quả không nhanh như tây y nhưng rất lành tính, không gây kích ứng và có thể chữa dứt điểm nếu chúng ta kiên trì.",
            },
            {
              text: "Khi đã tìm hiểu và chọn lựa những sản phẩm đông y. Bạn phải lựa chọn những sản phẩm có xuất sứ rõ ràng, được nghiên cứu ở những viện có chuyên môn cao về các phẩm đông y như viện y học dân tộc cổ truyền, Và phải được bộ y tế cấp phép",
            },
            {
              text: "Tôi sẽ giới thiệu cho bạn bộ sản phẩm Damos được nghiên cứu bởi viện Y Học Dân Tộc cổ truyền giúp điều trị các bệnh như viêm da cơ địa, tổ đỉa, á sừng từ sâu bên trong ",
            },
            { text: '<br><img width="400px" src="img/4.jpg"></br>' },
            {
              text: "VTV Đưa Tin cùng rất nhiều các giáo sư, bác sĩ và người nổi tiếng khuyên dùng",
            },
          ],
          [{ text: " " }],
        ],
      ],
    }),
    (e.socNumber = [
      {
        text: "Xem thêm thông tin và Tư Vấn Miễn Phí tại đây",
      },
    ]),
    (e.Forms = function (t) {
      e.FormsParams = {
        method: "POST",
        action: "",
        inputs: [
          {
            name: "name",
            value: "",
            placeholder: "Enter your name",
            type: "text",
            required: !0,
          },
          {
            name: "phone",
            value: "",
            placeholder: "Enter your phone",
            type: "tel",
            required: !0,
          },
        ],
        btn_text: "Order amulet",
        title: "Order form amulet by Hanz Cua",
      };
      return function () {
        document.getElementById("cont_form").style.display = "block";
      };
    }),
    (e.getZodiak = function (t) {
      var a = parseInt(t[0]);
      switch (parseInt(t[1])) {
        case 1:
          e.zodiak = a < 20 ? 10 : 11;
          break;
        case 2:
          e.zodiak = a < 19 ? 11 : 12;
          break;
        case 3:
          e.zodiak = a < 21 ? 12 : 1;
          break;
        case 4:
          e.zodiak = a < 20 ? 1 : 2;
          break;
        case 5:
          e.zodiak = a <= 21 ? 2 : 3;
          break;
        case 6:
          e.zodiak = a < 21 ? 3 : 4;
          break;
        case 7:
          e.zodiak = a < 23 ? 4 : 5;
          break;
        case 8:
          e.zodiak = a < 23 ? 5 : 6;
          break;
        case 9:
          e.zodiak = a < 23 ? 6 : 7;
          break;
        case 10:
          e.zodiak = a < 23 ? 7 : 8;
          break;
        case 11:
          e.zodiak = a < 22 ? 8 : 9;
          break;
        case 12:
          e.zodiak = a < 22 ? 9 : 10;
      }
      return e.zodiak;
    }),
    (e.ZodiakName = [
      { name: "Aries", id: 1 },
      { name: "Taurus", id: 2 },
      { name: "Gemini", id: 3 },
      { name: "Cancer", id: 4 },
      { name: "Leo", id: 5 },
      { name: "Virgo", id: 6 },
      { name: "Libra", id: 7 },
      { name: "Scorpio", id: 8 },
      { name: "Sagittarius", id: 9 },
      { name: "Capricorn", id: 10 },
      { name: "Aquarius", id: 11 },
      { name: "Pisces", id: 12 },
    ]),
    (e.DateBirthday = [
      {
        day: [1, 31],
        month: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        year: [1940, 2000],
      },
    ]),
    (e.MonthVariantType = [
      "january",
      "fabruary",
      "march",
      "april",
      "may",
      "june",
      "august",
      "august",
      "september",
      "october",
      "november",
      "december",
    ]),
    (e.MonthVariant = {
      january: ["январь", "января", "январе"],
      fabruary: ["февраль", "февраля", "феврале"],
      march: ["март", "марта", "марте"],
      april: ["апрель", "апреля", "апреле"],
      may: ["май", "мая", "мае"],
      june: ["июнь", "июня", "июне"],
      july: ["июль", "июля", "июле"],
      august: ["август", "августа", "августе"],
      september: ["сентябрь", "сентября", "сентябре"],
      october: ["октябрь", "октября", "октебре"],
      november: ["ноябрь", "ноября", "ноябре"],
      december: ["декабрь", "декабря", "декабре"],
    }),
    (e.Scroll = function () {
      $(document).ready(function () {
        !(function (e, t = function () {}, a = []) {
          (e = jQuery(e)), (t = t.bind(e));
          var n = -1,
            o = -1;
          setInterval(function () {
            (e.height() == n && e.width() == o) ||
              ((n = e.height()),
              (o = e.width()),
              e.parent().animate({ scrollTop: n }, 50),
              t.apply(null, a));
          }, 100);
        })(".chat-content-container .chat-content-list", function (e) {}, []);
      });
    }),
    (e.Replace = function (e, t) {
      var a = e;
      return (
        Object.entries(t).forEach((e) => {
          var t = "{" + e[0] + "}",
            n = new RegExp(t, "g");
          a = a.replace(n, e[1]);
        }),
        a
      );
    }),
    (e.LoadListMessages = function (a, n) {
      var o,
        i = 1,
        r = 1,
        c = { showCursor: !1 };
      for (o = a.length; i < o + 1; i++)
        (c.onStringTyped = function () {
          ++r < o + 1 &&
            ((c.array_id = r),
            (c.strings = [a[r - 1]]),
            $(".chat-content-list").append(t("manager", r)),
            $(".chat-content-item.manager p.p" + r).typed(c),
            e.Scroll()),
            r == o + 1 &&
              setTimeout(function () {
                $(".chat-content-list").append(e.Forms(n)), e.Scroll();
              }, 1500); // 1500
        }),
          1 == i &&
            ((c.array_id = i),
            (c.strings = [a[i - 1]]),
            $(".chat-content-list").append(t("manager", i)),
            $(".chat-content-item.manager p.p" + i).typed(c),
            e.Scroll());
    }),
    $(window).on("load", function () {
      $(".chat-content-list").append(t("manager")),
        e.Scroll(),
        $(".chat-content-item.manager p").typed({
          strings: [e.managerDialog[0].text],
          showCursor: !1,
          callback: function () {
            setTimeout(function () {
              $(".chat-content-list").append(t("manager")),
                e.Scroll(),
                $(".chat-content-item.manager p").typed({
                  strings: [e.managerDialog[1].text],
                  showCursor: !1,
                  callback: function () {
                    setTimeout(function () {
                      var t;
                      e.Scroll(),
                        $(".chat-content-list").append(
                          '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="chooseGender" data-type="m">' +
                            (t = e.managerDialog[1]).m.text +
                            '</span></div><div class="chat-content-buttons-gender-block"><span class="chooseGender" data-type="w">' +
                            t.w.text +
                            "</span></div></div>"
                        ),
                        e.Scroll(),
                        $(".chooseGender").on("click", function () {
                          a($(this).data("type"));
                        });
                    }, 1e3);
                  },
                });
            }, 1e3);
          },
        });
    });
});
