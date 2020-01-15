var projectsList = document.getElementsByClassName("photo_project"),
  projectsData = document.getElementsByClassName("projects_lib-item"),
  mainFrame = document.getElementById("mainPhotoFrame"),
  turnCount = 0,
  bigPhoto = $(".big_photo-wrapper")[0],
  gallery = $(".gallery-cur_project")[0],
  prevPhoto,
  nextPhoto,
  i,
  j,
  curFolder = gallery.children[0].src.split("photogallery/")[1].split("/")[0],
  hash = document.location.hash;

document.onload = galleryItemsClick();

for (i = 0; i < projectsList.length; i++) {
  projectsData[i].id = "project_" + (i + 1);
  projectsList[i].href = "#photoProject_" + (i + 1);
  projectsList[i].addEventListener("click", function(event) {
    var path =
      event.path ||
      (event.composedPath && event.composedPath()) ||
      iePath(event.target);
    var elemId = "project_" + path[0].href.split("photoProject_")[1];
    //        event.preventDefault();
    document.getElementById(elemId).click();
  });
}

for (i = 0; i < projectsData.length; i++) {
  var projects = document.getElementById("project_" + (i + 1));
  projects.addEventListener("click", changeProject);
} // Скрипт горизонтальной прокрутки в галерее под главным фото

/*$(".gallery-cur_project")[0].addEventListener('wheel', function(event) {
    if (event.deltaMode == event.DOM_DELTA_PIXEL) {
      var modifier = 1;
      // иные режимы возможны в Firefox
    } else if (event.deltaMode == event.DOM_DELTA_LINE) {
      var modifier = parseInt(getComputedStyle(this).lineHeight);
    } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
      var modifier = this.clientHeight;
    }
    if (event.deltaY != 0) {
      // замена вертикальной прокрутки горизонтальной
        if (event.deltaY > 0) {
            this.scrollLeft += modifier * (($(".gallery-cur_project")[0].offsetWidth / 5)+3);
        } else {
            this.scrollLeft += modifier * (-1) * (($(".gallery-cur_project")[0].offsetWidth / 5)+3);
        }
      event.preventDefault();
    }
  });*/ if (
  hash != ""
) {
  document.getElementById("project_" + hash.split("_")[1]).click();
}

if (getInternetExplorerVersion() !== -1) {
  fixGridIe();
}

$(window).resize(function() {
  if (getInternetExplorerVersion() !== -1) {
    fixGridIe();
  }
});

function changeProject(event) {
  var projectNum,
    i = 0,
    checkId = true,
    mainParent,
    curImg = [],
    projectsImgSrc,
    fullProjectsImgSrc;
  var path =
    event.path ||
    (event.composedPath && event.composedPath()) ||
    iePath(event.target);

  while (checkId) {
    projectNum = path[i].id.split("_")[1];
    if (path[i].id.split("_").includes("project")) {
      mainParent = path[i];
      checkId = false;
    }
    i++;
  }

  for (i = 0; i < projectsList.length; i++) {
    projectsList[i].classList.remove("active");
    if (projectsList[i].href.split("#")[1] == "photoProject_" + projectNum) {
      projectsList[i].classList.add("active");
    }
  }

  while (gallery.firstChild) {
    gallery.removeChild(gallery.firstChild);
  }

  document.getElementById("curProjectName").innerText =
    mainParent.children[2].children[0].innerText;
  document.getElementById("curProjectAdress").innerText =
    mainParent.children[2].children[1].innerText;
  document.getElementById("curProjectText").innerText =
    mainParent.children[2].children[2].innerText;
  bigPhoto.style.backgroundImage =
    'url("./img/photogallery/' + curFolder + "/" + projectNum + '-1.jpg")';

  checkId = true;
  i = 1;

  while (checkId) {
    fullProjectsImgSrc =
      "./img/photogallery/" + curFolder + "/" + projectNum + "-" + i + ".jpg";

    curImg[i] = document.createElement("img");
    curImg[i].src =
      "./img/photogallery/" + curFolder + "/" + projectNum + "-" + i + ".jpg";
    curImg[i].onerror = function() {
      this.parentNode.removeChild(this);
    };
    curImg[i].className = "";
    if (i == 1) {
      curImg[i].className = "active";
    }
    curImg[i].alt = mainParent.children[0].alt;
    gallery.appendChild(curImg[i]);

    if (i == 12) {
      checkId = false;
    }

    i++;
  }

  gallery.children[0].classList.add("active");

  document.getElementsByClassName(
    "used_materials-cur_project"
  )[0].children[0].innerHTML = "";
  document.getElementsByClassName(
    "used_materials-cur_project"
  )[0].children[1].innerHTML = "";
  document.getElementsByClassName(
    "used_materials-cur_project"
  )[0].children[2].innerHTML = "";

  for (
    i = 0;
    i <
    document
      .getElementsByClassName("projects_lib-item")
      [projectNum - 1].getElementsByClassName("flooring_name").length;
    i++
  ) {
    document.getElementsByClassName("used_materials-material")[i].appendChild(
      document
        .getElementsByClassName("projects_lib-item")
        [projectNum - 1].getElementsByClassName("flooring_name")
        [i].children[0].cloneNode(true)
    );
    document.getElementsByClassName("used_materials-material")[i].appendChild(
      document
        .getElementsByClassName("projects_lib-item")
        [projectNum - 1].getElementsByClassName("art_nums")
        [i].children[0].cloneNode(true)
    );
    document.getElementsByClassName("used_materials-material")[i].appendChild(
      document
        .getElementsByClassName("projects_lib-item")
        [projectNum - 1].getElementsByClassName("used_materials-articals_img")
        [i].cloneNode(true)
    );
  }

  document.getElementsByClassName("used_materials-fabric")[0].appendChild(
    document
      .getElementsByClassName("projects_lib-item")
      [projectNum - 1].getElementsByClassName("fabric")[0]
      .cloneNode(true)
  );

  turnCount = 0;
  galleryItemsClick();
  mainFrame.scrollIntoView({ behavior: "smooth", block: "start" });

  if (getInternetExplorerVersion() !== -1) {
    document.body.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start"
    });
  }

  window.location.hash = "photoProject_" + projectNum;

  return turnCount;
}

