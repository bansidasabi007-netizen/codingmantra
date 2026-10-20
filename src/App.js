import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tools from "./pages/tools/Tools";
import ToolDetail from "./pages/tools/ToolDetail";
import AudioTools from "./pages/tools/AudioTools";
import ImageToolsPage from "./pages/tools/ImageToolsPage";
import Digital from "./pages/tools/Digital";
import Customer from "./pages/tools/Customer";
import Home from "./pages/Home";
import Financial from "./pages/tools/Financial";
import Seo from "./pages/tools/Seo";
import Datetime from "./pages/tools/Date&time";
import Legal from "./pages/tools/legal";
import Content from "./pages/tools/Content";
import QR from "./pages/tools/QR";
import Devloper from "./pages/tools/Devloper";
import Learning from "./pages/tools/Learning";
import Products from "./pages/Products";
import Portfolio from "./pages/portfolio";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contatus";
import ProductPhotography from "./pages/tools/image/ProductPhotography";
import AiJewelry from "./pages/tools/image/AiJewelry"
import Jewellery from "./pages/tools/image/Jewellery";
import Poster from "./pages/tools/image/Poster";
import Festival from "./pages/tools/image/Festival";
import Product from "./pages/tools/image/Product";
import Games from "./pages/Games";
import Suduko from "./pages/tools/Games/suduko";
import Tictok from "./pages/tools/Games/Tictok";
import Game2048 from "./pages/tools/Games/Game2048";
import WordSearch from "./pages/tools/Games/WordSearch";
import Puzzle from "./pages/tools/Games/Mathpuzzle";
import Brain from "./pages/tools/Games/Brain";
import Gallery from "./pages/Gallery";
import Sketch from "./pages/tools/image/Sketch";
import AiLogo from "./pages/tools/image/AiLogo";
import AIProfessional from "./pages/tools/image/AIProfessional";
import Nano from "./pages/tools/image/Nano";
import Thumbnail from "./pages/tools/image/Thumbnail ";
import Milestone from "./pages/tools/image/Milestone";
import { useEffect } from "react";
import Passport from "./pages/tools/image/Passport";
import ImageUpscaler from "./pages/tools/image/ImageUpscaler";
import SizeReducer from "./pages/tools/image/SizeReducer";
import ImageFormat from "./pages/tools/image/ImageFormat";
import Speech from "./pages/tools/Auido/Speech";
import CM from "./pages/tools/CRM/CM";
import ECM from "./pages/tools/CRM/ECM";
import Followup from "./pages/tools/CRM/Followup";
import Typing from "./pages/tools/Learning/Typing";
import Pathaway from "./pages/tools/Learning/Pathaway";
import Privacy from "./pages/tools/Legal Tools/Privacy";
import Terms from "./pages/tools/Legal Tools/Terms";
import Return from "./pages/tools/Legal Tools/Return";
import Agreement from "./pages/tools/Legal Tools/Agreement";
import Editor from "./pages/tools/Text/Editor";
import Lorem from "./pages/tools/Text/Lorem";
import Text from "./pages/tools/Text/Text";
import QRGen from "./pages/tools/QR/QRGen";
import Bulk from "./pages/tools/QR/Bulk";
import UPI from "./pages/tools/QR/UPI";
import Coder from "./pages/tools/QR/Coder";
import Card from "./pages/tools/QR/Card";
import WiFi from "./pages/tools/QR/WiFi";
import Age from "./pages/tools/Age/Age";
import Date from "./pages/tools/Age/Date";
import Datec from "./pages/tools/Age/Datec";
import Timezone from "./pages/tools/Age/Timezone";
import Unix from "./pages/tools/Age/Unix";
import Unit from "./pages/tools/Age/Unit";
import Keyword from "./pages/tools/SEO/Keyword";
import Meta from "./pages/tools/SEO/Meta";
import Snippet from "./pages/tools/SEO/Snippet";
import Schema from "./pages/tools/SEO/Schema";
import Density from "./pages/tools/SEO/Density";
import Tag from "./pages/tools/SEO/Tag";
import Review from "./pages/tools/SEO/Review";
import Invoice from "./pages/tools/Financial/Invoice";
import Quotation from "./pages/tools/Financial/Quotation";
import EMI from "./pages/tools/Financial/EMI";
import Loan from "./pages/tools/Financial/Loan";
import SIPP from "./pages/tools/Financial/SIPP";
import SWP from "./pages/tools/Financial/SWP";
import PPF from "./pages/tools/Financial/PPF";
import EPF from "./pages/tools/Financial/EPF";
import Sukanya from "./pages/tools/Financial/Sukanya";
import RD from "./pages/tools/Financial/RD";
import Compound from "./pages/tools/Financial/Compound";
import Simple from "./pages/tools/Financial/Simple";
import GST from "./pages/tools/Financial/GST";
import Planning from "./pages/tools/Developer/Planning";
import Randomm from "./pages/tools/Developer/Randomm";
import RSA from "./pages/tools/Developer/RSA";
import SSH from "./pages/tools/Developer/SSH";
import UUID from "./pages/tools/Developer/UUID";
import Color from "./pages/tools/Developer/Color";
import Cron from "./pages/tools/Developer/Cron";
import JSON from "./pages/tools/Developer/JSON";
import Regex from "./pages/tools/Developer/Regex";
import JavaScript from "./pages/tools/Developer/JavaScript";
import Obfuscator from "./pages/tools/Developer/Obfuscator";
import JWT from "./pages/tools/Developer/JWT";
import Base64 from "./pages/tools/Developer/Base64";
import Merger from "./pages/tools/Developer/Merger";
import VEO from "./pages/tools/Digital/VEO";
import WhatsApp from "./pages/tools/Digital/WhatsApp";
import Social from "./pages/tools/Digital/Social";
import LinkedInn from "./pages/tools/Digital/LinkedInn";
import Hashtag from "./pages/tools/Digital/Hashtag";
import AD from "./pages/tools/Digital/Ad";
import { MdSubject } from "react-icons/md";
import Line from "./pages/tools/Digital/Line";
import UTM from "./pages/tools/Digital/UTM";
import VideoTools from "./pages/tools/VideoTools";
import Animation from "./pages/tools/video/Animation";
import Festivall from "./pages/tools/video/Festivall";
import Jewelry from "./pages/tools/video/Jewelry";
import Productss from "./pages/tools/video/Productss";
import Apparel from "./pages/tools/video/Apparel";
import Story from "./pages/tools/video/Story";
import Portal from "./pages/services/Portal";
import Mobile from "./pages/services/Mobile";
import Commerce from "./pages/services/Commerce";
import Automation from "./pages/services/Automation";
import Tailor from "./pages/services/Tailor";
import Marketing from "./pages/services/Marketing";
import Integration from "./pages/services/Integration";
import Cloud from "./pages/services/Cloud";
import Khadhya from "./pages/portfolio/Khadhya";
import RotaPal from "./pages/portfolio/RotaPal";
import Samosa from "./pages/portfolio/Samosa";
import Krislur from "./pages/portfolio/Krislur";
import ARVMS from "./pages/portfolio/ARVMS";
import Hemu from "./pages/portfolio/Hemu";
import Anmol from "./pages/portfolio/Anmol";
import SocioMantra from "./pages/portfolio/SocioMantra";
import Shah from "./pages/portfolio/Shah";
import Gigascale from "./pages/portfolio/Gigascale";
import ScrollToTop from "./ScrollToTop";
import CMPOS from "./pages/tools/Products/CMPOS";
import WACM from "./pages/tools/Products/WACM";
import CodingMantra from "./pages/tools/Products/CodingMantra";
import Sanatan from "./pages/tools/Products/Sanatan";
import SociooMantra from "./pages/tools/Products/SociooMantra";
import Storefront from "./pages/tools/Products/Storefront";


