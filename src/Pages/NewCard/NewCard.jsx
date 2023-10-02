import { BsCreditCard } from "react-icons/bs";
import Topbar from "../../Components/Topbar/Topbar";
import "./newcard.css";
import { useState } from "react";
import Input from "../../Components/Input/Input";
import Modal from "../../Components/Modal/Modal";
import Loader from "../../Components/Loader/Loader";

import successImg from "../../assets/images/success.png";

export default function NewCard() {
  const [loading, setLoading] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [cardNum, setCardNum] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardType, setCardType] = useState("");
  const [cardExp, setCardExp] = useState("");
  const [cardCVV, setCardCVV] = useState("");

  const addCard = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setModalActive(true);
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <Topbar header="Add New Card" />
      <div className="newcard">
        <div className="card">
          <div className="card__logo">
            <BsCreditCard />
          </div>
          <div className="card__num">
            <div className="card__num-num">
              {cardNum.length > 1
                ? cardNum.slice(0, 4) + " " + cardNum.slice(5, 9) + "..."
                : "**** ****"}
            </div>
            <div className="card__num-exp">
              EXP{" "}
              {cardExp.length > 0
                ? cardExp.slice(5, 7) + "/" + cardExp.slice(2, 4)
                : "**/**"}
            </div>
          </div>
          <div className="card__user">
            <div className="card__user-name">
              {cardName.length > 0
                ? cardName.slice(0, 20) + "..."
                : "Card Name"}
            </div>
            <div className="card__user-type">VISA</div>
          </div>
        </div>

        <div className="newcard__inputs">
          <form onSubmit={addCard}>
            <Input
              id="name"
              placeholder="Card Name"
              type="text"
              setValue={setCardName}
            />
            <Input
              id="cardNum"
              placeholder="Card Number"
              type="text"
              setValue={setCardNum}
              inputMode="numeric"
            />
            <div className="flex">
              <Input
                id="exp"
                placeholder="Expiry Date"
                type="date"
                setValue={setCardExp}
              />
              <Input
                id="cvv"
                placeholder="CVV"
                type="text"
                setValue={setCardCVV}
                inputMode="numeric"
              />
            </div>
            <button type="submit" className="btn-pry-bg">
              Add Card
              {loading && <Loader type="spinner" />}
            </button>
          </form>
        </div>
      </div>
      {modalActive && (
        <Modal
          img={successImg}
          title="Success!"
          subtitle="Your new card has been added successfully"
          btnText="Next"
          btnLink="/account"
        />
      )}
    </>
  );
}
