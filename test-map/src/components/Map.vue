<template>

  <div id="section">

  
  <div id="map">


    <input type="button" v-on:click="btnAll" id="buttonAll" class="active" value="전체 닫기">
    <button type="button" v-on:click="btnCal" id="buttonCal" class="sideBtn"><img id="calendarImg" src="../assets/calendar.png" alt="calendar image"></button>
    <button type="button" v-on:click="btnList" id="buttonList" class="sideBtn"><img id="bookmarkImg" src="../assets/bookmark.png" alt="calendar image"></button>
    <!-- <input type="button" v-on:click="btnCal" id="buttonCal" class="sideBtn" value="캘린더">
    <input type="button" v-on:click="btnList" id="buttonList" class="sideBtn" value="북마크"> -->
    
    
     
  

    <!-- #0 : NavBar 리스트 Window -->

    <div id="headerBar" style="display:flex;">
    <div id="searchBar" style="width: 95%">
      
     <b-input-group class="mb-2" style="margin-right:10px;">
      <b-form-input type="text" placeholder="지역이나 음식을 검색해보세요."></b-form-input>
      <b-input-group-append is-text>
        <b-icon icon="search"></b-icon>
        
      </b-input-group-append>

      
    </b-input-group>
    
    </div>
    <v-app-bar-nav-icon @click="changeValue" style="z-index:300; background-color:#fff;"></v-app-bar-nav-icon>
    <Sliding v-bind:drawerVal="drawer" style="z-index:300;"></Sliding>
    
    </div>

  <!-- #1 : 전체 리스트 Window -->
    
    
    <div id="cafeList" v-show="list_show" >
    <div class="card-group" id="cardGroup">
      <div id="swipeButton"></div>
    </div>
    </div>
  
  <!-- #3 : Modal Window -->
    <div id="calendar" v-show="cal_show">
      <b-card>
        <Calendar></Calendar>

        <b-button @click="btnCal" variant="primary">닫기</b-button>
        <b-button @click="btnCal" style="margin:5px;" variant="primary">확인</b-button>
        
      </b-card>
    </div>

  <!-- #4 : bookMark Window -->
    <div id="bookMarkList" v-show="bookMark_show">
      <ul class="list-group">
        <li class="list-group-item" style="color:#868e96;">
          <div id="gridImg"><img src="../assets/check.png"></div>
           새 리스트
          </li>
        <li class="list-group-item"><div id="gridImg"><img src="../assets/up.png"></div>A second item<div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck">
        </div></li>
        <li class="list-group-item"><div id="gridImg"><img src="../assets/up.png"></div>A third item<div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck">
        </div></li>
        <li class="list-group-item"><div id="gridImg"><img src="../assets/up.png"></div>A fourth item<div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck">
        </div></li>
        <li class="list-group-item"><div id="gridImg"><img src="../assets/up.png"></div>And a fifth one<div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck">
        </div></li>
        <li class="list-group-item"><div id="gridImg"><img src="../assets/up.png"></div>And a fifth one<div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck">
        </div></li>
        <li class="list-group-item"><div id="gridImg"><img src="../assets/up.png"></div>And a fifth one<div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck">
        </div></li>
        <li class="list-group-item"><div id="gridImg"><img src="../assets/up.png"></div>And a fifth one<div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck">
        </div></li>
      </ul>
        
      </div>

    <!-- #5 : bookMark Button -->
      <div id="btnArea" v-show="bookMark_show">
        <button type="button" class="btn btn-light" v-on:click="btnList" id="cancelBtn" >취소</button>
        <button type="button" id="saveBtn" class="btn btn-primary">확인</button>
      </div>

  </div>
     
  </div>

</template>

<script>
import Calendar from './Calendar';
import Sliding from "./Sliding";


