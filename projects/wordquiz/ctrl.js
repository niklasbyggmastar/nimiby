//AngularJS
var app = angular.module("app", []);
app.controller("ctrl", function($scope){
  $scope.objects = [
    {"word": "Otantatutkimus", "answer": "Mielenkiinnon kohteena olevasta väestöstä on kerätty osajoukko, jota tarkastelemalla pyritään saamaan tietoa väestöstä."},
    {"word": "p-arvo", "answer": "Kertoo kuinka todennäköisesti vastaavassa otannassa havaittaisiin yhtä poikkeavia tai vielä poikkeavampia eroja ryhmien välisissä tilastollisissa muuttujissa silloin, jos todellisuudessa eroja ei olisi."},
    {"word": "Luottamusväli", "answer": "Luottamusväli 100(1-a)% tarkoittaa, että 100 eri havaintoaineistolla samasta populaatiojakaumasta lasketut luottamusvälit sisältävät todellisen arvon n. 100(1-a) kertaa."},
    {"word": "Populaatio/perusjoukko", "answer": "konkreettinen tai hypoteettinen tutkimuskohteiden joukko, joka koostuu tilastoyksiköistä"},
    {"word": "Tilastoyksikkö ja tilastollinen muuttuja", "answer": "Populaation muodostavilta tilastoyksiköiltä tarkastellaan tilastollisia muuttujia, joita voidaan mitata tai havaita."},
    {"word": "Havainto", "answer": "Havainto muodostuu tilastoyksikön tarkasteltavien tilastollisten muuttujien havaituista arvoista."},
    {"word": "Havaintoaineisto", "answer": "Tilastoyksiköiden tilastollisista muuttujista kerätty havaintojen joukko. Kaikki havaitut muuttujat eivät ole aina mielenkiintoisia."},
    {"word": "Tutkimusmuuttuja", "answer": "Mielenkiintoisia muuttujia tilastollisen tutkimuksen kannalta voidaan kutsua tutkimusmuuttujiksi"},
    {"word": "Taustamuuttuja", "answer": "Muut muuttuja (ei kiinnostavat) ovat taustamuuttujia"},
    {"word": "Tekijä", "answer": "Tilastollinen muuttuja, jonka esiintyminen ja arvo havaintoaineistossa tiedetään jo ennen havaintojen mittaamista"},
    {"word": "Vaste", "answer": "Tilastollinen muuttuja, jonka arvo havaitaan osana havaintoaineiston keräämistä"},
    {"word": "Selitettävä muuttuja", "answer": "Vaste, jonka jakauma on mielenkiinnon kohteena tilastollisessa tutkimuksessa."},
    {"word": "Selittävä muuttuja", "answer": "Vaste tai tekijä, jonka avulla yritetään selittää selitettävän muuttujan vaihtelua."},
    {"word": "Luokallinen muuttuja", "answer": "Tilastollisen muuttuja, jonka havaittu arvo ei ole numeerinen"},
    {"word": "Nominaaliasteikko", "answer": "Mitattavat muuttujat voidaan jakaa ominaisuuksiensa perusteella ryhmiin sen perusteella, onko muuttujilla tiettyä ominaisuutta vai ei."},
    {"word": "Ordinaaliasteikko", "answer": "Mitattavat muuttujat voidaan järjestellä joidenkin ominaisuuksiensa perusteella ryhmiin, joilla on jokin luonnollinen järjestys"},
    {"word": "Numeerinen muuttuja", "answer": "Tilastollinen muuttuja, jonka havaittu arvo on numeerinen"},
    {"word": "Intervalliasteikko", "answer": "Muuttujien havainnoista voidaan laskea erotus"},
    {"word": "Suhdeasteikko", "answer": "Muuttujilla on yksikäsitteinen nollapiste"},
    {"word": "Havaintomatriisi", "answer": "Koostuu n tilastoyksiköstä, joista jokaisesta on kerätty m tilastollisesta muuttujasta havainnot."},
    {"word": "Otoskvantiili", "answer": "Otoskvantiili q(p) on sellainen luku, että enintään 100p% havainnoista on pienempiä kuin q(p) ja enintään 100(1-p)% havainnoista on suurempia kuin q(p). Yleisimmät otoskvantiilit ovat Mediaani: p = 0.5, Kvartiilit: p = [0.25, 0.50. 0.75], Kvintiilit: p = [0.2, 0.4, 0.6, 0.8], Desiilit: p = [0.1, 0.2, …, 0.9], Sentiilit: p = [0.01, 0.02, …, 0.99]"},
    {"word": "Moodi", "answer": "Havaintoaineiston moodi on aineiston suurimman frekvenssin omaava muuttujan arvo tai luokka"},
    {"word": "Pseudokeskihajonta", "answer": "Olkoon qr havaintoaineistosta laskettu kvartiiliväli. Aineiston pseudokeskihajonta on s=qr/1.35"},
    {"word": "Otoskeskihajonta", "answer": "Otosvarianssista voidaan laskea Otoskeskihajonta s = sqrt(s^2)"},
    {"word": "Otosvariaatiokerroin", "answer": "cv=s/x, jossa x otoskeskiarvo ja s otoskeskihajonta"},
    {"word": "Keskivirhe", "answer": "Otossuureen Ɵ(X1,…,Xn) keskihajonta on otossuureen keskivirhe, jota merkitään SE(Ɵ(X1,…,Xn))."},
    {"word": "Tilastollinen päättely", "answer": "Tehdään satunnaisuutta tai epävarmuutta sisältävien havaintojen perusteella johtopäätöksiä (reaalimaailman) ilmiöistä ja olosuhteista, jotka ovat tuntemattomia ja suoran havainnoinnin tavoittamattomissa."},
  ];
  $scope.counter = 0;
  $scope.correctAnswers = 0;
  $scope.wrongAnswers = 0;
  $scope.switch = {showAns : false};

  $scope.correct = function(){
    if ($scope.counter != $scope.objects.length) {
      $scope.correctAnswers += 1;
      $scope.counter += 1;
      $scope.switch = {showAns : false};
    }
  }
  $scope.wrong = function(){
    if ($scope.counter != $scope.objects.length) {
      $scope.wrongAnswers += 1;
      $scope.counter += 1;
      $scope.switch = {showAns : false};
    }
  }
  $scope.restart = function(){
    $scope.counter = 0;
    $scope.correctAnswers = 0;
    $scope.wrongAnswers = 0;
  }
  $scope.skip = function(){
    $scope.counter += 1;
  }

  /*$scope.random = function(){
    Math.floor(Math.random() * $scope.objects.length-1) + 0;
  }*/
});

//jQuery
$(function(){
  $(".showBtn").on('click', function(){
    $(this).toggleClass("btn-warning");
    $(this).text(function(i,txt){
      return txt === "Check" ? "Hide" : "Check";
    });
  });
  $(".ansBtn").on("click", function(){
    $(".showBtn").addClass("btn-primary");
    $(".showBtn").removeClass("btn-warning")
    $(".showBtn").text("Check");
  });
});
