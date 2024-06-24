import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UpgradeSuccess = () => {
  const navigate = useNavigate();
  const { subscription } = useSelector((store) => store);

  const queryParams = new URLSearchParams(location.search);
  return (
    <div className="flex justify-center">
      <Card className="mt-20 p-5 space-y-5 flex flex-col items-center">
        <div className="flex items-center gap-4">
          <CheckCircledIcon className="h-9 w-9 text-green-500 " />
          <p className="text-xl">Plan Upgraded Succssfully</p>
        </div>
        <div className="space-y-3">
          <p className="text-green-500">start data :</p>
          <p className="text-red-500">end data :</p>
          <p className="">plan type :</p>
        </div>
        <Button onClick={() => navigate("/")}>Go To Home</Button>
      </Card>
    </div>
  );
};

export default UpgradeSuccess;
