import React from "react";
import SubscriptionCard from "./SubscriptionCard";

import { annualPlan, freePlan, paidPlan } from "./PlanFeture";

const Subscription = () => {
  return (
    <div className="p-10">
      <p className="text-xl font-semibold py-5 pb-16 text-center">Pricing</p>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-3">
        <SubscriptionCard
          data={{
            PlanName: "Free",
            features: freePlan,
            PlanType: "FREE",
            price: 0,
            buttonName: true ? "Current Plan" : "Get Started",
          }}
        />
        <SubscriptionCard
          data={{
            PlanName: "Monthly Paid Plan",
            features: paidPlan,
            PlanType: "MONTHLY",
            price: 799,
            buttonName: true ? "Current Plan" : "Get Started",
          }}
        />
        <SubscriptionCard
          data={{
            PlanName: "Annual Paid Plan",
            features: annualPlan,
            PlanType: "ANNUALLY",
            price: 6711,
            buttonName: true ? "Current Plan" : "Get Started",
          }}
        />
      </div>
    </div>
  );
};

export default Subscription;
