import { Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import BlueButton from "../../../widgets/blueButton/BlueButton";
import Styles from "./pricing.module.scss";
import waves from "../../../assets/images/waves.png";

function Pricing() {
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
  }

  const PriceCard = (data: IPriceCard) => {
    return (
      <div
        className={`${Styles.price_card} ${data.index == 1 ? Styles.blue : ""}`}
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
          <BlueButton link="#" title="Subscribe" inverted={data.index == 1} />
        </div>
      </div>
    );
  };

  return (
    <>
      <section className={Styles.pricing}>
        <h1>Simple, Effective and Transparent pricing.</h1>
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
              />
            );
          })}
        </div>
        <div className={Styles.waves}>
          <Image src={waves} width={1920} height={800} alt={""} />
        </div>
      </section>
    </>
  );
}

export default Pricing;