export default {
  data() {
  return {
    cal_show: false,
    list_show: true,
    bookMark_show: false,
    map: null,
    status: 'not_accepted',
    startDate: '',
    endDate: '',
    startDateOptions: {
        disabledDate: this.disabledStDate
      },
    endDateOptions: {
        disabledDate: this.disabledEdDate
      },

    drawer:false,

    
  
      
   
  }
},
components:{
    Calendar,
    Sliding

    
   
  },
  methods: {
    changeValue: function () {
      console.log(this.drawer);
      this.drawer= !this.drawer
    },
    btnAll: function () {
        //console.log("클릭!");
        var control = document.getElementById('buttonAll');
        // 버튼이 눌린 상태가 아니면
    if (control.className.indexOf('active') === -1) {
        control.className = 'active';
        document.getElementById("cafeList").style.display ="";
        document.getElementById("buttonAll").value="전체 닫기";
        
    } else {
        control.className = '';
        document.getElementById("cafeList").style.display ="none";
        document.getElementById("buttonAll").value="전체 보기";
    }

    },
    btnCal: function () {
        //console.log("클릭!");
        var control = document.getElementById('buttonCal');
        // 버튼이 눌린 상태가 아니면
    if (control.className.indexOf('active') === -1) {
        control.classList.add('active');
        this.cal_show = !this.cal_show;
        //console.log("캘린더 띄우기"+this.cal_show);

    } else {
        control.classList.remove('active');
        this.cal_show = !this.cal_show;
        //console.log("캘린더 닫기"+this.cal_show);

        var elements1 = document.getElementById("input-24");
        console.log(elements1.value);

        var elements2 = document.getElementById("input-30");
        console.log(elements2.value);  
    }

    },
    btnList: function () {
        //console.log("클릭!");
        var control = document.getElementById('buttonList');
        // 버튼이 눌린 상태가 아니면
    if (control.className.indexOf('active') === -1) {
        control.classList.add('active');
        this.bookMark_show = !this.bookMark_show;
        //console.log("전체 리스트 띄우기"+this.list_show);

    } else {
        control.classList.remove('active');
        this.bookMark_show = !this.bookMark_show;
        //console.log("북마크 열기"+this.list_show);
    }

    },
    initMap() {
      
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 5,
      };
      this.map = new kakao.maps.Map(container, options);
      var map = new kakao.maps.Map(container, options);


      var positions = [
        { title: "카카오 생일카페", map:'위치 : 강남, 청라',name:'000의 생일카페',date:"1.24~1.26", time:'06:00~12:00', latlng: new kakao.maps.LatLng(33.450705, 126.570677) },
        { title: "생태연못 생일카페 ", map:'위치 : 강남, 청라',name:'000의 생일카페',date:"2.24~2.26", time:'06:00~12:00', latlng: new kakao.maps.LatLng(33.450936, 126.569477) },
        { title: "근린공원1 생일카페", map:'위치 : 강남, 청라',name:'000의 생일카페', date:"3.24~3.26", time:'06:00~12:00', latlng: new kakao.maps.LatLng(33.451393, 126.570738) },
        { title: "근린공원2 생일카페 ", map:'위치 : 강남, 청라',name:'000의 생일카페',date:"4.24~4.26" , time:'06:00~12:00',  latlng: new kakao.maps.LatLng(33.451393, 126.570738) },
        { title: "근린공원3 생일카페", map:'위치 : 강남, 청라',name:'000의 생일카페', date:"5.24~5.26" , time:'06:00~12:00', latlng: new kakao.maps.LatLng(33.451393, 126.570738) },
        { title: "근린공원4 생일카페 ", map:'위치 : 강남, 청라',name:'000의 생일카페', date:"6.24~6.26" , time:'06:00~12:00', latlng: new kakao.maps.LatLng(33.451393, 126.570738) },
        ];
      var markers=[];
      // 마커 이미지
      var imageSrc = require('@/assets/shop.png'), // 마커이미지의 주소입니다
               imageSize = new kakao.maps.Size(35, 35), // 마커이미지의 크기입니다
               imageOption = { offset: new kakao.maps.Point(20, 35) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.


      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
      // 마커를 생성합니다
      positions.forEach(function(pos) {
          
          const marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: pos.latlng, // 마커의 위치
          image: markerImage,
         });
          markers.push(marker);
            
            
            // positions 전체 리스트 카드로 표시
            var cardGroup= document.getElementById('cardGroup');

            var card = document.createElement('div');
            card.className = 'card';
            //card.id = 'cardItem';
            card.style.margin="20px";


            
            var cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            var title = document.createElement('h4');
            title.className = 'card-title';

            var header = document.createElement('h6');
            header.className = 'mb-0';

            
            var cardText = document.createElement('p');
            cardText.className = 'card-text';


            header.appendChild(document.createTextNode(pos.title));

            title.appendChild(document.createTextNode(pos.date));

            cardText.appendChild(document.createTextNode(pos.title));

            cardBody.appendChild(cardText);
            cardBody.appendChild(header);
            cardBody.appendChild(title);
            card.appendChild(cardBody);
            cardGroup.appendChild(card);


            // 카드 안 쪽
            var card2 = document.createElement('div');
            card2.className = 'card';

            var title2 = document.createElement('h4');
            title2.className = 'card-title';

            var header2 = document.createElement('h6');
            header2.className = 'mb-0';

            
            var cardText2 = document.createElement('p');
            cardText2.className = 'card-text';

            title2.appendChild(document.createTextNode(pos.title));
            header2.appendChild(document.createTextNode(pos.title));
            cardText2.appendChild(document.createTextNode(pos.latlng));


            card2.appendChild(title2);
            card2.appendChild(header2);
            card2.appendChild(cardText2);
            cardBody.appendChild(card2);


            //커스텀 오버레이
            var customOverlay = new kakao.maps.CustomOverlay({
              position: pos.latlng,
              xAnchor: 0.5,
              yAnchor: 1.05,
            });

              
              var card3 = document.createElement('div');
              card3.className = 'card';

              var cardBody3 = document.createElement('div');
              cardBody3.className = 'card-body';

              var cardName = document.createElement('h5');
              cardName.className = 'card-title';
              cardName.appendChild(document.createTextNode(pos.title));

              var cardSub1 = document.createElement('h6');
              cardSub1.className = 'card-subtitle mb-2';

              var cardSub2 = document.createElement('h6');
              cardSub2.className = 'card-subtitle mb-2';

              cardSub1.appendChild(document.createTextNode(pos.map));
              cardSub2.appendChild(document.createTextNode(pos.time));


              var goMap = document.createElement('a');
              goMap.className = 'card-link';

              var goRoute = document.createElement('a');
              goRoute.className = 'card-link';
              
              goMap.appendChild(document.createTextNode('지도보기'));
              goRoute.appendChild(document.createTextNode('길 찾기'));
              

              var card4 = document.createElement('div');
              card4.className = 'card';

              var cardBody4 = document.createElement('div');
              cardBody4.className = 'card-body';

              var cardName2 = document.createElement('h5');
              cardName2.className = 'card-title';
              cardName2.appendChild(document.createTextNode(pos.name));

              var cardText3 = document.createElement('p');
              cardText3.className = 'card-texte';
              cardText3.appendChild(document.createTextNode(pos.time));

              cardBody3.appendChild(cardName);
              cardBody3.appendChild(cardSub1);
              cardBody3.appendChild(cardSub2);
              cardBody3.appendChild(goMap);
              cardBody3.appendChild(goRoute);

              cardBody4.appendChild(cardName2);
              cardBody4.appendChild(cardText3);

              card4.appendChild(cardBody4);
              cardBody3.appendChild(card4);

              card3.appendChild(cardBody3);

              var closeBtn = document.createElement('button');
              closeBtn.className = 'btn btn-light';
              closeBtn.appendChild(document.createTextNode('닫기'));
              closeBtn.onclick = function() {
                customOverlay.setMap(null);
              };

              card3.appendChild(closeBtn);

            kakao.maps.event.addListener(marker, 'click', function() {
                //전체 리스트 끄기
                var control = document.getElementById('buttonAll');
                control.className = '';
                document.getElementById("cafeList").style.display ="none";
                document.getElementById("buttonAll").value="전체 보기";

                customOverlay.setMap(map);
            });

            customOverlay.setContent(card3);

            //전체 리스트 끄기
            kakao.maps.event.addListener(map, "click", function () {
                customOverlay.setMap(null)
                var control = document.getElementById('buttonAll');
                control.className = '';
                document.getElementById("cafeList").style.display ="none";
                document.getElementById("buttonAll").value="전체 보기";

                
                
            });

         
        });
  //console.log(markers);
  // 4. 지도를 이동시켜주기
  // 배열.reduce( (누적값, 현재값, 인덱스, 요소)=>{ return 결과값}, 초기값);
  const bounds = positions.reduce(
    (bounds, position) => bounds.extend(position.latlng),
    new kakao.maps.LatLngBounds()
  );

  map.setBounds(bounds)

},


    
},
  mounted() {
   console.log(process.env);
  if (window.kakao && window.kakao.maps) {
    this.initMap();
    
  } else {
    const script = document.createElement('script');
    /* global kakao */
    script.onload = () => kakao.maps.load(this.initMap);
    //script.src ='http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=215ca7b1f3ff18d53e598efb17100473';
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.VUE_APP_KAKAO_API_KEY}&autoload=false`;
    document.head.appendChild(script);
  }
},
};
</script>

<style scoped>

#section{
    width: 100vw;
    max-width: 580px;
    overflow: hidden;
    margin: 0 auto;

}
#map {
  
  width: 100vw;
  max-width: 580px;
  height: 100vh;
  border: 1px #a8a8a8 solid;
}


/*전체화면 */
#buttonAll {
  position:absolute;
  top:50px;left:5px;
  width: 72px;
  height: 30px;
  font-size:12px;
  font-weight: bold;
  border: 1px solid #dbdbdb;
  background-color: #fff;
  border-radius: 14px;
  box-shadow: 0 1px 1px rgba(0,0,0,.04);
  z-index:100;
  cursor:pointer;
}

#buttonAll.active {background-color:#eee; background-position:0 -350px;}
/* 캘린더, 북마크 */
.sideBtn {
  position:absolute;
  width: 48px;
  height: 32px;
  font-size:14px;
  border: 0px solid #dbdbdb;
  background-color: #fff;
  border-radius: 16px 0px 0px 16px;
  box-shadow: 0 1px 1px rgba(0,0,0,.04);
  z-index:100;
  cursor:pointer;
}

#calendarImg, #bookmarkImg {
  width: 18px;
  height: 18px;
}

/*캘린더 */
#buttonCal {
  top:50px; 
  right: 0px;
}

#buttonCal.active {background-color:#eee; background-position:0 -350px;}

/*북마크 */
#buttonList {
  top:100px;
  right:0px;
}

/* #checkBox{
  position:absolute; width:42px;height:42px;z-index: 10;cursor: pointer; 
background: url(https://t1.daumcdn.net/localimg/localimages/07/2018/pc/common/img_search.png) 0 -450px no-repeat;
} */


#buttonList.active {background-color:#eee; background-position:0 -350px;}





#searchBar{
  position:relative;
  top:5px;
  left:5px; 
  right:5px; 
  height:42px;
  z-index: 10;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  }


/*전체 리스트 */

#cafeList{
  overflow:auto;
  position: absolute;
  width: 100vw;
  max-width: 580px;
  height:300px;
  bottom: 0;
  left: 0;
  z-index: 10;
  background: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  text-align: center;
  
}

#cafeOne{

  overflow:auto;
  position: absolute;
  width: 100vw;
  max-width: 580px;
  height:300px;
  bottom: 0;
  left: 0;
  z-index: 10;
  background: #fff;
  border-radius: 10px;
  text-align: center;

}

#swipeButton {
        background: #868e96;
        width:40px;
        height:5px;
        border-radius: 50px;
        display: inline-block;
        position:absolute; 
        left:50%; 
        margin-top:4px;
        transform:translateX(-50%);
}

#cardGroup{
  text-align: center;
  overflow:auto;
  flex-direction: column;
}

/* 캘린더 */
#calendar{
  position:relative;
  z-index: 100;
 
  top:200px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

}

/* 북마크 리스트 */
#bookMarkList{
  position:absolute;
  z-index: 10;
  overflow:auto;
  width: 100vw;
  height:300px;
  max-width: 580px;
  bottom: 0;
  
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

#bookMarkList > ul {
  padding: 0;
}

#gridImg{
    float: left;
    margin-right:10px;
  }
.form-check{
  float: right;
}

/* 북마크 확인 취소 버튼 */
#cancelBtn {
  margin-right:2px;
  width:50%;
  max-width: calc(580px/2);
  border-radius: 5px;
  border-color: #e7e7e7;
  background: #fff;
  color: black;
}


#saveBtn{
  width:50%;
  max-width: calc(580px/2);
  border-radius: 5px;
}

#btnArea{
    margin:0 auto;
    width:100vw;
    display: flex;
    position:absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
}



</style>