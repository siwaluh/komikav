const config = {
  'noImage': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhN74CcBgED5650EPwhm1ir78WYoOu10z_7Ww1lwW5u6ZNl2Ve9MK1DVsXE_O4svDpMGCDUrcYYYpi0sqzewLUtJzsysSEtqCru41FhWJeeqgxoAq-Hlh10PJYdbA35UczO4gQuuDBw0X6UULZkXZ3aTiu-n-R34tXtO4csVS6UtHTnlLSb6EB5ByvCIxfi/s800-rw/anime-girls-404-not-found-glowing-eyes-girls-frontline-wallpaper-preview.webp',
  'regexChapter': /((chapter|episode|ep|ch|vol|volume|bab)(\.\s|\s|\.)(\d{1,4})(\.\d{1,2})?)/gi,
  'regexScore': /(\d{1,2}\.\d{1,2})/,
  'nextPrevChapterAsync': true,
  'disqus_shortname': 'add_disqus_id_here',
  'license': 'insert_license_here',
  'max_bookmark': 10,
  'max_history': 10,
  'liveSearch': true,
  'readingBar': true
};

function createHTML(e, t, i) {
  let s = "",
    a = e.label.find(e => config.status.some(t => t == e)),
    r = e.label.find(e => config.type.some(t => t == e)),
    n = e.label.find(e => e.match(config.regexChapter)),
    l = e.label.find(e => e.match(config.regexScore)),
    o = e.label.find(e => /^(19|20)\d{2}$/.test(e)),
    c = e.label.filter(e => config.genre.some(t => t == e)),
    d = e.label.find(e => "Hot" == e || "hot" == e),
    p = BloggerScript.prototype.resizeImage;
  if ("series" == t) return e.image = p(e.image, "w148-h215-p-k-no-nu-rw"), s += '<div class="bs"><div class="bsx"', e.id && (s += ' data-id="' + e.id + '"'), s += '><a href="' + e.link + '" title="' + e.title + '"><div class="limit"><div class="ply"></div>', r && (s += '<span class="type ' + r + '">' + r + "</span>"), a && (s += '<span class="status ' + a + '">' + a + "</span>"), s += '<img class"lazy" loading="lazy" height="210" width="150" src="' + e.image + '"></div><div class="bigor"><div class="tt">' + e.title + '</div><div class="adds">', n && (s += '<div class="epxs">' + n + "</div>"), l && (s += '<div class="rt"><div class="rating"><div class="rating-prc"><div class="rtp"><div class="rtb"><span style="width:' + l.replace(".", "").slice(0, 2) + '%"></span></div></div></div><div class="numscore">' + l + "</div></div></div>"), s + "</div></div></a></div></div>";
  if ("list" == t) return e.image = p(e.image, "w58-h72-p-k-no-nu-rw"), s += '<li><div class="imgseries"><a class="series" href="' + e.link + '"><img loading="lazy" width="58" height="72" src="' + e.image + '"></a></div><div class="leftseries"><h2><a class="series" href="' + e.link + '">' + e.title + "</a></h2><span><b>Genres: </b>", c && c.length > 0 && (s += c.map(e => '<a href="/search/label/' + e + '?max-results=20">' + e + "</a>").join(", ")), s += "</span></span>", o && (s += o), s + "</span></div></li>";
  if ("latest" == t) return e.image = p(e.image, "w75-h100-p-k-no-nu-rw"), s += '<div class="utao"><div class="uta"><div class="imgu"><a class="series" href="' + e.link + '" title="' + e.title + '"><img src="' + e.image + '" loading="lazy" width="72" height="120">', d && (s += '<span class="hot">H</span>'), s += '</a></div><div class="luf"><a class="series" href="' + e.link + '" title="' + e.title + '"><h4>' + e.title + "</h4></a><ul", r && (s += ' class="' + r + '"'), s += ">", "items" in e && e.items.length > 0 && e.items.forEach(e => {
    let t = e.title.match(config.regexChapter).join(" ").replace(/((chapter)(\.\s|\s|\.))/i, "Ch.").replace(/((episode)(\.\s|\s|\.))/i, "Ep.").replace(/((volume)(\.\s|\s|\.))/i, "Vol.");
    s += '<li><a href="' + e.link + '">' + t + "</a><span>" + e.date + "</span></li>"
  }), s + "</ul></div></div></div>";
  if ("slider" == t) {
    let t, i = p(e.image, "w620-h280-c-rw");
    if (e.image = p(e.image, "w115-h163-c-rw"), "summary" in e) t = e.summary.slice(0, 150);
    else if ("content" in e) {
      let i = e.content.indexOf("<p>"),
        s = e.content.indexOf("</p>");
      [i, s].some(e => -1 != e) && (t = e.content.slice(i + 3, s).slice(0, 150))
    } else t = "Tidak ada Sinopsis";
    return s += '<div class="slide-item full"><div class="slide-bg"><img src="' + i + '"></div><div class="slide-shadow"></div><div class="slide-content"><div class="poster"><a href="' + e.link + '"><img src="' + e.image + '" loading="lazy" width="115" height="163"></a></div><div class="info-left"><div class="title">', l && (s += '<div class="rating"><div class="vote"><div class="site-vote"><span class="fa fa-star"><span>' + l + "</span></span></div></div></div>"), s += '<span class="ellipsis"><a href="' + e.link + '">' + e.title + "</a></span>", r && (s += '<span class="release-year">' + r + "</span>"), s += '</div><div class="extras"><div class="extra-category">', c && c.length > 0 && (s += c.map(e => '<a href="/search/label/' + e + '?max-results=20">' + e + "</a>").join(", ")), s += '</div></div><div class="excerpt">', s += '<span class="title">Summary</span><p>' + t + "</p>", s += '</div><div class="cast">', a && (s += '<span class="director"><strong>Status: </strong>' + a + "</span>"), s + "</div></div></div></div>"
  }
  if ("chapterlist" == t) {
    let t = (i || e.title).replace(/[^\d]/g, "");
    return s += '<li data-num="' + t + '"><div class="chbox"><div class="eph-num"><a href="' + e.link + '"><span class="chapternum">' + (i || e.title) + '</span><span class="chapterdate">' + e.date + "</span></a></div></div></li>", s
  }
  return s
}

