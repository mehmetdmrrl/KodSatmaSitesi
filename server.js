var express = require("express");
var expressLayouts = require("express-ejs-layouts");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

var app = express();
const fs = require('fs');
//database start
let ürünler2 =
[
  {
  
      ürün_id: "1",
      ürün_adi: "Hem Çift Rollü Hem Tek Rollü Kayıt Botu",
      ürün_bilgi: "Kayıt Botu 10 TL'DİR",
      ürün_resim: "https://prnt.sc/v37cx3"
    
  },
  {
  
      ürün_id: "2",
      ürün_adi: "Kız Ve Erkek Kayıt Kodu",
      ürün_bilgi: "Kayıt Kodu İkisi Bi ARADA 5 TL'dir",
      ürün_resim: "https://prnt.sc/v37rqr"


  },
]

let ürünler =
{
  
  
    1: {
      ürün_id: "1",
      ürün_adi: "Hem Çift Rollü Hem Tek Rollü Kayıt Botu",
      uzun_bilgi: "Çift Ve Tek Rollü Kayıt Sistemi Bulunmaktadır + Say, İsimdeğiş, Tag Alınca Oto Rol, Hoşgeldin Mesajı, İltifat Etme Kodları Ekstra Olarak Vardır", 
      youtube: ""
    },
    2: {
      ürün_id: "2",
      ürün_adi: "Kız Ve Erkek Kayıt Kodu",
      uzun_bilgi: "İd'sini Girdiğiniz Kanal Emoji İle Yeni Katılan Kişiyi Embedlı Bir Şekilde Etiketler Ve Emoji SAYILARLA O Anda Sunucuda Kaç Kişi Olduğunu Yazar",
      youtube: ""

    },
}

const two_api = "./anan.json";




app.get("/satinal/:urunid", (req, res) => {
  const anan = ürünler[req.params.urunid]
  return res.render("sayfa.ejs", {anan:anan });
});

app.get("/api", (req, res) => {
  res.send(ürünler);
});

app.get("/testapi", (req, res) => {
  let data = fs.readFileSync(two_api, "utf-8")
  res.send(data);
});

app.get('/api/:urunid', (req, res) => {
  return res.send(ürünler[req.params.urunid]);
});

//database end


//express start
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.render("index.ejs", {ürünler : ürünler2});
});

app.get("/sayfa", function(req, res) {
  res.render("sayfa.ejs");
});

//express end






app.listen(3000);
