import { Button, Stack } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import BlueButton from "../../../widgets/blueButton/BlueButton";
import Styles from "./pricing.module.scss";
import waves from "../../../assets/images/waves.png";
import Heading1 from "../../../widgets/text_tags/heading1/Heading1";
import Heading3 from "../../../widgets/text_tags/heading3/Heading3";

function Pricing() {
  const [activePricing, setActivePricing] = useState<number>();
  const pricingData = [
    {
      code: "Free",
      name: "Free",
      price: "free",
      btnTitle: "Subscribe",
      pros: [
        "Multiple Postings.",
        "Networking",
        "Carrer Guidance Tool",
        "Internship Opportunities",
        "Monetization",
      ],
    },
    // {
    //   code: "Newbie",
    //   name: "1 Month",
    //   price: "₹150.00",
    //   pros: [
    //     "Reference site about Lorem Ipsum, giving information.",
    //     "Reference site about Lorem Ipsum, giving information.",
    //     "Reference site about Lorem Ipsum, giving information.",
    //   ],
    // },
    // {
    //   code: "Popular",
    //   name: "3 Months",
    //   price: "₹350.00",
    //   pros: [
    //     "Reference site about Lorem Ipsum, giving information.",
    //     "Reference site about Lorem Ipsum, giving information.",
    //     "Reference site about Lorem Ipsum, giving information.",
    //   ],
    // },
    // {
    //   code: "Heat",
    //   name: "6 Months",
    //   price: "₹600.00",
    //   pros: [
    //     "Reference site about Lorem Ipsum, giving information.",
    //     "Reference site about Lorem Ipsum, giving information.",
    //     "Reference site about Lorem Ipsum, giving information.",
    //   ],
    // },
    {
      code: "Pro",
      name: "12 Months",
      price: "₹2500.00",
      btnTitle: "View more",
      pros: [
        "Multiple AI based Portfolio Themes",
        "Virtual Desk",
        "Analytics and Insights",
        "Niche Cover Letters",
        "Skill-Based Resume",
      ],
    },
  ];

  interface IPriceCard {
    index: number;
    name: string;
    price: string;
    pros: string[];
    code: string;
    active: number | undefined;
    btnTitle: string;
  }

  // ${data.index == 1 ? Styles.blue : ""}

  const PriceCard = (data: IPriceCard) => {
    return (
      <div
        className={`${Styles.price_card} ${
          data.index === data.active ? Styles.active : ""
        }`}
        data-aos="fade-up"
      >
        <p>{data.code}</p>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"flex-end"}
        >
          <Heading3>{data.name}</Heading3>
          <strong>{data.price}</strong>
        </Stack>
        <ul>
          {data.pros.map((ele, index) => (
            <li key={index}>{ele}</li>
          ))}
        </ul>
        <br />
        <div className={Styles.btn}>
          <BlueButton link="#" title={data.btnTitle} />
        </div>
        <div className={Styles.more_btn}>
          <Button
            onClick={() => {
              setActivePricing(data.index);
            }}
          >
            See more
          </Button>
        </div>
      </div>
    );
  };

  return (
    <>
      <section className={Styles.pricing} data-aos="fade-up">
        <Heading1>Simple, effective and transparent pricing.</Heading1>
        <br />
        <p>No contracts, no surprises.</p>
        <br />
        <br />
        <div className={Styles.wrapper}>
          {pricingData.map((ele, index) => {
            return (
              <PriceCard
                key={index}
                index={index}
                name={ele.name}
                price={ele.price}
                pros={ele.pros}
                active={activePricing}
                code={ele.code}
                btnTitle={ele.btnTitle}
              />
            );
          })}
        </div>
        <div className={Styles.waves} data-aos="fade-up">
          <Image src={waves} width={1920} height={800} alt={""} />
        </div>
      </section>
    </>
  );
}

export default Pricing;