function createMultiHTML(e, t) {
  let i = "";
  return e && e.length > 0 && e.forEach(e => {
    i += createHTML(e, t)
  }), i
}

function bookmarkHTML(e, t) {
  if ("btnActive" == e) t.classList.add("marked"), t.innerHTML = '<i class="fas fa-bookmark" aria-hidden="true"></i> Bookmarked';
  else if ("btnInActive" == e) t.classList.remove("marked"), t.innerHTML = '<i class="far fa-bookmark" aria-hidden="true"></i> Bookmark';
  else if ("btnLoading" == e) t.innerHTML = '<i class="fas fa-sync fa-spin"></i> Loading';
  else if ("bookmarkEmpty" == e) t.innerHTML = "<h4><center>YOU HAVE NO BOOKMARK, NOTHING TO SHOW</center></h4>";
  else if ("bookmarkLimit" == e) return alert("Sorry, you reached your bookmark limit, please remove other manga from bookmark")
}

function pageLoader(e) {
  let t = document.getElementById("page-loader");
  if ("remove" == e) window.pageLoadActive = !1, document.body.style.overflow = "", setTimeout(() => {
    t && t.remove(), document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, 100);
  else if ("add" == e) {
    window.pageLoadActive = !0;
    let e = document.createElement("div");
    e.id = "page-loader", e.innerHTML = '<div class="loader"><div class="square square1"></div><div class="square square2"></div><div class="square square3"></div><div class="square square4"></div></div>', document.body.style.overflow = "hidden", document.body.appendChild(e)
  }
}

function disqusLoader() {
  let e = document.getElementById("disqus_thread"),
    t = createScript();
  e && e.getBoundingClientRect().bottom <= window.innerHeight && (t.async = !0, t.type = "text/javascript", t.src = `//${config.disqus_shortname}.disqus.com/embed.js`, (document.body || document.head).appendChild(t), window.removeEventListener("scroll", disqusLoader))
}

function createDisqus(e, t, i) {
  let s = new URL(e),
    a = `https://${s.host+s.pathname}`;
  "DISQUS" in window ? window.DISQUS.reset({
    reload: !0,
    config: function () {
      this.page.url = a, this.page.title = t, this.page["identifier "] = i
    }
  }) : (window.removeEventListener("scroll", disqusLoader), window.disqus_config = function () {
    this.page.url = a, this.page.title = t, this.page["identifier "] = i
  }, window.addEventListener("scroll", disqusLoader))
}

function createScript(e) {
  let t = document.createElement("script");
  return e && (t.src = e), t
}

function createOwl(e) {
  let t = createScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"),
    i = createScript("https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"),
    s = document.getElementById("jquery-script");
  i.onload = e, s ? "function" == typeof jQuery ? document.body.appendChild(i) : s.onload = function () {
    console.log("jquery-element-loaded"), document.body.appendChild(i)
  } : (t.onload = function () {
    console.log("jquery-loaded"), document.body.appendChild(i)
  }, document.body.appendChild(t))
}
class Pagination {
  constructor(e) {
    this._config = e || {}
  }
  click(e, t) {
    let i = e.hash.split("page-")[1],
      s = Array.isArray(t) ? t.length : t;
    this.createPage(s, Number(i), t)
  }
  createElement(e, t, i, s) {
    let a = document.createElement("page-numbers current" == t ? "span" : "a");
    return a.className = t, a.href = `#${e}`, "page-numbers current" != t && a.addEventListener("click", e => {
      e.preventDefault(), this.click(a, i)
    }), a.innerText = s || e.split("page-")[1], a
  }
  createPage(e, t, i) {
    let s, a, r, n = document.createElement("div"),
      l = t - 1,
      o = t + 1;
    if (i = i || e, n.className = "pagination", e >= 2) {
      if (t > 1 && (a = e <= 2 ? "prev-left" : "prev page-numbers", r = `page-${t-1}`, n.appendChild(this.createElement(r, a, i, "« Sebelumnya"))), e > 2)
        if (e <= 6)
          for (let a = 1; a <= e; a++) s = t == a ? "page-numbers current" : "page-numbers", r = `page-${a}`, n.appendChild(this.createElement(r, s, i));
        else {
          t > 2 && (r = "page-1", n.appendChild(this.createElement(r, "page-numbers", i)), t > 3 && t != e && t != e - 1 && (r = `page-${t-2}`, n.appendChild(this.createElement(r, "page-numbers", i)))), 1 === t ? o += 2 : 2 === t && (o += 1), t === e ? l -= 2 : t === e - 1 && (l -= 1);
          for (let a = l; a <= o; a++) 0 === a && (a += 1), a > e || (s = t == a ? "page-numbers current" : "page-numbers", (t != e || t == e && a != e - 3) && (r = `page-${a}`, n.appendChild(this.createElement(r, s, i))));
          t < e - 1 && (t < e - 2 && 1 != t && 2 != t && (r = `page-${t+2}`, n.appendChild(this.createElement(r, "page-numbers", i))), r = `page-${e}`, n.appendChild(this.createElement(r, "page-numbers", i)))
        } t < e && (a = e <= 2 ? "next-r" : "next page-numbers", r = `page-${t+1}`, n.appendChild(this.createElement(r, a, i, "Berikutnya »")))
    }
    return this._config.callback && this._config.callback(n, t, i), {
      currentPage: t,
      mainElement: n
    }
  }
  arrayToPage(e, t, i) {
    let s = Array.isArray(e) ? e.length : e,
      a = Array(Math.ceil(s / t)).fill(0).map((i, s) => ({
        id: `page-${s+1}`,
        items: Array.isArray(e) ? e.slice(s * t, Math.min(e.length, (s + 1) * t)) : []
      }));
    return i ? this.createPage(a.length, 1, a) : a
  }
}
class BloggerScript {
  constructor(e) {
    this.config = e || {}
  }
  err(e) {
    return console.log(e), e
  }
  createRT(e) {
    let t = "",
      i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      s = i.length;
    for (let a = 0; a < e; a++) t += i.charAt(Math.floor(Math.random() * s));
    return t
  }
  createURL() {
    let e = this.config,
      t = document.location.protocol + "//" + e.host + "/feeds/";
    return "object" == typeof e.type ? "comments" == e.type.name ? t += e.type.id + "/" + e.type.name + "/" + e.feed : t += e.type.name + "/" + e.feed + "/" + e.type.id : t += e.type + "/" + e.feed, 0 != e.label && "object" != typeof e.type && (t += "/-/" + e.label), t = new URL(t), ["q", "category", "start-index", "max-results", "orderby", "alt"].forEach(i => {
      0 != e[i] && "object" != typeof e.type ? t.searchParams.set(i, e[i]) : "object" == typeof e.type && "alt" == i ? t.searchParams.set(i, e[i]) : "object" != typeof e.type || "comments" != e.type.name || "start-index" != i && "max-results" != i || t.searchParams.set(i, e[i])
    }), t
  }
  resizeImage(e, t = !1) {
    if (!t) return e;
    let i = /\/(s|w|h)\d{1,4}-((w|s|h)(\d{1,4})+-)?(c{1,2}|p-k-no-nu|rw)/gi,
      s = /\=(s|w|h)\d{1,4}-((w|s|h)(\d{1,4})+-)?(c{1,2}|p-k-no-nu|rw)/gi,
      a = /(\/(w|h|s)\d{1,4}\/)/gi,
      r = /(\=(w|h|s)\d{1,4})$/gi,
      n = /\-(rw)$/.test(t);
    return a.test(e) && (e = e.replace(a, "/s72-c/")), r.test(e) && (e = e.replace(r, "=s72-c")), n && (e = e.replace(/\.(gif|jpe?g|tiff?|png|bmp)$/, ".webp")), e.match(i) ? e.replace(i, `/${t}`) : e.match(s) ? e.replace(s, `=${t}`) : e
  }
  shuffle(e) {
    var t, i, s = e.length;
    if (0 === s) return [];
    for (; --s;) t = Math.floor(Math.random() * (s + 1)), i = e[s], e[s] = e[t], e[t] = i;
    return e
  }
  shuffle2(e, t) {
    return Math.floor(Math.random() * (t - e)) + e
  }
  sort(e, t) {
    if ("Update" == t || "Added" == t) {
      let i = "Update" == t ? "updated" : "published";
      e = e.sort(function (e, t) {
        return e[i] < t[i] ? -1 : e[i] > t[i] ? 1 : 0
      }).reverse()
    } else "A-Z" != t && "Z-A" != t || (e = e.sort((e, t) => e.title.localeCompare(t.title, void 0, {
      numeric: !0
    })), "Z-A" == t && (e = e.reverse()));
    return e
  }
  xhr(e, t = this.err) {
    let i = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    i.onreadystatechange = function () {
      if (4 == this.readyState && 200 == this.status || 304 == this.status) {
        let e = this.responseText,
          i = JSON.parse(e.substring(e.indexOf("{"), e.lastIndexOf("}") + 1));
        t && t(i)
      } else 4 == this.readyState && t && t({})
    }, i.open("GET", e, !0), i.send()
  }
  xhr2(e, t = this.err) {
    let i = document.createElement("script"),
      s = "xhr2" + this.createRT(7);
    return window[s] = function (e) {
      return t(e)
    }, i.src = `${e}&callback=window.${s}`, i.onerror = function (e) {
      console.log(e), t({})
    }, i.async = !0, (document.body || document.getElementsByTagName("body")[0]).appendChild(i)
  }
  getXHRtype(e) {
    return new URL(e).hostname == document.location.hostname ? "xhr" : "xhr2"
  }
  get config() {
    return this._config
  }
  set config(e) {
    "_config" in this || (this._config = {
      host: document.location.hostname,
      feed: "default",
      type: "posts",
      alt: "json-in-script",
      "max-results": 10,
      "start-index": 1,
      category: !1,
      label: !1,
      q: !1,
      orderby: "published"
    });
    for (const t in e) Object.hasOwnProperty.call(e, t) && ("jumlah" == t ? (this._config["max-results"] = e[t], this._config[t] = e[t]) : this._config[t] = e[t])
  }
  getId(e) {
    return e.split("post-")[1]
  }
  getAuthor(e) {
    let t = {};
    return "name" in e && (t.name = e.name.$t), "uri" in e && (t.uri = e.uri.$t), "gd$image" in e && "src" in e.gd$image && -1 == e.gd$image.src.indexOf("https://img1.blogblog.com/") ? t.image = this.resizeImage(e.gd$image.src, this._config.sizeImage) : t.image = this._config.noImage ? this.resizeImage(this._config.noImage, this._config.sizeImage) : "", t
  }
  getDefault(e) {
    let t = ["published", "updated", "content", "summary", "title"],
      i = {};
    return t.forEach(t => {
      t in e && (i[t] = e[t].$t, "published" == t && (i.date = this.getTime(e[t].$t)))
    }), i
  }
  getImage(e) {
    let t = this._config.noImage ? this.resizeImage(this._config.noImage, this._config.sizeImage) : "";
    if ("media$thumbnail" in e) return this.resizeImage(e.media$thumbnail.url, this._config.sizeImage);
    if ("content" in e) {
      let i = e.content.$t,
        s = i.indexOf("<img"),
        a = i.indexOf('src="', s),
        r = i.indexOf('"', a + 5),
        n = i.substr(a + 5, r - a - 5);
      return -1 != s && -1 != a && -1 != r && "" != n ? n : t
    }
    return t
  }
  getTime(e) {
    if (/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/.test(e)) {
      var t = e,
        i = t.substring(0, 4),
        s = t.substring(5, 7),
        a = t.substring(8, 10),
        r = new Array;
      return r[1] = "Jan", r[2] = "Feb", r[3] = "Mar", r[4] = "Apr", r[5] = "May", r[6] = "Jun", r[7] = "Jul", r[8] = "Aug", r[9] = "Sep", r[10] = "Oct", r[11] = "Nov", r[12] = "Dec", a + " " + r[parseInt(s, 10)] + " " + i
    }
    return !1
  }
  getFeed(e) {
    let t = new Array,
      i = e.feed && e.feed.entry || e.entry && [e.entry] || !1;
    if (i)
      for (let e = 0; e < i.length; e++) {
        const s = i[e];
        let a = this.getDefault(s);
        a.id = this.getId(s.id.$t), a.link = s.link.find(e => "alternate" == e.rel).href, a.image = this.getImage(s), "category" in s && (a.label = s.category.map(e => e.term)), "author" in s && (a.author = this.getAuthor(s.author[0])), "thr$total" in s && (a.comments_count = s.thr$total.$t), t.push(a)
      }
    return t
  }
  run(e) {
    let t = this.createURL().href,
      i = this.getXHRtype(t);
    this[i](t, t => (e || this.err)(this.getFeed(t)))
  }
}
class BloggerRandom extends BloggerScript {
  constructor(e = {}) {
    super(e), this.config = {
      "max-results": 0
    }
  }
  getTotalResults(e) {
    let t = e.feed.openSearch$totalResults.$t,
      i = this.config.jumlah;
    return i ? t = t < i ? 1 : this.shuffle2(1, t - i) : (t = t <= 150 ? 1 : this.shuffle2(1, t - 150), i = 150), this.config = {
      "max-results": i,
      "start-index": t
    }, this.createURL().href
  }
  getItems(e) {
    if ("entry" in e.feed) {
      let t = this.getFeed(e);
      return t = this.shuffle(t), t
    }
    return []
  }
  run(e) {
    let t = this.createURL().href,
      i = this.getXHRtype(t);
    this[i](t, t => {
      let s = this.getTotalResults(t);
      if (0 == s) return this.config = {
        "max-results": 0,
        "start-index": 1
      }, (e || this.err)([]);
      this[i](s, t => {
        this.config = {
          "max-results": 0,
          "start-index": 1
        }, (e || this.err)(this.getItems(t))
      })
    })
  }
}
class BloggerRelated extends BloggerScript {
  constructor(e = {}) {
    super(e)
  }
  run(e) {
    let t = 0,
      i = document.location.pathname,
      s = this.config.label,
      a = this.config.jumlah,
      r = new Array;
    if ("object" == typeof s) s.forEach((s, n, l) => {
      this._config.label = s;
      let o = this.createURL().href,
        c = this.getXHRtype(o);
      this[c](o, s => {
        let n = this.getFeed(s);
        if (n.forEach(e => !r.some(t => t.id == e.id) && r.push(e)), t++, t == l.length) {
          let t = r.map(e => new URL(e.link).pathname == i).indexOf(!0);
          r.splice(t, 1), r = this.shuffle(r).slice(0, a), (e || this.err)(r)
        }
      })
    });
    else if ("string" == typeof s) {
      let t = this.createURL().href,
        i = this.getXHRtype(t);
      this[i](t, t => {
        (e || this.err)(this.getFeed(t))
      })
    } else(e || this.err)([])
  }
}
class BloggerSitemap extends BloggerScript {
  constructor(e) {
    super(e), this.config = {
      "max-results": 150,
      "total-get": 0
    }, this.posts = []
  }
  alphaSort(e) {
    let t = new Array,
      i = new Array,
      s = "";
    0 != e.length && this.sort(e, "A-Z").forEach(e => {
      let i = e.title.charAt(0).toLowerCase(); - 1 == s.indexOf(i) ? (s += i, t[i] = [e]) : t[i].push(e)
    });
    for (const e in t)
      if (Object.hasOwnProperty.call(t, e)) {
        const s = t[e];
        i.push({
          id: e,
          items: s
        })
      } return i
  }
  get posts() {
    return this._posts
  }
  set posts(e) {
    "_posts" in this || (this._posts = new Array), Array.prototype.push.apply(this._posts, e)
  }
  resetPosts() {
    "_posts" in this && (this._posts = new Array)
  }
  run(e) {
    let t = this.createURL().href,
      i = this.getXHRtype(t),
      s = () => {
        this.config = {
          "max-results": 150,
          "start-index": 1,
          "total-get": 0
        }, this.resetPosts()
      };
    this.config["total-get"]++, this[i](t, t => {
      if (t && t.feed && t.feed.entry) {
        let i = t.feed.openSearch$totalResults.$t || 0,
          a = t.feed.entry;
        this.posts = this.getFeed(t), a.length >= this.config["max-results"] ? (this.config["start-index"] += this.config["max-results"], this.config.firstContent && 1 == this.config["total-get"] && (e || this.err)({
          totalPosts: i,
          posts: this.posts,
          completed: !1
        }), this.run(e || this.err)) : ((e || this.err)({
          totalPosts: i,
          totalGet: this.config["total-get"],
          posts: this.posts,
          completed: !0
        }), s())
      } else(e || this.err)({
        totalPosts: this.posts.length,
        totalGet: this.config["total-get"],
        posts: this.posts,
        completed: !0
      }), s()
    })
  }
}
class BloggerComments extends BloggerScript {
  constructor(e) {
    super(e), this.config = {
      type: "comments" != this.config.type && "comments" != this.config.type.name ? "comments" : this.config.type,
      "max-results": this.config.jumlah ? this.config.jumlah : 500
    }
  }
  getComments(e) {
    let t = new Array;
    if (e.feed && e.feed.entry)
      for (let i = 0; i < e.feed.entry.length; i++) {
        const s = e.feed.entry[i];
        let a = this.getDefault(s);
        a.id = this.getId(s.id.$t), "thr$in-reply-to" in s && (a["post-id"] = this.getId(s["thr$in-reply-to"].ref)), "thr$in-reply-to" in s && (a["post-source"] = s["thr$in-reply-to"].source.replace("http://", "https://")), a.link = s.link.find(e => "alternate" == e.rel).href, "author" in s && (a.author = this.getAuthor(s.author[0])), t.push(a)
      }
    return t
  }
  getPostInfo(e, t) {
    if (0 != e.length) {
      let i = 0,
        s = 0,
        a = this.config.type,
        r = this.config.feed,
        n = new Array;
      e.forEach(e => "post-id" in e && "post-source" in e && !(e["post-id"] in n) && (n[e["post-id"]] = !0, i++));
      for (const l in n)
        if (Object.hasOwnProperty.call(n, l)) {
          this.config = {
            type: {
              name: "posts",
              id: l
            },
            feed: "summary"
          };
          let o = this.createURL().href,
            c = this.getXHRtype(o);
          this[c](o, o => {
            o && "entry" in o && (n[l] = this.getFeed(o)), s++, s == i && (e = e.map(e => (e["post-info"] = "post-id" in e && n[e["post-id"]][0] || !1, e)), this.config = {
              type: a,
              feed: r
            }, (t || this.err)(e))
          })
        }
    } else(t || this.err)(e)
  }
  run(e) {
    let t = this.createURL().href,
      i = this.getXHRtype(t);
    this[i](t, t => (e || this.err)(this.getComments(t)))
  }
}