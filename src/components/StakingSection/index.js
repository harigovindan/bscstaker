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
  ServicesWrapper,
  ServicesRef
} from "./StakingElements";

import { Button } from "../ButtonElement";

const StakingSection = () => {
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
        <ServicesH1>
          <u>Your Investments</u>
        </ServicesH1>
        <HeroStatistics>
          <ServicesCard>
            <ServicesData>
              <ServicesH2>Total Staked</ServicesH2>
              <ServicesH21>4459751.828</ServicesH21>
            </ServicesData>
            <ServicesData>
              <ServicesH2>Available for withdrawal</ServicesH2>
              <ServicesH21>1000</ServicesH21>
            </ServicesData>
            <ServicesData>
              <ServicesH2>Withdrawn</ServicesH2>
              <ServicesH21>435490.049</ServicesH21>
            </ServicesData>
            <ServicesData>
              <ServicesH2>Hold Bonus</ServicesH2>
              <ServicesH21>0.1%</ServicesH21>
            </ServicesData>
            <Button to="signup" primary="true" dark="true">
              Withdraw
            </Button>
          </ServicesCard>
        </HeroStatistics>
        <HeroStatistics>
          <ServicesCard>
            <ServicesData>
              <ServicesH2>Your referral link is </ServicesH2>
              <ServicesH21>Copy</ServicesH21>
            </ServicesData>
            <ServicesData>
              <ServicesH2>Total referral earned</ServicesH2>
              <ServicesH21>0.1%</ServicesH21>
            </ServicesData>
            <ServicesData>
              <ServicesH2>Total referral earned</ServicesH2>
              <ServicesH21>0.1%</ServicesH21>
            </ServicesData>
            <ServicesData>
              <ServicesH2>Total referral earned</ServicesH2>
              <ServicesH21>0.1%</ServicesH21>
            </ServicesData>
            <ServicesP>Earn BNB By Inviting People To BSCStaker</ServicesP>
            <ServicesData>
              <ServicesH2>Level 1</ServicesH2>
              <ServicesH21>5%</ServicesH21>
            </ServicesData>
            <ServicesData>
              <ServicesH2>Level 2</ServicesH2>
              <ServicesH21>4%</ServicesH21>
            </ServicesData>
            <ServicesData>
              <ServicesH2>Level 3</ServicesH2>
              <ServicesH21>3%</ServicesH21>
            </ServicesData>
            <ServicesData>
              <ServicesH2>Level 4</ServicesH2>
              <ServicesH21>2%</ServicesH21>
            </ServicesData>
            <ServicesData>
              <ServicesH2>Level 5</ServicesH2>
              <ServicesH21>1%</ServicesH21>
            </ServicesData>
          </ServicesCard>
        </HeroStatistics>
      </HeroContent>
    </HeroContainer>
  );
};

export default StakingSection;
