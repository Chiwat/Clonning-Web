import { Link } from "react-router-dom";
import rewardData from "../../data/rewardData";
const Reward = () => {
   
  return (
    <div className="event-container">
      <div className="title-name">
        <h2>ของรางวัลกิจกรรม</h2>
        <h4>EVENT REWARD</h4>
      </div>
      <div className="reward-box">
        {rewardData.map((data,index)=>{
            return(
                <div className="rewards" key={index}>
                    <div className="reward-img">
                        <img src={data.img}/>
                    </div>
                    <div className="reward-text">
                        <span><p className="left-text">{data.item1.name}</p><p className="right-text">{data.item1.amount}</p></span>
                        <span><p className="left-text">{data.item2.name}</p><p className="right-text">{data.item2.amount}</p></span>
                        <span><p className="left-text">{data.item3.name}</p><p className="right-text">{data.item3.amount}</p></span>
                        <span><p className="left-text">{data.item4.name}</p><p className="right-text">{data.item4.amount}</p></span>
                    </div>
                </div>
            )
        })}
      </div>
      <div className="monkey-img">
            <img src="https://www.12tails-th.com/assets/img/static/obj-2.png"/>
        </div>
        <div className="pre-register-btn">
            <Link to="register">
                <button>สมัครสมาชิกล่วงหน้า</button>
            </Link>
        </div>
    </div>
  );
};
export default Reward;
