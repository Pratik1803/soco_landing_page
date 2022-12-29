import { Button, Stack } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import BlueButton from "../../../widgets/blueButton/BlueButton";
import Styles from "./pricing.module.scss";
import waves from "../../../assets/images/waves.png";

function Pricing() {
  const [activePricing, setActivePricing] = useState<number>();
  const pricingData = [
    {
      name: "Free",
      price: "₹0.00",
      pros: [
        "Reference site about Lorem Ipsum, giving information.",
        "Reference site about Lorem Ipsum, giving information.",
        "Reference site about Lorem Ipsum, giving information.",
        "Reference site about Lorem Ipsum, giving information.",
        "Reference site about Lorem Ipsum, giving information.",
      ],
    },
    {
      name: "1 Month",
      price: "₹599.00",
      pros: [
        "Reference site about Lorem Ipsum, giving information.",
        "Reference site about Lorem Ipsum, giving information.",
        "Reference site about Lorem Ipsum, giving information.",
        "Reference site about Lorem Ipsum, giving information.",
        "Reference site about Lorem Ipsum, giving information.",
      ],
    },
    {
      name: "3 Months",
      price: "₹1199.00",
      pros: [
        "Reference site about Lorem Ipsum, giving information.",
        "Reference site about Lorem Ipsum, giving information.",
        "Reference site about Lorem Ipsum, giving information.",
        "Reference site about Lorem Ipsum, giving information.",
        "Reference site about Lorem Ipsum, giving information.",
      ],
    },
    {
      name: "6 Months",
      price: "₹1999.00",
      pros: [
        "Reference site about Lorem Ipsum, giving information.",
        "Reference site about Lorem Ipsum, giving information.",
        "Reference site about Lorem Ipsum, giving information.",
        "Reference site about Lorem Ipsum, giving information.",
        "Reference site about Lorem Ipsum, giving information.",
      ],
    },
    {
      name: "12 Months",
      price: "₹2499.00",
      pros: [
        "Reference site about Lorem Ipsum, giving information.",
        "Reference site about Lorem Ipsum, giving information.",
        "Reference site about Lorem Ipsum, giving information.",
        "Reference site about Lorem Ipsum, giving information.",
        "Reference site about Lorem Ipsum, giving information.",
      ],
    },
  ];

  interface IPriceCard {
    index: number;
    name: string;
    price: string;
    pros: string[];
    active: number | undefined;
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
        <p>Name</p>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"flex-end"}
        >
          <h2>{data.name}</h2>
          <strong>{data.price}</strong>
        </Stack>
        <ul>
          {data.pros.map((ele, index) => (
            <li key={index}>{ele}</li>
          ))}
        </ul>
        <br />
        <div className={Styles.btn}>
          <BlueButton link="#" title="Subscribe" />
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
        <h1>Simple, effective and transparent pricing.</h1>
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
