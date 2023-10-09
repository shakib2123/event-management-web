import Footer from "../../Components/Footer/Footer";
import WhatWeDo from "../../Components/Futuristic/WhatWeDo";
import Industries from "../../Components/Industries/Industries";
import Navbar from "../../Components/Navbar/Navbar";
import Newses from "../../Components/Newses/Newses";

import Update from "../../Components/Update/Update";
import DiscoveryBanner from "../../Components/discoveryBanner/DiscoveryBanner";

const Discovery = () => {
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <div>
        <DiscoveryBanner></DiscoveryBanner>
        <Industries></Industries>
        <WhatWeDo></WhatWeDo>
        <Newses></Newses>
        <Update></Update>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Discovery;
