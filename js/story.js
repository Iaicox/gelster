// появление мобильного меню
$(document).on("scroll", window, function() {
  if ($(window).scrollTop() > 400) {
    $(".mobile-menu-section").addClass("mobile-menu-show");
  } else {
    $(".mobile-menu-section").removeClass("mobile-menu-show");
  }
});

//слайдер;

// 2019
let slides2019 = document.querySelectorAll(".photo-block_img.two-o-nineteenth");
let dotsSlide2019 = document.querySelectorAll(".dot.two-o-nineteenth");
let currentSlide2019 = 0;
let currentDot2019 = 0;

function nextSlide2019() {
  goToSlide2019(currentSlide2019 + 1);
}

function previousSlide2019() {
  goToSlide2019(currentSlide2019 - 1);
}

function goToSlide2019(n) {
  slides2019[currentSlide2019].classList.remove("photo-block_img__act");
  currentSlide2019 = (n + slides2019.length) % slides2019.length;
  slides2019[currentSlide2019].classList.add("photo-block_img__act");
  dotsSlide2019[currentDot2019].classList.remove("dot_active");
  currentDot2019 = (n + dotsSlide2019.length) % dotsSlide2019.length;
  dotsSlide2019[currentDot2019].classList.add("dot_active");
}

// 2018
let slides2018 = document.querySelectorAll(".photo-block_img.two-o-eighteenth");
let dotsSlide2018 = document.querySelectorAll(".dot.two-o-eighteenth");
let currentSlide2018 = 0;
let currentDot2018 = 0;

function nextSlide2018() {
  goToSlide2018(currentSlide2018 + 1);
}

function previousSlide2018() {
  goToSlide2018(currentSlide2018 - 1);
}

function goToSlide2018(n) {
  slides2018[currentSlide2018].classList.remove("photo-block_img__act");
  currentSlide2018 = (n + slides2018.length) % slides2018.length;
  slides2018[currentSlide2018].classList.add("photo-block_img__act");
  dotsSlide2018[currentDot2018].classList.remove("dot_active");
  currentDot2018 = (n + dotsSlide2018.length) % dotsSlide2018.length;
  dotsSlide2018[currentDot2018].classList.add("dot_active");
}

// 2017
let slides = document.querySelectorAll(".photo-block_img.yubiley");
let dotsSlide = document.querySelectorAll(".dot.yubiley");
let currentSlide = 0;
let currentDot = 0;

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].classList.remove("photo-block_img__act");
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("photo-block_img__act");
  dotsSlide[currentDot].classList.remove("dot_active");
  currentDot = (n + dotsSlide.length) % dotsSlide.length;
  dotsSlide[currentDot].classList.add("dot_active");
}

// 2016
let slidesOffice = document.querySelectorAll(".photo-block_img.office");
let dotsSlidesOffice = document.querySelectorAll(".dot.office");
let currentSlideOffice = 0;
let currentDotOffice = 0;

function nextSlideOffice() {
  goToSlideOffice(currentSlideOffice + 1);
}

function previousSlideOffice() {
  goToSlideOffice(currentSlideOffice - 1);
}

function goToSlideOffice(n) {
  slidesOffice[currentSlideOffice].classList.remove("photo-block_img__act");
  currentSlideOffice = (n + slidesOffice.length) % slidesOffice.length;
  slidesOffice[currentSlideOffice].classList.add("photo-block_img__act");
  dotsSlidesOffice[currentDotOffice].classList.remove("dot_active");
  currentDotOffice = (n + dotsSlidesOffice.length) % dotsSlidesOffice.length;
  dotsSlidesOffice[currentDotOffice].classList.add("dot_active");
}

// Holland
let slidesHolland = document.querySelectorAll(".photo-block_img.holland");
let dotsSlidesHolland = document.querySelectorAll(".dot.holland");
let currentSlideHolland = 0;
let currentDotHolland = 0;

function nextSlideHolland() {
  goToSlideHolland(currentSlideHolland + 1);
}

function previousSlideHolland() {
  goToSlideHolland(currentSlideHolland - 1);
}

