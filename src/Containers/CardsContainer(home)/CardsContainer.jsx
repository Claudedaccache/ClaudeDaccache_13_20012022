import IconChat from "../../img/icon-chat.png";
import IconMoney from "../../img/icon-money.png";
import IconSecurity from "../../img/icon-security.png";
import React from "react";
import Cards from "../../Components/Cards/Cards";
import styles from "../CardsContainer(home)/CardsContainer.module.css";
import { useSelector } from "react-redux";

function CardsContainer(props) {

// const data = useSelector(state => state.testing)
// console.log(data);

  return (
    <div>
      <section className={styles.features}>
        <Cards
          title="You are our #1 priority"
          text=" Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes."
          icon={IconChat}
        />
        <Cards
          title="More savings means higher rates"
          text="The more you save with us, the higher your interest rate will be!"
          icon={IconMoney}
        />
        <Cards
          title="Security you can trust"
          text="We use top of the line encryption to make sure your data and money
          is always safe."
          icon={IconSecurity}
        />
      </section>
    </div>
  );
}

CardsContainer.propTypes = {};

export default CardsContainer;
