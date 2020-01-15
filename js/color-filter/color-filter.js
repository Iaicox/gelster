let articles = document.querySelectorAll('.article-item');
let articlePodkatalog = document.querySelectorAll('.articles-podkatalog-name');

document.querySelector('.articles-podkatalog-name.all').addEventListener('click', function () {
  articlePodkatalog.forEach((article, index) => {
    articlePodkatalog[index].classList.remove('chosen-article');
  })
  this.classList.add('chosen-article');
  articles.forEach((article, index) => {
    articles[index].classList.remove('hide');
  });
  articles.forEach((article, index) => {
    if (index < 5) {
      articles[index].classList.remove('hide-article');
    } else {
      articles[index].classList.add('hide-article');
    }
  });
  document.querySelector('.see-all-collections').classList.remove('hide-more-article');
  document.querySelector(".collections-arrow").classList.remove("rotate_180");
  document.querySelector(".text-collections").innerHTML =
    "развернуть коллекцию";
});

function green() {
  articlePodkatalog.forEach((article, index) => {
    articlePodkatalog[index].classList.remove('chosen-article');
  })
  document.querySelector('.articles-podkatalog-name.green').classList.add('chosen-article');

  let articlesOne = document.querySelectorAll('.article-item.green');
  articles.forEach((article, index) => {
    articles[index].classList.add('hide');
  });
  for (let i = 0; i < 5; i++) {
    articlesOne.forEach((article, index) => {
      articlesOne[index].classList.remove('hide');
      articlesOne[index].classList.remove('hide-article');
    });
  };
  if (articlesOne.length > 0) {
    document.querySelector('.see-all-collections').classList.add('hide-more-article');
  } else {
    document.querySelector('.see-all-collections').classList.remove('hide-more-article');
  }
  document.querySelector(".collections-arrow").classList.remove("rotate_180");
  document.querySelector(".text-collections").innerHTML =
    "развернуть коллекцию";
};

function grey() {
  articlePodkatalog.forEach((article, index) => {
    articlePodkatalog[index].classList.remove('chosen-article');
  })
  document.querySelector('.articles-podkatalog-name.grey').classList.add('chosen-article');

  let articlesOne = document.querySelectorAll('.article-item.grey');
  articles.forEach((article, index) => {
    articles[index].classList.add('hide');
  });
  for (let i = 0; i < 5; i++) {
    articlesOne.forEach((article, index) => {
      articlesOne[index].classList.remove('hide');
      articlesOne[index].classList.remove('hide-article');
    });
  };
  if (articlesOne.length > 0) {
    document.querySelector('.see-all-collections').classList.add('hide-more-article');
  }
  document.querySelector(".collections-arrow").classList.remove("rotate_180");
  document.querySelector(".text-collections").innerHTML =
    "развернуть коллекцию";
};

function orange() {
  articlePodkatalog.forEach((article, index) => {
    articlePodkatalog[index].classList.remove('chosen-article');
  })
  document.querySelector('.articles-podkatalog-name.orange').classList.add('chosen-article');

  let articlesOne = document.querySelectorAll('.article-item.orange');
  articles.forEach((article, index) => {
    articles[index].classList.add('hide');
  });
  for (let i = 0; i < 5; i++) {
    articlesOne.forEach((article, index) => {
      articlesOne[index].classList.remove('hide');
      articlesOne[index].classList.remove('hide-article');
    });
  };
  if (articlesOne.length > 0) {
    document.querySelector('.see-all-collections').classList.add('hide-more-article');
  } else {
    document.querySelector('.see-all-collections').classList.remove('hide-more-article');
  }
  document.querySelector(".collections-arrow").classList.remove("rotate_180");
  document.querySelector(".text-collections").innerHTML =
    "развернуть коллекцию";
};

function brown() {
  articlePodkatalog.forEach((article, index) => {
    articlePodkatalog[index].classList.remove('chosen-article');
  })
  document.querySelector('.articles-podkatalog-name.brown').classList.add('chosen-article');

  let articlesOne = document.querySelectorAll('.article-item.brown');
  articles.forEach((article, index) => {
    articles[index].classList.add('hide');
  });
  for (let i = 0; i < 5; i++) {
    articlesOne.forEach((article, index) => {
      articlesOne[index].classList.remove('hide');
      articlesOne[index].classList.remove('hide-article');
    });
  };
  if (articlesOne.length > 0) {
    document.querySelector('.see-all-collections').classList.add('hide-more-article');
  } else {
    document.querySelector('.see-all-collections').classList.remove('hide-more-article');
  }
  document.querySelector(".collections-arrow").classList.remove("rotate_180");
  document.querySelector(".text-collections").innerHTML =
    "развернуть коллекцию";
};

function yellow() {
  articlePodkatalog.forEach((article, index) => {
    articlePodkatalog[index].classList.remove('chosen-article');
  })
  document.querySelector('.articles-podkatalog-name.yellow').classList.add('chosen-article');

  let articlesOne = document.querySelectorAll('.article-item.yellow');
  articles.forEach((article, index) => {
    articles[index].classList.add('hide');
  });
  for (let i = 0; i < 5; i++) {
    articlesOne.forEach((article, index) => {
      articlesOne[index].classList.remove('hide');
      articlesOne[index].classList.remove('hide-article');
    });
  };
  if (articlesOne.length > 0) {
    document.querySelector('.see-all-collections').classList.add('hide-more-article');
  } else {
    document.querySelector('.see-all-collections').classList.remove('hide-more-article');
  }
  document.querySelector(".collections-arrow").classList.remove("rotate_180");
  document.querySelector(".text-collections").innerHTML =
    "развернуть коллекцию";
};

