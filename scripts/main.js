// const changeAreaElement = document.getElementById("changeArea");
const buildingsCount = 15;
const buildings = [];
const buildingsName = ["1号館", "2号館", "3号館", "4号館", "サークル棟Ⅰ", "サークル棟Ⅱ", "7号館", "8号館", "9号館", "サークルセンター", "総合体育館", "サクラスポーツ&ジムなスティックセンター", "図書館", "百周年記念館", "本館"];
const sideItems = [];
const classroom = [];
const buildingDescs = ["教室棟 \n 119~151教室、教職センター、就職指導課、研究事務課など", "研究棟 \n 2201~21211室、総合文化・ドイツ文学科・史学科・哲学科事務室など", "教室棟 \n 3201~3059教室、1階に食事コーナーあり", "教室棟 \n 411~444教室", "サークル室など", "サークル室など", "研究棟 \n 7007~7419室、中国語中国文化学科・英文学科・国文学科事務室など", "研究棟 \n 物理学科・情報科学科・地球科学科・地理学科事務室など", "研究棟", "サークル室など", "剣道場、柔道場、プールなど", "ダンスルーム、体操場など", "展示ホールやメディアラボ、ラーニング・スクウェアなど", "ニューアリーナなど", "事務・研究棟 \n 教務課、学生課、庶務課、心理学科・社会福祉学科・社会学科・教育学科・数学科・生命科学科・化学科事務室など"];
var newBtn = document.createElement("button");
var mapImages;

var btnCount;
var floorBtns = [];

document.body.classList.toggle("show-nav");
document.getElementById("deleteconpo").classList.toggle("deleteclass");

for (let i = 0; i < buildingsCount; i++) {
  buildings.push(document.getElementById( "building" + (i + 1) ));
  // buildingsが配列なので、個々の要素に対するイベントリスナーを設定
  //マウスホバー・アウト時の色変換
  if (buildings[i]) {
    buildings[i].addEventListener("mouseenter", () => {
      buildings[i].querySelector("path").style.fill = "rgb(255,165,0)";
      console.log( "building" + (i + 1) );
      // document.body.classList.toggle("show-nav");
      // document.getElementById("deleteconpo").classList.toggle("deleteclass");
      document.querySelector(".buildingDesc").textContent = buildingDescs[i];
      document.querySelector(".logo > a").textContent = buildingsName[i];
    });

    buildings[i].addEventListener("mouseleave", () => {
      buildings[i].querySelector("path").style.fill = "rgb(68,114,196)";
      // document.body.classList.remove("show-nav");
      // document.getElementById("deleteconpo").classList.toggle("deleteclass");
    });

    buildings[i].addEventListener("click", () => {
    pictures.style.display = "block";
      if (i == 0) {
        showFacilityMap(i, 5, 0, 0, -1);
      } else if (i == 1) {
        showFacilityMap(i, 12, 0, 0, -1);
      } else if (i == 2) {
        showFacilityMap(i, 5, 0, 0, -1);
      } else if (i == 3) {
        showFacilityMap(i, 4, 0, 0, -1);
      } else if (i == 4) { 
        showFacilityMap(i, 4, 0, 0, -1);
      } else if (i == 5) {
        showFacilityMap(i, 12, 0, 0, -1);
      } else if (i == 6) {
        showFacilityMap(i, 4, 1, 1, -1);
      } else if (i == 7) {
        showFacilityMap(i, 5, 1, 1, -1);
      } else if (i == 8) {
        showFacilityMap(i, 3, 0, 0, -1);
      } else if (i == 9) {
        showFacilityMap(i, 2, 1, 1, -1);
      } else if (i == 10) {
        showFacilityMap(i, 4, 0, 0, -1);
      } else if (i == 11) {
        showFacilityMap(i, 2, 0, 0, -1);
      } else if (i == 12) {
        showFacilityMap(i, 3, 0, 0, -1);
      } else if (i == 13) {
        showFacilityMap(i, 2, 0, 0, -1);
      } else {
        showFacilityMap(i, 7, 1, 1, -1);
      }
    });
  }
}

function disp(info){

	window.alert(info);

}

