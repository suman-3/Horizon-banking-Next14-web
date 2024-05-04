import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstname: "Suman" };

  return (
    <section className="home">
      <div className="home-content">
        <HeaderBox
          type="greeting"
          title="welcome"
          user={loggedIn?.firstname || "Guest"}
          subtext="Access and Manage Your Account and Transactions efficiently"
        />
        <TotalBalanceBox 
        accounts={[]} 
        totalBanks={1}
        totalCurrentBalance={1250.59}

        />
      </div>
    </section>
  );
};

export default Home;