function goToSlideHolland(n) {
  slidesHolland[currentSlideHolland].classList.remove("photo-block_img__act");
  currentSlideHolland = (n + slidesHolland.length) % slidesHolland.length;
  slidesHolland[currentSlideHolland].classList.add("photo-block_img__act");
  dotsSlidesHolland[currentDotHolland].classList.remove("dot_active");
  currentDotHolland = (n + dotsSlidesHolland.length) % dotsSlidesHolland.length;
  dotsSlidesHolland[currentDotHolland].classList.add("dot_active");
}

// 2012
let slidesTrening = document.querySelectorAll(".photo-block_img.trening");
let dotsSlideTrening = document.querySelectorAll(".dot.trening");
let currentSlideTrening = 0;
let currentDotTrening = 0;

function nextSlideTrening() {
  goToSlideTrening(currentSlideTrening + 1);
}

function previousSlideTrening() {
  goToSlideTrening(currentSlideTrening - 1);
}

function goToSlideTrening(n) {
  slidesTrening[currentSlideTrening].classList.remove("photo-block_img__act");
  currentSlideTrening = (n + slidesTrening.length) % slidesTrening.length;
  slidesTrening[currentSlideTrening].classList.add("photo-block_img__act");
  dotsSlideTrening[currentDotTrening].classList.remove("dot_active");
  currentDotTrening = (n + dotsSlideTrening.length) % dotsSlideTrening.length;
  dotsSlideTrening[currentDotTrening].classList.add("dot_active");
}

// активное и диномичное боковое меню
var postion_2019 = $("#nineteenth").offset().top,
  height_2019 = $("#nineteenth").height();
$(document).on("scroll", function() {
  var scroll = $(document).scrollTop();
  if (scroll > postion_2019 && scroll < postion_2019 + height_2019) {
    $(".nav-list_item.thirdteen").addClass("nav-list_item__act");
  } else {
    $(".nav-list_item.thirdteen").removeClass("nav-list_item__act");
  }
});

var postion_2018 = $("#eighteenth").offset().top,
  height_2018 = $("#eighteenth").height();
$(document).on("scroll", function() {
  var scroll = $(document).scrollTop();
  if (scroll > postion_2018 && scroll < postion_2018 + height_2018) {
    $(".nav-list_item.twelve").addClass("nav-list_item__act");
  } else {
    $(".nav-list_item.twelve").removeClass("nav-list_item__act");
  }
});

var postion_2017 = $("#seventeenth").offset().top,
  height_2017 = $("#seventeenth").height();
$(document).on("scroll", function() {
  var scroll = $(document).scrollTop();
  if (scroll > postion_2017 && scroll < postion_2017 + height_2017) {
    $(".nav-list_item.eleven").addClass("nav-list_item__act");
  } else {
    $(".nav-list_item.eleven").removeClass("nav-list_item__act");
  }
});

var postion_2016 = $("#sixteenth").offset().top,
  height_2016 = $("#sixteenth").height();
$(document).on("scroll", function() {
  var scroll = $(document).scrollTop();
  if (scroll > postion_2016 && scroll < postion_2016 + height_2016) {
    $(".nav-list_item.ten").addClass("nav-list_item__act");
  } else {
    $(".nav-list_item.ten").removeClass("nav-list_item__act");
  }
});

var postion_2015 = $("#fifteenth").offset().top,
  height_2015 = $("#fifteenth").height();
$(document).on("scroll", function() {
  var scroll = $(document).scrollTop();
  if (scroll > postion_2015 && scroll < postion_2015 + height_2015) {
    $(".nav-list_item.nine").addClass("nav-list_item__act");
  } else {
    $(".nav-list_item.nine").removeClass("nav-list_item__act");
  }
});

var postion_2014 = $("#fourteenth").offset().top,
  height_2014 = $("#fourteenth").height();
$(document).on("scroll", function() {
  var scroll = $(document).scrollTop();
  if (scroll > postion_2014 && scroll < postion_2014 + height_2014) {
    $(".nav-list_item.eight").addClass("nav-list_item__act");
  } else {
    $(".nav-list_item.eight").removeClass("nav-list_item__act");
  }
});

