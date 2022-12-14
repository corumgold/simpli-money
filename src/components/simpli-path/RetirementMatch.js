import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentStep } from "../../redux/user";

const RetirementMatch = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentStep("high interest debt"));
    navigate("/simpli-path/high-interest-debt");
  };

  return (
    <>
      <h1>Now on to the fun stuff - retirement!</h1>
      <h2>
        Does your employer offer a 401k plan with a match? If so, let's make
        sure you are contributing <span>ONLY</span> enough to get the full
        match. This is <span>FREE MONEY</span> from your employer, and we would
        hate for you to miss out on it!
      </h2>
      <h3>
        If you have questions on how to participate, try consulting with your HR
        representative.
      </h3>
      <button onClick={handleClick}>I'm matched!</button>
    </>
  );
};

export default RetirementMatch;