const changeTheme = (mode) => {

  if (mode === "light") {
    document.documentElement.classList.remove("dark");
  }

  else if (mode === "dark") {
    document.documentElement.classList.add("dark");
  }

  else if (mode === "system") {

    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (systemDark) {
      document.documentElement.classList.add("dark");
    }
    else {
      document.documentElement.classList.remove("dark");
    }

  }

};

function App() {

  useEffect(() => {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
}, []);

    useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);


  return (
<BrowserRouter>

  <ScrollToTop />

  <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">

        <Routes>

<Route path="/" element={<Home />} />
<Route path="/tools/:toolName/:subTool" element={<ToolDetail />} />
<Route path="/tools/:toolName" element={<Tools />} />
         
<Route path="/" element={<Home />} />

<Route path="/tools/image-tools" element={<ImageToolsPage />} />
<Route path="/tools/audio-tools" element={<AudioTools />} />
<Route path="/tools/video-tools" element={<VideoTools />} />
<Route path="/tools/customer" element={<Customer />} />
<Route path="/tools/digital" element={<Digital />} />
<Route path="/tools/financial" element={<Financial />} />
<Route path="/tools/seo" element={<Seo />} />
<Route path="/tools/date-time" element={<Datetime />} />
<Route path="/tools/legal" element={<Legal />} />
<Route path="/tools/content" element={<Content />} />
<Route path="/tools/qr" element={<QR />} />
<Route path="/tools/developer" element={<Devloper />} />
<Route path="/tools/learning" element={<Learning />} />
          <Route path="/products" element={<Products />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Poster" element={<Poster />} />
          <Route path="/Festival" element={<Festival />} />
          <Route path="/ProductPhotography" element={<ProductPhotography />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Contatus" element={<Contact />} />
          <Route path="/AiJewelry" element={<AiJewelry />} />
          <Route path="/Jewellery" element={<Jewellery />} />
          <Route path="/Games" element={<Games />} />
          <Route path="Games/Tictok" element={<Tictok />} />
          <Route path="/Games/Game2048" element={<Game2048 />} />
          <Route path="/Games/WordSearch" element={<WordSearch />} />
          <Route path="Games/Suduko" element={<Suduko />} />
          <Route path="Games/Puzzle" element={<Puzzle />} />
          <Route path="/Games/Brain" element={<Brain />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Sketch" element={<Sketch />} />
          <Route path="/AiLogo" element={<AiLogo />} />
          <Route path="/AIProfessional" element={<AIProfessional />} />
          <Route path="/Nano" element={<Nano />} />
          <Route path="/Thumbnail" element={<Thumbnail />} />
          <Route path="/Milestone" element={<Milestone />} />
          <Route path="/Passport" element={<Passport />} />
          <Route path="/ImageUpscaler" element={<ImageUpscaler />} />
          <Route path="/SizeReducer" element={<SizeReducer />} />
          <Route path="/ImageFormat" element={<ImageFormat />} />
          <Route path="/Speech" element={<Speech />} />
          <Route path="/CM" element={<CM />} />
          <Route path="/ECM" element={<ECM />} />
          <Route path="/Followup" element={<Followup />} />
          <Route path="/Typing" element={<Typing />} />
          <Route path="/Pathaway" element={<Pathaway />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Return" element={<Return />} />
          <Route path="/Agreement" element={<Agreement />} />
          <Route path="/Editor" element={<Editor />} />
          <Route path="/Lorem" element={<Lorem />} />
          <Route path="/Text" element={<Text />} />
          <Route path="/QRGen" element={<QRGen />} />
          <Route path="/Bulk" element={<Bulk />} />
          <Route path="/UPI" element={<UPI />} />
          <Route path="/Coder" element={<Coder />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/WiFi" element={<WiFi />} />
          <Route path="/Age" element={<Age />} />
          <Route path="/Date" element={<Date />} />
          <Route path="/Datec" element={<Datec />} />
          <Route path="/Timezone" element={<Timezone />} />
          <Route path="/Unix" element={<Unix />} />
          <Route path="/Unit" element={<Unit />} />
          <Route path="/Keyword" element={<Keyword />} />
          <Route path="/Meta" element={<Meta />} />
          <Route path="/Snippet" element={<Snippet />} />
          <Route path="/Schema" element={<Schema />} />
          <Route path="/Tag" element={<Tag />} />
          <Route path="/Density" element={<Density />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/Invoice" element={<Invoice />} />
          <Route path="/Quotation" element={<Quotation />} />
          <Route path="/EMI" element={<EMI />} />
          <Route path="/Loan" element={<Loan />} />     
          <Route path="/SIPP" element={<SIPP />} />     
          <Route path="/SWP" element={<SWP/>} />     
          <Route path="/PPF" element={<PPF/>} />     
          <Route path="/EPF" element={<EPF/>} />     
          <Route path="/Sukanya" element={<Sukanya/>} />     
          <Route path="/RD" element={<RD/>} />     
          <Route path="/Compound" element={<Compound/>} />     
          <Route path="/Simple" element={<Simple/>} />     
          <Route path="/GST" element={<GST/>} />     
          <Route path="/Planning" element={<Planning/>} />     
          <Route path="/Randomm" element={<Randomm/>} />     
          <Route path="/RSA" element={<RSA/>} />     
          <Route path="/SSH" element={<SSH/>} />     
          <Route path="/UUID" element={<UUID/>} />     
          <Route path="/Color" element={<Color/>} />     
          <Route path="/Cron" element={<Cron/>} />     
          <Route path="/JSON" element={<JSON/>} />     
          <Route path="/Regex" element={<Regex/>} />     
          <Route path="/JavaScript" element={<JavaScript/>} />     
          <Route path="/Obfuscator" element={<Obfuscator/>} />     
          <Route path="/JWT" element={<JWT/>} />     
          <Route path="/Base64" element={<Base64/>} />     
          <Route path="/Merger" element={<Merger/>} />     
          <Route path="/VEO" element={<VEO/>} />     
          <Route path="/WhatsApp" element={<WhatsApp/>} />     
          <Route path="/Social" element={<Social/>} />     
          <Route path="/LinkedInn" element={<LinkedInn/>} />     
          <Route path="/Hashtag" element={<Hashtag/>} />     
          <Route path="/AD" element={<AD/>} />     
          <Route path="/Line" element={<Line/>} />     
          <Route path="/UTM" element={<UTM/>} />     
          <Route path="/Animation" element={<Animation/>} />     
          <Route path="/Festivall" element={<Festivall/>} />     
          <Route path="/Jewelry" element={<Jewelry/>} />     
          <Route path="/Product" element={<Product/>} />     
          <Route path="/Productss" element={<Productss/>} />     
          <Route path="/Apparel" element={<Apparel/>} />     
          <Route path="/Story" element={<Story/>} />     
          <Route path="/Portal" element={<Portal/>} />     
          <Route path="/Mobile" element={<Mobile/>} />     
          <Route path="/Commerce" element={<Commerce/>} />      
          <Route path="/Automation" element={<Automation/>} />      
          <Route path="/Tailor" element={<Tailor/>} />      
          <Route path="/Marketing" element={<Marketing/>} />      
          <Route path="/Integration" element={<Integration/>} />      
          <Route path="/Cloud" element={<Cloud/>} />      
          <Route path="/Khadhya" element={<Khadhya/>} />      
          <Route path="/RotaPal" element={<RotaPal/>} />      
          <Route path="/Samosa" element={<Samosa/>} />      
          <Route path="/Krislur" element={<Krislur/>} />      
          <Route path="/ARVMS" element={<ARVMS/>} />      
          <Route path="/Hemu" element={<Hemu/>} />      
          <Route path="/Anmol" element={<Anmol/>} />      
          <Route path="/SocioMantra" element={<SocioMantra/>} />      
          <Route path="/Shah" element={<Shah/>} />      
          <Route path="/Gigascale" element={<Gigascale/>} />      
          <Route path="/CMPOS" element={<CMPOS/>} />      
          <Route path="/WACM" element={<WACM/>} />      
          <Route path="/CodingMantra" element={<CodingMantra/>} />      
          <Route path="/Sanatan" element={<Sanatan/>} />      
          <Route path="/SociooMantra" element={<SociooMantra/>} />      
          <Route path="/Storefront" element={<Storefront/>} />      

             
           
            
          
    
  
    
      
         
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;