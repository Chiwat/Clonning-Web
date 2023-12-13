const PreRegister = () => {
  const number = [2, 8, 7, 2, 4, 6];
  return (
    <div className="pre-register">
      <div className="title-name">
        <h2>ลงทะเบียนล่วงหน้า</h2>
        <h4>PRE REGISTER NOW!</h4>
      </div>
      <div className="cat-img">
        <img src="https://www.12tails-th.com/assets/img/static/obj-1.png" />
      </div>
      <ul className="number-regis">
        {number.map((letter, index) => {
          return (
            <li key={index}>
              <div className="wrapper">{letter}</div>
            </li>
          );
        })}
      </ul>
      <div className="progress-bar">
        <div className="bar">
          <div className="progress">
            <div className="register-bar"></div>
          </div>
        </div>

        <div className="progress-label">
          <ul className="item-list">
            <li>
              <div>1,000</div>
            </li>
            <li>
              <div>5,000</div>
            </li>
            <li>
              <div>10,000</div>
            </li>
            <li>
              <div>50,000</div>
            </li>
            <li>
              <div>100,000</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default PreRegister;
