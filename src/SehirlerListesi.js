
import React, {Component} from 'react';
import './il-ilce.css';
import './kutucuk.css';
import App from './App';
let baslik1;
const ank= ["Seçiniz","Altındağ", "Ayaş", " Bala", "Beypazarı", "Çamlıdere", "Çankaya", "Çubuk", "Etimesgut", "Haymana", "Kalecik", "Keçiören", "Kızılcahamam", "Mamak", "Nallıhan", "Polatlı", "Şereflikoçhisar", "Sincan", "Yenimahalle"];
const ist = ["Seçiniz","Adalar", "Bağcılar", "Bahçelievler", "Bakırköy", "Beşiktaş", "Beykoz", "Beyoğlu", "Büyükçekmece", "Çatalca", "Eminönü", "Esenler", "Eyüp", "Fatih", "Gaziosmanpaşa", "Güngören", "Kadıköy", "Kağıthane", "Kartal", "Küçükçekmece", "Maltepe", "Pendik", "Sarıyer", "Silivri", "Şile", "Şişli", "Sultanbeyli", "Tuzla", "Ümraniye", "Üsküdar", "Zeytinburnu"];
const izmr 			= ["Seçiniz","Aliağa", "Balçova", "Bayındır", "Bergama", "Beydağ", "Bornova", "Buca", "Çeşme", "Dikili", "Foça", "Güzelbahçe", "Karaburun", "Karşıyaka", "Kemalpaşa", "Kınık", "Kiraz", "Konak", "Menderes","Menemen", "Narlıdere", "Ödemiş", "Seferihisar", "Selçuk", "Tire", "Torbalı", "Urla"];
const adna 			= ["Seçiniz","Aladağ", "Ceyhan", "Feke", "Karaisalı", "Kozan", "Pozantı", "Saimbeyli", "Seyhan", "Yumurtalı", "Yüreğir"];
const adymn 			= ["Seçiniz","Besni", "Gölbaşı", "Kahta", "Merkez"];
const afyn 			= ["Seçiniz","Başmakçı", "Bolvadin", "Çay", "Çobanlar", "Dinar", "Emirdağ", "İhsaniye", "Kızılören", "Merkez", "Sandıklı", "Sincanlı", "Suhut", "Sultandağı"];
const agri 			= ["Seçiniz","Diyadin", "Doğubeyazıt", "Merkez", "Patnos", "Tutak"];
const aksry 			= ["Seçiniz","Eskil", "Gülağaç", "Güzelyurt", "Merkez"];
const amsya = ["Seçiniz","Göynücek", "Gümüşhacıköy", "Merkez", "Merzifon", "Suluova", "Taşova"];
const ant 			= ["Seçiniz","Akseki", "Alanya", "Elmalı", "Finike", "Gazipaşa", "İbradi", "Kale", "Kaş", "Korkuteli", "Kumluca", "Manavgat", "Merkez", "Serik"];
const ardhn 			= ["Seçiniz","Çıldır", "Göle", "Merkez"];
const artvn 			= ["Seçiniz","Ardanuc", "Arhavi", "Hopa", "Merkez", "Murgül", "Savsat", "Yusufeli"];
const aydn 			= ["Seçiniz","Bozdoğan", "Buharkent", "Çine", "Germencik", "İncirliova", "Karacasu", "Karpuzlu", "Koçarlı", "Köşk", "Kuşadası", "Kuyucak", "Merkez", "Nazilli", "Söke", "Sultanhisar", "Yenihisar", "Yenipazar"];
const baliksr			= ["Seçiniz","Ayvalık", "Balya", "Bandırma", "Bigadiç", "Burhaniye", "Dursunbey", "Edremit", "Erdek", "Gömeç", "Gönen", "Havran", "İvrindi", "Kepsut", "Manyas", "Merkez", "Savaştepe", "Sındırgı", "Susurluk"];
const brtn 			= ["Seçiniz","Amasra", "Merkez", "Ulus"];
const btmn 			= ["Seçiniz","Hasankeyf", "Merkez"];
const bybrt 			= ["Seçiniz","Aydıntepe", "Demirözü", "Merkez"];
const bilck 			= ["Seçiniz","Bozhüyük", "Gölpazarı", "Merkez", "Osmaneli", "Pazaryeri", "Söğüt"];
const bngl 			= ["Seçiniz","Adaklı", "Genç", "Karlıova", "Kiğı", "Merkez", "Solhan", "Yayladere", "Yedisu"];
const btls 			= ["Seçiniz","Adilcevaz", "Ahlat", "Güloymak", "Merkez", "Mutki", "Tatvan"];
const blu 			= ["Seçiniz","Dörtdivan", "Gerede", "Göynük", "Mengen", "Merkez", "Mudurnu", "Yeniçağa"];
const brdr 			= ["Seçiniz","Ağlasun", "Bucak", "Çavdır", "Gölhisar", "Karamanlı", "Merkez", "Tefenni", "Yeşilova"];
const brsa			= ["Seçiniz","Gemlik", "Gürsu", "İnegöl", "İznik", "Karacabey", "Keleş", "Kestel", "Mudanya", "Mustafa Kemal Paşa", "Nilüfer", "Orhaneli", "Orhangazi", "Osmangazi", "Yenişehir", "Yıldırım"];
const cnk 			= ["Seçiniz","Ayvacık", "Bayramiç", "Biga", "Bozcaada", "Çan", "Eceabat", "Ezine", "Gölbaşı", "Gökçeada", "Lapseki", "Merkez", "Yenice"];
const cnkri 			= ["Seçiniz","Atkaracalar", "Bayramören", "Çerkeş", "Eldivan", "Ilgaz", "Kurşunlu", "Merkez", "Orta", "Şabanözü", "Yapraklı"];
const crm 			= ["Seçiniz","Alaca", "Boğazkale", "Iskılıp", "Kargı", "Mecitözü", "Merkez", "Oğuzlar", "Osmancık", "Sungurlu", "Uğurludağ"];
const dnzli 			= ["Seçiniz","Acıpayam", "Babadağ", "Buldan", "Çal", "Çardak", "Çivril", "Güney", "Holaz", "Kale", "Merkez", "Sarayköy", "Tavaş"];
const dyrbkr 			= ["Seçiniz","Çermik", "Eğil", "Ergani", "Hani", "Hazro", "Kocaköy", "Lice", "Merkez", "Silvan"];
const dzce 			= ["Seçiniz","Akçakoca", "Çilimli", "Merkez", "Yığılca"];
const edrne 			= ["Seçiniz","Enes", "Havsa", "İpsala", "Keşan", "Lalapaşa", "Meriç", "Merkez", "Uzunköprü"];
const elzg 			= ["Seçiniz","Ağin", "Arıcak", "Baskıl", "Karakoçan", "Keban", "Kovancılar", "Maden", "Merkez", "Palu", "Sivrice"];
const erzncn 			= ["Seçiniz","Çayırlı", "Ilıç", "Kemah", "Kemaliye", "Merkez", "Refahiye", "Tercan", "Üzümlü"];
const erzrm 			= ["Seçiniz","Aşkale", "Hınıs", "Horasan", "Ilıca", "İspir", "Narman", "Oltu", "Olur", "Pasinler", "Tortum"];
const eskishr			= ["Seçiniz","Alpu", "Beylikova", "Çifteler", "Günyüzü", "Han", "İnönü", "Mahmudiye", "Merkez", "Mihalıçcık", "Seyitgazi", "Sivrihisar"];
const gantep			= ["Seçiniz","Araban", "Islahiye", "Nizip", "Nurdağı", "Oğuzeli", "Şahinbey", "Şehitkamil", "Yavuzeli"];
const grsn			= ["Seçiniz","Alucra", "Bulancak", "Dereli", "Espiye", "Eynesil", "Görele", "Keşap", "Merkez", "Şebinkarahisar", "Tirebolu"];
const ghane			= ["Seçiniz","Kelkit", "Kurtun", "Merkez", "Şiran"];
const hkkri			= ["Seçiniz","Çukurca", "Merkez", "Şemdilli", "Yüksekova"];
const hty				= ["Seçiniz","Altınözü", "Belen", "Dörtyol", "Yüksekova", "Erzin", "İskenderun", "Kırıkhan", "Kumlu", "Merkez", "Reyhanlı", "Samandağı", "Yayladağı"];
const igdr			= ["Seçiniz","Aralık", "Karakoyunlu", "Merkez", "Tuzluca"];
const isprta			= ["Seçiniz","Aksu", "Atabey", "Eğirdir", "Gelendost", "Gönen", "Keçiborlu", "Merkez", "Sarkıkaraağaç", "Senirkent", "Sütçüler", "Uluborlu", "Yalvaç"];
const kmaras			= ["Seçiniz","Afşın", "Andırın", "Çağlayancerit", "Elbistan", "Göksun", "Merkez", "Pazarcık"];
const krbk			= ["Seçiniz","Eskipazar", "Merkez", "Safranbolu"];
const krmn			= ["Seçiniz","Ayrancı", "Başyayla", "Ermenek", "Merkez"];
const krs				= ["Seçiniz","Kağızman", "Merkez", "Sarıkamış"];
const kstmn			= ["Seçiniz","Abana", "Arac", "Bozkurt", "Çatalzeytin", "Cide", "Daday", "Devrenkanı", "Hanönü", "İhsangazi", "İnebolu", "Küre", "Merkez", "Taşköprü", "Tosya"];
const kysr			= ["Seçiniz","Akkışla", "Bünyan", "Develi", "Felahiye", "Hacılar", "İncesu", "Kocasinan", "Melekgazi", "Özvatan", "Pınarbaşı", "Talas", "Tomarza", "Yahyalı", "Yeşilhisar"];
const kls				= ["Seçiniz","Elbeyli", "Merkez", "Musabeyli", "Polateli"];
const krkkale			= ["Seçiniz","Karakeçili", "Keskin", "Merkez", "Sulakyurt"];
const krklreli		= ["Seçiniz","Babaski", "Lüleburgaz", "Merkez", "Pehlivanköy", "Pınarhisar", "Vize"];
const krshr			= ["Seçiniz","Akpınar", "Çiçekdağı", "Kaman", "Merkez", "Mucur"];
const kceli			= ["Seçiniz","Derince", "Gebze", "Gölcük", "Kandıra", "Karamürsel", "Merkez"];
const knya			= ["Seçiniz","Akören", "Akşehir", "Altınekin", "Beyşehir", "Bozkır", "Çeltik", "Cihanbeyli", "Çumra", "Derbent", "Doğanhisar", "Emirgazi", "Ereğli", "Hadım", "Hüyük", "Ilgın", "Kadınhanı", "Karapınar", "Karatay", "Meram", "Sarayönü", "Selçuklu", "Seydişehir", "Taşkent", "Yunak"];
const kthya			= ["Seçiniz","Altıntaş", "Domaniç", "Dumlupınar", "Emet", "Gediz", "Merkez", "Pazarlar", "Simav", "Tavşanlı"];
const mltya			= ["Seçiniz","Akçadağ", "Arapkır", "Arguvan", "Battalgazi", "Darende", "Doğanşehir", "Hekimhan", "Merkez", "Pötürge", "Yazıhan", "Yeşilhan"];
const mnsa			= ["Seçiniz","Ahmetli", "Akhisar", "Alaşehir", "Demirci", "Gölmarmara", "Gördes", "Kırkağaç", "Kula", "Merkez", "Salihli", "Sarıhanlı", "Soma", "Turgutlu"];
const mrdn			= ["Seçiniz","Derik", "Kızıltepe", "Mazıdağı", "Merkez", "Midyat", "Nusaybin", "Ömerli", "Savur"];
const mrsn			= ["Seçiniz","Anamur", "Bozyazı", "Çamlıyayla", "Erdemli", "Gülnar", "Merkez", "Mut", "Silifke", "Tarsus"];
const mgla			= ["Seçiniz","Bodrum", "Datça", "Fathiye", "Kavaklıdere", "Köyceğiz", "Marmaris", "Merkez", "Milas", "Ortaca", "Ula", "Yatağan"];
const ms				= ["Seçiniz","Bulanık", "Korkut", "Malazgirt", "Merkez"];
const nvshr			= ["Seçiniz","Avanos", "Derinkuyu", "Gülşehir", "Hacıbektaş", "Kozaklı", "Merkez", "Ürgüp"];
const ngde			= ["Seçiniz","Altunhisar", "Bor", "Çamardı", "Çiftlik", "Ulukışla"];
const ord = ["Seçiniz","Akkuş", "Fatsa", "Görköy", "Kabadüz", "Merkez", "Mesudiye", "Perşembe", "Ulubey", "Ünye"];
const osmnye = ["Seçiniz","Bahçe", "Kadirli", "Merkez"];
const rze = ["Seçiniz","Ardeşen", "Çayeli", "Fındıklı", "Merkez", "Pazar", "Çamlıhemşin"];
const skrya			= ["Seçiniz","Akyazı", "Geyve", "Hendek", "Karasu", "Kaynarca", "Merkez", "Sapanca", "Taraklı"];
const smsn			= ["Seçiniz","Alaçam", "Bafra", "Çarşamba", "Havza", "Kavak", "Ladik", "Merkez", "Salıpazarı", "Tekkeköy", "Terme", "Vezirköprü"];
const snlrf			= ["Seçiniz","Akçakale", "Birecik", "Bozova", "Halfeti", "Harran", "Hilvan", "Merkez", "Siverek", "Suruç", "Viranşehir"];
const srt				= ["Seçiniz","Aydınlar", "Baykan", "Eruh", "Kurtalan", "Merkez"];
const snp				= ["Seçiniz","Ayancık", "Boyabat", "Durağan", "Elfelek", "Gerze", "Merkez"];
const srnk			= ["Seçiniz","Cizre", "İdil", "Merkez", "Silopi"];
const svs				= ["Seçiniz","Altınyayla", "Divriği", "Doğansar", "Gemerek", "Hafik", "Kangal", "Merkez", "Şarkışla", "Suşehri", "Yılızeli", "Zara"];
const tkrdg			= ["Seçiniz","Çerkezköy", "Çorlu", "Hayrabolu", "Malkara", "Marmara Ereğlisi", "Merkez", "Muratlı", "Saray", "Şarköy"];
const tkt				= ["Seçiniz","Almuz", "Erbaa", "Merkez", "Niksar", "Pazar", "Reşadiye", "Sulusaray", "Turhal", "Zile"];
const trbzn			= ["Seçiniz","Akçabat", "Araklı", "Arşin", "Beşikdüzü", "Çarşıbaşı", "Çaykara", "Dernekpazarı", "Maçka", "Merkez", "Of", "Sürmene", "Tonya", "Vakfıkebir", "Yomra"];
const tncli			= ["Seçiniz","Çemişgezek", "Hozat", "Mazgirt", "Merkez", "Nazimiye", "Pertek"];
const usk				= ["Seçiniz","Banaz", "Eşme", "Merkez", "Sivaslı", "Ulubey"];
const vn				= ["Seçiniz","Başkale", "Çaldıran", "Çatak", "Erciş", "Gevaş", "Gürpınar", "Merkez", "Muradiye", "Özalp"];
const ylva			= ["Seçiniz","Altınova", "Armutlu", "Merkez"];
const yzgt			= ["Seçiniz","Boğazlıyan", "Çandır", "Çayıralan", "Merkez", "Sarıkaya", "Sefaatli", "Sorgun", "Yenifakili", "Yerköy"];
const zngldk			= ["Seçiniz","Araplı", "Çaycuma", "Devrek", "Ereğli", "Merkez"];
const altndg=["%67.24","%28.25","%4.52"];
const ayas=["%54.82","%41.41","%3.76"];
const adalar=["%27.64", "%48.58", "%23.3"];
const besiktas=["%18.97", "%64.13", "%16.48"];
const stnbl=["%50.85", "%36.17","%12.43"];
const zmr=["%34.98","%52.97","%12.05"];
const ankra=["%53.54","%39.68","%6.77"];
class SehirlerListesi extends Component {
    constructor(props) {
        super(props);
        this.state = {selected:'selected'};
        this.onChangeIlce.event= {
            someGlobalVariable: '',
        };
        this.onChangeIlce.event.target={
            someGlobalVariable:'',
        };
        this.onChangeIlce.event.target.value={
            someGlobalVariable:'',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

     Set_player (e)
    {
        this.setState({value: e.target.value});
        let i;
        const select_il = document.getElementById("il");
        const select_ilce = document.getElementById("ilce");
        const selected_il = select_il.options[select_il.selectedIndex].value;
        select_ilce.options.length=0;
        const selected_ilce=document.onChangeIlce;
        let b;
        if (selected_il === "Ankara"){
            baslik1="Ankara Geneli";
            b=ankra;
            for(i = 0; i<ank.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(ank[i]);

        }
        if (selected_il === "İstanbul"){
            b=stnbl;
            for(i = 0; i<ist.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(ist[i]);

        }
        if (selected_il === "İzmir"){
            b=zmr;
            for(i = 0; i<izmr.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(izmr[i]);
        }
        if (selected_il === "Adana"){
            b=["%46.44","%39.26","%14.29"];
            for(i = 0; i<adna.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(adna[i]);
        }
        if (selected_il === "Adıyaman"){
            b=["%64.25","%18.94","%16.81"];
            for(i = 0; i<adymn.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(adymn[i]);
        }
        if (selected_il === "Afyon"){
            b=["%69.34","%28.93","%1.73"];
            for(i = 0; i<afyn.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(afyn[i]);
        }
        if (selected_il === "Ağrı"){
            for(i = 0; i<agri.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(agri[i]);
        }
        if (selected_il === "Aksaray"){
            for(i = 0; i<aksry.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(aksry[i]);
        }
        if (selected_il === "Amasya"){
            for(i = 0; i<amsya.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(amsya[i]);
        }
        if (selected_il === "Antalya"){
            for(i = 0; i<ant.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(ant[i]);
        }
        if (selected_il === "Ardahan"){
            for(i = 0; i<ardhn.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(ardhn[i]);
        }
        if (selected_il === "Artvin"){
            for(i = 0; i<artvn.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(artvn[i]);
        }
        if (selected_il === "Aydın"){
            for(i = 0; i<aydn.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(aydn[i]);
        }
        if (selected_il === "Balıkesir"){
            for(i = 0; i<baliksr.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(baliksr[i]);
        }
        if (selected_il === "Bartın"){
            for(i = 0; i<brtn.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(brtn[i]);
        }
        if (selected_il === "Batman"){
            for(i = 0; i<btmn.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(btmn[i]);
        }
        if (selected_il === "Bayburt"){
            for(i = 0; i<bybrt.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(bybrt[i]);
        }
        if (selected_il === "Bilecik"){
            for(i = 0; i<bilck.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(bilck[i]);
        }
        if (selected_il === "Bingöl"){
            for(i = 0; i<bngl.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(bngl[i]);
        }
        if (selected_il === "Bitlis"){
            for(i = 0; i<btls.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(btls[i]);
        }
        if (selected_il === "Bolu"){
            for(i = 0; i<blu.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(blu[i]);
        }
        if (selected_il === "Burdur"){
            for(i = 0; i<brdr.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(brdr[i]);
        }
        if (selected_il === "Bursa"){
            for(i = 0; i<brsa.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(brsa[i]);
        }
        if (selected_il === "Çanakkale"){
            for(i = 0; i<cnk.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(cnk[i]);
        }
        if (selected_il === "Çankırı"){
            for(i = 0; i<cnkri.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(cnkri[i]);
        }
        if (selected_il === "Çorum"){
            for(i = 0; i<crm.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(crm[i]);
        }
        if (selected_il === "Denizli"){
            for(i = 0; i<dnzli.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(dnzli[i]);
        }
        if (selected_il === "Diyarbakır"){
            for(i = 0; i<dyrbkr.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(dyrbkr[i]);
        }
        if (selected_il === "Düzce"){
            for(i = 0; i<dzce.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(dzce[i]);
        }
        if (selected_il === "Edirne"){
            for(i = 0; i<edrne.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(edrne[i]);
        }
        if (selected_il === "Elazığ"){
            for(i = 0; i<elzg.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(elzg[i]);
        }
        if (selected_il === "Erzincan"){
            for(i = 0; i<erzncn.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(erzncn[i]);
        }
        if (selected_il === "Erzurum"){
            for(i = 0; i<erzrm.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(erzrm[i]);
        }
        if (selected_il === "Eskişehir"){
            for(i = 0; i<eskishr.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(eskishr[i]);
        }
        if (selected_il === "Gaziantep"){
            for(i = 0; i<gantep.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(gantep[i]);
        }
        if (selected_il === "Giresun"){
            for(i = 0; i<grsn.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(grsn[i]);
        }
        if (selected_il === "Gümüşhane"){
            for(i = 0; i<ghane.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(ghane[i]);
        }
        if (selected_il === "Hakkari"){
            for(i = 0; i<hkkri.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(hkkri[i]);
        }
        if (selected_il === "Hatay"){
            for(i = 0; i<hty.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(hty[i]);
        }
        if (selected_il === "Iğdır"){
            for(i = 0; i<igdr.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(igdr[i]);
        }
        if (selected_il === "Isparta"){
            for(i = 0; i<isprta.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(isprta[i]);
        }
        if (selected_il === "Kahramanmaraş"){
            for(i = 0; i<kmaras.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(kmaras[i]);
        }
        if (selected_il === "Karabük"){
            for(i = 0; i<krbk.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(krbk[i]);
        }
        if (selected_il === "Karaman"){
            for(i = 0; i<krmn.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(krmn[i]);
        }
        if (selected_il === "Kars"){
            for(i = 0; i<krs.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(krs[i]);
        }
        if (selected_il === "Kastamonu"){
            for(i = 0; i<kstmn.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(kstmn[i]);
        }
        if (selected_il === "Kayseri"){
            for(i = 0; i<kysr.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(kysr[i]);
        }
        if (selected_il === "Kilis"){
            for(i = 0; i<kls.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(kls[i]);
        }
        if (selected_il === "Kırıkkale"){
            for(i = 0; i<krkkale.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(krkkale[i]);
        }
        if (selected_il === "Kırklareli"){
            for(i = 0; i<krklreli.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(krklreli[i]);
        }
        if (selected_il === "Kırşehir"){
            for(i = 0; i<krshr.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(krshr[i]);
        }
        if (selected_il === "Kocaeli"){
            for(i = 0; i<kceli.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(kceli[i]);
        }
        if (selected_il === "Konya"){
            for(i = 0; i<knya.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(knya[i]);
        }
        if (selected_il === "Kütahya"){
            for(i = 0; i<kthya.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(kthya[i]);
        }
        if (selected_il === "Malatya"){
            for(i = 0; i<mltya.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(mltya[i]);
        }
        if (selected_il === "Manisa"){
            for(i = 0; i<mnsa.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(mnsa[i]);
        }
        if (selected_il === "Mardin"){
            for(i = 0; i<mrdn.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(mrdn[i]);
        }
        if (selected_il === "Mersin"){
            for(i = 0; i<mrsn.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(mrsn[i]);
        }
        if (selected_il === "Muğla"){
            for(i = 0; i<mgla.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(mgla[i]);
        }
        if (selected_il === "Muş"){
            for(i = 0; i<ms.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(ms[i]);
        }
        if (selected_il === "Nevşehir"){
            for(i = 0; i<nvshr.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(nvshr[i]);
        }
        if (selected_il === "Niğde"){
            for(i = 0; i<ngde.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(mgla[i]);
        }
        if (selected_il === "Ordu"){
            for(i = 0; i<ord.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(ord[i]);
        }
        if (selected_il === "Osmaniye"){
            for(i = 0; i<osmnye.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(osmnye[i]);
        }
        if (selected_il === "Rize"){
            for(i = 0; i<rze.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(rze[i]);
        }
        if (selected_il === "Sakarya"){
            for(i = 0; i<skrya.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(skrya[i]);
        }
        if (selected_il === "Samsun"){
            for(i = 0; i<smsn.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(smsn[i]);
        }
        if (selected_il === "Şanlıurfa"){
            for(i = 0; i<snlrf.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(snlrf[i]);
        }
        if (selected_il === "Siirt"){
            for(i = 0; i<srt.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(srt[i]);
        }
        if (selected_il === "Sinop"){
            for(i = 0; i<snp.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(snp[i]);
        }
        if (selected_il === "Şırnak"){
            for(i = 0; i<srnk.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(srnk[i]);
        }
        if (selected_il === "Sivas"){
            for(i = 0; i<svs.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(svs[i]);
        }
        if (selected_il === "Tekirdağ"){
            for(i = 0; i<tkrdg.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(tkrdg[i]);
        }
        if (selected_il === "Tokat"){
            for(i = 0; i<tkt.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(tkt[i]);
        }
        if (selected_il === "Trabzon"){
            for(i = 0; i<trbzn.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(trbzn[i]);
        }
        if (selected_il === "Tunceli"){
            for(i = 0; i<tncli.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(tncli[i]);
        }
        if (selected_il === "Uşak"){
            for(i = 0; i<usk.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(usk[i]);
        }
        if (selected_il === "Van"){
            for(i = 0; i<vn.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(vn[i]);
        }
        if (selected_il === "Yalova"){
            for(i = 0; i<ylva.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(ylva[i]);
        }
        if (selected_il === "Yozgat"){
            for(i = 0; i<yzgt.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(yzgt[i]);
        }
        if (selected_il === "Zonguldak"){
            for(i = 0; i<zngldk.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(zngldk[i]);
        }

            document.getElementById("oy1").innerHTML = b[0];
            document.getElementById("oy2").innerHTML = b[1];
            document.getElementById("oy3").innerHTML = b[2];
            document.getElementById("baslik1").innerHTML=baslik1;

    }

    onChangeIlce (event) {
        this.setState({typed: event.target.value});
        console.log("ilçe değeri");
        console.log(event.target.value);
        let a;

        if(event.target.value==="Altındağ"){
            a=altndg;
        }
        if(event.target.value==="Ayaş"){
            a=ayas;
        }
        if(event.target.value==="Beşiktaş"){
            a=besiktas;
        }
        if(event.target.value==="Adalar"){
            a=adalar;
        }
        if(event.target.value==="Aliağa"){
            a=["%38.34","%47.41","%14.25"]
        }
        document.getElementById("oy1").innerHTML= a[0];
        document.getElementById("oy2").innerHTML= a[1];
        document.getElementById("oy3").innerHTML=a[2];
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <table>
                        <tr>
                            İl:
                            <label>
                                <select value={this.state.value} id="il" onChange={this.Set_player.bind(this)}>
                                    <option selected="selected">Lütfen Seçiniz</option>
                                    <option value="Ankara">Ankara</option>
                                    <option value="İstanbul">İstanbul</option>
                                    <option value="İzmir">İzmir</option>
                                    <option value="Adana">Adana</option>
                                    <option value="Adıyaman">Adıyaman</option>
                                    <option value="Afyon">Afyon</option>
                                    <option value="Ağrı">Ağrı</option>
                                    <option value="Aksaray">Aksaray</option>
                                    <option value="Amasya">Amasya</option>
                                    <option value="Antalya">Antalya</option>
                                    <option value="Ardahan">Ardahan</option>
                                    <option value="Artvin">Artvin</option>
                                    <option value="Aydın">Aydın</option>
                                    <option value="Balıkesir">Balıkesir</option>
                                    <option value="Bartın">Bartın</option>
                                    <option value="Batman">Batman</option>
                                    <option value="Bayburt">Bayburt</option>
                                    <option value="Bilecik">Bilecik</option>
                                    <option value="Bingöl">Bingöl</option>
                                    <option value="Bitlis">Bitlis</option>
                                    <option value="Bolu">Bolu</option>
                                    <option value="Burdur">Burdur</option>
                                    <option value="Bursa">Bursa</option>
                                    <option value="Çanakkale">Çanakkale</option>
                                    <option value="Çankırı">Çankırı</option>
                                    <option value="Çorum">Çorum</option>
                                    <option value="Denizli">Denizli</option>
                                    <option value="Diyarbakır">Diyarbakır</option>
                                    <option value="Düzce">Düzce</option>
                                    <option value="Edirne">Edirne</option>
                                    <option value="Elazığ">Elazığ</option>
                                    <option value="Erzincan">Erzincan</option>
                                    <option value="Erzurum">Erzurum</option>
                                    <option value="Eskişehir">Eskişehir</option>
                                    <option value="Gaziantep">Gaziantep</option>
                                    <option value="Giresun">Giresun</option>
                                    <option value="Gümüşhane">Gümüşhane</option>
                                    <option value="Hakkari">Hakkari</option>
                                    <option value="Hatay">Hatay</option>
                                    <option value="Iğdır">Iğdır</option>
                                    <option value="Isparta">Isparta</option>
                                    <option value="Kahramanmaraş">Kahramanmaraş</option>
                                    <option value="Karabük">Karabük</option>
                                    <option value="Karaman">Karaman</option>
                                    <option value="Kars">Kars</option>
                                    <option value="Kastamonu">Kastamonu</option>
                                    <option value="Kayseri">Kayseri</option>
                                    <option value="Kırıkkale">Kırıkkale</option>
                                    <option value="Kırklareli">Kırklareli</option>
                                    <option value="Kırşehir">Kırşehir</option>
                                    <option value="Kilis">Kilis</option>
                                    <option value="Kocaeli">Kocaeli</option>
                                    <option value="Konya">Konya</option>
                                    <option value="Kütahya">Kütahya</option>
                                    <option value="Malatya">Malatya</option>
                                    <option value="Manisa">Manisa</option>
                                    <option value="Mardin">Mardin</option>
                                    <option value="Mersin">Mersin</option>
                                    <option value="Muğla">Muğla</option>
                                    <option value="Muş">Muş</option>
                                    <option value="Nevşehir">Nevşehir</option>
                                    <option value="Niğde">Niğde</option>
                                    <option value="Ordu">Ordu</option>
                                    <option value="Osmaniye">Osmaniye</option>
                                    <option value="Rize">Rize</option>
                                    <option value="Sakarya">Sakarya</option>
                                    <option value="Samsun">Samsun</option>
                                    <option value="Siirt">Siirt</option>
                                    <option value="Sinop">Sinop</option>
                                    <option value="Sivas">Sivas</option>
                                    <option value="Şanlıurfa">Şanlıurfa</option>
                                    <option value="Şırnak">Şırnak</option>
                                    <option value="Tekirdağ">Tekirdağ</option>
                                    <option value="Tokat">Tokat</option>
                                    <option value="Trabzon">Trabzon</option>
                                    <option value="Tunceli">Tunceli</option>
                                    <option value="Uşak">Uşak</option>
                                    <option value="Van">Van</option>
                                    <option value="Yalova">Yalova</option>
                                    <option value="Yozgat">Yozgat</option>
                                    <option value="Zonguldak">Zonguldak</option>
                                </select>
                            </label>
                            <td>&emsp;</td>
                            İlçe:
                            <label>
                                <select id="ilce"  value={this.value}  onChange={this.onChangeIlce.bind(this)} >
                                    <option>Önce İl Seçiniz</option>
                                </select>
                            </label>
                        </tr>
                    </table>
                </form>
                <div className="flex-container" >
                    <div>
                    <div>CUMHUR İTTİFAKI:<hr/> </div>
                    <div id="oy1"></div>
                    </div>
                        <div>
                            <div>MİLLET İTTİFAKI: <hr/></div>
                            <div id="oy2"></div>
                        </div>
                    <div>
                        <div>DİĞER: <hr/></div>
                        <div id="oy3"></div>
                    </div>

            </div>

                </div>

        );
    }
}

export default SehirlerListesi;