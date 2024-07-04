const CASES = {
  "orm": [
    {
      "image": "../img/casecar-cropped.png",
      "text": "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7. ORM"
    },
    {
      "image": "../img/casecar-cropped.png",
      "text": "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7. ORM"
    },
    {
      "image": "../img/casecar-cropped.png",
      "text": "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7. ORM"
    },
  ],
  "serm": [
    {
      "image": "../img/casecar-cropped.png",
      "text": "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7. SERM"
    },
    {
      "image": "../img/casecar-cropped.png",
      "text": "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7. ORM"
    },
    {
      "image": "../img/casecar-cropped.png",
      "text": "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7. SERM"
    },
  ],
  "smm": [
    {
      "image": "../img/casecar-cropped.png",
      "text": "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7. SMM"
    },
    {
      "image": "../img/casecar-cropped.png",
      "text": "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7. SMM"
    },
    {
      "image": "../img/casecar-cropped.png",
      "text": "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7. SMM"
    },
  ],
  "monitoring": [
    {
      "image": "../img/casecar-cropped.png",
      "text": "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7. Мониторинг"
    },
    {
      "image": "../img/casecar-cropped.png",
      "text": "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7. Мониторинг"
    },
    {
      "image": "../img/casecar-cropped.png",
      "text": "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7. Мониторинг"
    },
  ],
  "advertisement": [
    {
      "image": "../img/casecar-cropped.png",
      "text": "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7. Реклама"
    },
    {
      "image": "../img/casecar-cropped.png",
      "text": "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7. Реклама"
    },
    {
      "image": "../img/casecar-cropped.png",
      "text": "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7. Реклама"
    },
  ]
}

let selectedTab = "orm"

$(document).ready(function () {
  let $caseMenuItems = $(".case-menu-item")

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
      fillTab(CASES[$(this).attr("tab")])
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
