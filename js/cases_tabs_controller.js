const CASES = {
  "orm": [
    {
      "image": "../img/casecar-cropped.png",
      "text": "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7. ORM 1"
    },
    {
      "image": "../img/casecar-cropped.png",
      "text": "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7. ORM 2"
    },
    {
      "image": "../img/casecar-cropped.png",
      "text": "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7. ORM 3"
    },
  ],
  "serm": [
    {
      "image": "../img/casecar-cropped.png",
      "text": "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7. SERM 1"
    },
    {
      "image": "../img/casecar-cropped.png",
      "text": "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7. SERM 2"
    },
    {
      "image": "../img/casecar-cropped.png",
      "text": "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7. SERM 3"
    },
  ],
  "smm": [
    {
      "image": "../img/casecar-cropped.png",
      "text": "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7. SMM 1"
    },
    {
      "image": "../img/casecar-cropped.png",
      "text": "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7. SMM 2"
    },
    {
      "image": "../img/casecar-cropped.png",
      "text": "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7. SMM 3"
    },
  ],
  "monitoring": [
    {
      "image": "../img/casecar-cropped.png",
      "text": "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7. Мониторинг 1"
    },
    {
      "image": "../img/casecar-cropped.png",
      "text": "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7. Мониторинг 2"
    },
    {
      "image": "../img/casecar-cropped.png",
      "text": "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7. Мониторинг 3"
    },
  ],
  "advertisement": [
    {
      "image": "../img/casecar-cropped.png",
      "text": "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7. Реклама 1"
    },
    {
      "image": "../img/casecar-cropped.png",
      "text": "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7. Реклама 2"
    },
    {
      "image": "../img/casecar-cropped.png",
      "text": "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7. Реклама 3"
    },
  ]
}

let selectedTab = "orm"

$(document).ready(function () {
  let $caseMenuItems = $(".case-menu-item")

  cleanTab()
  fillTab(CASES[selectedTab])

  for (let i = 0; i < $caseMenuItems.length; i++) {
    let $currentCaseItem = $($caseMenuItems[i])
    console.log($currentCaseItem)
    $currentCaseItem.click(function () {
      $caseMenuItems.removeClass("active")
      for (let j = 0; j < $caseMenuItems.length; j++) {
        let $imgToDisable = $($caseMenuItems[j]).find("img")
        $imgToDisable.attr("src", $imgToDisable.attr("inactive-src"))
      }
      $(this).addClass("active")
      let $imgToEnable = $(this).find("img")
      $imgToEnable.attr("src", $imgToEnable.attr("active-src"))

      cleanTab()
      selectedTab = $(this).attr("tab")
      fillTab(CASES[selectedTab])
    })
  }
})

function cleanTab() {
  $(".info-tab").empty()
}

function fillTab(data) {
  let html = ''
  for (let k = 0; k < data.length; k++) {
    html += `<div class="tab-item" style="background-image: url('${data[k]['image']}');">
                 <p class="tab-item__text">${data[k]['text']}</p>
             </div>`
  }
  $(".info-tab").html(html)
}
