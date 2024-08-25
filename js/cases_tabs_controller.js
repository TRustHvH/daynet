const CASES = {
  "orm": [
    {
      "image": "../img/clinic.svg",
      "text": "Сеть клиник Алтея. ORM медицина",
      "link": "cases/case-clinic.html"
    },
    {
      "image": "../img/car-big-image.jpeg",
      "text": "Автосалон. ORM",
      "link": "cases/case-autosalon.html"
    },
    {
      "image": "../img/build.svg",
      "text": "Застройщик. ORM",
      "link": "cases/case-build.html"
    },
    {
      "image": "../img/case-eat.jpg",
      "text": "Сеть питания. ORM",
      "link": "cases/case-cafe.html"
    },
    /*{
      "image": "../img/case-opr.jpg",
      "text": "Опровержение. ORM",
      "link": "cases/case-opr.html"
    },*/
    {
      "image": "../img/personal.svg",
      "text": "Персональная репутация. ORM персоны",
      "link": "cases/case-personality.html"
    },
  ],
  "smrm-hm": [
    {
      "image": "../img/case-taxi.jpg",
      "text": "Укрепление репутации сервиса такси. SMRM и HM",
      "link": "cases/case-taxi.html"
    },
  ],
  "hr": [
    {
      "image": "../img/case-bank.svg",
      "text": "Банк Совесть. Управление репутацией HR",
      "link": "cases/case-bank.html"
    },
    {
      "image": "../img/case-3000.png",
      "text": "3000 сотрудников. Управление репутацией HR",
      "link": "cases/case-3000.html"
    },
  ],
  "monitoring": [
    /*{
      "image": "../img/case-distribute.png",
      "text": "Дистрибьютор. Программный мониторинг",
      "link": "cases/case-distribute.html"
    },*/
  ],
  "reputation": [
    {
      "image": "../img/building-materials.svg",
      "text": "Стройматериалы. Репутация",
      "link": "cases/case-building-materials.html"
    }
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
      $(".case-menu-item-random").removeClass("active")
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

  $(".case-menu-item-random").click(function () {
    $(".case-menu-item-random").addClass("active")
    $caseMenuItems.removeClass("active")
    for (let j = 0; j < $caseMenuItems.length; j++) {
      let $imgToDisable = $($caseMenuItems[j]).find("img")
      $imgToDisable.attr("src", $imgToDisable.attr("inactive-src"))
    }
    const categories = Object.keys(CASES)
    const randomCategory = categories[Math.floor(Math.random() * categories.length)]
    const randomItem = CASES[randomCategory][Math.floor(Math.random() * CASES[randomCategory].length)]

    cleanTab()
    fillTab([randomItem])
  })
})

function cleanTab() {
  $(".info-tab").empty()
}

function fillTab(data) {
  let html = ''
  for (let k = 0; k < data.length; k++) {
    html += `<div class="tab-item" style="background-image: url('${data[k]['image']}');">
                 <div class="info-case-item">
                     <p class="tab-item__text">${data[k]['text']}</p>
                     <a href="${data[k]["link"]}" class="hidden-button-case">Узнать больше <img src="../img/case-hidden-button.svg" alt=""></a>
                </div>
             </div>`
  }
  $(".info-tab").html(html)
}
