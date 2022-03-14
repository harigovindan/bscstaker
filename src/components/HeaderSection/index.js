import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
  HeroBtnWrapper,
  Input,
  HeroStatistics,
  ServicesContainer,
  ServicesCard,
  ServicesH1,
  ServicesH2,
  ServicesH21,
  ServicesIcon,
  ServicesData,
  ServicesP,
  ServicesWrapper
} from "./HeaderElements";

import { Button } from "../ButtonElement";

const HeaderSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      {/* <HeroBg>
        <VideoBg autoPlay loop playsinline muted src={Video} type="video/mp4" />
      </HeroBg> */}
      <HeroContent>
        <HeroP>
          The BSCStaker smart-contract provides the opportunity to invest any
          amount of BNB (from 5 BNB) in the contract.
        </HeroP>
        <HeroP>
          Get 112% to 292% return on investment in 14 to 28 days (from 8% to 20%
          daily).
        </HeroP>
        <HeroP>
          <b>
            <u>Minimum deposit:</u>
          </b>{" "}
          BNB and no maximal limit.
        </HeroP>
        <HeroP>
          <b>
            <u>Important notes:</u>
          </b>{" "}
        </HeroP>
        <HeroP>
          1. Basic interest rate (only for new deposits): +0.5% every 24 hours
        </HeroP>
        <HeroP>
          2. If users don't make a withdrawal everyday, will get extra bonus -
          hold bonus. Hold-bonus increases 0.1% per day, Max is 1.5% (only for
          unlocked plan).
        </HeroP>
        <HeroP>
          3. Users can share referral links to earn bonus (at least 1 deposit to
          active the link). Referral bonuses will be automatically sent to the
          wallet.
        </HeroP>
        <HeroStatistics>
          <ServicesCard>
            <ServicesP>BSCStaker Data</ServicesP>
            <ServicesData>
              <ServicesH2>Total Staked </ServicesH2>
              <ServicesH21>4459751.828</ServicesH21>
            </ServicesData>
            <ServicesData>
              <ServicesH2>Total Users</ServicesH2>
              <ServicesH21>1000</ServicesH21>
            </ServicesData>
            <ServicesData>
              <ServicesH2>Ref Rewards</ServicesH2>
              <ServicesH21>435490.049</ServicesH21>
            </ServicesData>
            <ServicesData>
              <ServicesH2>Contract Balance</ServicesH2>
              <ServicesH21>435490 BNB</ServicesH21>
            </ServicesData>
            <ServicesData>
              <ServicesH2>USD Balance</ServicesH2>
              <ServicesH21>$5,402,123</ServicesH21>
            </ServicesData>
          </ServicesCard>
        </HeroStatistics>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeaderSection;