function galleryItemsClick() {
  for (i = 0; i < gallery.children.length; i++) {
    gallery.children[i].addEventListener("click", changeMainPhotoClick);
  }
}

function changeMainPhotoClick(event) {
  bigPhoto.style.backgroundImage = 'url("' + event.target.src + '")';
  for (i = 0; i < gallery.children.length; i++) {
    gallery.children[i].classList.remove("active");
    if (gallery.children[i].src === event.target.src) {
      turnCount = i;
    }
  }
  event.target.classList.add("active");
  return turnCount;
}

function changeMainPhoto(direction) {
  if (direction === "next") {
    ++turnCount;

    nextPhoto = turnCount % gallery.children.length;
    prevPhoto = (nextPhoto - 1) % gallery.children.length;

    if (prevPhoto < 0) {
      prevPhoto = gallery.children.length - 1;
    }

    bigPhoto.style.backgroundImage =
      'url("' + gallery.children[nextPhoto].src + '")';
    gallery.children[prevPhoto].classList.remove("active");
    gallery.children[nextPhoto].className += " active";
    if (nextPhoto >= 3) {
      scrollGallery("next", 1);
    } else if (nextPhoto == 0) {
      scrollGallery("prev", gallery.children.length);
    }
  } else {
    --turnCount;

    if (turnCount < 0) {
      turnCount = gallery.children.length - 1;
    }

    nextPhoto = turnCount % gallery.children.length;
    prevPhoto = (nextPhoto + 1) % gallery.children.length;

    bigPhoto.style.backgroundImage =
      'url("' + gallery.children[nextPhoto].src + '")';
    gallery.children[prevPhoto].classList.remove("active");
    gallery.children[nextPhoto].className += " active";

    if (nextPhoto <= gallery.children.length - 4) {
      scrollGallery("prev", 1);
    } else if (nextPhoto == 7) {
      scrollGallery("next", gallery.children.length);
    }
  }

  function scrollGallery(direction, times) {
    if (direction === "next") {
      gallery.scrollLeft +=
        times * ($(".gallery-cur_project")[0].offsetWidth / 5 + 3);
    } else {
      gallery.scrollLeft +=
        times * -1 * ($(".gallery-cur_project")[0].offsetWidth / 5 + 3);
    }
  }
}

function iePath(el) {
  var path = [];

  while (el) {
    path.push(el);

    if (el.tagName === "HTML") {
      path.push(document);
      path.push(window);

      return path;
    }

    el = el.parentElement;
  }
}

function fixGridIe() {
  var allProjects = document.getElementsByClassName("projects_lib-item"),
    ieProject,
    ieProjectNum,
    gridRowNum = 3,
    gridCol,
    gridColNum = 1;
  (i = 0), (j = 0);

  if ($(window).width() > 768) {
    while (i < allProjects.length) {
      while (j < 4) {
        ieProjectNum = i + 1;
        ieProject = document.getElementById("project_" + ieProjectNum);
        gridRow = "-ms-grid-row:" + gridRowNum + ";";
        gridCol = "-ms-grid-column:" + gridColNum + ";";

        ieProject.setAttribute("style", gridRow + gridCol);

        gridColNum++;
        gridColNum++;
        i++;
        j++;
        if (i == allProjects.length) {
          return;
        }
      }
      j = 0;
      gridColNum = 1;
      gridRowNum++;
      gridRowNum++;
    }
  } else if ($(window).width() <= 500) {
    while (i < allProjects.length) {
      while (j < 2) {
        ieProjectNum = i + 1;
        ieProject = document.getElementById("project_" + ieProjectNum);
        gridRow = "-ms-grid-row:" + gridRowNum + ";";
        gridCol = "-ms-grid-column:" + gridColNum + ";";

        ieProject.setAttribute("style", gridRow + gridCol);

        gridColNum++;
        gridColNum++;
        i++;
        j++;
        if (i == allProjects.length) {
          return;
        }
      }
      j = 0;
      gridColNum = 1;
      gridRowNum++;
      gridRowNum++;
    }
  } else {
    while (i < allProjects.length) {
      while (j < 3) {
        ieProjectNum = i + 1;
        ieProject = document.getElementById("project_" + ieProjectNum);
        gridRow = "-ms-grid-row:" + gridRowNum + ";";
        gridCol = "-ms-grid-column:" + gridColNum + ";";

        ieProject.setAttribute("style", gridRow + gridCol);

        gridColNum++;
        gridColNum++;
        i++;
        j++;
        if (i == allProjects.length) {
          return;
        }
      }
      j = 0;
      gridColNum = 1;
      gridRowNum++;
      gridRowNum++;
    }
  }
}

function getInternetExplorerVersion() {
  var rv = -1;
  if (navigator.appName == "Microsoft Internet Explorer") {
    var ua = navigator.userAgent;
    var re = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
    if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
  } else if (navigator.appName == "Netscape") {
    var ua = navigator.userAgent;
    var re = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})");
    if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
  }
  return rv;
}