function black() {
  articlePodkatalog.forEach((article, index) => {
    articlePodkatalog[index].classList.remove('chosen-article');
  })
  document.querySelector('.articles-podkatalog-name.black').classList.add('chosen-article');

  let articlesOne = document.querySelectorAll('.article-item.black');
  articles.forEach((article, index) => {
    articles[index].classList.add('hide');
  });
  for (let i = 0; i < 5; i++) {
    articlesOne.forEach((article, index) => {
      articlesOne[index].classList.remove('hide');
      articlesOne[index].classList.remove('hide-article');
    });
  };
  if (articlesOne.length > 0) {
    document.querySelector('.see-all-collections').classList.add('hide-more-article');
  } else {
    document.querySelector('.see-all-collections').classList.remove('hide-more-article');
  }
  document.querySelector(".collections-arrow").classList.remove("rotate_180");
  document.querySelector(".text-collections").innerHTML =
    "развернуть коллекцию";
};

function white() {
  articlePodkatalog.forEach((article, index) => {
    articlePodkatalog[index].classList.remove('chosen-article');
  })
  document.querySelector('.articles-podkatalog-name.white').classList.add('chosen-article');

  let articlesOne = document.querySelectorAll('.article-item.white');
  articles.forEach((article, index) => {
    articles[index].classList.add('hide');
  });
  for (let i = 0; i < 5; i++) {
    articlesOne.forEach((article, index) => {
      articlesOne[index].classList.remove('hide');
      articlesOne[index].classList.remove('hide-article');
    });
  };
  if (articlesOne.length > 0) {
    document.querySelector('.see-all-collections').classList.add('hide-more-article');
  } else {
    document.querySelector('.see-all-collections').classList.remove('hide-more-article');
  }
  document.querySelector(".collections-arrow").classList.remove("rotate_180");
  document.querySelector(".text-collections").innerHTML =
    "развернуть коллекцию";
};

function red() {
  articlePodkatalog.forEach((article, index) => {
    articlePodkatalog[index].classList.remove('chosen-article');
  })
  document.querySelector('.articles-podkatalog-name.red').classList.add('chosen-article');

  let articlesOne = document.querySelectorAll('.article-item.red');
  articles.forEach((article, index) => {
    articles[index].classList.add('hide');
  });
  for (let i = 0; i < 5; i++) {
    articlesOne.forEach((article, index) => {
      articlesOne[index].classList.remove('hide');
      articlesOne[index].classList.remove('hide-article');
    });
  };
  if (articlesOne.length > 0) {
    document.querySelector('.see-all-collections').classList.add('hide-more-article');
  } else {
    document.querySelector('.see-all-collections').classList.remove('hide-more-article');
  }
  document.querySelector(".collections-arrow").classList.remove("rotate_180");
  document.querySelector(".text-collections").innerHTML =
    "развернуть коллекцию";
};

function blue() {
  articlePodkatalog.forEach((article, index) => {
    articlePodkatalog[index].classList.remove('chosen-article');
  })
  document.querySelector('.articles-podkatalog-name.blue').classList.add('chosen-article');

  let articlesOne = document.querySelectorAll('.article-item.blue');
  articles.forEach((article, index) => {
    articles[index].classList.add('hide');
  });
  for (let i = 0; i < 5; i++) {
    articlesOne.forEach((article, index) => {
      articlesOne[index].classList.remove('hide');
      articlesOne[index].classList.remove('hide-article');
    });
  };
  if (articlesOne.length > 0) {
    document.querySelector('.see-all-collections').classList.add('hide-more-article');
  } else {
    document.querySelector('.see-all-collections').classList.remove('hide-more-article');
  }
  document.querySelector(".collections-arrow").classList.remove("rotate_180");
  document.querySelector(".text-collections").innerHTML =
    "развернуть коллекцию";
};

function beige() {
  articlePodkatalog.forEach((article, index) => {
    articlePodkatalog[index].classList.remove('chosen-article');
  })
  document.querySelector('.articles-podkatalog-name.beige').classList.add('chosen-article');

  let articlesOne = document.querySelectorAll('.article-item.beige');
  articles.forEach((article, index) => {
    articles[index].classList.add('hide');
  });
  for (let i = 0; i < 5; i++) {
    articlesOne.forEach((article, index) => {
      articlesOne[index].classList.remove('hide');
      articlesOne[index].classList.remove('hide-article');
    });
  };
  if (articlesOne.length > 0) {
    document.querySelector('.see-all-collections').classList.add('hide-more-article');
  } else {
    document.querySelector('.see-all-collections').classList.remove('hide-more-article');
  }
  document.querySelector(".collections-arrow").classList.remove("rotate_180");
  document.querySelector(".text-collections").innerHTML =
    "развернуть коллекцию";
};

function purple() {
  articlePodkatalog.forEach((article, index) => {
    articlePodkatalog[index].classList.remove('chosen-article');
  })
  document.querySelector('.articles-podkatalog-name.purple').classList.add('chosen-article');

  let articlesOne = document.querySelectorAll('.article-item.purple');
  articles.forEach((article, index) => {
    articles[index].classList.add('hide');
  });
  for (let i = 0; i < 5; i++) {
    articlesOne.forEach((article, index) => {
      articlesOne[index].classList.remove('hide');
      articlesOne[index].classList.remove('hide-article');
    });
  };
  if (articlesOne.length > 0) {
    document.querySelector('.see-all-collections').classList.add('hide-more-article');
  } else {
    document.querySelector('.see-all-collections').classList.remove('hide-more-article');
  }
  document.querySelector(".collections-arrow").classList.remove("rotate_180");
  document.querySelector(".text-collections").innerHTML =
    "развернуть коллекцию";
};