var postion_2013 = $("#thirdteenth").offset().top,
  height_2013 = $("#thirdteenth").height();
$(document).on("scroll", function() {
  var scroll = $(document).scrollTop();
  if (scroll > postion_2013 && scroll < postion_2013 + height_2013) {
    $(".nav-list_item.seven").addClass("nav-list_item__act");
  } else {
    $(".nav-list_item.seven").removeClass("nav-list_item__act");
  }
});

var postion_2012 = $("#twelveth").offset().top,
  height_2012 = $("#twelveth").height();
$(document).on("scroll", function() {
  var scroll = $(document).scrollTop();
  if (scroll > postion_2012 && scroll < postion_2012 + height_2012) {
    $(".nav-list_item.six").addClass("nav-list_item__act");
  } else {
    $(".nav-list_item.six").removeClass("nav-list_item__act");
  }
});

var postion_2011 = $("#eleventh").offset().top,
  height_2011 = $("#eleventh").height();
$(document).on("scroll", function() {
  var scroll = $(document).scrollTop();
  if (scroll > postion_2011 && scroll < postion_2011 + height_2011) {
    $(".nav-list_item.five").addClass("nav-list_item__act");
  } else {
    $(".nav-list_item.five").removeClass("nav-list_item__act");
  }
});

var postion_2010 = $("#tenth").offset().top,
  height_2010 = $("#tenth").height();
$(document).on("scroll", function() {
  var scroll = $(document).scrollTop();
  if (scroll > postion_2010 && scroll < postion_2010 + height_2010) {
    $(".nav-list_item.four").addClass("nav-list_item__act");
  } else {
    $(".nav-list_item.four").removeClass("nav-list_item__act");
  }
});

var postion_2009 = $("#ninth").offset().top,
  height_2009 = $("#ninth").height();
$(document).on("scroll", function() {
  var scroll = $(document).scrollTop();
  if (scroll > postion_2009 && scroll < postion_2009 + height_2009) {
    $(".nav-list_item.three").addClass("nav-list_item__act");
    $(".nav-list_item.two").addClass("nav-list_item__act");
  } else {
    $(".nav-list_item.three").removeClass("nav-list_item__act");
    $(".nav-list_item.two").removeClass("nav-list_item__act");
  }
});

var postion_2007 = $("#seventh").offset().top,
  height_2007 = $("#seventh").height();
$(document).on("scroll", function() {
  var scroll = $(document).scrollTop();
  if (scroll > postion_2007 && scroll < postion_2007 + height_2007) {
    $(".nav-list_item.one").addClass("nav-list_item__act");
  } else {
    $(".nav-list_item.one").removeClass("nav-list_item__act");
  }
});

//активное и динамичное мобильное меню

