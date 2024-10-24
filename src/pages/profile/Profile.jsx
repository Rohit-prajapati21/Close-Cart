import userLogo from "../../assets/user.png";
import sty from "./Profile.module.css";
function Profile() {
  return (
    <div className={sty.profile_container}>
      <div className={sty.left_section}>
        <div className={sty.user_info}>
          <img src={userLogo} alt="" />
          <div>
            Hello,<span>Rohit</span>
          </div>
        </div>
        <div className={sty.user_settings}>
          <div className={sty.box1}>
            <i className="bi bi-person"></i>
            <span>ACCOUNT SETTINGS</span>
          </div>

          <div className={sty.box2}>
            <a href="">Profile information</a>
          </div>
          <div className={sty.box3}>
            <a href="">Manage addresses</a>
          </div>
        </div>
      </div>
      {/* section two */}
      <div className={sty.right_section}>
        <div className={sty.profile_info}>
          <form action="">
            <div className={sty.input_box1}>
              <div className={sty.user}>
                <span>User information</span>
                <a href="">Edit</a>
              </div>
              <div className={sty.input_btn}>
                <input type="text" />
                <button>Save</button>
              </div>
              <div className={sty.gender}>
                <span>Gender</span>
                <div>
                  <span>Male</span>
                  <input type="radio" name="gender" />
                  <span>Female</span>
                  <input type="radio" name="gender" />
                </div>
              </div>
            </div>
            <div className={sty.input_box2}>
              <div className={sty.email}>
                <span>Email</span>
                <a href="">Edit</a>
              </div>
              <div className={sty.input_btn}>
                <input type="email" />
                <button>Save</button>
              </div>
            </div>
            <div className={sty.input_box3}>
              <div className={sty.contect}>
                <span>Contect</span>
                <a href="">Edit</a>
              </div>
              <div className={sty.input_btn}>
                <input type="text" />
                <button>Save</button>
              </div>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  );
}

export default Profile;