// index:html内のimg配列の指定、count:各施設の階数
function showFacilityMap(index, count, bCount, firstFloor, highLightClass) {
  if ([4, 5].includes(index)) {
    disp("詳細情報がありません。");
  }  
  document.getElementById("buildingName").textContent = buildingsName[index];
  mapImages = document.querySelectorAll("#pictures .buildingImage" + index);
  console.log("画像の枚数:" + mapImages.length);
  console.log("highLightClass:" + highLightClass);
  if (0 <= index) {
    // 
    mapImages[firstFloor].style.display = "block";
    // if(0 <= highLightClass) {
      console.log('mapImages[firstFloor].querySelectorAll("a").length:' + mapImages[firstFloor].querySelectorAll("a").length);
      classroom.length = 0;
      for(let i = 0; i < mapImages[firstFloor].querySelectorAll("a").length; i++) {
        classroom.push(mapImages[firstFloor].getElementById("classroom-" + i));
        console.log("classroom[" + i + "]");
        classroom[i].querySelector("path").style.fill = "rgb(68,114,196)";//rgb(255,255,255)
        classroom[i].addEventListener("mouseenter", () => {
          classroom[i].querySelector("path").style.fill = "rgb(255,165,0)";
          document.querySelector(".buildingDesc").textContent = classroom[i].querySelector("text").textContent;
        });
        classroom[i].addEventListener("mouseleave", () => {
          classroom[i].querySelector("path").style.fill = "rgb(68,114,196)";
        });
      // }
      // classroom[highLightClass].querySelector("path").style.fill = "rgb(255,165,0)";
    }
    if(0 <= highLightClass && classroom[highLightClass]) {
      classroom[highLightClass].querySelector("path").style.fill = "rgb(255,165,0)";
    }
    // 
  } else {
    console.error("Invalid index or element not found.");
  }

  document.getElementById("returnBtn").style.display = "block";
  document.getElementById("mainMap").style.display = "none";
  btnCount = Number(count) + Number(bCount);
  console.log("階層ボタンの数:" + btnCount);
  // btncount = count + undergroundcount;をしてfor内でifでiの数でappendChild.createTextNode()の中身を変える
  let j = 1;
  for(let i = btnCount - 1; i >= 0; i--) {
    floorBtns[i] = document.createElement("button");
    if(bCount > 0) {
      if(i < bCount) {
        floorBtns[i].appendChild(document.createTextNode("B" + (j) + "F"));
        j++;
      } else {
        floorBtns[i].appendChild(document.createTextNode(i + "F"));
      }
    } else {
      floorBtns[i].appendChild(document.createTextNode((i + 1) + "F"));
    }
    // floorBtns[i].appendChild(document.createTextNode("F" + (i + 1)));
    floorBtns[i].id = "floorBtn-" + i;
    floorBtns[i].classList.add("verticalBtn");
    //　階層ボタンのクリックイベント
    floorBtns[i].addEventListener("click", () =>{
      floorBtns.forEach(btn => {
        btn.style.backgroundColor = "";
      });
      floorBtns[i].style.backgroundColor = "rgb(255,165,0)";
      console.log("floorBtns[" + i + "]");
      //　indoorマップ切り替え機能の追加を行う
      mapImages.forEach(indoorMap => {
        indoorMap.style.display = "none";
      });
      mapImages[i].style.display = "block";
      console.log("クラス数" + mapImages[i].querySelectorAll("a").length);
      // mapImages[i]に格納されている施設のindoorマップの各教室を取得
      classroom.length = 0;
      for(let j = 0; j < mapImages[i].querySelectorAll("a").length; j++) {
        classroom.push(mapImages[i].getElementById("classroom-" + j));
        classroom[j].querySelector("path").style.fill = "rgb(68,114,196)";
        classroom[j].addEventListener("mouseenter", () => {
          classroom[j].querySelector("path").style.fill = "rgb(255,165,0)";
          document.querySelector(".buildingDesc").textContent = classroom[j].querySelector("text").textContent;
        });
        classroom[j].addEventListener("mouseleave", () => {
          classroom[j].querySelector("path").style.fill = "rgb(68,114,196)";
        });
      }
    });
    document.getElementById("floorBtn").appendChild(floorBtns[i]);
  }
  document.getElementById("floorBtn-" + firstFloor).style.backgroundColor = "rgb(255,165,0)";
}

document.getElementById("returnBtn").addEventListener("click", () => {
  var svg1 = document.getElementById("mainMap");
  document.getElementById("buildingName").textContent = "全体マップ";
  for(let i = 0; i < mapImages.length; i++) {
    mapImages[i].style.display = "none";
  }
  svg1.style.display = "block";
  document.getElementById("returnBtn").style.display = "none";
  for(let i = btnCount - 1; i >= 0; i--) {
    floorBtns[i].innerHTML = "";
    document.getElementById("floorBtn").removeChild(floorBtns[i]);
  }
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
});

