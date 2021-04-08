/* Global variables */
"use strict"
var $document = $(document),
  $window = $(window),
  plugins = {
    affixElement: $("#navbar-main"),
    mainSlider: $("#slider"),
    categoryCarousel: $(".category-carousel"),
    servicesCarousel: $(".services-carousel"),
    priceCarousel: $(".price-carousel"),
    testimonialsCarousel: $(".testimonials-carousel"),
    numberCarousel: $(".number-carousel"),
    textIconCarousel: $(".text-icon-carousel"),
    postCarousel: $(".post-carousel"),
    gallery: $("#gallery"),
    backToTop: $(".back-to-top"),
    submenu: $("[data-submenu]"),
    timer: $("#timerBlock .timer"),
    waveSlider: $("#sea"),
    waveSliderFooter: $("#footerSea"),
    isotopeGallery: $(".gallery-isotope"),
    postGallery: $(".blog-isotope"),
    contactForm: $("#contactform"),
    orderRequestFormSimple: $("#orderRequestFormSimple"),
    requestForm: $("#requestForm"),
    requestFormSimple: $("#requestFormSimple"),
    productImage: $("#mainImage"),
    rangeSlider: $("#rangeSlider1"),
    prdCarousel: $(".prd-carousel"),
    stickyHeader: $(".page-header.sticky"),
  }