var switchYears = document.documentElement.clientWidth;
if (switchYears < 500) {
  var postion_2019_m = $("#nineteenth").offset().top,
    height_2019_m = $("#nineteenth").height();
  $(document).on("scroll", function() {
    var scroll = $(document).scrollTop();
    if (scroll > postion_2019_m && scroll < postion_2019_m + height_2019_m) {
      $(".item__list-year.19").addClass("current-year");
    } else {
      $(".item__list-year.19").removeClass("current-year");
    }
  });

  var postion_2018_m = $("#eighteenth").offset().top,
    height_2018_m = $("#eighteenth").height();
  $(document).on("scroll", function() {
    var scroll = $(document).scrollTop();
    if (scroll > postion_2018_m && scroll < postion_2018_m + height_2018_m) {
      $(".item__list-year.18").addClass("current-year");
    } else {
      $(".item__list-year.18").removeClass("current-year");
    }
  });

  var postion_2017_m = $("#seventeenth").offset().top,
    height_2017_m = $("#seventeenth").height();
  $(document).on("scroll", function() {
    var scroll = $(document).scrollTop();
    if (scroll > postion_2017_m && scroll < postion_2017_m + height_2017_m) {
      $(".item__list-year.17").addClass("current-year");
    } else {
      $(".item__list-year.17").removeClass("current-year");
    }
  });

  var postion_2016_m = $("#sixteenth").offset().top,
    height_2016_m = $("#sixteenth").height();
  $(document).on("scroll", function() {
    var scroll = $(document).scrollTop();
    if (scroll > postion_2016_m && scroll < postion_2016_m + height_2016_m) {
      $(".item__list-year.16").addClass("current-year");
    } else {
      $(".item__list-year.16").removeClass("current-year");
    }
  });

  var postion_2015_m = $("#fifteenth").offset().top,
    height_2015_m = $("#fifteenth").height();
  $(document).on("scroll", function() {
    var scroll = $(document).scrollTop();
    if (scroll > postion_2015_m && scroll < postion_2015_m + height_2015_m) {
      $(".item__list-year.15").addClass("current-year");
    } else {
      $(".item__list-year.15").removeClass("current-year");
    }
  });

  var postion_2014_m = $("#fourteenth").offset().top,
    height_2014_m = $("#fourteenth").height();
  $(document).on("scroll", function() {
    var scroll = $(document).scrollTop();
    if (scroll > postion_2014_m && scroll < postion_2014_m + height_2014_m) {
      $(".item__list-year.14").addClass("current-year");
    } else {
      $(".item__list-year.14").removeClass("current-year");
    }
  });

  var postion_2013_m = $("#thirdteenth").offset().top,
    height_2013_m = $("#thirdteenth").height();
  $(document).on("scroll", function() {
    var scroll = $(document).scrollTop();
    if (scroll > postion_2013_m && scroll < postion_2013_m + height_2013_m) {
      $(".item__list-year.13").addClass("current-year");
    } else {
      $(".item__list-year.13").removeClass("current-year");
    }
  });

  var postion_2012_m = $("#twelveth").offset().top,
    height_2012_m = $("#twelveth").height();
  $(document).on("scroll", function() {
    var scroll = $(document).scrollTop();
    if (scroll > postion_2012_m && scroll < postion_2012_m + height_2012_m) {
      $(".item__list-year.12").addClass("current-year");
    } else {
      $(".item__list-year.12").removeClass("current-year");
    }
  });

  var postion_2011_m = $("#eleventh").offset().top,
    height_2011_m = $("#eleventh").height();
  $(document).on("scroll", function() {
    var scroll = $(document).scrollTop();
    if (scroll > postion_2011_m && scroll < postion_2011_m + height_2011_m) {
      $(".item__list-year.11").addClass("current-year");
    } else {
      $(".item__list-year.11").removeClass("current-year");
    }
  });

  var postion_2010_m = $("#tenth").offset().top,
    height_2010_m = $("#tenth").height();
  $(document).on("scroll", function() {
    var scroll = $(document).scrollTop();
    if (scroll > postion_2010_m && scroll < postion_2010_m + height_2010_m) {
      $(".item__list-year.10").addClass("current-year");
    } else {
      $(".item__list-year.10").removeClass("current-year");
    }
  });

  var postion_2009_m = $("#ninth").offset().top,
    height_2009_m = $("#ninth").height();
  $(document).on("scroll", function() {
    var scroll = $(document).scrollTop();
    if (scroll > postion_2009_m && scroll < postion_2009_m + height_2009_m) {
      $(".item__list-year.9").addClass("current-year");
    } else {
      $(".item__list-year.9").removeClass("current-year");
    }
  });

  var postion_2008_m = $(".twenty-eight").offset().top,
    height_2008_m = $(".twenty-eight").height();
  $(document).on("scroll", function() {
    var scroll = $(document).scrollTop();
    if (scroll > postion_2008_m && scroll < postion_2008_m + height_2008_m) {
      $(".item__list-year.8").addClass("current-year");
      $(".item__list-year.9").removeClass("current-year");
    } else {
      $(".item__list-year.8").removeClass("current-year");
    }
  });

  var postion_2007_m = $("#seventh").offset().top,
    height_2007_m = $("#seventh").height();
  $(document).on("scroll", function() {
    var scroll = $(document).scrollTop();
    if (scroll > postion_2007_m && scroll < postion_2007_m + height_2007_m) {
      $(".item__list-year.7").addClass("current-year");
    } else {
      $(".item__list-year.7").removeClass("current-year");
    }
  });
}
