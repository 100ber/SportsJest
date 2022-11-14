import React, { Component } from 'react'

export default class Mcontent extends Component {
constructor(){
    super();
    this.state ={
        vid1 :  "https://www.youtube.com/embed/wICa352sJ3U"  ,
        vid2 :  "https://www.youtube.com/embed/3bByBrubwH0",
        vid3 :   "https://www.youtube.com/embed/TE0e64xbtqQ",
        vid4 : "https://www.youtube.com/embed/Xwjn_W9D_mc",
        vid5 :  "https://www.youtube.com/embed/QWQbllcLOOk"  ,
        vid6 :  "https://www.youtube.com/embed/-EVB3rEaU_U",
        s1 :"pics/iwc3.jpg",
        s2 :"https://th.bing.com/th/id/R.dc7fcef1fd33a655f7e081502d97ce40?rik=TtMKeZOzAK8vxg&riu=http%3a%2f%2fwww.prediksibolamenang.net%2fwp-content%2fuploads%2f2019%2f07%2fPrediksi-Skor-Salzburg-Vs-Chelsea-1-Agustus-2019.jpg&ehk=cbwJ9CrnBznD1ZBlu44WNloiEkl22tGeX1IsdzVeNKE%3d&risl=&pid=ImgRaw&r=0",
        s3 :"https://th.bing.com/th/id/OIF.etKwbU7h01cYBCFAOCZFUQ?pid=ImgDet&rs=1",
        s4 :"https://www.kannadatvshows.com/pictures/2019/11/pro-kabaddi-league-live-coverage.jpg",
        s5 :"https://s1.paultan.org/image/2021/04/Miami-Grand-Prix-1-630x354.png",
    }
}

  render() {
    return (
      <div>

<div id="carouselExampleIndicators" class="carousel slide slidecustom" data-bs-ride="true">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          
    <img class="d-block w-100 br" width="800" height="420" src={this.state.s1}></img>
    <div class="carousel-caption d-none d-md-block">
        {/* <h5>ICC Men's T20 World Cup</h5>
        <p>Register in advance to catch live action</p> */}
      </div>
        </div>
        <div class="carousel-item">
        <img class="d-block w-100 br" width="800" height="420" src={this.state.s2}></img>
        <div class="carousel-caption d-none d-md-block">
        <h5> Salzburg Vs Chelsea</h5>
        <p>17th Oct  , 22:15 IST <br></br>Don't miss the fun</p>
      </div>
        </div>
        <div class="carousel-item">
        <img class="d-block w-100 br" width="800" height="420" src={this.state.s3}></img>
        <div class="carousel-caption d-none d-md-block">
        <h5> Lakers Vs Worriers</h5>
        <p>19th Oct  , 07:30 AM IST </p>
      </div>
        </div>

        <div class="carousel-item">
        <img class="d-block w-100 br" width="800" height="420" src={this.state.s4}></img>
        <div class="carousel-caption d-none d-md-block">
        <h5>Pro Kabaddi League Season 9</h5>
      </div>
        </div>
        <div class="carousel-item">
        <img class="d-block w-100 br" width="800" height="420" src={this.state.s5}></img>
        <div class="carousel-caption d-none d-md-block">
        <h5>United States Grand Prix 2022</h5>
        <p>Starts 24thOct October</p>
      </div>
        </div>

      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

<br></br>


    {/* news */}

    <div class="card">
  <div class="card-header" align="left">
    Football
  </div>
  <div class="row">

    <div class="col-3" align="left"><img src="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1017%2Fr1076889_1296x518_5%2D2.jpg&w=1320&h=528&scale=crop&cquality=40&location=center&format=jpg" height="100%" width="106%"></img></div>
    <div class="col-9">
  <div class="card-body" align="left">
    <h5 class="card-title">El Clasico</h5>
    <p class="card-text"><h3>Real Madrid continue Barcelona's awful week, Dortmund gift win to Union Berlin: Weekend Review</h3></p>
    <a href="#" class="btn btn-primary">Read more..</a>
  </div>
  </div>
  </div>
</div>








<br></br>

<div class="card">
  <div class="card-header" align="left">
    Cricket
  </div>
  <div class="row">

    <div class="col-3" align="left"><img src="https://a3.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1340029_1296x729.jpg&w=920&h=518&scale=crop&cquality=80&location=origin&format=jpg" height="100%" width="106%"></img></div>
    <div class="col-9">
  <div class="card-body" align="left">
    <h5 class="card-title">Women's Asia Cup 2022</h5>
    <p class="card-text"><h3>Renuka and Mandhana guide India to seventh Asia Cup title</h3></p>
    <a href="#" class="btn btn-primary">Read more..</a>
  </div>
  </div>
  </div>
</div>
            
            



<br></br>

 

<div class="card-group">
  <div class="card">
  <div class="card-header" align="left">Basketball</div>
    <img src="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0512%2Fr852869_1296x729_16%2D9.jpg&w=920&h=518&scale=crop&cquality=80&location=origin&format=jpg" class="card-img-top" height="100%"></img>
    <div class="card-body">
      <h5 class="card-title">NBA 2022</h5>
      <p class="card-text">Andrew Wiggins deal: What another extension means for the Warriors -- and Draymond Green's future</p>
      <p class="card-text"><small class="text-muted"><a href="#">Read more...</a></small></p>
    </div>
  </div>
  <div class="card">
  <div class="card-header" align="left">Tennis</div>
    <img src="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1016%2Fr1076398_1296x729_16%2D9.jpg&w=476&h=266&scale=crop&cquality=40&location=center" class="card-img-top" height="100%" ></img>
    <div class="card-body">
      <h5 class="card-title">San Diego Open final</h5>
      <p class="card-text">Top-ranked Iga Swiatek advances to San Diego Open final</p>
      <p class="card-text"><small class="text-muted"><a href="#">Read more...</a></small></p>
    </div>
  </div>
  <div class="card">
  <div class="card-header" align="left">F1</div>
    <img src="https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1014%2Fr1075576_1296x518_5%2D2.jpg&w=920&h=368&scale=crop&cquality=80&location=origin&format=jpg" class="card-img-top" height="100%"></img>
    <div class="card-body">
      {/* <h5 class="card-title">🥉 at #WrestleBelgrade</h5> */}
      <p class="card-text">IndyCar's Alex Palou to drive for McLaren in U.S. GP practice</p>
      <p class="card-text"><small class="text-muted"><a href="#">Read more...</a></small></p>
    </div>
  </div>
</div>

<br></br>

<br></br>

<h1>Highlights of the Week</h1>
<div class="row">

<div class="col-lg-4"><iframe width="95%" height="200vh" src={this.state.vid1} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe></div>
<div class="col-lg-4"><iframe width="95%" height="200vh" src={this.state.vid2} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe></div>
<div class="col-lg-4"><iframe width="95%" height="200vh" src={this.state.vid3} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe></div>




  </div>

<br></br>

  <div class="row">

<div class="col-lg-4"><iframe width="95%" height="200vh" src={this.state.vid4} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe></div>
<div class="col-lg-4"><iframe width="95%" height="200vh" src={this.state.vid5} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe></div>
<div class="col-lg-4"><iframe width="95%" height="200vh" src={this.state.vid6} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe></div>




  </div>
  <br></br>





           </div>




          


      
    )
  }
}