for (let i = 0; i < buildingsCount; i++) {
  sideItems.push(document.getElementById("side-item" + (i+1)));
  // buildingsが配列なので、個々の要素に対するイベントリスナーを設定
  //マウスホバー・アウト時の色変換
  if (sideItems[i]) {
    sideItems[i].addEventListener("mouseenter", () => {
      console.log("sideItem[" + (i + 1) + "]");
      buildings[i].querySelector("path").style.fill = "rgb(255,165,0)";
      document.querySelector(".logo > a").textContent = buildingsName[i];
      document.querySelector(".buildingDesc").textContent = buildingDescs[i];
    });
  
    sideItems[i].addEventListener("mouseleave", () => {
      buildings[i].querySelector("path").style.fill = "rgb(68,114,196)";
    });
  
    const liElements = sideItems[i].querySelectorAll("ul > li");
    liElements.forEach((liElement) => {
      liElement.addEventListener("mouseenter", () => {
        document.querySelector(".buildingDesc").textContent = liElement.textContent;
      });
      liElement.addEventListener("click", () => {
        if(mapImages) {
          for(let i = 0; i < mapImages.length; i++) {
            mapImages[i].style.display = "none";
          }
        }
        for(let i = btnCount - 1; i >= 0; i--) {
          if (floorBtns[i] && floorBtns[i].parentNode) {
            floorBtns[i].innerHTML = "";
            document.getElementById("floorBtn").removeChild(floorBtns[i]);
          }
        }
        window.scrollTo({
          top: 0,
          behavior: 'smooth' 
        });
        // サイドメニューのリストに付与されているidからshowFacilityMapを呼び出している
        var values = liElement.id.split(',');
        console.log(values[0] + "," + values[1] + "," + values[2] + "," + values[3] + "," + values[4]);
        console.log(Array.from(liElements).indexOf(liElement) + ":" + liElement.textContent);
        showFacilityMap(values[0], values[1], values[2], values[3], values[4]);
      });
    });
  }
}



// 仮のデータベースを配列で表現
// const filePath = '../sample.txt';
// ローカルで起動して別ファイルから情報を取得
const filePath = 'http://localhost:3000/sample-1.txt';
// githubの場合
// const filePath = 'https://raw.githubusercontent.com/KatsukiIno/map/main/sample.txt';
const database = [];

async function fetchData() {
  try {
    const response = await fetch(filePath);
    const dataText = await response.text();
    console.log(dataText);
    const data = JSON.parse(dataText);

    // 取得したデータを database 配列に格納
    database.push(...data);

    // ここで database を使って何かを行う
    console.log(database);
  } catch (error) {
    console.error('データの取得に失敗しました:', error);
  }
}

fetchData();

function searchDatabase() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  if (query.trim() === '') {
    clearSearch();
    return;
  }
  const keywords = query.split(/\s+/).filter(keyword => keyword.trim() !== ''); // 正規表現を使用して空白文字を分割し、空白文字を除去
  const results = database.filter(item => {
    const itemText = (item.name + ' ' + item.department + item.features + ' ' + item.buildingName + ' ' + item.floar + "階").toLowerCase();
    return keywords.every(keyword => itemText.includes(keyword));
  });
  displayResults(results);
}

function displayResults(results) {
  const resultsContainer = document.getElementById('searchResults');
  resultsContainer.innerHTML = '';

  if (results.length === 0) {
    const noResultElement = document.createElement('div');
    noResultElement.textContent = '検索結果がありません。';
    resultsContainer.appendChild(noResultElement);
  } else {
    results.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.textContent = item.name + ': ' + item.buildingName + ': ' + item.floar + '階: ' + item.department + item.features;
      resultsContainer.appendChild(itemElement);
    });
  }
}

function handleEnter(event) {
  // Enterキーが押された場合に検索を実行
  if (event.key === 'Enter') {
    event.preventDefault();
      searchDatabase();
  }
}

function clearSearch() {
  document.getElementById('searchInput').value = ''; // 検索ボックスをクリア
  document.getElementById('searchResults').innerHTML = ''; // 検索結果をクリア
}


// ///////////////////////////////////////
document.getElementById('drawerOpen').addEventListener('click', () => {
  document.getElementById("mySidepanel").style.width = "300px";
  document.getElementById("mySidepanel").style.opacity = "1";
});

document.getElementById('drawerClose').addEventListener('click', () => {
  document.getElementById("mySidepanel").style.width = "0";
  document.getElementById("mySidepanel").style.opacity = "0";
});
// /////////////////////
