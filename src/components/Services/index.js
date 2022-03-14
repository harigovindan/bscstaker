import React, { useState } from "react";
import Icon1 from "../../images/1.svg";
import Icon2 from "../../images/2.svg";
import Icon3 from "../../images/3.svg";
import {
  ServicesContainer,
  ServicesCard,
  ServicesH1,
  ServicesH2,
  ServicesH21,
  ServicesIcon,
  ServicesData,
  ServicesP,
  Input,
  ServicesWrapper
} from "./ServicesElements";
import { Button } from "../ButtonElement";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>
        <u>Our Plans</u>
      </ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesP>Plan 1</ServicesP>
          <ServicesData>
            <ServicesH2>Plan </ServicesH2>
            <ServicesH21>7 Days</ServicesH21>
          </ServicesData>
          <ServicesData>
            <ServicesH2>Daily Profit </ServicesH2>
            <ServicesH21>8%</ServicesH21>
          </ServicesData>
          <ServicesData>
            <ServicesH2>Total Profit </ServicesH2>
            <ServicesH21>56%</ServicesH21>
          </ServicesData>
          <ServicesData>
            <ServicesH2>Withdrawal </ServicesH2>
            <ServicesH21>Any Time</ServicesH21>
          </ServicesData>
          <Input id="Search" type="search" placeholder="Enter Qty" />
          <Button to="signup" primary="true" dark="true">
            Stake
          </Button>
        </ServicesCard>
        <ServicesCard>
          <ServicesP>Plan 2</ServicesP>
          <ServicesData>
            <ServicesH2>Plan </ServicesH2>
            <ServicesH21>7 Days</ServicesH21>
          </ServicesData>
          <ServicesData>
            <ServicesH2>Daily Profit </ServicesH2>
            <ServicesH21>8%</ServicesH21>
          </ServicesData>
          <ServicesData>
            <ServicesH2>Total Profit </ServicesH2>
            <ServicesH21>56%</ServicesH21>
          </ServicesData>
          <ServicesData>
            <ServicesH2>Withdrawal </ServicesH2>
            <ServicesH21>Any Time</ServicesH21>
          </ServicesData>
          <Input id="Search" type="search" placeholder="Enter Qty" />
          <Button to="signup" primary="true" dark="true">
            Stake
          </Button>
        </ServicesCard>
        <ServicesCard>
          <ServicesP>Plan 3</ServicesP>
          <ServicesData>
            <ServicesH2>Plan </ServicesH2>
            <ServicesH21>7 Days</ServicesH21>
          </ServicesData>
          <ServicesData>
            <ServicesH2>Daily Profit </ServicesH2>
            <ServicesH21>8%</ServicesH21>
          </ServicesData>
          <ServicesData>
            <ServicesH2>Total Profit </ServicesH2>
            <ServicesH21>56%</ServicesH21>
          </ServicesData>
          <ServicesData>
            <ServicesH2>Withdrawal </ServicesH2>
            <ServicesH21>At the end</ServicesH21>
          </ServicesData>
          <Input id="Search" type="search" placeholder="Enter Qty" />
          <Button to="signup" primary="true" dark="true">
            Stake
          </Button>
        </ServicesCard>
        <ServicesCard>
          <ServicesP>Plan 4</ServicesP>
          <ServicesData>
            <ServicesH2>Plan </ServicesH2>
            <ServicesH21>7 Days</ServicesH21>
          </ServicesData>
          <ServicesData>
            <ServicesH2>Daily Profit </ServicesH2>
            <ServicesH21>8%</ServicesH21>
          </ServicesData>
          <ServicesData>
            <ServicesH2>Total Profit </ServicesH2>
            <ServicesH21>56%</ServicesH21>
          </ServicesData>
          <ServicesData>
            <ServicesH2>Withdrawal </ServicesH2>
            <ServicesH21>At the end</ServicesH21>
          </ServicesData>
          <Input id="Search" type="search" placeholder="Enter Qty" />
          <Button to="signup" primary="false" dark="false">
            Stake
          </Button>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