/* Initialize All Scripts */
$document.ready(function () {
  $("#new").on("click", function () {
    $("#exist_title").css("display", "none")
    $("#new_title").css("display", "block")
    $("#new").css("display", "none")
    $("#cancel").css("display", "inline")
    $("#addnew").css("display", "inline")
    $("#update").css("display", "none")
    $("#delete").css("display", "none")

    if ($("#hosting_price").length > 0) {
      $("#hosting_price").val("")
    }
    if ($("#hosting_space").length > 0) {
      $("#hosting_space").val("")
    }
    if ($("#hosting_transfer").length > 0) {
      $("#hosting_transfer").val("")
    }
    if ($("#hosting_setup").length > 0) {
      $("#hosting_setup").val("")
    }

    if ($("#cable_price").length > 0) {
      $("#cable_price").val("")
    }
    if ($("#cable_speed").length > 0) {
      $("#cable_speed").val("")
    }
    if ($("#cable_transfer").length > 0) {
      $("#cable_transfer").val("")
    }
    if ($("#cable_notes").length > 0) {
      $("#cable_notes").val("")
    }

    if ($("#wireless_price").length > 0) {
      $("#wireless_price").val("")
    }
    if ($("#wireless_speed").length > 0) {
      $("#wireless_speed").val("")
    }
    if ($("#wireless_transfer").length > 0) {
      $("#wireless_transfer").val("")
    }
    if ($("#wireless_notes").length > 0) {
      $("#wireless_notes").val("")
    }

    if ($("#dsl_price").length > 0) {
      $("#dsl_price").val("")
    }
    if ($("#dsl_speed").length > 0) {
      $("#dsl_speed").val("")
    }
    if ($("#dsl_transfer").length > 0) {
      $("#dsl_transfer").val("")
    }
    if ($("#dsl_notes").length > 0) {
      $("#dsl_notes").val("")
    }

    if ($("#voip_price").length > 0) {
      $("#voip_price").val("")
    }
    if ($("#voip_speed").length > 0) {
      $("#voip_speed").val("")
    }
    if ($("#voip_transfer").length > 0) {
      $("#voip_transfer").val("")
    }
    if ($("#voip_notes").length > 0) {
      $("#voip_notes").val("")
    }

    if ($("#mail_price").length > 0) {
      $("#mail_price").val("")
    }
    if ($("#mail_speed").length > 0) {
      $("#mail_speed").val("")
    }
    if ($("#mail_transfer").length > 0) {
      $("#mail_transfer").val("")
    }
    if ($("#mail_notes").length > 0) {
      $("#mail_notes").val("")
    }

    if ($("#server_price").length > 0) {
      $("#server_price").val("")
    }
    if ($("#server_speed").length > 0) {
      $("#server_speed").val("")
    }
    if ($("#server_transfer").length > 0) {
      $("#server_transfer").val("")
    }
    if ($("#server_notes").length > 0) {
      $("#server_notes").val("")
    }

    if ($("#dial_price").length > 0) {
      $("#dial_price").val("")
    }
    if ($("#dial_speed").length > 0) {
      $("#dial_speed").val("")
    }
    if ($("#dial_transfer").length > 0) {
      $("#dial_transfer").val("")
    }
    if ($("#dial_notes").length > 0) {
      $("#dial_notes").val("")
    }

    if ($("#display_order").length > 0) {
      $("#display_order").val("")
    }
    if ($("#caveats").length > 0) {
      formData.append("caveats", $("#caveats").val())
    }

    tinyMCE.activeEditor.setContent("")
  })
  $("#cancel").on("click", function () {
    $("#new_title").css("display", "none")
    $("#exist_title").css("display", "block")
    $("#cancel").css("display", "none")
    $("#new").css("display", "inline")
    $("#addnew").css("display", "none")
    tinyMCE.activeEditor.setContent("")
  })

  $("#addnew").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow")
    if ($("#news_title").length > 0) {
      var act = "add_news"
      var titl = $("#news_title").val()
    }
    if ($("#offer_title").length > 0) {
      var act = "add_offer"
      var titl = $("#offer_title").val()
    }
    if ($("#testimonial_title").length > 0) {
      var act = "add_test"
      var titl = $("#testimonial_title").val()
    }
    if ($("#hosting_title").length > 0) {
      var act = "add_hosting"
      var titl = $("#hosting_title").val()
    }
    if ($("#cable_title").length > 0) {
      var act = "add_cable"
      var titl = $("#cable_title").val()
    }
    if ($("#wireless_title").length > 0) {
      var act = "add_wireless"
      var titl = $("#wireless_title").val()
    }
    if ($("#dsl_title").length > 0) {
      var act = "add_dsl"
      var titl = $("#dsl_title").val()
    }
    if ($("#voip_title").length > 0) {
      var act = "add_voip"
      var titl = $("#voip_title").val()
    }
    if ($("#mail_title").length > 0) {
      var act = "add_mail"
      var titl = $("#mail_title").val()
    }
    if ($("#dial_title").length > 0) {
      var act = "add_dial"
      var titl = $("#dial_title").val()
    }
    if ($("#cable_bus_title").length > 0) {
      var act = "add_bus_cable"
      var titl = $("#cable_bus_title").val()
    }
    if ($("#wireless_bus_title").length > 0) {
      var act = "add_bus_wireless"
      var titl = $("#wireless_bus_title").val()
    }
    if ($("#dsl_bus_title").length > 0) {
      var act = "add_bus_dsl"
      var titl = $("#dsl_bus_title").val()
    }
    if ($("#voip_bus_title").length > 0) {
      var act = "add_bus_voip"
      var titl = $("#voip_bus_title").val()
    }
    if ($("#mail_bus_title").length > 0) {
      var act = "add_bus_mail"
      var titl = $("#mail_bus_title").val()
    }
    if ($("#dial_bus_title").length > 0) {
      var act = "add_bus_dial"
      var titl = $("#dial_bus_title").val()
    }
    if ($("#server_title").length > 0) {
      var act = "add_server"
      var titl = $("#server_title").val()
    }
    if ($("#faq_title").length > 0) {
      var act = "add_faq"
      var titl = $("#faq_title").val()
    }
    var content = tinymce.activeEditor.getContent()

    var formData = new FormData()

    if ($("#hosting_price").length > 0) {
      formData.append("hosting_price", $("#hosting_price").val())
    }
    if ($("#hosting_transfer").length > 0) {
      formData.append("hosting_transfer", $("#hosting_transfer").val())
    }
    if ($("#hosting_space").length > 0) {
      formData.append("hosting_space", $("#hosting_space").val())
    }
    if ($("#hosting_setup").length > 0) {
      formData.append("hosting_setup", $("#hosting_setup").val())
    }

    if ($("#cable_price").length > 0) {
      formData.append("price", $("#cable_price").val())
    }
    if ($("#cable_transfer").length > 0) {
      formData.append("transfer", $("#cable_transfer").val())
    }
    if ($("#cable_speed").length > 0) {
      formData.append("speed", $("#cable_speed").val())
    }
    if ($("#cable_notes").length > 0) {
      formData.append("notes", $("#cable_notes").val())
    }

    if ($("#wireless_price").length > 0) {
      formData.append("price", $("#wireless_price").val())
    }
    if ($("#wireless_transfer").length > 0) {
      formData.append("transfer", $("#wireless_transfer").val())
    }
    if ($("#wireless_speed").length > 0) {
      formData.append("speed", $("#wireless_speed").val())
    }
    if ($("#wireless_notes").length > 0) {
      formData.append("notes", $("#wireless_notes").val())
    }

    if ($("#dsl_price").length > 0) {
      formData.append("price", $("#dsl_price").val())
    }
    if ($("#dsl_transfer").length > 0) {
      formData.append("transfer", $("#dsl_transfer").val())
    }
    if ($("#dsl_speed").length > 0) {
      formData.append("speed", $("#dsl_speed").val())
    }
    if ($("#dsl_notes").length > 0) {
      formData.append("notes", $("#dsl_notes").val())
    }

    if ($("#voip_price").length > 0) {
      formData.append("price", $("#voip_price").val())
    }
    if ($("#voip_transfer").length > 0) {
      formData.append("transfer", $("#voip_transfer").val())
    }
    if ($("#voip_speed").length > 0) {
      formData.append("speed", $("#voip_speed").val())
    }
    if ($("#voip_notes").length > 0) {
      formData.append("notes", $("#voip_notes").val())
    }

    if ($("#mail_price").length > 0) {
      formData.append("price", $("#mail_price").val())
    }
    if ($("#mail_transfer").length > 0) {
      formData.append("transfer", $("#mail_transfer").val())
    }
    if ($("#mail_speed").length > 0) {
      formData.append("speed", $("#mail_speed").val())
    }
    if ($("#mail_notes").length > 0) {
      formData.append("notes", $("#mail_notes").val())
    }

    if ($("#server_price").length > 0) {
      formData.append("price", $("#server_price").val())
    }
    if ($("#server_transfer").length > 0) {
      formData.append("transfer", $("#server_transfer").val())
    }
    if ($("#server_speed").length > 0) {
      formData.append("speed", $("#server_speed").val())
    }
    if ($("#server_notes").length > 0) {
      formData.append("notes", $("#server_notes").val())
    }

    if ($("#dial_price").length > 0) {
      formData.append("price", $("#dial_price").val())
    }
    if ($("#dial_transfer").length > 0) {
      formData.append("transfer", $("#dial_transfer").val())
    }
    if ($("#dial_speed").length > 0) {
      formData.append("speed", $("#dial_speed").val())
    }
    if ($("#dial_notes").length > 0) {
      formData.append("notes", $("#dial_notes").val())
    }

    if ($("#unlimited").is(":checked")) {
      formData.append("unlimited", "1")
    } else {
      formData.append("unlimited", "0")
    }

    if ($("#display_order").length > 0) {
      formData.append("display_order", $("#display_order").val())
    }
    if ($("#caveats").length > 0) {
      formData.append("caveats", $("#caveats").val())
    }

    formData.append("action", act)
    formData.append("title", titl)
    formData.append("content", content)
    if ($("input[type=file]")[0]) {
      formData.append("image", $("input[type=file]")[0].files[0])
    }
    $.ajax({
      type: "POST",
      enctype: "multipart/form-data",
      url: "/assets/include/admin_post.php",
      data: formData,
      processData: false,
      contentType: false,
      cache: false,
      timeout: 600000,
      success: function (data) {
        alert(data)
        location.reload()
      },
    })
  })

  $("#updategeneral").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow")
    $.post(
      "/assets/include/admin_post.php",
      {
        action: "general",
        years_steve: $("#years_steve").val(),
        years_meredith: $("#years_meredith").val(),
        years_rob: $("#years_rob").val(),
        years_dave: $("#years_dave").val(),
        king_offi: $("#office_kingston").val(),
        king_supp: $("#support_kingston").val(),
        belle_offi: $("#office_belleville").val(),
        belle_supp: $("#support_belleville").val(),
        king_addr: $("#location_kingston").val(),
        king_phone: $("#phone_kingston").val(),
        belle_addr: $("#location_belleville").val(),
        belle_phone: $("#phone_belleville").val(),
        res_unlimited: $("#res_unlimited").val(),
        bus_unlimited: $("#bus_unlimited").val(),
      },
      function (data) {
        alert(data)
        location.reload()
      }
    )
  })

  $("#updateaccess").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow")
    $.post(
      "/assets/include/admin_post.php",
      {
        action: "access",
        user: $("#location_user").val(),
        epass: $("#location_epass").val(),
        pass: $("#location_pass").val(),
        cpass: $("#location_cpass").val(),
      },
      function (data) {
        alert(data)
        location.reload()
      }
    )
  })

  $("#update").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow")
    var formData = new FormData()

    if ($("#page_id option:selected").attr("id") != undefined) {
      var act = "upd_page"
      var val = $("#page_id option:selected").attr("id")
    }
    if ($("#news_id option:selected").attr("id") != undefined) {
      var act = "upd_news"
      var val = $("#news_id option:selected").attr("id")
    }
    if ($("#hosting_id option:selected").attr("id") != undefined) {
      var act = "upd_host"
      var val = $("#hosting_id option:selected").attr("id")
    }
    if ($("#cable_id option:selected").attr("id") != undefined) {
      var act = "upd_cable"
      var val = $("#cable_id option:selected").attr("id")
    }
    if ($("#wireless_id option:selected").attr("id") != undefined) {
      var act = "upd_wireless"
      var val = $("#wireless_id option:selected").attr("id")
    }
    if ($("#dsl_id option:selected").attr("id") != undefined) {
      var act = "upd_dsl"
      var val = $("#dsl_id option:selected").attr("id")
    }
    if ($("#voip_id option:selected").attr("id") != undefined) {
      var act = "upd_voip"
      var val = $("#voip_id option:selected").attr("id")
    }
    if ($("#mail_id option:selected").attr("id") != undefined) {
      var act = "upd_mail"
      var val = $("#mail_id option:selected").attr("id")
    }
    if ($("#dial_id option:selected").attr("id") != undefined) {
      var act = "upd_dial"
      var val = $("#dial_id option:selected").attr("id")
    }
    if ($("#cable_bus_id option:selected").attr("id") != undefined) {
      var act = "upd_bus_cable"
      var val = $("#cable_bus_id option:selected").attr("id")
    }
    if ($("#wireless_bus_id option:selected").attr("id") != undefined) {
      var act = "upd_bus_wireless"
      var val = $("#wireless_bus_id option:selected").attr("id")
    }
    if ($("#dsl_bus_id option:selected").attr("id") != undefined) {
      var act = "upd_bus_dsl"
      var val = $("#dsl_bus_id option:selected").attr("id")
    }
    if ($("#voip_bus_id option:selected").attr("id") != undefined) {
      var act = "upd_bus_voip"
      var val = $("#voip_bus_id option:selected").attr("id")
    }
    if ($("#mail_bus_id option:selected").attr("id") != undefined) {
      var act = "upd_bus_mail"
      var val = $("#mail_bus_id option:selected").attr("id")
    }
    if ($("#dial_bus_id option:selected").attr("id") != undefined) {
      var act = "upd_bus_dial"
      var val = $("#dial_bus_id option:selected").attr("id")
    }
    if ($("#server_id option:selected").attr("id") != undefined) {
      var act = "upd_server"
      var val = $("#server_id option:selected").attr("id")
    }
    if ($("#offer_id option:selected").attr("id") != undefined) {
      var act = "upd_offer"
      var val = $("#offer_id option:selected").attr("id")
    }
    if ($("#test_id option:selected").attr("id") != undefined) {
      var act = "upd_test"
      var val = $("#test_id option:selected").attr("id")
    }
    if ($("#faq_id option:selected").attr("id") != undefined) {
      var act = "upd_faq"
      var val = $("#faq_id option:selected").attr("id")
    }
    var content = tinymce.activeEditor.getContent()

    formData.append("action", act)
    formData.append("id", val)
    formData.append("content", content)

    if ($("#cable_price").length > 0) {
      formData.append("price", $("#cable_price").val())
    }
    if ($("#cable_transfer").length > 0) {
      formData.append("transfer", $("#cable_transfer").val())
    }
    if ($("#cable_speed").length > 0) {
      formData.append("speed", $("#cable_speed").val())
    }
    if ($("#cable_notes").length > 0) {
      formData.append("notes", $("#cable_notes").val())
    }

    if ($("#hosting_price").length > 0) {
      formData.append("hosting_price", $("#hosting_price").val())
    }
    if ($("#hosting_transfer").length > 0) {
      formData.append("hosting_transfer", $("#hosting_transfer").val())
    }
    if ($("#hosting_space").length > 0) {
      formData.append("hosting_space", $("#hosting_space").val())
    }
    if ($("#hosting_setup").length > 0) {
      formData.append("hosting_setup", $("#hosting_setup").val())
    }

    //if ($('#cable_price').length > 0) { formData.append('cable_price',$('#cable_price').val()); }
    //if ($('#cable_transfer').length > 0) { formData.append('cable_transfer',$('#cable_transfer').val()); }
    //if ($('#cable_speed').length > 0) { formData.append('cable_speed',$('#cable_speed').val()); }
    //if ($('#cable_notes').length > 0) { formData.append('cable_notes',$('#cable_notes').val()); }

    if ($("#wireless_price").length > 0) {
      formData.append("price", $("#wireless_price").val())
    }
    if ($("#wireless_transfer").length > 0) {
      formData.append("transfer", $("#wireless_transfer").val())
    }
    if ($("#wireless_speed").length > 0) {
      formData.append("speed", $("#wireless_speed").val())
    }
    if ($("#wireless_notes").length > 0) {
      formData.append("notes", $("#wireless_notes").val())
    }

    if ($("#dsl_price").length > 0) {
      formData.append("price", $("#dsl_price").val())
    }
    if ($("#dsl_transfer").length > 0) {
      formData.append("transfer", $("#dsl_transfer").val())
    }
    if ($("#dsl_speed").length > 0) {
      formData.append("speed", $("#dsl_speed").val())
    }
    if ($("#dsl_notes").length > 0) {
      formData.append("notes", $("#dsl_notes").val())
    }

    if ($("#voip_price").length > 0) {
      formData.append("price", $("#voip_price").val())
    }
    if ($("#voip_transfer").length > 0) {
      formData.append("transfer", $("#voip_transfer").val())
    }
    if ($("#voip_speed").length > 0) {
      formData.append("speed", $("#voip_speed").val())
    }
    if ($("#voip_notes").length > 0) {
      formData.append("notes", $("#voip_notes").val())
    }

    if ($("#mail_price").length > 0) {
      formData.append("price", $("#mail_price").val())
    }
    if ($("#mail_transfer").length > 0) {
      formData.append("transfer", $("#mail_transfer").val())
    }
    if ($("#mail_speed").length > 0) {
      formData.append("speed", $("#mail_speed").val())
    }
    if ($("#mail_notes").length > 0) {
      formData.append("notes", $("#mail_notes").val())
    }

    if ($("#server_price").length > 0) {
      formData.append("price", $("#server_price").val())
    }
    if ($("#server_transfer").length > 0) {
      formData.append("transfer", $("#server_transfer").val())
    }
    if ($("#server_speed").length > 0) {
      formData.append("speed", $("#server_speed").val())
    }
    if ($("#server_notes").length > 0) {
      formData.append("notes", $("#server_notes").val())
    }

    if ($("#dial_price").length > 0) {
      formData.append("price", $("#dial_price").val())
    }
    if ($("#dial_transfer").length > 0) {
      formData.append("transfer", $("#dial_transfer").val())
    }
    if ($("#dial_speed").length > 0) {
      formData.append("speed", $("#dial_speed").val())
    }
    if ($("#dial_notes").length > 0) {
      formData.append("notes", $("#dial_notes").val())
    }

    if ($("#unlimited").is(":checked")) {
      formData.append("unlimited", "1")
    } else {
      formData.append("unlimited", "0")
    }
    if ($("#display_order").length > 0) {
      formData.append("display_order", $("#display_order").val())
    }
    if ($("#caveats").length > 0) {
      formData.append("caveats", $("#caveats").val())
    }

    if ($("input[type=file]")[0]) {
      formData.append("image", $("input[type=file]")[0].files[0])
    }
    $.ajax({
      type: "POST",
      enctype: "multipart/form-data",
      url: "/assets/include/admin_post.php",
      data: formData,
      processData: false,
      contentType: false,
      cache: false,
      timeout: 600000,
      success: function (data) {
        alert(data)
        location.reload()
      },
    })
  })

  $("#delete").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow")

    var resp = confirm("Are you sure you want to delete this entry?")
    if (resp == true) {
      if ($("#news_id option:selected").attr("id") != undefined) {
        var act = "del_news"
        var val = $("#news_id option:selected").attr("id")
      }
      if ($("#offer_id option:selected").attr("id") != undefined) {
        var act = "del_offer"
        var val = $("#offer_id option:selected").attr("id")
      }
      if ($("#test_id option:selected").attr("id") != undefined) {
        var act = "del_test"
        var val = $("#test_id option:selected").attr("id")
      }
      if ($("#hosting_id option:selected").attr("id") != undefined) {
        var act = "del_hosting"
        var val = $("#hosting_id option:selected").attr("id")
      }
      if ($("#cable_id option:selected").attr("id") != undefined) {
        var act = "del_cable"
        var val = $("#cable_id option:selected").attr("id")
      }
      if ($("#wireless_id option:selected").attr("id") != undefined) {
        var act = "del_wireless"
        var val = $("#wireless_id option:selected").attr("id")
      }
      if ($("#dsl_id option:selected").attr("id") != undefined) {
        var act = "del_dsl"
        var val = $("#dsl_id option:selected").attr("id")
      }
      if ($("#voip_id option:selected").attr("id") != undefined) {
        var act = "del_voip"
        var val = $("#voip_id option:selected").attr("id")
      }
      if ($("#mail_id option:selected").attr("id") != undefined) {
        var act = "del_mail"
        var val = $("#mail_id option:selected").attr("id")
      }
      if ($("#dial_id option:selected").attr("id") != undefined) {
        var act = "del_dial"
        var val = $("#dial_id option:selected").attr("id")
      }
      if ($("#cable_bus_id option:selected").attr("id") != undefined) {
        var act = "del_bus_cable"
        var val = $("#cable_bus_id option:selected").attr("id")
      }
      if ($("#wireless_bus_id option:selected").attr("id") != undefined) {
        var act = "del_bus_wireless"
        var val = $("#wireless_bus_id option:selected").attr("id")
      }
      if ($("#dsl_bus_id option:selected").attr("id") != undefined) {
        var act = "del_bus_dsl"
        var val = $("#dsl_bus_id option:selected").attr("id")
      }
      if ($("#voip_bus_id option:selected").attr("id") != undefined) {
        var act = "del_bus_voip"
        var val = $("#voip_bus_id option:selected").attr("id")
      }
      if ($("#mail_bus_id option:selected").attr("id") != undefined) {
        var act = "del_bus_mail"
        var val = $("#mail_bus_id option:selected").attr("id")
      }
      if ($("#dial_bus_id option:selected").attr("id") != undefined) {
        var act = "del_bus_dial"
        var val = $("#dial_bus_id option:selected").attr("id")
      }
      if ($("#server_id option:selected").attr("id") != undefined) {
        var act = "del_server"
        var val = $("#server_id option:selected").attr("id")
      }
      if ($("#faq_id option:selected").attr("id") != undefined) {
        var act = "del_faq"
        var val = $("#faq_id option:selected").attr("id")
      }

      $.post(
        "/assets/include/admin_post.php",
        { action: act, id: val },
        function (data) {
          alert(data)
          location.reload()
        }
      )
    }
  })

  $("#page_id").on("change", function () {
    tinymce.get("content").setContent("")
    var val = $("#page_id option:selected").attr("id")
    if (val != undefined) {
      $("#update").css("display", "inline")
    } else {
      $("#update").css("display", "none")
    }
    $.post(
      "/assets/include/admin_post.php",
      { action: "page", page_id: val },
      function (data) {
        tinymce.get("content").setContent(data)
      }
    )
  })

  $("#news_id").on("change", function () {
    tinymce.get("content").setContent("")
    $("#news_image").val("")
    var val = $("#news_id option:selected").attr("id")
    if (val != undefined) {
      $("#update").css("display", "inline")
      $("#delete").css("display", "inline")
    } else {
      $("#update").css("display", "none")
      $("#delete").css("display", "none")
    }
    $.post(
      "/assets/include/admin_post.php",
      { action: "news", page_id: val },
      function (data) {
        var blobs = data.split("|%|")
        //alert(blobs[0]);
        //alert(blobs[1]);
        if (blobs[0] != "") {
          tinymce.get("content").setContent(blobs[0])
        }
        if (blobs[1] != "") {
          $("#display_order").val(blobs[1])
        }

        tinymce.get("content").setContent(data)
      }
    )
  })

  $("#hosting_id").on("change", function () {
    $("#hosting_price").val("")
    $("#hosting_transfer").val("")
    $("#hosting_space").val("")
    $("#hosting_setup").val("")
    tinymce.get("content").setContent("")

    var val = $("#hosting_id option:selected").attr("id")
    if (val != undefined) {
      $("#update").css("display", "inline")
      $("#delete").css("display", "inline")
    } else {
      $("#update").css("display", "none")
      $("#delete").css("display", "none")
    }
    $.post(
      "/assets/include/admin_post.php",
      { action: "hosting", page_id: val },
      function (data) {
        var blobs = data.split("|%|")
        if (blobs[0] != "") {
          $("#hosting_price").val(blobs[0])
        }
        if (blobs[1] != "") {
          $("#hosting_space").val(blobs[1])
        }
        if (blobs[2] != "") {
          $("#hosting_transfer").val(blobs[2])
        }
        if (blobs[3] != "") {
          $("#hosting_setup").val(blobs[3])
        }
        if (blobs[4] != "") {
          tinymce.get("content").setContent(blobs[4])
        }
        if (blobs[5] != "") {
          $("#display_order").val(blobs[5])
        }
        if (blobs[6] != "") {
          $("#caveats").val(blobs[6])
        }
        if (blobs[7] == "1") {
          $("#unlimited").attr("checked", "checked")
        }
      }
    )
  })

  $("#cable_id").on("change", function () {
    $("#cable_price").val("")
    $("#cable_transfer").val("")
    $("#cable_speed").val("")
    $("#cable_notes").val("")
    tinymce.get("content").setContent("")

    var val = $("#cable_id option:selected").attr("id")
    if (val != undefined) {
      $("#update").css("display", "inline")
      $("#delete").css("display", "inline")
    } else {
      $("#update").css("display", "none")
      $("#delete").css("display", "none")
    }
    $.post(
      "/assets/include/admin_post.php",
      { action: "cable", page_id: val },
      function (data) {
        //alert(data);
        var blobs = data.split("|%|")
        if (blobs[0] != "") {
          $("#cable_price").val(blobs[0])
        }
        if (blobs[1] != "") {
          $("#cable_speed").val(blobs[1])
        }
        if (blobs[2] != "") {
          $("#cable_transfer").val(blobs[2])
        }
        if (blobs[3] != "") {
          $("#cable_notes").val(blobs[3])
        }
        if (blobs[4] != "") {
          tinymce.get("content").setContent(blobs[4])
        }
        if (blobs[5] != "") {
          $("#display_order").val(blobs[5])
        }
        if (blobs[6] != "") {
          $("#caveats").val(blobs[6])
        }
        if (blobs[7] == "1") {
          $("#unlimited").attr("checked", "checked")
        }
      }
    )
  })
  $("#wireless_id").on("change", function () {
    $("#wireless_price").val("")
    $("#wireless_transfer").val("")
    $("#wireless_speed").val("")
    $("#wireless_notes").val("")
    tinymce.get("content").setContent("")

    var val = $("#wireless_id option:selected").attr("id")
    if (val != undefined) {
      $("#update").css("display", "inline")
      $("#delete").css("display", "inline")
    } else {
      $("#update").css("display", "none")
      $("#delete").css("display", "none")
    }
    $.post(
      "/assets/include/admin_post.php",
      { action: "wireless", page_id: val },
      function (data) {
        var blobs = data.split("|%|")
        if (blobs[0] != "") {
          $("#wireless_price").val(blobs[0])
        }
        if (blobs[1] != "") {
          $("#wireless_speed").val(blobs[1])
        }
        if (blobs[2] != "") {
          $("#wireless_transfer").val(blobs[2])
        }
        if (blobs[3] != "") {
          $("#wireless_notes").val(blobs[3])
        }
        if (blobs[4] != "") {
          tinymce.get("content").setContent(blobs[4])
        }
        if (blobs[5] != "") {
          $("#display_order").val(blobs[5])
        }
        if (blobs[6] != "") {
          $("#caveats").val(blobs[6])
        }
        if (blobs[7] == "1") {
          $("#unlimited").attr("checked", "checked")
        }
      }
    )
  })
  $("#dsl_id").on("change", function () {
    $("#dsl_price").val("")
    $("#dsl_transfer").val("")
    $("#dsl_speed").val("")
    $("#dsl_notes").val("")
    tinymce.get("content").setContent("")

    var val = $("#dsl_id option:selected").attr("id")
    if (val != undefined) {
      $("#update").css("display", "inline")
      $("#delete").css("display", "inline")
    } else {
      $("#update").css("display", "none")
      $("#delete").css("display", "none")
    }
    $.post(
      "/assets/include/admin_post.php",
      { action: "dsl", page_id: val },
      function (data) {
        var blobs = data.split("|%|")
        if (blobs[0] != "") {
          $("#dsl_price").val(blobs[0])
        }
        if (blobs[1] != "") {
          $("#dsl_speed").val(blobs[1])
        }
        if (blobs[2] != "") {
          $("#dsl_transfer").val(blobs[2])
        }
        if (blobs[3] != "") {
          $("#dsl_notes").val(blobs[3])
        }
        if (blobs[4] != "") {
          tinymce.get("content").setContent(blobs[4])
        }
        if (blobs[5] != "") {
          $("#display_order").val(blobs[5])
        }
        if (blobs[6] != "") {
          $("#caveats").val(blobs[6])
        }
        if (blobs[7] == "1") {
          $("#unlimited").attr("checked", "checked")
        }
      }
    )
  })
  $("#voip_id").on("change", function () {
    $("#voip_price").val("")
    $("#voip_transfer").val("")
    $("#voip_speed").val("")
    $("#voip_notes").val("")
    tinymce.get("content").setContent("")

    var val = $("#voip_id option:selected").attr("id")
    if (val != undefined) {
      $("#update").css("display", "inline")
      $("#delete").css("display", "inline")
    } else {
      $("#update").css("display", "none")
      $("#delete").css("display", "none")
    }
    $.post(
      "/assets/include/admin_post.php",
      { action: "voip", page_id: val },
      function (data) {
        var blobs = data.split("|%|")
        if (blobs[0] != "") {
          $("#voip_price").val(blobs[0])
        }
        if (blobs[1] != "") {
          $("#voip_speed").val(blobs[1])
        }
        if (blobs[2] != "") {
          $("#voip_transfer").val(blobs[2])
        }
        if (blobs[3] != "") {
          $("#voip_notes").val(blobs[3])
        }
        if (blobs[4] != "") {
          tinymce.get("content").setContent(blobs[4])
        }
        if (blobs[5] != "") {
          $("#display_order").val(blobs[5])
        }
        if (blobs[6] != "") {
          $("#caveats").val(blobs[6])
        }
        if (blobs[7] == "1") {
          $("#unlimited").attr("checked", "checked")
        }
      }
    )
  })
  $("#mail_id").on("change", function () {
    $("#mail_price").val("")
    $("#mail_transfer").val("")
    $("#mail_speed").val("")
    $("#mail_notes").val("")
    tinymce.get("content").setContent("")

    var val = $("#mail_id option:selected").attr("id")
    if (val != undefined) {
      $("#update").css("display", "inline")
      $("#delete").css("display", "inline")
    } else {
      $("#update").css("display", "none")
      $("#delete").css("display", "none")
    }
    $.post(
      "/assets/include/admin_post.php",
      { action: "mail", page_id: val },
      function (data) {
        var blobs = data.split("|%|")
        if (blobs[0] != "") {
          $("#mail_price").val(blobs[0])
        }
        if (blobs[1] != "") {
          $("#mail_speed").val(blobs[1])
        }
        if (blobs[2] != "") {
          $("#mail_transfer").val(blobs[2])
        }
        if (blobs[3] != "") {
          $("#mail_notes").val(blobs[3])
        }
        if (blobs[4] != "") {
          tinymce.get("content").setContent(blobs[4])
        }
        if (blobs[5] != "") {
          $("#display_order").val(blobs[5])
        }
        if (blobs[6] != "") {
          $("#caveats").val(blobs[6])
        }
        if (blobs[7] == "1") {
          $("#unlimited").attr("checked", "checked")
        }
      }
    )
  })
  $("#dial_id").on("change", function () {
    $("#dial_price").val("")
    $("#dial_transfer").val("")
    $("#dial_speed").val("")
    $("#dial_notes").val("")
    tinymce.get("content").setContent("")

    var val = $("#dial_id option:selected").attr("id")
    if (val != undefined) {
      $("#update").css("display", "inline")
      $("#delete").css("display", "inline")
    } else {
      $("#update").css("display", "none")
      $("#delete").css("display", "none")
    }
    $.post(
      "/assets/include/admin_post.php",
      { action: "dial", page_id: val },
      function (data) {
        var blobs = data.split("|%|")
        if (blobs[0] != "") {
          $("#dial_price").val(blobs[0])
        }
        if (blobs[1] != "") {
          $("#dial_speed").val(blobs[1])
        }
        if (blobs[2] != "") {
          $("#dial_transfer").val(blobs[2])
        }
        if (blobs[3] != "") {
          $("#dial_notes").val(blobs[3])
        }
        if (blobs[4] != "") {
          tinymce.get("content").setContent(blobs[4])
        }
        if (blobs[5] != "") {
          $("#display_order").val(blobs[5])
        }
        if (blobs[6] != "") {
          $("#caveats").val(blobs[6])
        }
        if (blobs[7] == "1") {
          $("#unlimited").attr("checked", "checked")
        }
      }
    )
  })
  $("#cable_bus_id").on("change", function () {
    $("#cable_price").val("")
    $("#cable_transfer").val("")
    $("#cable_speed").val("")
    $("#cable_notes").val("")
    tinymce.get("content").setContent("")

    var val = $("#cable_bus_id option:selected").attr("id")
    if (val != undefined) {
      $("#update").css("display", "inline")
      $("#delete").css("display", "inline")
    } else {
      $("#update").css("display", "none")
      $("#delete").css("display", "none")
    }
    $.post(
      "/assets/include/admin_post.php",
      { action: "cable_bus", page_id: val },
      function (data) {
        var blobs = data.split("|%|")
        if (blobs[0] != "") {
          $("#cable_price").val(blobs[0])
        }
        if (blobs[1] != "") {
          $("#cable_speed").val(blobs[1])
        }
        if (blobs[2] != "") {
          $("#cable_transfer").val(blobs[2])
        }
        if (blobs[3] != "") {
          $("#cable_notes").val(blobs[3])
        }
        if (blobs[4] != "") {
          tinymce.get("content").setContent(blobs[4])
        }
        if (blobs[5] != "") {
          $("#display_order").val(blobs[5])
        }
        if (blobs[6] != "") {
          $("#caveats").val(blobs[6])
        }
        if (blobs[7] == "1") {
          $("#unlimited").attr("checked", "checked")
        }
      }
    )
  })
  $("#wireless_bus_id").on("change", function () {
    $("#wireless_price").val("")
    $("#wireless_transfer").val("")
    $("#wireless_speed").val("")
    $("#wireless_notes").val("")
    tinymce.get("content").setContent("")

    var val = $("#wireless_bus_id option:selected").attr("id")
    if (val != undefined) {
      $("#update").css("display", "inline")
      $("#delete").css("display", "inline")
    } else {
      $("#update").css("display", "none")
      $("#delete").css("display", "none")
    }
    $.post(
      "/assets/include/admin_post.php",
      { action: "wireless_bus", page_id: val },
      function (data) {
        var blobs = data.split("|%|")
        if (blobs[0] != "") {
          $("#wireless_price").val(blobs[0])
        }
        if (blobs[1] != "") {
          $("#wireless_speed").val(blobs[1])
        }
        if (blobs[2] != "") {
          $("#wireless_transfer").val(blobs[2])
        }
        if (blobs[3] != "") {
          $("#wireless_notes").val(blobs[3])
        }
        if (blobs[4] != "") {
          tinymce.get("content").setContent(blobs[4])
        }
        if (blobs[5] != "") {
          $("#display_order").val(blobs[5])
        }
        if (blobs[6] != "") {
          $("#caveats").val(blobs[6])
        }
        if (blobs[7] == "1") {
          $("#unlimited").attr("checked", "checked")
        }
      }
    )
  })
  $("#dsl_bus_id").on("change", function () {
    $("#dsl_price").val("")
    $("#dsl_transfer").val("")
    $("#dsl_speed").val("")
    $("#dsl_notes").val("")
    tinymce.get("content").setContent("")

    var val = $("#dsl_bus_id option:selected").attr("id")
    if (val != undefined) {
      $("#update").css("display", "inline")
      $("#delete").css("display", "inline")
    } else {
      $("#update").css("display", "none")
      $("#delete").css("display", "none")
    }
    $.post(
      "/assets/include/admin_post.php",
      { action: "dsl_bus", page_id: val },
      function (data) {
        var blobs = data.split("|%|")
        if (blobs[0] != "") {
          $("#dsl_price").val(blobs[0])
        }
        if (blobs[1] != "") {
          $("#dsl_speed").val(blobs[1])
        }
        if (blobs[2] != "") {
          $("#dsl_transfer").val(blobs[2])
        }
        if (blobs[3] != "") {
          $("#dsl_notes").val(blobs[3])
        }
        if (blobs[4] != "") {
          tinymce.get("content").setContent(blobs[4])
        }
        if (blobs[5] != "") {
          $("#display_order").val(blobs[5])
        }
        if (blobs[6] != "") {
          $("#caveats").val(blobs[6])
        }
        if (blobs[7] == "1") {
          $("#unlimited").attr("checked", "checked")
        }
      }
    )
  })
  $("#voip_bus_id").on("change", function () {
    $("#voip_price").val("")
    $("#voip_transfer").val("")
    $("#voip_speed").val("")
    $("#voip_notes").val("")
    tinymce.get("content").setContent("")

    var val = $("#voip_bus_id option:selected").attr("id")
    if (val != undefined) {
      $("#update").css("display", "inline")
      $("#delete").css("display", "inline")
    } else {
      $("#update").css("display", "none")
      $("#delete").css("display", "none")
    }
    $.post(
      "/assets/include/admin_post.php",
      { action: "voip_bus", page_id: val },
      function (data) {
        var blobs = data.split("|%|")
        if (blobs[0] != "") {
          $("#voip_price").val(blobs[0])
        }
        if (blobs[1] != "") {
          $("#voip_speed").val(blobs[1])
        }
        if (blobs[2] != "") {
          $("#voip_transfer").val(blobs[2])
        }
        if (blobs[3] != "") {
          $("#voip_notes").val(blobs[3])
        }
        if (blobs[4] != "") {
          tinymce.get("content").setContent(blobs[4])
        }
        if (blobs[5] != "") {
          $("#display_order").val(blobs[5])
        }
        if (blobs[6] != "") {
          $("#caveats").val(blobs[6])
        }
        if (blobs[7] == "1") {
          $("#unlimited").attr("checked", "checked")
        }
      }
    )
  })
  $("#mail_bus_id").on("change", function () {
    $("#mail_price").val("")
    $("#mail_transfer").val("")
    $("#mail_speed").val("")
    $("#mail_notes").val("")
    tinymce.get("content").setContent("")

    var val = $("#mail_bus_id option:selected").attr("id")
    if (val != undefined) {
      $("#update").css("display", "inline")
      $("#delete").css("display", "inline")
    } else {
      $("#update").css("display", "none")
      $("#delete").css("display", "none")
    }
    $.post(
      "/assets/include/admin_post.php",
      { action: "mail_bus", page_id: val },
      function (data) {
        var blobs = data.split("|%|")
        if (blobs[0] != "") {
          $("#mail_price").val(blobs[0])
        }
        if (blobs[1] != "") {
          $("#mail_speed").val(blobs[1])
        }
        if (blobs[2] != "") {
          $("#mail_transfer").val(blobs[2])
        }
        if (blobs[3] != "") {
          $("#mail_notes").val(blobs[3])
        }
        if (blobs[4] != "") {
          tinymce.get("content").setContent(blobs[4])
        }
        if (blobs[5] != "") {
          $("#display_order").val(blobs[5])
        }
        if (blobs[6] != "") {
          $("#caveats").val(blobs[6])
        }
        if (blobs[7] == "1") {
          $("#unlimited").attr("checked", "checked")
        }
      }
    )
  })
  $("#dial_bus_id").on("change", function () {
    $("#dial_price").val("")
    $("#dial_transfer").val("")
    $("#dial_speed").val("")
    $("#dial_notes").val("")
    tinymce.get("content").setContent("")

    var val = $("#dial_bus_id option:selected").attr("id")
    if (val != undefined) {
      $("#update").css("display", "inline")
      $("#delete").css("display", "inline")
    } else {
      $("#update").css("display", "none")
      $("#delete").css("display", "none")
    }
    $.post(
      "/assets/include/admin_post.php",
      { action: "dial_bus", page_id: val },
      function (data) {
        var blobs = data.split("|%|")
        if (blobs[0] != "") {
          $("#dial_price").val(blobs[0])
        }
        if (blobs[1] != "") {
          $("#dial_speed").val(blobs[1])
        }
        if (blobs[2] != "") {
          $("#dial_transfer").val(blobs[2])
        }
        if (blobs[3] != "") {
          $("#dial_notes").val(blobs[3])
        }
        if (blobs[4] != "") {
          tinymce.get("content").setContent(blobs[4])
        }
        if (blobs[5] != "") {
          $("#display_order").val(blobs[5])
        }
        if (blobs[6] != "") {
          $("#caveats").val(blobs[6])
        }
        if (blobs[7] == "1") {
          $("#unlimited").attr("checked", "checked")
        }
      }
    )
  })
  $("#server_id").on("change", function () {
    $("#server_price").val("")
    $("#server_transfer").val("")
    $("#server_speed").val("")
    $("#server_notes").val("")
    tinymce.get("content").setContent("")

    var val = $("#server_id option:selected").attr("id")
    if (val != undefined) {
      $("#update").css("display", "inline")
      $("#delete").css("display", "inline")
    } else {
      $("#update").css("display", "none")
      $("#delete").css("display", "none")
    }
    $.post(
      "/assets/include/admin_post.php",
      { action: "server", page_id: val },
      function (data) {
        var blobs = data.split("|%|")
        if (blobs[0] != "") {
          $("#server_price").val(blobs[0])
        }
        if (blobs[1] != "") {
          $("#server_speed").val(blobs[1])
        }
        if (blobs[2] != "") {
          $("#server_transfer").val(blobs[2])
        }
        if (blobs[3] != "") {
          $("#server_notes").val(blobs[3])
        }
        if (blobs[4] != "") {
          tinymce.get("content").setContent(blobs[4])
        }
        if (blobs[5] != "") {
          $("#display_order").val(blobs[5])
        }
        if (blobs[6] != "") {
          $("#caveats").val(blobs[6])
        }
      }
    )
  })

  $("#offer_id").on("change", function () {
    var val = $("#offer_id option:selected").attr("id")
    if (val != undefined) {
      $("#update").css("display", "inline")
      $("#delete").css("display", "inline")
    } else {
      $("#update").css("display", "none")
      $("#delete").css("display", "none")
    }
    $.post(
      "/assets/include/admin_post.php",
      { action: "offer", page_id: val },
      function (data) {
        var blobs = data.split("|%|")
        //if (blobs[0] != '') { $('#offer_price').val(blobs[0]); }
        if (blobs[1] != "") {
          tinymce.get("content").setContent(blobs[1])
        }
        if (blobs[2] != "") {
          $("#display_order").val(blobs[2])
        }
      }
    )
  })

  $("#test_id").on("change", function () {
    var val = $("#test_id option:selected").attr("id")
    if (val != undefined) {
      $("#update").css("display", "inline")
      $("#delete").css("display", "inline")
    } else {
      $("#update").css("display", "none")
      $("#delete").css("display", "none")
    }
    $.post(
      "/assets/include/admin_post.php",
      { action: "test", page_id: val },
      function (data) {
        tinymce.get("content").setContent(data)
      }
    )
  })

  $("#faq_id").on("change", function () {
    var val = $("#faq_id option:selected").attr("id")
    if (val != undefined) {
      $("#update").css("display", "inline")
      $("#delete").css("display", "inline")
    } else {
      $("#update").css("display", "none")
      $("#delete").css("display", "none")
    }
    $.post(
      "/assets/include/admin_post.php",
      { action: "faq", page_id: val },
      function (data) {
        var blobs = data.split("|%|")
        if (blobs[0] != "") {
          tinymce.get("content").setContent(blobs[0])
        }
        if (blobs[1] != "") {
          $("#display_order").val(blobs[1])
        }
      }
    )
  })

  /*
	$('.index-request-form-js input[name=customer_type]').on('click', function() {
		
		if ($(this).val() == 'residential') {
			$('div[name=residential_options]').css('display','block');
			$('div[name=business_options]').css('display','none');
		}
		if ($(this).val() == 'business') {
			$('div[name=residential_options]').css('display','none');
			$('div[name=business_options]').css('display','block');
		}
		
	});
	*/

  $(".order-request-form-js input[name=customer_type]").on(
    "click",
    function () {
      console.log("customer_type input: ", $(this).val())

      if ($(this).val().toLowerCase() == "residential customer") {
        $("div[name=residential_options]").css("display", "block")
        $("div[name=business_options]").css("display", "none")

        $("select").val("")
        $("input:checkbox").prop("checked", false)

        $("div[name=option_bus_dsl]").css("display", "none")
        $("div[name=option_bus_wir]").css("display", "none")
        $("div[name=option_bus_voi]").css("display", "none")
        $("div[name=option_bus_dia]").css("display", "none")
        $("div[name=option_bus_hos]").css("display", "none")
      }
      if ($(this).val().toLowerCase() == "business customer") {
        $("div[name=residential_options]").css("display", "none")
        $("div[name=business_options]").css("display", "block")

        $("select").val("")
        $("input:checkbox").prop("checked", false)

        $("div[name=option_dsl]").css("display", "none")
        $("div[name=option_cab]").css("display", "none")
        $("div[name=option_wir]").css("display", "none")
        $("div[name=option_voi]").css("display", "none")
        $("div[name=option_dia]").css("display", "none")
        $("div[name=option_hos]").css("display", "none")
      }
    }
  )

  if ($(".order-request-form-js input[name=customer_type]").is(":checked")) {
    if (
      $(".order-request-form-js input[name=customer_type]:checked").val() ==
      "Residential Customer"
    ) {
      $("div[name=residential_options]").css("display", "block")
      $("div[name=business_options]").css("display", "none")

      $("select").val("")
      $("input:checkbox").prop("checked", false)

      $("div[name=option_bus_dsl]").css("display", "none")
      $("div[name=option_bus_wir]").css("display", "none")
      $("div[name=option_bus_voi]").css("display", "none")
      $("div[name=option_bus_dia]").css("display", "none")
      $("div[name=option_bus_hos]").css("display", "none")

      var pkg = getUrlParameter("type")
      var plan = getUrlParameter("plan").toLowerCase()

      if (pkg == "dsl") {
        //$('div[name=option_bus_dsl]').toggle();
        $(".order-request-form-js input[name=customer_option_dsl]").prop(
          "checked",
          "true"
        )
        $("div[name=option_dsl] select option").each(function () {
          if ($(this).val().toLowerCase() == plan) {
            $(this).attr("selected", "selected")
          }
        })
      }
      if (pkg == "cable") {
        //$('div[name=option_bus_cab]').toggle();
        $(".order-request-form-js input[name=customer_option_cab]").prop(
          "checked",
          "true"
        )
        $("div[name=option_cab] select option").each(function () {
          if ($(this).val().toLowerCase() == plan) {
            $(this).attr("selected", "selected")
          }
        })
      }
      if (pkg == "broadband") {
        //$('div[name=option_bus_wir]').toggle();
        $(".order-request-form-js input[name=customer_option_wir]").prop(
          "checked",
          "true"
        )
        $("div[name=option_wir] select option").each(function () {
          if ($(this).val().toLowerCase() == plan) {
            $(this).attr("selected", "selected")
          }
        })
      }
      if (pkg == "voip") {
        //$('div[name=option_bus_voi]').toggle();
        $(".order-request-form-js input[name=customer_option_voi]").prop(
          "checked",
          "true"
        )
        $("div[name=option_voi] select option").each(function () {
          if ($(this).val().toLowerCase() == plan) {
            $(this).attr("selected", "selected")
          }
        })
      }
      if (pkg == "dialup") {
        //$('div[name=option_bus_dia]').toggle();
        $(".order-request-form-js input[name=customer_option_dia]").prop(
          "checked",
          "true"
        )
        $("div[name=option_dia] select option").each(function () {
          if ($(this).val().toLowerCase() == plan) {
            $(this).attr("selected", "selected")
          }
        })
      }
      if (pkg == "hosting") {
        //$('div[name=option_bus_hos]').toggle();
        $(".order-request-form-js input[name=customer_option_hos]").prop(
          "checked",
          "true"
        )
        $("div[name=option_hos] select option").each(function () {
          if ($(this).val().toLowerCase() == plan) {
            $(this).attr("selected", "selected")
          }
        })
      }
    }
    if (
      $(".order-request-form-js input[name=customer_type]:checked").val() ==
      "Business Customer"
    ) {
      $("div[name=residential_options]").css("display", "none")
      $("div[name=business_options]").css("display", "block")

      $("select").val("")
      $("input:checkbox").prop("checked", false)

      $("div[name=option_dsl]").css("display", "none")
      $("div[name=option_cab]").css("display", "none")
      $("div[name=option_wir]").css("display", "none")
      $("div[name=option_voi]").css("display", "none")
      $("div[name=option_dia]").css("display", "none")
      $("div[name=option_hos]").css("display", "none")

      var pkg = getUrlParameter("type")
      var plan = getUrlParameter("plan").toLowerCase()

      if (pkg == "dsl") {
        //$('div[name=option_bus_dsl]').toggle();
        $(".order-request-form-js input[name=bus_customer_option_dsl]").prop(
          "checked",
          "true"
        )
        $("div[name=option_bus_dsl] select option").each(function () {
          if ($(this).val().toLowerCase() == plan) {
            $(this).attr("selected", "selected")
          }
        })
      }
      if (pkg == "cable") {
        //$('div[name=option_bus_cab]').toggle();
        $(".order-request-form-js input[name=bus_customer_option_cab]").prop(
          "checked",
          "true"
        )
        $("div[name=option_bus_cab] select option").each(function () {
          if ($(this).val().toLowerCase() == plan) {
            $(this).attr("selected", "selected")
          }
        })
      }
      if (pkg == "broadband") {
        //$('div[name=option_bus_wir]').toggle();
        $(".order-request-form-js input[name=bus_customer_option_wir]").prop(
          "checked",
          "true"
        )
        $("div[name=option_bus_wir] select option").each(function () {
          if ($(this).val().toLowerCase() == plan) {
            $(this).attr("selected", "selected")
          }
        })
      }
      if (pkg == "voip") {
        //$('div[name=option_bus_voi]').toggle();
        $(".order-request-form-js input[name=bus_customer_option_voi]").prop(
          "checked",
          "true"
        )
        $("div[name=option_bus_voi] select option").each(function () {
          if ($(this).val().toLowerCase() == plan) {
            $(this).attr("selected", "selected")
          }
        })
      }
      if (pkg == "dialup") {
        //$('div[name=option_bus_dia]').toggle();
        $(".order-request-form-js input[name=bus_customer_option_dia]").prop(
          "checked",
          "true"
        )
        $("div[name=option_bus_dia] select option").each(function () {
          if ($(this).val().toLowerCase() == plan) {
            $(this).attr("selected", "selected")
          }
        })
      }
      if (pkg == "hosting") {
        //$('div[name=option_bus_hos]').toggle();
        $(".order-request-form-js input[name=bus_customer_option_hos]").prop(
          "checked",
          "true"
        )
        $("div[name=option_bus_hos] select option").each(function () {
          if ($(this).val().toLowerCase() == plan) {
            $(this).attr("selected", "selected")
          }
        })
      }
    }
  }

  $(".order-request-form-js input[name=customer_option_dsl]").on(
    "click",
    function () {
      $("div[name=option_dsl]").toggle()
    }
  )
  $(".order-request-form-js input[name=customer_option_cab]").on(
    "click",
    function () {
      $("div[name=option_cab]").toggle()
    }
  )
  $(".order-request-form-js input[name=customer_option_wir]").on(
    "click",
    function () {
      $("div[name=option_wir]").toggle()
    }
  )
  $(".order-request-form-js input[name=customer_option_voi]").on(
    "click",
    function () {
      $("div[name=option_voi]").toggle()
    }
  )
  $(".order-request-form-js input[name=customer_option_dia]").on(
    "click",
    function () {
      $("div[name=option_dia]").toggle()
    }
  )
  $(".order-request-form-js input[name=customer_option_hos]").on(
    "click",
    function () {
      $("div[name=option_hos]").toggle()
    }
  )

  $(".order-request-form-js input[name=bus_customer_option_dsl]").on(
    "click",
    function () {
      $("div[name=option_bus_dsl]").toggle()
    }
  )
  $(".order-request-form-js input[name=bus_customer_option_cab]").on(
    "click",
    function () {
      $("div[name=option_bus_cab]").toggle()
    }
  )
  $(".order-request-form-js input[name=bus_customer_option_wir]").on(
    "click",
    function () {
      $("div[name=option_bus_wir]").toggle()
    }
  )
  $(".order-request-form-js input[name=bus_customer_option_voi]").on(
    "click",
    function () {
      $("div[name=option_bus_voi]").toggle()
    }
  )
  $(".order-request-form-js input[name=bus_customer_option_dia]").on(
    "click",
    function () {
      $("div[name=option_bus_dia]").toggle()
    }
  )
  $(".order-request-form-js input[name=bus_customer_option_hos]").on(
    "click",
    function () {
      $("div[name=option_bus_hos]").toggle()
    }
  )

  $(".order-request-form-js input[name=bus_customer_option_col]").on(
    "click",
    function () {
      $("div[name=option_bus_col]").toggle()
    }
  )

  if (
    $(".order-request-form-js input[name=customer_option_dsl]").is(":checked")
  ) {
    $("div[name=option_dsl]").toggle()
  }
  if (
    $(".order-request-form-js input[name=customer_option_cab]").is(":checked")
  ) {
    $("div[name=option_cab]").toggle()
  }
  if (
    $(".order-request-form-js input[name=customer_option_wir]").is(":checked")
  ) {
    $("div[name=option_wir]").toggle()
  }
  if (
    $(".order-request-form-js input[name=customer_option_voi]").is(":checked")
  ) {
    $("div[name=option_voi]").toggle()
  }
  if (
    $(".order-request-form-js input[name=customer_option_dia]").is(":checked")
  ) {
    $("div[name=option_dia]").toggle()
  }
  if (
    $(".order-request-form-js input[name=customer_option_hos]").is(":checked")
  ) {
    $("div[name=option_hos]").toggle()
  }
  if (
    $(".order-request-form-js input[name=bus_customer_option_dsl]").is(
      ":checked"
    )
  ) {
    $("div[name=option_bus_dsl]").toggle()
  }
  if (
    $(".order-request-form-js input[name=bus_customer_option_cab]").is(
      ":checked"
    )
  ) {
    $("div[name=option_bus_cab]").toggle()
  }
  if (
    $(".order-request-form-js input[name=bus_customer_option_wir]").is(
      ":checked"
    )
  ) {
    $("div[name=option_bus_wir]").toggle()
  }
  if (
    $(".order-request-form-js input[name=bus_customer_option_voi]").is(
      ":checked"
    )
  ) {
    $("div[name=option_bus_voi]").toggle()
  }
  if (
    $(".order-request-form-js input[name=bus_customer_option_dia]").is(
      ":checked"
    )
  ) {
    $("div[name=option_bus_dia]").toggle()
  }
  if (
    $(".order-request-form-js input[name=bus_customer_option_hos]").is(
      ":checked"
    )
  ) {
    $("div[name=option_bus_hos]").toggle()
  }
  if (
    $(".order-request-form-js input[name=bus_customer_option_col]").is(
      ":checked"
    )
  ) {
    $("div[name=option_bus_col]").toggle()
  }

  var windowWidth = window.innerWidth || $window.width()
  var windowH = $window.height()

  //remove loader
  setTimeout(function () {
    $("#loader-wrapper").fadeOut(500)
  }, 100)

  // fix navigation
  plugins.affixElement.affix({
    offset: {
      top: function () {
        return (this.top = plugins.affixElement.offset().top)
      },
    },
  })

  // back to top
  var backPos
  if (plugins.backToTop.length) {
    var backPos = plugins.backToTop.offset()
    if (backPos.top < windowH) {
      plugins.backToTop.hide()
    }
    plugins.backToTop.on("click", function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        "slow"
      )
      return false
    })
  }

  // start all the timers
  if (plugins.timer.length) {
    $("#timerBlock").waypoint(
      function () {
        plugins.timer.each(count)
        this.destroy()
      },
      {
        triggerOnce: true,
        offset: "80%",
      }
    )
  }

  function count(options) {
    var $this = $(this)
    options = $.extend({}, options || {}, $this.data("countToOptions") || {})
    $this.countTo(options)
  }

  // product gallery
  function handleResize(mq) {
    if (mq.matches) {
      ezApi.changeState("enable")
    } else {
      ezApi.changeState("disable")
    }
  }
  if (plugins.productImage.length) {
    plugins.productImage.elevateZoom({
      gallery: "productPreviews",
      cursor: "pointer",
      galleryActiveClass: "active",
      zoomWindowPosition: 1,
      zoomWindowFadeIn: 500,
      zoomWindowFadeOut: 500,
      lensFadeIn: 500,
      lensFadeOut: 500,
    })
    var ezApi = plugins.productImage.data("elevateZoom")
    if ((window.innerWidth || $window.width()) < 769) {
      ezApi.changeState("disable")
    }
    var mq = window.matchMedia("screen and (min-width: 768px)")
    mq.addListener(handleResize)
    $("#productPreviews > a").on("click", function () {
      plugins.productImage.attr({
        src: $(this).attr("data-image"),
        "data-zoom-image": $(this).attr("data-zoom-image"),
      })
    })
  }

  // icrease/decrease input
  function changeInput() {
    $(document).on("click", ".count-add, .count-reduce", function (e) {
      var $this = $(e.target),
        input = $this.parent().find(".count-input"),
        v = $this.hasClass("count-reduce")
          ? input.val() - 1
          : input.val() * 1 + 1,
        min = input.attr("data-min") ? input.attr("data-min") : 1
      if (v >= min) input.val(v)
      e.preventDefault()
    })
  }

  // rangeSlider
  if (plugins.rangeSlider.length) {
    var rangeSlider1 = document.getElementById("rangeSlider1")
    noUiSlider.create(rangeSlider1, {
      start: [100, 2000],
      connect: true,
      step: 100,
      padding: 100,
      range: {
        min: 0,
        max: 10100,
      },
    })
    var number1_1 = document.getElementById("number-1-1")
    var number1_2 = document.getElementById("number-1-2")
    rangeSlider1.noUiSlider.on("update", function (values, handle) {
      var value = values[handle]
      if (handle) {
        number1_1.textContent = Math.round(value)
      } else {
        number1_2.textContent = Math.round(value)
      }
    })
    number1_1.addEventListener("change", function () {
      rangeSlider1.noUiSlider.set([this.textContent, null])
    })
    number1_2.addEventListener("change", function () {
      rangeSlider1.noUiSlider.set([null, this.textContent])
    })
  }

  // image popup
  if (plugins.gallery.length) {
    plugins.gallery.find("a.hover, a.btn").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    })
  }

  // slider
  if (plugins.mainSlider.length) {
    plugins.mainSlider.nivoSlider({
      animSpeed: 500,
      pauseTime: 5000,
      pauseOnHover: false,
      effect: "boxRainGrowReverse",
      prevText: "",
      nextText: "",
      controlNav: false,
    })
    plugins.mainSlider.css({
      height: "auto",
    })
  }

  // products carousel
  if (plugins.prdCarousel.length) {
    plugins.prdCarousel.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      arrows: true,
      responsive: [
        {
          breakpoint: 1299,
          settings: {
            dots: true,
            arrows: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            dots: true,
            arrows: false,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            dots: true,
            arrows: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            dots: true,
            arrows: false,
          },
        },
      ],
    })
  }

  // price carousel
  if (plugins.priceCarousel.length) {
    plugins.priceCarousel.slick({
      mobileFirst: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: false,
          },
        },
      ],
    })
  }

  // testimonials carousel
  if (plugins.testimonialsCarousel.length) {
    plugins.testimonialsCarousel.slick({
      mobileFirst: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 2000,
      arrows: false,
      dots: true,
    })
  }

  // post carousel
  if (plugins.postCarousel.length) {
    plugins.postCarousel.slick({
      mobileFirst: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 2000,
      arrows: true,
      dots: false,
    })
  }

  // mobile carousel
  function slickMobile(carousel) {
    carousel.slick({
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 2000,
      arrows: false,
      dots: true,
      slide: ".slide-item",
      responsive: [
        {
          breakpoint: 767,
          settings: "unslick",
        },
      ],
    })
  }

  function startCarousel() {
    if (plugins.categoryCarousel.length) {
      slickMobile(plugins.categoryCarousel)
    }
    if (plugins.servicesCarousel.length) {
      slickMobile(plugins.servicesCarousel)
    }
    if (plugins.numberCarousel.length) {
      slickMobile(plugins.numberCarousel)
    }
    if (plugins.textIconCarousel.length) {
      slickMobile(plugins.textIconCarousel)
    }
  }
  if (windowWidth < 768) {
    startCarousel()
  }
  // END mobile carousel

  // submenu
  function toggleNavbarMethod(windowWidth) {
    $(".dropdown > a, .dropdown-submenu > a").on(
      "click.toggleNavbarMethod",
      function (e) {
        e.preventDefault()
        e.stopPropagation()
        var url = $(this).attr("href")
        if (url) $(location).attr("href", url)
      }
    )
    if (windowWidth > 767) {
      $(".dropdown, .dropdown-submenu")
        .on("mouseenter.toggleNavbarMethod", function () {
          $(this).find(".dropdown-menu").first().stop(true, true).fadeIn("fast")
          $(this).toggleClass("open")
        })
        .on("mouseleave.toggleNavbarMethod", function () {
          $(this)
            .find(".dropdown-menu")
            .first()
            .stop(true, true)
            .fadeOut("fast")
          $(this).toggleClass("open")
        })
    } else {
      $(".dropdown, .dropdown-submenu").unbind(".toggleNavbarMethod")
      $(".dropdown > a > .ecaret, .dropdown-submenu > a > .ecaret").unbind(
        ".toggleNavbarMethod"
      )
      $(".dropdown > a > .ecaret, .dropdown-submenu > a > .ecaret").on(
        "click.toggleNavbarMethod",
        function (e) {
          e.stopPropagation()
          e.preventDefault()
          var $li = $(this).parent().parent("li")
          if ($li.hasClass("opened")) {
            $li.find(".dropdown-menu").first().stop(true, true).slideUp(0)
            $li.removeClass("opened")
          } else {
            $li.find(".dropdown-menu").first().stop(true, true).slideDown(0)
            $li.addClass("opened")
          }
        }
      )
    }
  }

  $.fn.stickyHeader = function () {
    var $header = this,
      $body = $("body"),
      headerOffset,
      stickyH

    function setHeigth() {
      $(".stspace").remove()
      $header.removeClass("animated is-sticky fadeIn")
      $body.removeClass("hdr-sticky")
      headerOffset = $("#slidemenu", $header).offset().top
      stickyH = $header.height() + headerOffset
    }
    setHeigth()
    var prevWindow = window.innerWidth || $(window).width()
    $(window).on("resize", function () {
      var currentWindow = window.innerWidth || $(window).width()
      if (currentWindow != prevWindow) {
        setHeigth()
        prevWindow = currentWindow
      }
    })
    $(window).scroll(function () {
      if (prevWindow < 992) return
      var st = getCurrentScroll()
      if (st > headerOffset) {
        if (!$(".stspace").length && !$body.hasClass("home")) {
          $header.after('<div class="stspace"></div>')
          $(".fix-space").css({
            height: $header.height() + "px",
          })
        }
        $header.addClass("is-sticky animated fadeIn")
      } else {
        $(".stspace").remove()
        $header.removeClass("animated is-sticky fadeIn")
      }
    })

    function getCurrentScroll() {
      return window.pageYOffset || document.documentElement.scrollTop
    }
  }

  if (plugins.stickyHeader.length) {
    $(plugins.stickyHeader).stickyHeader()
  }
  toggleNavbarMethod(windowWidth)
  toggleCart(".header-cart", ".header-cart-dropdown")
  popupForm(".form-popup-link")
  modalPopup(".modal-popup-link")
  changeInput()

  // slide menu
  $("#slide-nav").after($('<div id="navbar-height-col"></div>'))
  var toggler = ".navbar-toggle"
  var pagewrapper = "#page-content"
  var navigationwrapper = ".navbar-header"
  var menuwidth = "100%"
  var slidewidth = "270px"
  var menuneg = "-100%"
  var slideneg = "-270px"
  $("#slide-nav").on("click", toggler, function (e) {
    var selected = $(this).hasClass("slide-active")
    $("#slidemenu")
      .stop()
      .animate({
        left: selected ? menuneg : "0px",
      })
    $("#navbar-height-col")
      .stop()
      .animate({
        left: selected ? slideneg : "0px",
      })
    $(pagewrapper)
      .stop()
      .animate({
        left: selected ? "0px" : slidewidth,
      })
    $(navigationwrapper)
      .stop()
      .animate({
        left: selected ? "0px" : slidewidth,
      })
    $(this).toggleClass("slide-active", !selected)
    $("#slidemenu").toggleClass("slide-active")
    $("#page-content, .navbar, body, .navbar-header").toggleClass(
      "slide-active"
    )
  })
  var selected = "#slidemenu, #page-content, body, .navbar, .navbar-header"
  // END slide menu

  // Gallery Isotope
  if (plugins.isotopeGallery.length) {
    var $gallery = plugins.isotopeGallery
    isotopeFilters(".gallery")
    $gallery.imagesLoaded(function () {
      setGallerySize()
    })
    $gallery.isotope({
      itemSelector: ".gallery__item",
      masonry: {
        columnWidth: ".gallery__item:not(.doubleW)",
      },
    })
    $(".view-more-gallery").on("click", function () {
      var item
      var target = $(this).attr("data-load")
      $(this).hide()
      $.ajax({
        url: target,
        success: function (data) {
          $("#galleryPreload").append(data)
          $("#galleryPreload > div").each(function () {
            item = $(this)
            $gallery.append(item).isotope("appended", item)
            setGallerySize()
          })
        },
      })
    })
  }

  // Isotope Filters (for gallery)
  function isotopeFilters(gallery) {
    var gallery = $(gallery)
    if (gallery.length) {
      var container = gallery
      var optionSets = $(".filters-by-category .option-set"),
        optionLinks = optionSets.find("a")
      optionLinks.on("click", function (e) {
        var thisLink = $(this)
        if (thisLink.hasClass("selected")) return false
        var optionSet = thisLink.parents(".option-set")
        optionSet.find(".selected").removeClass("selected")
        thisLink.addClass("selected")
        var options = {},
          key = optionSet.attr("data-option-key"),
          value = thisLink.attr("data-option-value")
        value = value === "false" ? false : value
        options[key] = value
        if (key === "layoutMode" && typeof changeLayoutMode === "function")
          changeLayoutMode($this, options)
        else {
          container.isotope(options)
        }
        return false
      })
    }
  }

  // Post Isotope
  if (plugins.postGallery.length) {
    var $postgallery = plugins.postGallery
    $postgallery.imagesLoaded(function () {
      setPostSize()
    })
    $postgallery.isotope({
      itemSelector: ".blog-post",
      masonry: {
        gutter: 30,
        columnWidth: ".blog-post:not(.doubleW)",
      },
    })
  }

  // Post More
  $(".view-more-post").on("click", function () {
    var item
    var target = $(this).attr("data-load")
    $(this).hide()
    $.ajax({
      url: target,
      success: function (data) {
        $("#postPreload").append(data)
        if (plugins.postGallery.length) {
          $("#postPreload > div").each(function () {
            item = $(this)
            $postgallery.append(item).isotope("appended", item)
            setPostSize()
          })
        }
      },
    })
  })

  function setGallerySize() {
    var windowW = window.innerWidth || $window.width(),
      itemsInRow = 1
    if (windowW > 1199) {
      itemsInRow = 6
    } else if (windowW > 767) {
      itemsInRow = 3
    } else if (windowW > 480) {
      itemsInRow = 2
    }
    var containerW = $("#page-content").width(),
      galleryW = containerW / itemsInRow
    $gallery.find(".gallery__item").each(function () {
      if ($(this).hasClass("doubleW") && windowW > 767) {
        $(this).css({
          width: galleryW * 2 + "px",
        })
      } else {
        $(this).css({
          width: galleryW + "px",
        })
      }
    })
    var galleryH = $gallery.find(".gallery__item:not(.doubleH)").height()
    $gallery.find(".gallery__item").each(function () {
      $(this).css({
        height: "",
      })
      if ($(this).hasClass("doubleH") && windowW > 767) {
        $(this).css({
          height: galleryH * 2 + "px",
        })
      }
    })
    $gallery.isotope("layout")
  }

  function setPostSize() {
    var windowW = window.innerWidth || $window.width(),
      itemsInRow = 1
    if (windowW > 1199) {
      itemsInRow = 3
    } else if (windowW > 767) {
      itemsInRow = 3
    } else if (windowW > 480) {
      itemsInRow = 1
    }
    var containerW = $("#page-content .container").width() - 60,
      galleryW = containerW / itemsInRow
    $postgallery.find(".blog-post").each(function () {
      if (windowW > 767) {
        if ($(this).hasClass("doubleW")) {
          $(this).css({
            width: galleryW * 2 + 30 + "px",
          })
        } else {
          $(this).css({
            width: galleryW + "px",
          })
        }
      } else {
        $(this).css({
          width: galleryW + 60 + "px",
        })
      }
    })

    setTimeout(function () {
      $(".slick-initialized").slick("setPosition")
      $postgallery.isotope("layout")
    }, 100)
  }

  if (plugins.orderRequestFormSimple.length) {
    var $orderform = plugins.orderRequestFormSimple
    $orderform.validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        phone: {
          required: true,
          minlength: 10,
        },
        email: {
          required: true,
          email: true,
        },
        city: {
          required: true,
          minlength: 2,
        },
        address: {
          required: true,
          minlength: 3,
        },
        postal: {
          required: true,
          minlength: 2,
        },
      },
      messages: {
        name: {
          required: "Please enter your name",
          minlength: "Your name must consist of at least 2 characters",
        },
        phone: {
          required: "Please enter phone number",
          minlength: "Your phone number must consist of at least 10 characters",
        },
        address: {
          required: "Please enter address",
          minlength: "Your address must consist of at least 3 characters",
        },
        email: {
          required: "Please enter your email",
        },
        city: {
          required: "Please enter your city",
        },
        postal: {
          required: "Please enter your postal code",
        },
      },
      submitHandler: function (form) {
        $(form).ajaxSubmit({
          type: "POST",
          data: $(form).serialize(),
          url: "/process-contact.php",
          success: function () {
            $(".successform").fadeIn()
            $("#orderRequestFormSimple").each(function () {
              this.reset()
              window.location.replace("../thankyou.php")
            })
            return false
          },
          error: function () {
            $("#orderRequestFormSimple").fadeTo("slow", 0, function () {
              $("#errorform").fadeIn()
            })
            return false
          },
        })
      },
    })
  }
  // request form simple
  if (plugins.requestFormSimple.length) {
    var $requestFormSimple = plugins.requestFormSimple
    $requestFormSimple.validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        message: {
          required: true,
          minlength: 20,
        },
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: "Please enter your name",
          minlength: "Your name must consist of at least 2 characters",
        },
        message: {
          required: "Please enter message",
          minlength: "Your message must consist of at least 20 characters",
        },
        email: {
          required: "Please enter your email",
        },
      },
      submitHandler: function (form) {
        var $this = $(form)
        $(form).ajaxSubmit({
          type: "POST",
          data: $(form).serialize(),
          url: "/process-contact.php",
          success: function () {
            $(".successform").fadeIn()
            $("#requestFormSimple").each(function () {
              this.reset()
            })
            window.location.replace("thankyou.php")
            return false
          },
          error: function () {
            $("#requestFormSimple").fadeTo("slow", 0, function () {
              $(".errorform", $this).fadeIn()
            })
            return false
          },
        })
      },
    })
  }

  // Contact page form
  if (plugins.contactForm.length) {
    var $contactform = plugins.contactForm
    $contactform.validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        message: {
          required: true,
          minlength: 20,
        },
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: "Please enter your name",
          minlength: "Your name must consist of at least 2 characters",
        },
        message: {
          required: "Please enter message",
          minlength: "Your message must consist of at least 20 characters",
        },
        email: {
          required: "Please enter your email",
        },
      },
      submitHandler: function (form) {
        $(form).ajaxSubmit({
          type: "POST",
          data: $(form).serialize(),
          url: "process-contact.php",
          success: function () {
            $("#successform").fadeIn()
            $("#contactform").each(function () {
              this.reset()
            })
            window.location.replace("thankyou.php")
          },
          error: function () {
            $("#contactform").fadeTo("slow", 0, function () {
              $("#errorform").fadeIn()
            })
          },
        })
      },
    })
  }

  // request form
  if (plugins.requestForm.length) {
    var $requestForm = plugins.requestForm
    $requestForm.validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        message: {
          required: true,
          minlength: 20,
        },
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: "Please enter your name",
          minlength: "Your name must consist of at least 2 characters",
        },
        message: {
          required: "Please enter message",
          minlength: "Your message must consist of at least 20 characters",
        },
        email: {
          required: "Please enter your email",
        },
      },
      submitHandler: function (form) {
        var $this = $(form)
        $(form).ajaxSubmit({
          type: "POST",
          data: $(form).serialize(),
          url: "process-request.php",
          success: function () {
            console.log($this)
            $(".successform", $this).fadeIn()
            $(".requestForm-form-js").each(function () {
              this.reset()
            })
          },
          error: function () {
            $(".quote-form-js").fadeTo("slow", 0, function () {
              $(".errorform", $this).fadeIn()
            })
          },
        })
      },
    })
  }

  // wave effect
  function waveEffect(canvas, parent, color) {
    var TAU = Math.PI * 2
    var density = 1
    var speed = 1
    var res = 0.005 // percentage of screen per x segment
    var outerScale = 0.05 / density
    var inc = 0
    var c = $(canvas)[0]
    var ctx = c.getContext("2d")
    var grad = ctx.createLinearGradient(0, 0, 0, c.height * 4)

    function onResize() {
      $(canvas).attr({
        width: $(parent).width() + "px",
        height: $(parent).height() + "px",
      })
    }

    onResize()
    loop()
    $window.resize(onResize)

    function loop() {
      inc -= speed
      drawWave(color)
      requestAnimationFrame(loop)
    }

    function drawWave(color) {
      var w = c.offsetWidth
      var h = c.offsetHeight
      var cx = w * 0.5
      var cy = h * 0.5
      ctx.clearRect(0, 0, w, h)
      var segmentWidth = w * res
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.moveTo(0, cy)
      for (var i = 0, endi = 1 / res; i <= endi; i++) {
        var _y =
          cy +
          Math.sin((i + inc) * TAU * res * density) *
            cy *
            Math.sin(i * TAU * res * density * outerScale)
        var _x = i * segmentWidth
        ctx.lineTo(_x, _y)
      }
      ctx.lineTo(w, h)
      ctx.lineTo(0, h)
      ctx.closePath()
      ctx.fill()
    }
  }
  if (plugins.waveSliderFooter.length) {
    waveEffect(plugins.waveSliderFooter, ".page-footer", "#28bceb")
  }
  if (plugins.waveSlider.length) {
    waveEffect(plugins.waveSlider, "#slider", "#ffffff")
  }

  // Header Cart dropdown menu
  function toggleCart(cart, drop) {
    $("> a", $(cart)).on("click", function () {
      $(cart).toggleClass("opened")
    })
    $(document).on("click", function (e) {
      if (!$(e.target).closest(cart).length) {
        if ($(cart).hasClass("opened")) {
          $(cart).removeClass("opened")
        }
      }
    })
  }

  // Dropdown Form
  function popupForm(link) {
    if ($(link).length) {
      $(link).on("click", function (e) {
        $(this)
          .closest(".form-popup-wrap")
          .find(".form-popup")
          .toggleClass("opened")
        e.preventDefault()
      })
      $(document).on("click", function (event) {
        if (!$(event.target).closest(".form-popup-wrap").length) {
          if ($(".form-popup").hasClass("opened")) {
            $(".form-popup").removeClass("opened")
          }
        }
      })
    }
  }

  // Modal Form
  function modalPopup(drop) {
    $(document).on("click", drop, function (e) {
      var url = $(e.target).attr("href")
      console.log("")
      $.magnificPopup.open({
        items: {
          src: url,
        },
        type: "inline",
        midClick: true,
        removalDelay: 300,
        mainClass: "mfp-fade",
      })
    })
  }

  // Lazy Loading Effect
  function onScrollInit(items, container) {
    items.each(function () {
      var element = $(this),
        animationClass = element.attr("data-animation"),
        animationDelay = element.attr("data-animation-delay")

      element.css({
        "-webkit-animation-delay": animationDelay,
        "-moz-animation-delay": animationDelay,
        "animation-delay": animationDelay,
      })

      var trigger = container ? container : element

      trigger.waypoint(
        function () {
          element.addClass("animated").addClass(animationClass)
        },
        {
          triggerOnce: true,
          offset: "90%",
        }
      )
    })
  }
  onScrollInit($(".animation"))
  onScrollInit($(".step-animation"), $(".step-animation-container"))

  // Resize window events
  $window.resize(function () {
    var windowWidth = window.innerWidth || $window.width()
    if (windowWidth < 768) {
      startCarousel()
    }
    if (windowWidth > 767 && $(".navbar-toggle").is(":hidden")) {
      $(selected).removeClass("slide-active")
    }
    setTimeout(function () {
      toggleNavbarMethod(windowWidth)
      if (plugins.isotopeGallery.length) {
        setGallerySize()
      }
      if (plugins.postGallery.length) {
        setPostSize()
      }
    }, 500)
  })
})
var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split("&"),
    sParameterName,
    i

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split("=")

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1]
    }
  }
}
